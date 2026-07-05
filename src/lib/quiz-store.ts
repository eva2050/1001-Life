"use client";

// Simple quiz answer store using localStorage
import { useState, useEffect, useCallback } from "react";

export type OptionKey = "a" | "b" | "c" | "d";
export type QuestionKey = "q1" | "q2" | "q3" | "q4" | "q5" | "q6" | "q7" | "q8" | "q9";

export interface QuizAnswers {
  q1?: OptionKey;
  q2?: OptionKey;
  q3?: OptionKey;
  q4?: OptionKey;
  q5?: OptionKey;
  q6?: OptionKey;
  q7?: OptionKey;
  q8?: OptionKey;
  q9?: OptionKey;
}

const STORAGE_KEY = "quiz_answers_1001";

export function getStoredAnswers(): QuizAnswers {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function setStoredAnswer(key: QuestionKey, value: OptionKey) {
  const current = getStoredAnswers();
  const updated = { ...current, [key]: value };
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return updated;
}

export function clearStoredAnswers() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
  }
}

// Hook for quiz store
export function useQuizStore() {
  const [answers, setAnswers] = useState<QuizAnswers>({});

  useEffect(() => {
    setAnswers(getStoredAnswers());
  }, []);

  const setAnswer = useCallback((key: QuestionKey, value: OptionKey) => {
    const updated = setStoredAnswer(key, value);
    setAnswers(updated);
  }, []);

  const reset = useCallback(() => {
    clearStoredAnswers();
    setAnswers({});
  }, []);

  return { answers, setAnswer, reset };
}
