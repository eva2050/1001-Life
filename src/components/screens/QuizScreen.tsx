"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useQuizStore } from "@/lib/quiz-store";

type OptionKey = "a" | "b" | "c" | "d";

interface QuizOption {
  key: OptionKey;
  label: string;
  stamp: string;
}

interface QuizScreenProps {
  questionNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  questionKey: "q1" | "q2" | "q3" | "q4" | "q5" | "q6" | "q7" | "q8" | "q9";
  tag: string;
  title: string;
  options: QuizOption[];
  nextPath: string;
  footerHint?: string;
  backLabel?: string;
}

const STAMPS = ["甲", "乙", "丙", "丁"];

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.97 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] } },
  exit: { opacity: 0, x: -40, scale: 0.97, transition: { duration: 0.2 } },
};

export default function QuizScreen({
  questionNumber,
  questionKey,
  tag,
  title,
  options,
  nextPath,
  footerHint = "提示：请任凭第一直觉点击，勿要深思熟虑",
  backLabel = "返回人间",
}: QuizScreenProps) {
  const router = useRouter();
  const { setAnswer } = useQuizStore();
  const totalQuestions = 9;

  function handleOption(optKey: OptionKey) {
    setAnswer(questionKey, optKey);
    router.push(nextPath);
  }

  function handleBack() {
    if (questionNumber === 1) {
      router.push("/");
    } else {
      router.push(`/quiz/q${questionNumber - 1}`);
    }
  }

  const progressLabels = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionKey}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative min-h-svh flex flex-col items-center px-6 py-8 overflow-hidden folk-texture"
      >
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
        <div className="absolute top-0 right-0 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 80 80" fill="none">
            <path d="M80 0 L80 80 L0 0 Z" fill="#D69E2E" />
          </svg>
        </div>

        {/* 顶栏 */}
        <div className="w-full flex justify-between items-center z-10 border-b border-[#C96A4B]/20 pb-3 max-w-md mx-auto">
          <motion.button
            className="text-[#4E423E] hover:text-[#C96A4B] flex items-center gap-1 text-xs font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBack}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{backLabel}</span>
          </motion.button>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: totalQuestions }, (_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i < questionNumber ? "bg-[#C96A4B] w-5" : "bg-[#C96A4B]/20 w-3"
                  }`}
                />
              ))}
            </div>
            <span
              className="text-xs text-[#C96A4B] font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              第{progressLabels[questionNumber - 1]}问 / 共{totalQuestions}问
            </span>
          </div>
        </div>

        {/* 问题卡片 */}
        <div className="flex-1 flex flex-col justify-center my-6 space-y-4 z-10 w-full max-w-md mx-auto">
          <div className="bg-[#FFFDF7] border-2 border-[#C96A4B] p-6 rounded-2xl relative overflow-hidden shadow-md">
            <div className="absolute -top-6 -right-6 opacity-5 pointer-events-none">
              <svg fill="#C96A4B" height="120" viewBox="0 0 100 100" width="120">
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>
            <span
              className="inline-block bg-[#C96A4B]/10 text-[#C96A4B] text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {tag}
            </span>
            <h2
              className="text-xl sm:text-2xl font-bold text-[#2F2B27] leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h2>
          </div>

          {/* 选项列表 */}
          <div className="space-y-3">
            {options.map((opt, idx) => (
              <motion.button
                key={opt.key}
                className="w-full text-left bg-[#FFFDF7] hover:bg-[#C96A4B]/5 border border-[#C96A4B]/40 hover:border-[#C96A4B] p-4 rounded-xl flex items-start space-x-3 group transition-all"
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.07, duration: 0.3 } }}
                onClick={() => handleOption(opt.key)}
              >
                <span
                  className="flex-shrink-0 w-7 h-7 bg-[#C96A4B]/10 group-hover:bg-[#C96A4B] text-[#C96A4B] group-hover:text-[#F5F1E8] font-bold text-sm flex items-center justify-center rounded-full transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {STAMPS[idx]}
                </span>
                <span
                  className="text-[#2F2B27] text-sm sm:text-base leading-relaxed self-center"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {opt.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* 底部提示 */}
        <p
          className="text-center text-[10px] text-[#8A7E72] italic z-10"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {footerHint}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
