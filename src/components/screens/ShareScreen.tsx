"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MessageCircle, Globe, Star, Copy } from "lucide-react";
import { getStoredAnswers } from "@/lib/quiz-store";
import { computeResult } from "@/lib/quiz-data";
import { share } from "@eazo/sdk";
import { toast } from "sonner";

export default function ShareScreen() {
  const router = useRouter();
  const [resultName, setResultName] = useState("");
  const [resultDesc, setResultDesc] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const answers = getStoredAnswers();
    const result = computeResult(answers as Record<string, "a" | "b" | "c" | "d" | undefined>);
    setResultName(result.nameZh);
    setResultDesc(result.descriptionZh);
  }, []);

  const shareText = `🔮 来世行状已定：「${resultName}」— ${resultDesc.slice(0, 40)}……快来测测你的转世身份！`;

  async function handleEazoShare() {
    try {
      await share.compose({
        text: shareText,
        sourceAppId: process.env.NEXT_PUBLIC_EAZO_APP_ID || undefined,
        targetPath: `/result`,
      });
    } catch {
      handleCopy();
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      toast.success("已复制到剪贴板！");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("复制失败");
    }
  }

  return (
    <div className="min-h-svh flex flex-col folk-texture">
      {/* 背景点击关闭 */}
      <div className="flex-1 cursor-pointer" onClick={() => router.back()} />

      {/* 底部弹窗 */}
      <motion.div
        className="bg-[#FFFDF7] border-t-4 border-l-2 border-r-2 border-[#C96A4B] px-6 pt-4 pb-10 rounded-t-2xl shadow-lg relative z-10"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* 把手 */}
        <div className="w-12 h-1 bg-[#C96A4B]/30 rounded-full mx-auto mb-4" />

        <div className="text-center space-y-1 mb-5">
          <h4 className="font-black text-lg text-[#2F2B27]" style={{ fontFamily: "var(--font-heading)" }}>
            呼风唤雨 · 广而告之
          </h4>
          <p className="text-xs text-[#8A7E72]" style={{ fontFamily: "var(--font-heading)" }}>
            来世尘缘已定，速请亲友围观神迹
          </p>
        </div>

        {/* 分享渠道 */}
        <div className="grid grid-cols-3 gap-4 py-2 mb-4">
          {[
            { icon: MessageCircle, color: "emerald", label: "微信老友" },
            { icon: Globe, color: "amber", label: "朋友圈里" },
            { icon: Star, color: "primary", label: "小红书" },
          ].map(({ icon: Icon, color, label }) => (
            <motion.button
              key={label}
              className="flex flex-col items-center space-y-2 group"
              whileTap={{ scale: 0.9 }}
              onClick={handleEazoShare}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all
                ${color === "emerald" ? "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600" : ""}
                ${color === "amber" ? "bg-amber-500/10 hover:bg-amber-500/20 text-amber-600" : ""}
                ${color === "primary" ? "bg-[#C96A4B]/10 hover:bg-[#C96A4B]/20 text-[#C96A4B]" : ""}
              `}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-[11px] text-[#4E423E] font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                {label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* 复制文案 */}
        <div className="p-3 bg-[#F5F1E8] border border-dashed border-[#C96A4B]/30 rounded-xl flex items-center justify-between gap-3 mb-4">
          <p className="text-[10px] text-[#4E423E] leading-relaxed flex-1 line-clamp-2"
            style={{ fontFamily: "var(--font-heading)" }}>
            {shareText}
          </p>
          <motion.button
            className="text-xs bg-[#C96A4B] text-[#F5F1E8] px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 flex-shrink-0"
            style={{ fontFamily: "var(--font-heading)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
          >
            <Copy className="w-3 h-3" />
            <span>{copied ? "已复制" : "复制"}</span>
          </motion.button>
        </div>

        <motion.button
          className="w-full text-center py-2.5 text-xs font-bold text-[#8A7E72] hover:text-[#4E423E]"
          style={{ fontFamily: "var(--font-heading)" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.back()}
        >
          暂不张扬
        </motion.button>
      </motion.div>
    </div>
  );
}
