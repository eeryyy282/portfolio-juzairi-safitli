"use client";

import React from "react";
import { GraduationCap, Layers, Smartphone, Cpu, Users, Award, BookOpen } from "lucide-react";
import { siteContent } from "@/content";
import { MagicCard } from "@/components/ui/MagicCard";

const pillarIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Smartphone,
  Cpu,
  Users,
};

export const AboutSection: React.FC = () => {
  const { about } = siteContent;

  return (
    <section id="about" className="py-16 sm:py-24 bg-tech-navy-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-tech-blue-100 text-tech-blue-700 dark:bg-tech-blue-950 dark:text-tech-blue-300 border border-tech-blue-200 dark:border-tech-blue-800 tracking-wider">
            {about.badge}
          </span>
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
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-lg text-tech-navy-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-tech-blue-500" />
                Filosofi Rekayasa & Dedikasi Profesional
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
            <div className="w-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-tech-blue-50/40 to-tech-cyan-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-tech-blue-950/40 border border-tech-blue-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
                    {about.educationSummary.predicate}
                  </span>
                </div>

                <h4 className="font-heading font-extrabold text-lg text-tech-navy-900 dark:text-white">
                  {about.educationSummary.institution}
                </h4>
                <p className="text-sm font-semibold text-tech-blue-600 dark:text-tech-blue-400 mt-1">
                  {about.educationSummary.degree}
                </p>

                <div className="my-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-tech-blue-100/70 dark:bg-tech-blue-950/60 border border-tech-blue-200 dark:border-tech-blue-800">
                  <Award className="w-4 h-4 text-tech-blue-600 dark:text-tech-blue-400" />
                  <span className="text-xs font-bold text-tech-blue-800 dark:text-tech-blue-200">
                    IPK: {about.educationSummary.gpa}
                  </span>
                </div>

                <p className="text-xs text-tech-navy-600 dark:text-slate-400 leading-relaxed">
                  {about.educationSummary.focusHighlight}
                </p>
              </div>

              <div className="pt-4 border-t border-tech-navy-100 dark:border-slate-800/80 mt-4 text-[11px] text-tech-navy-500 dark:text-slate-500">
                Kelulusan: Desember 2025 • Jambi, Indonesia
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {about.stats.map((st, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-tech-navy-200/70 dark:border-slate-800 shadow-sm text-center"
            >
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-tech-blue-600 to-tech-cyan-500">
                {st.value}
              </div>
              <div className="text-xs font-bold text-tech-navy-900 dark:text-white mt-1">
                {st.label}
              </div>
              <div className="text-[11px] text-tech-navy-500 dark:text-slate-400 mt-0.5">
                {st.note}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Engineering Pillars */}
        <div>
          <h3 className="text-center font-heading font-bold text-xl text-tech-navy-900 dark:text-white mb-6">
            Pilar Kompetensi Utama
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {about.pillars.map((pillar, idx) => {
              const Icon = (pillar.iconName && pillarIconMap[pillar.iconName]) || Layers;
              return (
                <MagicCard key={idx} className="flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-tech-blue-100 dark:bg-tech-blue-950/60 text-tech-blue-600 dark:text-tech-blue-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-tech-blue-600 dark:text-tech-blue-400">
                      {pillar.tag}
                    </span>
                    <h4 className="font-heading font-bold text-sm text-tech-navy-900 dark:text-white mt-1 mb-2">
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

