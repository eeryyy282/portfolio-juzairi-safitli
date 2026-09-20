"use client";

import React, { useState } from "react";
import { FolderGit2, ExternalLink, Github, ArrowRight, Layers, Smartphone, Server, Sparkles } from "lucide-react";
import { siteContent, ProjectItem } from "@/content";
import { MagicCard } from "@/components/ui/MagicCard";
import { ProjectModal } from "@/components/ui/ProjectModal";

export const ProjectsSection: React.FC = () => {
  const { projects } = siteContent;
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === "Semua"
      ? projects.items
      : projects.items.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-tech-navy-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-tech-blue-100 text-tech-blue-700 dark:bg-tech-blue-950 dark:text-tech-blue-300 border border-tech-blue-200 dark:border-tech-blue-800 tracking-wider">
            {projects.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-tech-navy-900 dark:text-white">
            {projects.title}
          </h2>
          <p className="text-sm sm:text-base text-tech-navy-600 dark:text-slate-400">
            {projects.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projects.categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isSelected
                    ? "bg-tech-blue-600 text-white shadow-md shadow-tech-blue-600/30 scale-105"
                    : "bg-white dark:bg-slate-900 text-tech-navy-700 dark:text-slate-300 hover:bg-tech-blue-50 dark:hover:bg-slate-800 border border-tech-navy-200/80 dark:border-slate-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <MagicCard key={project.id} className="flex flex-col justify-between">
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-tech-blue-50 dark:bg-tech-blue-950 text-tech-blue-700 dark:text-tech-blue-300 border border-tech-blue-200 dark:border-tech-blue-800">
                    {project.category}
                  </span>
                  <span className="text-xs text-tech-navy-500 dark:text-slate-400 font-medium">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-extrabold text-tech-navy-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-tech-blue-600 dark:text-tech-blue-400 mb-3">
                  {project.role}
                </p>

                <p className="text-xs sm:text-sm text-tech-navy-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 text-xs text-tech-navy-700 dark:text-slate-400 mb-4">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-tech-blue-500 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-lg text-[11px] font-medium bg-tech-navy-100/70 dark:bg-slate-800 text-tech-navy-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-tech-navy-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-bold text-tech-blue-600 dark:text-tech-blue-400 hover:text-tech-blue-700 dark:hover:text-tech-blue-300 transition-colors group"
                >
                  <span>{projects.caseStudyBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Lihat kode di GitHub"
                      className="p-2 rounded-xl bg-tech-navy-100 dark:bg-slate-800 text-tech-navy-700 dark:text-slate-300 hover:text-tech-navy-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Kunjungi Demo"
                      className="p-2 rounded-xl bg-tech-blue-100 dark:bg-tech-blue-950 text-tech-blue-700 dark:text-tech-blue-300 hover:bg-tech-blue-200 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </MagicCard>
          ))}
        </div>

        {/* Case Study Detail Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};

