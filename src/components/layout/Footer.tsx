"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Mail, Phone, MapPin, Heart } from "lucide-react";
import { siteContent } from "@/content";

export const Footer: React.FC = () => {
  const { footer, navbar, contact } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-tech-navy-200/70 dark:border-slate-800 text-tech-navy-700 dark:text-slate-300 pt-14 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-tech-navy-100 dark:border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-tech-blue-600 to-tech-cyan-500 flex items-center justify-center text-white font-heading font-extrabold text-sm shadow-md">
                MJS
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-tech-navy-900 dark:text-white">
                  {footer.brandName}
                </h3>
                <p className="text-xs text-tech-blue-600 dark:text-tech-blue-400 font-semibold">
                  {footer.brandDegreeRole}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-tech-navy-600 dark:text-slate-400 max-w-md leading-relaxed">
              {footer.missionStatement}
            </p>

            {/* Couple Theme Note */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-partner-pink-50/80 dark:bg-partner-pink-950/30 border border-partner-pink-200/60 dark:border-partner-pink-900/40 text-xs text-partner-pink-700 dark:text-partner-pink-300">
                <Heart className="w-3.5 h-3.5 fill-partner-pink-500 text-partner-pink-500 shrink-0 animate-pulse" />
                <span>
                  {footer.partnerNote}{" "}
                  <a
                    href={footer.partnerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-partner-pink-600 transition-colors"
                  >
                    {footer.partnerName}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="font-heading font-bold text-sm text-tech-navy-900 dark:text-white mb-4">
              {footer.navTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {navbar.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-tech-navy-600 dark:text-slate-400 hover:text-tech-blue-600 dark:hover:text-tech-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-heading font-bold text-sm text-tech-navy-900 dark:text-white mb-4">
              {footer.contactTitle}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-tech-blue-500 shrink-0" />
                <a
                  href={`mailto:${contact.emailValue}`}
                  className="hover:text-tech-blue-600 dark:hover:text-tech-blue-400 transition-colors"
                >
                  {contact.emailValue}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-tech-blue-500 shrink-0" />
                <a
                  href={contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tech-blue-600 dark:hover:text-tech-blue-400 transition-colors"
                >
                  {contact.phoneValue}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-tech-blue-500 shrink-0" />
                <span>{contact.locationValue}</span>
              </li>
              <li className="flex items-center gap-2 pt-2">
                <a
                  href="https://github.com/eeryyy282"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-8 h-8 rounded-xl bg-tech-navy-100 dark:bg-slate-800 flex items-center justify-center text-tech-navy-700 dark:text-slate-300 hover:text-tech-blue-600 dark:hover:text-tech-blue-400 hover:bg-tech-blue-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-tech-navy-500 dark:text-slate-500">
          <p>{footer.copyrightText}</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-tech-navy-100 dark:bg-slate-800 text-tech-navy-700 dark:text-slate-300 hover:bg-tech-navy-200 dark:hover:bg-slate-700 transition-colors font-medium"
          >
            <span>{footer.backToTopBtn}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

