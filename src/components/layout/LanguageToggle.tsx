"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Globe } from "lucide-react";

export const LanguageToggle: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { locale, setLocale } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-16 h-8 rounded-full bg-slate-100 dark:bg-slate-800 ${className}`}
      />
    );
  }

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-full bg-tech-navy-100/80 dark:bg-slate-800/80 border border-tech-navy-200/70 dark:border-slate-700/80 ${className}`}
      title={
        locale === "en"
          ? "Switch to Indonesian (Bahasa Indonesia)"
          : "Beralih ke Bahasa Inggris (English)"
      }
    >
      <button
        onClick={() => setLocale("en")}
        aria-label="Switch to English"
        className={`px-2 py-1 rounded-full text-[11px] font-bold transition-all duration-200 flex items-center gap-1 ${
          locale === "en"
            ? "bg-tech-blue-600 text-white shadow-sm"
            : "text-tech-navy-600 dark:text-slate-400 hover:text-tech-navy-900 dark:hover:text-white"
        }`}
      >
        <span>EN</span>
      </button>

      <button
        onClick={() => setLocale("id")}
        aria-label="Beralih ke Bahasa Indonesia"
        className={`px-2 py-1 rounded-full text-[11px] font-bold transition-all duration-200 flex items-center gap-1 ${
          locale === "id"
            ? "bg-tech-blue-600 text-white shadow-sm"
            : "text-tech-navy-600 dark:text-slate-400 hover:text-tech-navy-900 dark:hover:text-white"
        }`}
      >
        <span>ID</span>
      </button>
    </div>
  );
};

