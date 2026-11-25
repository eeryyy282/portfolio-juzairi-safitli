"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Cpu,
  Mail,
  FileDown,
  Menu,
  X,
  Heart,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  hero: Home,
  about: User,
  experience: Briefcase,
  projects: FolderGit2,
  skills: Cpu,
  contact: Mail,
};

export const Navbar: React.FC = () => {
  const { content } = useLanguage();
  const { navbar, contact } = content;
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navbar.navItems.map((item) => item.id);
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbar.navItems]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-2.5 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-sm border-b border-tech-navy-200/50 dark:border-slate-800"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-tech-blue-600 flex items-center justify-center text-white font-heading font-extrabold shadow-sm group-hover:bg-tech-blue-700 transition-colors">
            <span>{navbar.brandInitials}</span>
          </div>
          <div>
            <span className="font-heading font-extrabold text-base sm:text-lg text-tech-navy-900 dark:text-white tracking-tight group-hover:text-tech-blue-600 dark:group-hover:text-tech-blue-400 transition-colors">
              {navbar.brandName}
            </span>
            <span className="hidden sm:block text-xs font-medium text-tech-blue-600 dark:text-tech-blue-400">
              {navbar.brandDegree} | {navbar.brandRole}
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-2 py-1.5 rounded-xl border border-tech-navy-200/70 dark:border-slate-800 shadow-sm">
          {navbar.navItems.map((item) => {
            const Icon = iconMap[item.id] || Home;
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-tech-blue-600 text-white"
                    : "text-tech-navy-700 dark:text-slate-300 hover:text-tech-blue-600 dark:hover:text-tech-blue-400 hover:bg-tech-blue-50 dark:hover:bg-slate-800"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-tech-blue-500 dark:text-tech-blue-400"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Easter Egg, Language, Theme, Download CV */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={navbar.partnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={navbar.partnerTooltip}
            className="w-9 h-9 rounded-lg flex items-center justify-center bg-partner-pink-50 dark:bg-partner-pink-950/40 text-partner-pink-500 hover:bg-partner-pink-100 dark:hover:bg-partner-pink-900/50 border border-partner-pink-200/60 dark:border-partner-pink-900/40 transition-colors"
          >
            <Heart className="w-4 h-4 fill-partner-pink-400 text-partner-pink-500" />
            <span className="sr-only">{navbar.partnerTooltip}</span>
          </a>

          <LanguageToggle />
          <ThemeToggle />

          <a
            href={contact.cvPath}
            download={contact.cvFileName}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-tech-blue-600 hover:bg-tech-blue-700 text-white text-xs font-bold shadow-sm transition-colors"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>{navbar.downloadCvBtn}</span>
          </a>
        </div>

        {/* Mobile Menu & Theme Controls */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={navbar.partnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={navbar.partnerTooltip}
            className="w-9 h-9 rounded-lg flex items-center justify-center bg-partner-pink-50 dark:bg-partner-pink-950/40 text-partner-pink-500 border border-partner-pink-200/60"
          >
            <Heart className="w-4 h-4 fill-partner-pink-400 text-partner-pink-500" />
          </a>

          <LanguageToggle />
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={navbar.toggleMenuAria}
            className="w-9 h-9 rounded-lg bg-tech-navy-100 dark:bg-slate-800 text-tech-navy-700 dark:text-slate-200 flex items-center justify-center border border-tech-navy-200 dark:border-slate-700 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-tech-navy-200 dark:border-slate-800 px-6 py-4 mt-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navbar.navItems.map((item) => {
              const Icon = iconMap[item.id] || Home;
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-tech-blue-600 text-white shadow-sm"
                      : "text-tech-navy-700 dark:text-slate-200 hover:bg-tech-blue-50 dark:hover:bg-slate-800 hover:text-tech-blue-600"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-tech-blue-100 dark:bg-slate-800 text-tech-blue-600 dark:text-tech-blue-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="pt-3 border-t border-tech-navy-100 dark:border-slate-800 mt-1">
              <a
                href={contact.cvPath}
                download={contact.cvFileName}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-tech-blue-600 hover:bg-tech-blue-700 text-white text-xs font-bold shadow-sm transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>{navbar.downloadCvBtn}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

