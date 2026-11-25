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
import { useLanguage } from "@/components/providers/LanguageProvider";
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
  const { content } = useLanguage();
  const { skills } = content;

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Header */}
        <div className="text-left max-w-3xl space-y-2 mb-12">
          <p className="text-xs font-semibold text-tech-blue-600 dark:text-tech-blue-400">
            {skills.badge}
          </p>
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
                className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm space-y-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-5 h-5 text-tech-blue-600 dark:text-tech-blue-400" />
                  <h3 className="font-heading font-bold text-base text-tech-navy-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-tech-navy-50 dark:bg-slate-800 text-tech-navy-800 dark:text-slate-200 border border-tech-navy-100 dark:border-slate-700"
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
        <div className="text-left max-w-3xl space-y-2 mb-10">
          <p className="text-xs font-semibold text-tech-blue-600 dark:text-tech-blue-400">
            {skills.awardsHeaderBadge}
          </p>
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
                    <Icon className="w-5 h-5 text-tech-blue-600 dark:text-tech-blue-400" />
                    {award.year && (
                      <span className="text-xs font-semibold text-tech-navy-500 dark:text-slate-400">
                        {award.year}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-tech-blue-600 dark:text-tech-blue-400 block mb-1">
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
