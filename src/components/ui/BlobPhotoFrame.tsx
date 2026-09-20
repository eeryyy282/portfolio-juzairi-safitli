"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Award, Terminal, Code2 } from "lucide-react";
import { siteContent } from "@/content";

interface BlobPhotoFrameProps {
  imageSrc?: string;
  className?: string;
}

export const BlobPhotoFrame: React.FC<BlobPhotoFrameProps> = ({
  imageSrc = "/images/profile.jpg",
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);
  const { hero, ui } = siteContent;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-tech-blue-300/40 via-tech-cyan-200/40 to-tech-navy-300/30 dark:from-tech-blue-900/40 dark:via-tech-cyan-900/30 dark:to-slate-900/50 rounded-[50px] blur-2xl -z-10 transform rotate-6 animate-pulse-slow" />

      <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 p-2">
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <clipPath id="blobClipTech" clipPathUnits="objectBoundingBox">
              <path d="M0.2,0.8 C0.05,0.65 0.05,0.35 0.25,0.15 C0.45,-0.05 0.7,-0.02 0.85,0.18 C1.0,0.38 0.98,0.7 0.8,0.88 C0.62,1.05 0.35,0.95 0.2,0.8 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Animated Organic Border */}
        <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue-200 via-tech-cyan-100 to-tech-navy-100 dark:from-tech-blue-900 dark:via-tech-cyan-950 dark:to-slate-900 animate-blob shadow-xl border-4 border-white dark:border-slate-800" />

        {/* Inner Image Container */}
        <div className="relative w-full h-full rounded-[42%_58%_70%_30%/45%_45%_55%_55%] overflow-hidden bg-white/60 dark:bg-slate-900/60 flex items-center justify-center p-3">
          {!imageError ? (
            <div className="relative w-full h-full rounded-[38%_62%_63%_37%/41%_44%_56%_59%] overflow-hidden">
              <Image
                src={imageSrc}
                alt={`${hero.fullName}, ${hero.degree}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, 380px"
                priority
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-tech-blue-50 to-white dark:from-slate-800 dark:to-slate-900 w-full h-full rounded-[38%_62%_63%_37%/41%_44%_56%_59%] border border-tech-blue-100 dark:border-tech-blue-900">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-tech-blue-500 to-tech-cyan-400 flex items-center justify-center shadow-md mb-3 text-white">
                <span className="text-3xl font-heading font-bold">MJS</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-tech-navy-800 dark:text-slate-100">
                {hero.fullName}
              </h3>
              <p className="text-xs font-medium text-tech-blue-600 dark:text-tech-blue-400 bg-tech-blue-50 dark:bg-tech-blue-950/60 px-3 py-1 rounded-full mt-1 border border-tech-blue-200 dark:border-tech-blue-800">
                {ui.avatarFallbackRole}
              </p>
              <div className="flex items-center gap-1 mt-2 text-tech-navy-500 dark:text-slate-400 text-[11px]">
                <Terminal className="w-3.5 h-3.5 text-tech-cyan-500" />
                <span>{ui.avatarFallbackSpecialty}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Badge 1: Wisudawan Terbaik / Best Graduate */}
      <div className="absolute -bottom-2 -left-4 sm:bottom-2 sm:-left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-tech-blue-100 dark:border-tech-blue-900/60 flex items-center gap-2.5 animate-soft-float z-10">
        <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
          <Award className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-tech-navy-900 dark:text-slate-100 flex items-center gap-1">
            <span>{ui.avatarBadgeBestGraduate}</span>
            <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
          </div>
          <div className="text-[10px] text-tech-blue-600 dark:text-tech-blue-400 font-semibold">
            {ui.avatarBadgeGpa}
          </div>
        </div>
      </div>

      {/* Floating Badge 2: Distinction Graduate Bangkit by Google */}
      <div
        className="absolute -top-3 -right-2 sm:top-2 sm:-right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-tech-blue-100 dark:border-tech-blue-900/60 flex items-center gap-2.5 animate-soft-float z-10"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-8 h-8 rounded-xl bg-tech-blue-100 dark:bg-tech-blue-950/60 flex items-center justify-center text-tech-blue-600 dark:text-tech-blue-400">
          <Code2 className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-tech-navy-900 dark:text-slate-100">
            {ui.avatarBadgeDistinction}
          </div>
          <div className="text-[10px] text-tech-blue-600 dark:text-tech-blue-400 font-semibold">
            {ui.avatarBadgeBangkit}
          </div>
        </div>
      </div>
    </div>
  );
};

