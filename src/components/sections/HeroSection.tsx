"use client";

import React from "react";
import Link from "next/link";
import { FileDown, Mail, ArrowDown, Award, Sparkles, Terminal } from "lucide-react";
import { siteContent } from "@/content";
import { BlobPhotoFrame } from "@/components/ui/BlobPhotoFrame";
import { HeartbeatLine } from "@/components/ui/HeartbeatLine";

export const HeroSection: React.FC = () => {
  const { hero, contact } = siteContent;

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-tech-blue-100/50 via-tech-cyan-100/30 to-transparent dark:from-tech-blue-950/20 dark:via-tech-cyan-950/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tech-blue-50 dark:bg-tech-blue-950/60 border border-tech-blue-200 dark:border-tech-blue-800 text-tech-blue-700 dark:text-tech-blue-300 text-xs font-semibold shadow-sm">
              <Terminal className="w-3.5 h-3.5 text-tech-blue-500" />
              <span>{hero.greetingBadge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-tech-navy-900 dark:text-white tracking-tight leading-tight">
                {hero.fullName},{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue-600 to-tech-cyan-500">
                  {hero.degree}
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-tech-navy-700 dark:text-slate-300">
                {hero.headline}
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-tech-navy-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {hero.bio}
            </p>

            {/* Key Achievement Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>{hero.badges.cumlaude}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-tech-blue-50 dark:bg-tech-blue-950/40 border border-tech-blue-200 dark:border-tech-blue-900/60 text-tech-blue-800 dark:text-tech-blue-300 text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-tech-blue-500" />
                <span>{hero.badges.distinction}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              <a
                href={contact.cvPath}
                download="CV_Muhammad_Juzairi_Safitli.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-tech-blue-600 to-tech-blue-700 hover:from-tech-blue-700 hover:to-tech-blue-800 text-white text-sm font-bold shadow-lg shadow-tech-blue-600/30 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                <span>{hero.downloadCvBtn}</span>
              </a>

              <Link
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-900 hover:bg-tech-blue-50 dark:hover:bg-slate-800 text-tech-navy-800 dark:text-slate-200 text-sm font-bold border border-tech-navy-200 dark:border-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-tech-blue-500" />
                <span>{hero.contactBtn}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Blob Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <BlobPhotoFrame imageSrc="/images/profile.jpg" />
          </div>
        </div>

        {/* Mirrored Heartbeat Line (Couple Connection) */}
        <div className="mt-14">
          <HeartbeatLine />
        </div>

        {/* Explore Prompt */}
        <div className="flex justify-center pt-2">
          <Link
            href="#about"
            className="flex items-center gap-2 text-xs font-semibold text-tech-navy-500 dark:text-slate-400 hover:text-tech-blue-600 dark:hover:text-tech-blue-400 transition-colors animate-bounce"
          >
            <span>{hero.explorePrompt}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

