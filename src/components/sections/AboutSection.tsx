"use client";

import React from "react";
import { GraduationCap, Layers, Smartphone, Cpu, Users, Award, BookOpen } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { MagicCard } from "@/components/ui/MagicCard";

const pillarIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Smartphone,
  Cpu,
  Users,
};

export const AboutSection: React.FC = () => {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <section id="about" className="py-16 sm:py-24 bg-tech-navy-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-2 mb-12">
          <p className="text-xs font-semibold text-tech-blue-600 dark:text-tech-blue-400">
            {about.badge}
          </p>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-tech-navy-900 dark:text-white">
            {about.title}
          </h2>
          <p className="text-sm sm:text-base text-tech-navy-600 dark:text-slate-400">
            {about.subtitle}
          </p>
        </div>

        {/* Narratives & Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Narrative Col */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm space-y-4 h-full">
              <h3 className="font-heading font-bold text-lg text-tech-navy-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-tech-blue-600" />
                {about.philosophyTitle}
              </h3>
              <p className="text-sm text-tech-navy-700 dark:text-slate-300 leading-relaxed">
                {about.bioNarrative}
              </p>
              <p className="text-sm text-tech-navy-700 dark:text-slate-300 leading-relaxed">
                {about.approachNarrative}
              </p>
            </div>
          </div>

          {/* Education Highlight Card */}
          <div className="lg:col-span-5 flex">
            <div className="w-full p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-tech-blue-600 dark:text-tech-blue-400" />
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-tech-blue-50 text-tech-blue-700 dark:bg-tech-blue-950 dark:text-tech-blue-300 border border-tech-blue-200 dark:border-tech-blue-800">
                    {about.educationSummary.predicate}
                  </span>
                </div>

                <h4 className="font-heading font-extrabold text-lg text-tech-navy-900 dark:text-white">
                  {about.educationSummary.institution}
                </h4>
                <p className="text-sm font-semibold text-tech-blue-600 dark:text-tech-blue-400 mt-1">
                  {about.educationSummary.degree}
                </p>

                <div className="my-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-tech-navy-50 dark:bg-slate-800 border border-tech-navy-200 dark:border-slate-700">
                  <Award className="w-4 h-4 text-tech-blue-600 dark:text-tech-blue-400" />
                  <span className="text-xs font-bold text-tech-navy-900 dark:text-slate-100">
                    {about.educationSummary.gpaLabel}: {about.educationSummary.gpa}
                  </span>
                </div>

                <p className="text-xs text-tech-navy-600 dark:text-slate-400 leading-relaxed">
                  {about.educationSummary.focusHighlight}
                </p>
              </div>

              <div className="pt-4 border-t border-tech-navy-100 dark:border-slate-800/80 mt-4 text-xs text-tech-navy-500 dark:text-slate-400">
                {about.educationSummary.graduationDate}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Engineering Pillars */}
        <div>
          <h3 className="text-left font-heading font-bold text-xl text-tech-navy-900 dark:text-white mb-6">
            {about.pillarsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {about.pillars.map((pillar, idx) => {
              const Icon = (pillar.iconName && pillarIconMap[pillar.iconName]) || Layers;
              return (
                <MagicCard key={idx} className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-tech-blue-600 dark:text-tech-blue-400" />
                      <span className="text-xs font-semibold text-tech-blue-600 dark:text-tech-blue-400">
                        {pillar.tag}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-sm text-tech-navy-900 dark:text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-tech-navy-600 dark:text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </MagicCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
