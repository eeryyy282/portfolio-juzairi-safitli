"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { siteContent } from "@/content";

export const ExperienceSection: React.FC = () => {
  const { experience } = siteContent;

  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-tech-blue-100 text-tech-blue-700 dark:bg-tech-blue-950 dark:text-tech-blue-300 border border-tech-blue-200 dark:border-tech-blue-800 tracking-wider">
            {experience.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-tech-navy-900 dark:text-white">
            {experience.title}
          </h2>
          <p className="text-sm sm:text-base text-tech-navy-600 dark:text-slate-400">
            {experience.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-tech-blue-200 dark:bg-slate-800 -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {experience.items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-tech-blue-500 flex items-center justify-center shadow-md z-10">
                    <Briefcase className="w-3 h-3 text-tech-blue-600 dark:text-tech-blue-400" />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Container */}
                  <div
                    className={`w-full pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? "sm:pr-10" : "sm:pl-10"
                    }`}
                  >
                    <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                      {/* Badge & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-tech-blue-50 dark:bg-tech-blue-950 text-tech-blue-700 dark:text-tech-blue-300 border border-tech-blue-200 dark:border-tech-blue-800">
                            {item.badge}
                          </span>
                        )}
                        <div className="flex items-center gap-1 text-xs font-semibold text-tech-navy-500 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-tech-blue-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-tech-navy-900 dark:text-white">
                        {item.role}
                      </h3>
                      <div className="text-xs font-bold text-tech-blue-600 dark:text-tech-blue-400 mt-0.5 mb-1">
                        {item.organization}
                      </div>

                      <div className="flex items-center gap-1 text-[11px] text-tech-navy-500 dark:text-slate-400 mb-3">
                        <MapPin className="w-3 h-3 text-tech-cyan-500" />
                        <span>{item.location}</span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 text-xs text-tech-navy-700 dark:text-slate-300 mb-4">
                        {item.highlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-tech-blue-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-tech-navy-100 dark:border-slate-800">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-tech-navy-100/70 dark:bg-slate-800 text-tech-navy-700 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

