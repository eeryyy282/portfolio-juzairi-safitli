"use client";

import React from "react";
import { Activity, Zap } from "lucide-react";
import { siteContent } from "@/content";

interface HeartbeatLineProps {
  className?: string;
  withBadge?: boolean;
}

export const HeartbeatLine: React.FC<HeartbeatLineProps> = ({
  className = "",
  withBadge = true,
}) => {
  const { ui } = siteContent;

  return (
    <div className={`relative flex items-center justify-center w-full my-8 ${className}`}>
      <div className="w-full max-w-2xl h-14 flex items-center justify-center relative overflow-visible">
        {/* SVG with mirrored scale (scaleX(-1)) to create complementary flow to Yulti's portfolio */}
        <svg
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
            strokeWidth="2.5"
            strokeOpacity="0.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Mirrored Active Tech Pulse Gradient */}
          <path
            d="M0 40 H270 L282 40 L292 18 L304 62 L316 26 L326 48 L336 40 H464 L474 40 L484 18 L496 62 L508 26 L518 48 L528 40 H800"
            stroke="url(#techEkgGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse"
          />

          <defs>
            <linearGradient id="techEkgGradient" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#0284C7" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0369A1" stopOpacity="1" />
              <stop offset="65%" stopColor="#0284C7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {withBadge && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-tech-blue-50/90 dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-tech-blue-200 dark:border-tech-blue-800 shadow-sm flex items-center gap-1.5 animate-heartbeat z-10">
            <Activity className="w-3.5 h-3.5 text-tech-blue-600 dark:text-tech-blue-400" />
            <span className="text-[11px] font-bold text-tech-blue-700 dark:text-tech-blue-300 tracking-wider uppercase">
              {ui.heartbeatBadge}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

