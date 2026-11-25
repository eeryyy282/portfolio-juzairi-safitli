"use client";

import React from "react";
import { Activity } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface HeartbeatLineProps {
  className?: string;
  withBadge?: boolean;
}

export const HeartbeatLine: React.FC<HeartbeatLineProps> = ({
  className = "",
  withBadge = true,
}) => {
  const { content } = useLanguage();
  const { ui } = content;

  return (
    <div className={`relative flex items-center justify-center w-full my-8 ${className}`}>
      <div className="group w-full max-w-2xl h-16 flex items-center justify-center relative overflow-visible">
        {/* SVG with mirrored scale (-scale-x-100) for complementary flow toward Yulti's portfolio */}
        <svg
          aria-hidden="true"
          viewBox="0 0 800 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full stroke-tech-blue-400 dark:stroke-tech-blue-500 overflow-visible transform -scale-x-100"
        >
          {/* Base Track */}
          <path
            d="M0 40 H270 L282 40 L292 18 L304 62 L316 26 L326 48 L336 40 H464 L474 40 L484 18 L496 62 L508 26 L518 48 L528 40 H800"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeOpacity="0.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-opacity duration-300 group-hover:opacity-80"
          />

          {/* Continuous Flowing EKG Wave Sweep */}
          <path
            d="M0 40 H270 L282 40 L292 18 L304 62 L316 26 L326 48 L336 40 H464 L474 40 L484 18 L496 62 L508 26 L518 48 L528 40 H800"
            stroke="#0284C7"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-ekg-sweep transition-colors duration-300 group-hover:stroke-tech-blue-500"
          />
        </svg>

        {withBadge && (
          <div
            tabIndex={0}
            className="absolute left-1/2 top-1/2 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-lg border border-tech-blue-200 dark:border-tech-blue-800 shadow-sm flex items-center gap-1.5 animate-pulse-beat z-10 transition-all duration-200 hover:border-tech-blue-500 hover:shadow-md dark:hover:border-tech-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tech-blue-500"
          >
            <Activity className="w-3.5 h-3.5 text-tech-blue-600 dark:text-tech-blue-400" aria-hidden="true" />
            <span className="text-xs font-semibold text-tech-blue-700 dark:text-tech-blue-300">
              {ui.heartbeatBadge}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
