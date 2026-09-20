"use client";

import React from "react";
import {
  Code2,
  Smartphone,
  Server,
  Wrench,
  BrainCircuit,
  Trophy,
  Award,
  CheckCircle,
  Cpu,
  Globe,
} from "lucide-react";
import { siteContent } from "@/content";
import { MagicCard } from "@/components/ui/MagicCard";

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Smartphone,
  Server,
  Wrench,
  BrainCircuit,
};

const awardIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Award,
  CheckCircle,
  Cpu,
  Globe,
};

export const SkillsSection: React.FC = () => {
  const { skills } = siteContent;

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-tech-blue-100 text-tech-blue-700 dark:bg-tech-blue-950 dark:text-tech-blue-300 border border-tech-blue-200 dark:border-tech-blue-800 tracking-wider">
            {skills.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-tech-navy-900 dark:text-white">
            {skills.title}
          </h2>
          <p className="text-sm sm:text-base text-tech-navy-600 dark:text-slate-400">
            {skills.subtitle}
          </p>
        </div>

        {/* Tech Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.categories.map((cat, idx) => {
            const Icon = (cat.iconName && categoryIconMap[cat.iconName]) || Code2;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-tech-blue-50 dark:bg-tech-blue-950 text-tech-blue-600 dark:text-tech-blue-400 flex items-center justify-center border border-tech-blue-200/60 dark:border-tech-blue-900/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-tech-navy-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-tech-navy-50 dark:bg-slate-800 text-tech-navy-800 dark:text-slate-200 border border-tech-navy-100 dark:border-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Awards & Certifications Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-900 tracking-wider">
            {skills.awardsHeaderBadge}
          </span>
          <h3 className="text-xl sm:text-3xl font-heading font-extrabold text-tech-navy-900 dark:text-white">
            {skills.awardsHeaderTitle}
          </h3>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.awards.map((award, idx) => {
            const Icon = (award.iconName && awardIconMap[award.iconName]) || Award;
            return (
              <MagicCard key={idx} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-200 dark:border-amber-900/60">
                      <Icon className="w-5 h-5" />
                    </div>
                    {award.year && (
                      <span className="text-[11px] font-bold text-tech-navy-500 dark:text-slate-400">
                        {award.year}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-semibold text-tech-blue-600 dark:text-tech-blue-400 block mb-1">
                    {award.category}
                  </span>
                  <h4 className="font-heading font-bold text-base text-tech-navy-900 dark:text-white mb-2">
                    {award.title}
                  </h4>
                  <p className="text-xs text-tech-navy-600 dark:text-slate-400 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </MagicCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

