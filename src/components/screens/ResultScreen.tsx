"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Share2, RefreshCw, Home } from "lucide-react";
import { getStoredAnswers, clearStoredAnswers } from "@/lib/quiz-store";
import { computeResult, type ReincarnationResult } from "@/lib/quiz-data";
import { memory } from "@eazo/sdk";

function genSoulCode(id: string): string {
  const hash = id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return `TR-${(hash * 9973 + 1234567).toString().slice(-7)}`;
}

const REVEAL_LINES = ["核查前世业力", "翻阅生死簿...", "判官提笔...", "转世身份确定"];

export default function ResultScreen() {
  const router = useRouter();
  const [result, setResult] = useState<ReincarnationResult | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const hasReported = useRef(false);

  useEffect(() => {
    const answers = getStoredAnswers();
    const computed = computeResult(answers as Record<string, "a" | "b" | "c" | "d" | undefined>);
    setResult(computed);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setLoadingStep(step);
      if (step >= REVEAL_LINES.length) {
        clearInterval(interval);
        setTimeout(() => setRevealed(true), 400);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (result && revealed && !hasReported.current) {
      hasReported.current = true;
      memory.reportAction({
        content: `用户完成测试，转世身份：${result.nameZh}`,
        event_type: "create",
        page: "result",
        metadata: { type: "quiz_complete", result_id: result.id, result_name_zh: result.nameZh },
      }).catch(() => {});
    }
  }, [result, revealed]);

  function handleRetry() {
    clearStoredAnswers();
    router.push("/quiz/q1");
  }

  if (!result || !revealed) {
    return (
      <div className="min-h-svh flex flex-col items-center justify-center px-6 folk-texture">
        <div className="space-y-6 text-center">
          <motion.div
            className="w-20 h-20 mx-auto"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          >
            <svg viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="36" stroke="#C96A4B" strokeWidth="2" strokeDasharray="8 4" />
              <circle cx="40" cy="40" r="24" fill="#C96A4B" opacity="0.12" />
              <text x="40" y="46" textAnchor="middle" fill="#C96A4B" fontSize="20" fontFamily="serif">判</text>
            </svg>
          </motion.div>
          <div className="space-y-2">
            {REVEAL_LINES.slice(0, loadingStep + 1).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-[#4E423E]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const soulCode = genSoulCode(result.id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-svh flex flex-col items-center px-6 py-8 overflow-hidden folk-texture"
    >
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <defs>
          <filter id="collage-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* 装饰角落 */}
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10 pointer-events-none">
        <svg viewBox="0 0 96 96" fill="none">
          <path d="M0 96 L0 0 L96 96 Z" fill="#3B5F65" />
        </svg>
      </div>

      {/* 顶栏 */}
      <div className="w-full flex justify-between items-center z-10 border-b border-[#C96A4B]/20 pb-3 max-w-md mx-auto">
        <motion.button
          className="text-[#4E423E] hover:text-[#C96A4B] flex items-center gap-1 text-xs font-bold"
          style={{ fontFamily: "var(--font-heading)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
        >
          <Home className="w-4 h-4" />
          <span>返本还源</span>
        </motion.button>
        <span className="text-xs text-[#3B5F65] font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          天道通牒 · 判词已下
        </span>
      </div>

      {/* 转世身份卡 */}
      <div className="flex-1 flex flex-col justify-center my-4 z-10 w-full max-w-md mx-auto">
        <motion.div
          className="bg-[#FFFDF7] border-[5px] border-[#C96A4B] p-5 rounded-2xl relative overflow-hidden flex flex-col space-y-4 shadow-lg"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="absolute inset-2 border border-[#C96A4B]/15 pointer-events-none rounded-lg" />

          {/* 卡头 */}
          <div className="flex justify-between items-start z-10">
            <div>
              <span className="text-[9px] text-[#8A7E72] tracking-widest block" style={{ fontFamily: "var(--font-heading)" }}>
                REINCARNATION PASSPORT
              </span>
              <span className="text-xs font-bold text-[#3B5F65] mt-1 block" style={{ fontFamily: "var(--font-heading)" }}>
                荒诞天道司 · 轮回签章
              </span>
            </div>
            <div
              className="bg-[#C96A4B] text-[#F5F1E8] px-2 py-0.5 text-xs font-black rounded shadow-md"
              style={{ fontFamily: "var(--font-heading)", transform: "rotate(6deg)" }}
            >
              准予投胎
            </div>
          </div>

          {/* 身份揭晓 */}
          <div className="py-2 text-center space-y-3 z-10">
            <div className="inline-block px-3 py-0.5 bg-[#3B5F65]/10 rounded-full text-[11px] text-[#3B5F65] font-bold"
              style={{ fontFamily: "var(--font-heading)" }}>
              ✦ 终极投胎身份 ✦
            </div>
            <motion.h3
              className="text-2xl sm:text-3xl font-black text-[#C96A4B] leading-tight px-1"
              style={{ fontFamily: "var(--font-heading)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {result.nameZh}
            </motion.h3>
            <div className="w-16 h-16 mx-auto relative bg-[#F5F1E8] rounded-full border border-dashed border-[#C96A4B]/40 flex items-center justify-center">
              <span className="text-3xl">{result.emoji}</span>
              <span className="absolute text-[8px] text-[#C96A4B]/50 bottom-1" style={{ fontFamily: "var(--font-heading)" }}>
                No. 1001
              </span>
            </div>
          </div>

          {/* 判词 */}
          <div className="bg-[#F5F1E8]/60 p-3.5 rounded-xl border border-[#C96A4B]/10 space-y-2 z-10">
            <div>
              <span className="text-xs font-bold text-[#C96A4B]" style={{ fontFamily: "var(--font-heading)" }}>
                【来世行状】
              </span>
              <span className="text-xs text-[#4E423E] leading-relaxed" style={{ fontFamily: "var(--font-heading)" }}>
                {result.descriptionZh}
              </span>
            </div>
          </div>

          {/* 标签 */}
          <div className="flex flex-wrap gap-1.5 justify-center z-10">
            {result.tagsZh.map((tag) => (
              <span key={tag}
                className="bg-[#3B5F65] text-[#F5F1E8] text-[10px] px-2 py-0.5 rounded"
                style={{ fontFamily: "var(--font-heading)" }}>
                #{tag}
              </span>
            ))}
          </div>

          {/* 防伪码 */}
          <div className="text-center pt-2 border-t border-[#C96A4B]/10 text-[9px] text-[#8A7E72] flex justify-center space-x-2"
            style={{ fontFamily: "var(--font-heading)" }}>
            <span>魂魄编码：{soulCode}</span>
            <span>•</span>
            <span>截图保存转世凭证</span>
          </div>
        </motion.div>
      </div>

      {/* 进入今世 — 主入口 */}
      <motion.button
        className="w-full max-w-md mx-auto z-10 mt-4 mb-2 bg-[#3B5F65] hover:bg-[#2F4E54] text-[#F5F1E8] py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-md border-b-4 border-[#2F4E54]/50"
        style={{ fontFamily: "var(--font-heading)" }}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.01 }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        onClick={() => router.push("/story")}
      >
        <span className="text-lg">✦</span>
        <span>活进今世，看看结局</span>
        <span className="text-lg">✦</span>
      </motion.button>

      {/* 操作按钮 */}
      <div className="grid grid-cols-2 gap-3 z-10 w-full max-w-md mx-auto">
        <motion.button
          className="bg-[#FFFDF7] hover:bg-[#C96A4B]/5 text-[#C96A4B] border-2 border-[#C96A4B] py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-1.5"
          style={{ fontFamily: "var(--font-heading)" }}
          whileTap={{ scale: 0.97 }}
          onClick={handleRetry}
        >
          <RefreshCw className="w-4 h-4" />
          <span>再渡一劫</span>
        </motion.button>
        <motion.button
          className="bg-[#C96A4B] hover:bg-[#B85A3B] text-[#F5F1E8] py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-1.5 border-b-2 border-amber-900/30"
          style={{ fontFamily: "var(--font-heading)" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push("/share")}
        >
          <Share2 className="w-4 h-4" />
          <span>宣告来世</span>
        </motion.button>
      </div>

      <button
        className="mt-4 text-xs text-[#8A7E72] underline hover:text-[#C96A4B] z-10"
        style={{ fontFamily: "var(--font-heading)" }}
        onClick={() => router.push("/archive")}
      >
        查看众生图鉴
      </button>
    </motion.div>
  );
}
