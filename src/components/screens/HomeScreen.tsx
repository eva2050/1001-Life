"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <div className="relative min-h-svh flex flex-col items-center px-6 py-8 overflow-hidden folk-texture">
      {/* SVG noise filter */}
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
      <div className="absolute top-0 left-0 w-16 h-16 opacity-20 pointer-events-none">
        <svg viewBox="0 0 64 64" fill="none">
          <path d="M0 0 L64 0 L0 64 Z" fill="#C96A4B" />
          <path d="M8 0 L32 0 L0 32 L0 8 Z" fill="#3B5F65" opacity="0.5" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20 pointer-events-none">
        <svg viewBox="0 0 64 64" fill="none">
          <path d="M64 0 L64 64 L0 0 Z" fill="#D69E2E" />
        </svg>
      </div>

      {/* 顶栏 */}
      <div className="w-full flex justify-between items-center z-10 border-b border-[#C96A4B]/20 pb-4 max-w-md mx-auto">
        <div className="flex items-center space-x-2">
          <span
            className="bg-[#C96A4B] text-[#F5F1E8] px-2.5 py-0.5 text-xs font-bold rounded shadow-md"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            轉世
          </span>
          <span
            className="text-[#C96A4B] font-bold text-sm tracking-widest"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            1001种人生
          </span>
        </div>
        <span className="text-xs text-[#8A7E72]" style={{ fontFamily: "var(--font-heading)" }}>
          人间荒诞观测所 v1.2
        </span>
      </div>

      {/* 主体插画 + 标题 */}
      <div className="flex-1 flex flex-col items-center justify-center my-6 space-y-6 z-10 w-full max-w-md mx-auto">
        <motion.div
          className="relative w-48 h-48 flex items-center justify-center mb-2"
          animate={{ rotate: [0, 2, -2, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <svg aria-hidden="true" className="w-full h-full drop-shadow-lg" viewBox="0 0 200 200">
            <circle cx="100" cy="100" fill="#C96A4B" opacity="0.15" r="75" />
            <path d="M60 160 C60 110, 80 80, 100 80 C120 80, 140 110, 140 160 Z" fill="#C96A4B" />
            <polygon fill="#2F2B27" points="65,95 60,60 85,82" />
            <polygon fill="#2F2B27" points="135,95 140,60 115,82" />
            <polygon fill="#C96A4B" points="68,90 65,70 80,82" />
            <polygon fill="#C96A4B" points="132,90 135,70 120,82" />
            <circle cx="100" cy="115" fill="#F5F1E8" r="32" stroke="#C96A4B" strokeWidth="4" />
            <path d="M82 103 Q90 98 94 105" fill="none" stroke="#2F2B27" strokeLinecap="round" strokeWidth="3" />
            <path d="M118 103 Q110 98 106 105" fill="none" stroke="#2F2B27" strokeLinecap="round" strokeWidth="3" />
            <circle cx="88" cy="115" fill="#2F2B27" r="7" />
            <circle cx="88" cy="115" fill="#F5F1E8" r="2.5" />
            <circle cx="112" cy="115" fill="#2F2B27" r="7" />
            <circle cx="112" cy="115" fill="#F5F1E8" r="2.5" />
            <path d="M92 128 Q100 134 108 128" fill="none" stroke="#C96A4B" strokeLinecap="round" strokeWidth="3" />
            <motion.g
              animate={{ rotate: [0, 15, 0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ originX: "130px", originY: "130px" }}
            >
              <path d="M130 130 Q155 110 145 90 C135 80, 125 100, 130 120 Z" fill="#C96A4B" stroke="#F5F1E8" strokeWidth="2" />
              <circle cx="140" cy="95" fill="#2F2B27" r="4" />
            </motion.g>
            <path d="M85 155 L115 155 L120 145 L80 145 Z" fill="#D69E2E" />
            <circle cx="100" cy="148" fill="#C96A4B" r="5" />
          </svg>
          {/* 浮动标签 */}
          <motion.div
            className="absolute -top-3 -right-5 bg-[#3B5F65] text-[#F5F1E8] text-[10px] px-3 py-1 rounded-full shadow-md"
            style={{ rotate: 6, fontFamily: "var(--font-heading)" }}
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            无痛离世 · 准备投胎
          </motion.div>
        </motion.div>

        <div className="space-y-4 text-center">
          <h1
            className="text-4xl sm:text-5xl font-black tracking-tight text-[#2F2B27] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            你下辈子，<br />
            <span className="text-[#C96A4B] relative inline-block mt-1">
              会是谁？
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#D69E2E]/20 -z-10" />
            </span>
          </h1>
          <p
            className="text-sm text-[#4E423E] max-w-[290px] mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            根据你当下的微妙怪癖与行为，测出那张不可思议的转世宿命卡。
          </p>
        </div>
      </div>

      {/* 底部按钮 */}
      <div className="w-full space-y-3 z-10 max-w-md mx-auto">
        <motion.button
          className="w-full bg-[#C96A4B] hover:bg-[#B85A3B] text-[#F5F1E8] py-4 px-8 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center space-x-3 border-b-4 border-amber-900/30"
          style={{ fontFamily: "var(--font-heading)" }}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.15 }}
          onClick={() => router.push("/quiz/q1")}
        >
          <span>开启转世仪式</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        <motion.button
          className="w-full bg-[#F5F1E8] hover:bg-[#EDE8DC] text-[#3B5F65] py-3 px-8 rounded-xl font-bold text-base flex items-center justify-center gap-2 border border-[#3B5F65]/30"
          style={{ fontFamily: "var(--font-heading)" }}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.15 }}
          onClick={() => router.push("/archive")}
        >
          <span>查看众生图鉴</span>
          {/* 像素风书卷图标 */}
          <svg width="20" height="20" viewBox="0 0 20 20" style={{ imageRendering: "pixelated" }} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="2" width="2" height="16" fill="#3B5F65"/>
            <rect x="5" y="2" width="12" height="2" fill="#3B5F65"/>
            <rect x="5" y="16" width="12" height="2" fill="#3B5F65"/>
            <rect x="15" y="2" width="2" height="16" fill="#3B5F65"/>
            <rect x="5" y="4" width="10" height="12" fill="#F5F1E8"/>
            <rect x="6" y="5" width="8" height="1" fill="#3B5F65" opacity="0.5"/>
            <rect x="6" y="7" width="8" height="1" fill="#3B5F65" opacity="0.5"/>
            <rect x="6" y="9" width="6" height="1" fill="#3B5F65" opacity="0.5"/>
            <rect x="6" y="11" width="8" height="1" fill="#3B5F65" opacity="0.5"/>
            <rect x="6" y="13" width="5" height="1" fill="#3B5F65" opacity="0.5"/>
            <rect x="1" y="3" width="2" height="14" fill="#C96A4B" opacity="0.6"/>
          </svg>
        </motion.button>

        <p className="text-center text-[10px] text-[#8A7E72]"
          style={{ fontFamily: "var(--font-heading)" }}>
          已超 12,482 位生灵完成投胎
        </p>
      </div>
    </div>
  );
}
