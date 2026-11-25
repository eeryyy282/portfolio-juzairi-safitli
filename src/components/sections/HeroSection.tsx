"use client";

import React from "react";
import Link from "next/link";
import { FileDown, Mail, ArrowDown, Award, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { BlobPhotoFrame } from "@/components/ui/BlobPhotoFrame";
import { HeartbeatLine } from "@/components/ui/HeartbeatLine";

export const HeroSection: React.FC = () => {
  const { content } = useLanguage();
  const { hero, contact } = content;

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fade-up">
            <p className="text-sm font-semibold text-tech-blue-600 dark:text-tech-blue-400">
              {hero.greetingBadge}
            </p>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-tech-navy-900 dark:text-white tracking-tight leading-tight">
                {hero.fullName},{" "}
                <span className="text-tech-blue-600 dark:text-tech-blue-400">
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

            {/* Key Achievement Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs font-semibold text-tech-navy-700 dark:text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <Award className="w-4 h-4 text-tech-blue-600 dark:text-tech-blue-400" />
                <span>{hero.badges.cumlaude}</span>
              </span>
              <span className="text-tech-navy-300 dark:text-slate-700">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="w-4 h-4 text-tech-blue-600 dark:text-tech-blue-400" />
                <span>{hero.badges.distinction}</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              <a
                href={contact.cvPath}
                download={contact.cvFileName}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-tech-blue-600 hover:bg-tech-blue-700 text-white text-sm font-bold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <FileDown className="w-4 h-4" />
                <span>{hero.downloadCvBtn}</span>
              </a>

              <Link
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-slate-900 hover:bg-tech-blue-50 dark:hover:bg-slate-800 text-tech-navy-800 dark:text-slate-200 text-sm font-bold border border-tech-navy-200 dark:border-slate-800 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-tech-blue-600" />
                <span>{hero.contactBtn}</span>
              </Link>

              <div className="flex items-center gap-2">
                <a
                  href={contact.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.linkedInTitle}
                  title={contact.linkedInTitle}
                  className="p-3 rounded-lg bg-white dark:bg-slate-900 hover:bg-sky-50 dark:hover:bg-slate-800 text-tech-navy-700 dark:text-slate-200 border border-tech-navy-200 dark:border-slate-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                </a>
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.githubTitle}
                  title={contact.githubTitle}
                  className="p-3 rounded-lg bg-white dark:bg-slate-900 hover:bg-tech-blue-50 dark:hover:bg-slate-800 text-tech-navy-700 dark:text-slate-200 border border-tech-navy-200 dark:border-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4 text-tech-navy-900 dark:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "120ms" }}>
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
            className="flex items-center gap-2 text-xs font-semibold text-tech-navy-500 dark:text-slate-400 hover:text-tech-blue-600 dark:hover:text-tech-blue-400 transition-colors"
          >
            <span>{hero.explorePrompt}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
