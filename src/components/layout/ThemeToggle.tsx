"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 ${className}`} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Dark / Light Theme"
      className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-tech-navy-100/80 dark:bg-slate-800/80 text-tech-navy-700 dark:text-tech-blue-300 hover:bg-tech-navy-200 dark:hover:bg-slate-700 ${className}`}
      title={isDark ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap"}
    >
      {isDark ? <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-90 duration-200" /> : <Moon className="w-4 h-4 text-tech-navy-700 animate-in spin-in-90 duration-200" />}
    </button>
  );
};

