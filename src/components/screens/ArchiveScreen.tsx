"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { BookOpen } from "lucide-react";
import { RESULTS } from "@/lib/quiz-data";
import { PIXEL_ART } from "@/lib/pixel-art";

export default function ArchiveScreen() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
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

      {/* 顶栏 */}
      <div className="w-full flex justify-between items-center z-10 border-b border-[#C96A4B]/20 pb-3 max-w-md mx-auto">
        <div className="flex items-center space-x-1.5">
          <BookOpen className="w-4 h-4 text-[#C96A4B]" />
          <span className="font-bold text-[#2F2B27]" style={{ fontFamily: "var(--font-heading)" }}>
            百态众生阁
          </span>
        </div>
        <motion.button
          className="text-[#8A7E72] hover:text-[#C96A4B] text-xs font-bold flex items-center gap-1"
          style={{ fontFamily: "var(--font-heading)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
        >
          <span>合上画卷</span>
        </motion.button>
      </div>

      {/* 说明 */}
      <p className="text-xs text-[#4E423E] italic leading-relaxed mt-4 max-w-md mx-auto w-full z-10"
        style={{ fontFamily: "var(--font-heading)" }}>
        收录了已被尘世灵魂唤醒的部分神奇荒诞身份，供诸位仙家流连玩味：
      </p>

      {/* 卡片列表 */}
      <div className="flex-1 my-4 space-y-4 overflow-y-auto w-full max-w-md mx-auto z-10 pb-24">
        {RESULTS.map((item, idx) => (
          <motion.div
            key={item.id}
            className="p-4 rounded-xl bg-[#FFFDF7] border border-[#C96A4B]/30 space-y-2 relative cursor-pointer hover:border-[#C96A4B] hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06, duration: 0.3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              // 用 URL query 传参，规避 localStorage 时序问题
              const params = new URLSearchParams({
                id: item.id,
                name: item.nameZh,
                desc: item.descriptionZh,
                emoji: item.emoji,
              });
              router.push(`/story?${params.toString()}`);
            }}
          >
            <div className="absolute top-2 right-2 w-7 h-7 opacity-90 pointer-events-none"
              dangerouslySetInnerHTML={{ __html: PIXEL_ART[item.id] ?? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#E8D8C0"/><text x="8" y="22" font-size="18">${item.emoji}</text></svg>` }}
            />
            <div className="flex justify-between items-center pr-6">
              <span className="font-bold text-sm text-[#C96A4B]" style={{ fontFamily: "var(--font-heading)" }}>
                {item.nameZh}
              </span>
            </div>
            <p className="text-xs text-[#4E423E] leading-relaxed" style={{ fontFamily: "var(--font-heading)" }}>
              "{item.descriptionZh}"
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              {item.tagsZh.map((tag) => (
                <span key={tag}
                  className="bg-[#3B5F65]/10 text-[#3B5F65] text-[9px] px-1.5 py-0.5 rounded"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex justify-end pt-1 border-t border-[#C96A4B]/10">
              <span className="text-[10px] text-[#C96A4B] font-bold"
                style={{ fontFamily: "var(--font-heading)" }}>
                活进今世 →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 底部按钮 */}
      <div className="fixed bottom-0 left-0 right-0 px-6 pb-[env(safe-area-inset-bottom)] md:pb-0 pt-3 bg-gradient-to-t from-[#F5F1E8] to-transparent z-20">
        <div className="max-w-md mx-auto">
          <motion.button
            className="w-full bg-[#3B5F65] hover:bg-[#2F4E54] text-[#F5F1E8] py-3 rounded-xl font-bold text-sm"
            style={{ fontFamily: "var(--font-heading)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.back()}
          >
            已知悉众生相
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
