"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";
import { getStoredAnswers } from "@/lib/quiz-store";
import { computeResult } from "@/lib/quiz-data";
import { PIXEL_ART } from "@/lib/pixel-art";
import { memory, share } from "@eazo/sdk";
import { Share2, X } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Paragraph {
  body: string;
  choices: string[];
}

// 从 AI 回应里解析出正文和最多3个选项
function parseResponse(raw: string): { body: string; choices: string[] } {
  const choiceRegex = /【([甲乙丙])】\s*([^【\n]+)/g;
  const choices: string[] = [];
  let match;
  while ((match = choiceRegex.exec(raw)) !== null) {
    choices.push(match[2].trim());
  }
  const body = raw.replace(/【[甲乙丙]】[^\n【]*/g, "").replace(/\n{3,}/g, "\n\n").trim();
  return { body, choices };
}

export default function StoryScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [identityId, setIdentityId] = useState("");
  const [identityName, setIdentityName] = useState("");
  const [identityDesc, setIdentityDesc] = useState("");
  const [identityEmoji, setIdentityEmoji] = useState("");

  const [openingHook, setOpeningHook] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [paragraphs, setParagraphs] = useState<Paragraph[]>([]);
  const [streamingText, setStreamingText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const abortRef = useRef<AbortController | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<Message[]>([]);
  const identityRef = useRef({ id: "", name: "", desc: "" });

  useEffect(() => { messagesRef.current = messages; }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [paragraphs, streamingText]);

  useEffect(() => {
    let name = searchParams.get("name") ?? "";
    let desc = searchParams.get("desc") ?? "";
    let emoji = searchParams.get("emoji") ?? "";
    let id = searchParams.get("id") ?? "";

    if (!name && typeof window !== "undefined") {
      const forced = localStorage.getItem("forced_identity");
      if (forced) {
        try {
          const p = JSON.parse(forced) as { id: string; nameZh: string; descriptionZh: string; emoji: string };
          name = p.nameZh; desc = p.descriptionZh; emoji = p.emoji; id = p.id;
          localStorage.removeItem("forced_identity");
        } catch { /* fall through */ }
      }
    }
    if (!name) {
      const result = computeResult(getStoredAnswers() as Record<string, "a" | "b" | "c" | "d" | undefined>);
      name = result.nameZh; desc = result.descriptionZh; emoji = result.emoji; id = result.id;
    }

    setIdentityId(id); setIdentityName(name);
    setIdentityDesc(desc); setIdentityEmoji(emoji);
    identityRef.current = { id, name, desc };
    startStream([], id, name, desc);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startStream = useCallback(async (
    currentMessages: Message[],
    id: string,
    name: string,
    desc: string,
    userChoice?: string,
  ) => {
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    setIsStreaming(true);
    setStreamingText("");

    const updatedMessages: Message[] = userChoice
      ? [...currentMessages, { role: "user" as const, content: userChoice }]
      : currentMessages;

    let buffer = "";

    try {
      const res = await fetch("/api/story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identityId: id,
          identityName: name,
          identityDesc: desc,
          messages: updatedMessages,
        }),
        signal: ctrl.signal,
      });

      if (!res.ok || !res.body) throw new Error("Stream failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        for (const line of chunk.split("\n")) {
          if (line.startsWith("data: ")) {
            const payload = line.slice(6).trim();
            if (payload === "[DONE]") break;
            try {
              const parsed = JSON.parse(payload);
              if (parsed.hook) { setOpeningHook(parsed.hook); continue; }
              const { text } = parsed;
              buffer += text; setStreamingText(buffer);
            } catch { /* ignore */ }
          }
        }
      }

      const { body, choices } = parseResponse(buffer);
      const assistantMsg: Message = { role: "assistant", content: buffer };
      const nextMessages = [...updatedMessages, assistantMsg];
      setMessages(nextMessages);
      messagesRef.current = nextMessages;
      setParagraphs(prev => [...prev, { body, choices }]);
      setStreamingText("");

      if (choices.length === 0) {
        setIsEnded(true);
        memory.reportAction({
          content: `用户完成「${name}」的今世故事，共${Math.ceil(nextMessages.length / 2)}轮`,
          event_type: "create", page: "story",
          metadata: { type: "story_complete", identity: name },
        }).catch(() => {});
      }
    } catch (err: unknown) {
      if ((err as Error)?.name !== "AbortError") {
        setParagraphs(prev => [...prev, { body: "天道繁忙，此刻无法感应。稍后再来。", choices: [] }]);
        setStreamingText("");
      }
    } finally {
      setIsStreaming(false);
    }
  }, []);

  function handleChoice(choice: string) {
    if (isStreaming) return;
    const { id, name, desc } = identityRef.current;
    startStream(messagesRef.current, id, name, desc, choice);
  }

  async function handleShare() {
    try {
      await share.compose({
        text: `🪨 我活成了「${identityName}」，在今世的故事里沉默了很久……来试试你的转世吧`,
        sourceAppId: process.env.NEXT_PUBLIC_EAZO_APP_ID || undefined,
        targetPath: "/",
      });
    } catch { /* silent */ }
  }

  const pixelArt = PIXEL_ART[identityId];
  const lastPara = paragraphs[paragraphs.length - 1];

  return (
    <div className="relative min-h-svh flex flex-col folk-texture">
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <defs>
          <filter id="collage-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* 顶栏 */}
      <div className="sticky top-0 z-20 w-full bg-[#F5F1E8]/95 backdrop-blur-sm border-b border-[#C96A4B]/15">
        <div className="flex justify-between items-center px-5 py-3 max-w-md mx-auto">
          <button
            className="text-xs text-[#4E423E] hover:text-[#C96A4B] font-bold flex items-center gap-1 min-h-[44px]"
            style={{ fontFamily: "var(--font-heading)" }}
            onClick={() => router.back()}
          >
            <X className="w-3.5 h-3.5" /> 离开
          </button>

          <div className="flex items-center gap-2">
            {pixelArt && (
              <div className="w-7 h-7 flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: pixelArt }} />
            )}
            {!pixelArt && <span className="text-xl">{identityEmoji}</span>}
            <div>
              <p className="text-[10px] text-[#8A7E72] leading-none mb-0.5"
                style={{ fontFamily: "var(--font-heading)" }}>此刻你是</p>
              <p className="text-xs font-bold text-[#C96A4B] leading-none max-w-[120px] truncate"
                style={{ fontFamily: "var(--font-heading)" }}>{identityName}</p>
            </div>
          </div>

          <button
            className="text-[#8A7E72] hover:text-[#C96A4B] min-h-[44px] flex items-center"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 故事正文区 */}
      <div className="flex-1 overflow-y-auto px-5 py-8 max-w-md mx-auto w-full">
        <div className="space-y-10">

          {/* 引子 — 深色背景，扉页感 */}
          {openingHook && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden"
            >
              {/* 深色背景区块 */}
              <div className="bg-[#2F2B27] px-6 py-8 relative">
                {/* 装饰纹样 */}
                <div className="absolute top-3 left-4 text-[#F5E6C8] text-xs tracking-widest font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  ✦ 引 子 ✦
                </div>
                <div className="absolute top-0 right-0 w-12 h-12 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M48 0 L48 48 L0 0 Z" fill="#C96A4B" />
                  </svg>
                </div>
                {/* 引子文字 — 逐段展示 */}
                <div className="space-y-4 mt-4">
                  {openingHook.split(/\n\n+/).filter(Boolean).map((para, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.35 + 0.3, duration: 0.7 }}
                      className="text-[#F5F1E8]/90 text-[15px] leading-[2.1]"
                      style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.04em" }}
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>
              </div>
              {/* 底部渐变分隔 */}
              <div className="h-6 bg-gradient-to-b from-[#2F2B27]/30 to-transparent" />
            </motion.div>
          )}

          {/* 已完成的段落 */}
          {paragraphs.slice(0, -1).map((para, idx) => (
            <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <p className="text-[15px] text-[#2F2B27]"
                style={{ fontFamily: "var(--font-heading)", lineHeight: 2.15, letterSpacing: "0.02em" }}>
                {para.body}
              </p>
              {/* 用户的选择作为回响 */}
              {idx < paragraphs.length - 1 && messages[idx * 2 + 1] && (
                <p className="text-[11px] text-[#8A7E72] italic mt-3 pl-4 border-l-2 border-[#C96A4B]/20"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  你感受到：{messages[idx * 2 + 1]?.role === "user" ? messages[idx * 2 + 1].content : ""}
                </p>
              )}
            </motion.div>
          ))}

          {/* 最新段落 + 选项 */}
          {lastPara && !isStreaming && (
            <motion.div
              key={`last-${paragraphs.length}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              {/* 正文按段落拆分，逐段淡入 */}
              <div className="space-y-5">
                {lastPara.body.split(/\n\n+/).filter(Boolean).map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.18, duration: 0.5 }}
                    className="text-[15px] text-[#2F2B27]"
                    style={{ fontFamily: "var(--font-heading)", lineHeight: 2.15, letterSpacing: "0.02em" }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              {lastPara.choices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="space-y-2 pt-2"
                >
                  <p className="text-[10px] text-[#8A7E72] text-center italic mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}>
                    — 你怎么做 —
                  </p>
                  {lastPara.choices.map((choice, ci) => (
                    <motion.button
                      key={ci}
                      className="w-full text-left p-4 rounded-xl border border-[#C96A4B]/25 hover:border-[#C96A4B] bg-[#FFFDF7] hover:bg-[#C96A4B]/5 flex items-start gap-3 transition-all group"
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleChoice(choice)}
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C96A4B]/10 group-hover:bg-[#C96A4B] text-[#C96A4B] group-hover:text-[#F5F1E8] text-xs font-bold flex items-center justify-center transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}>
                        {["甲", "乙", "丙"][ci]}
                      </span>
                      <span className="text-sm text-[#2F2B27] leading-relaxed self-center"
                        style={{ fontFamily: "var(--font-heading)" }}>
                        {choice}
                      </span>
                    </motion.button>
                  ))}
                  <button
                    className="w-full text-center text-[10px] text-[#8A7E72]/50 hover:text-[#8A7E72] pt-3 transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                    onClick={() => handleChoice("我想离开了，感谢这一世的陪伴。")}
                  >
                    我想离开这一世了
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* 流式输出中 */}
          {isStreaming && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {streamingText ? (
                <p className="text-[15px] text-[#2F2B27]"
                  style={{ fontFamily: "var(--font-heading)", lineHeight: 2.15, letterSpacing: "0.02em" }}>
                  {parseResponse(streamingText).body}
                  <span className="inline-block w-0.5 h-4 bg-[#C96A4B] ml-1 animate-pulse align-middle" />
                </p>
              ) : (
                <div className="flex flex-col items-center py-16 space-y-4">
                  <motion.p
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2.2 }}
                    className="text-xs text-[#8A7E72]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {paragraphs.length === 0 ? "进入此刻……" : "感受正在延续……"}
                  </motion.p>
                </div>
              )}
            </motion.div>
          )}

          {/* 收束后按钮 */}
          <AnimatePresence>
            {isEnded && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3 pt-6 border-t border-[#C96A4B]/15"
              >
                <p className="text-center text-[10px] text-[#8A7E72]"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  ✦ 今世已终 ✦
                </p>
                <motion.button
                  className="w-full bg-[#C96A4B] text-[#F5F1E8] py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border-b-2 border-amber-900/30"
                  style={{ fontFamily: "var(--font-heading)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleShare}
                >
                  <Share2 className="w-4 h-4" />
                  宣告此生
                </motion.button>
                <button
                  className="w-full text-center text-xs text-[#8A7E72] hover:text-[#C96A4B] py-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                  onClick={() => router.push("/")}
                >
                  投胎重来，换个身份
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={bottomRef} className="h-6" />
        </div>
      </div>
    </div>
  );
}
