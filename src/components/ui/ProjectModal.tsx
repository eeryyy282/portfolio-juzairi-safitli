"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Layers, Award, Terminal } from "lucide-react";
import { ProjectItem } from "@/content";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-tech-blue-200 dark:border-slate-800 rounded-3xl shadow-2xl z-10 p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-tech-navy-100 dark:border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-tech-blue-100 text-tech-blue-700 dark:bg-tech-blue-950 dark:text-tech-blue-300 border border-tech-blue-200 dark:border-tech-blue-800">
                {project.category}
              </span>
              <span className="text-xs text-tech-navy-500 dark:text-slate-400 font-medium">
                {project.period} • {project.location}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-tech-navy-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-tech-blue-600 dark:text-tech-blue-400 mt-1">
              Peran: {project.role}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Tutup Detail Kasus"
            className="p-2 rounded-2xl bg-tech-navy-50 dark:bg-slate-800 text-tech-navy-500 hover:text-tech-navy-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="py-6 space-y-6 text-sm text-tech-navy-700 dark:text-slate-300">
          {/* Overview */}
          <div>
            <h4 className="flex items-center gap-2 font-heading font-bold text-base text-tech-navy-900 dark:text-white mb-2">
              <Terminal className="w-4 h-4 text-tech-blue-500" />
              Latar Belakang & Ringkasan Proyek
            </h4>
            <p className="leading-relaxed bg-tech-blue-50/50 dark:bg-slate-800/50 p-4 rounded-2xl border border-tech-blue-100 dark:border-slate-800">
              {caseStudy.overview}
            </p>
          </div>

          {/* Architecture */}
          <div>
            <h4 className="flex items-center gap-2 font-heading font-bold text-base text-tech-navy-900 dark:text-white mb-2">
              <Layers className="w-4 h-4 text-tech-cyan-500" />
              Arsitektur & Komponen Sistem
            </h4>
            <ul className="space-y-2">
              {caseStudy.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-tech-blue-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
              <h5 className="flex items-center gap-1.5 font-bold text-amber-800 dark:text-amber-400 mb-2">
                <AlertTriangle className="w-4 h-4" />
                Tantangan Teknis
              </h5>
              <ul className="space-y-1.5 text-xs text-amber-900/90 dark:text-amber-200/90">
                {caseStudy.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-500">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
              <h5 className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-400 mb-2">
                <CheckCircle2 className="w-4 h-4" />
                Solusi Rekayasa
              </h5>
              <ul className="space-y-1.5 text-xs text-emerald-900/90 dark:text-emerald-200/90">
                {caseStudy.solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Impact */}
          <div>
            <h4 className="flex items-center gap-2 font-heading font-bold text-base text-tech-navy-900 dark:text-white mb-2">
              <Award className="w-4 h-4 text-tech-blue-500" />
              Dampak & Hasil Terukur
            </h4>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-tech-blue-50 to-tech-cyan-50 dark:from-slate-800 dark:to-slate-800/80 border border-tech-blue-200/70 dark:border-slate-700">
              <p className="font-medium text-tech-navy-800 dark:text-slate-200 leading-relaxed">
                {caseStudy.impact}
              </p>
            </div>
          </div>

          {/* Tech Tags */}
          <div>
            <h5 className="text-xs font-bold text-tech-navy-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Tech Stack yang Digunakan
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-xl text-xs font-medium bg-tech-navy-100/70 dark:bg-slate-800 text-tech-navy-700 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-tech-navy-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-tech-navy-900 dark:bg-white text-white dark:text-tech-navy-900 text-xs font-bold hover:bg-tech-navy-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>Lihat di GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-tech-blue-600 text-white text-xs font-bold hover:bg-tech-blue-700 transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Kunjungi Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-2xl bg-tech-navy-100 dark:bg-slate-800 text-tech-navy-700 dark:text-slate-200 text-xs font-semibold hover:bg-tech-navy-200 dark:hover:bg-slate-700 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

