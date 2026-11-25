"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  FileDown,
  MessageSquare,
  Copy,
  Check,
  Linkedin,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const ContactSection: React.FC = () => {
  const { content } = useLanguage();
  const { contact } = content;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const buildComposedBody = () => {
    const senderName = formData.name.trim() || "-";
    const senderEmail = formData.email.trim() || "-";
    const bodyMessage = formData.message.trim() || contact.defaultMessageBody;
    return contact.mailtoBodyTemplate(senderName, senderEmail, bodyMessage);
  };

  const getMailtoHref = () => {
    const subject = formData.subject.trim() || contact.defaultSubject;
    return `mailto:${contact.emailValue}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      buildComposedBody()
    )}`;
  };

  const getWhatsAppHref = () => {
    if (!formData.name.trim() && !formData.subject.trim() && !formData.message.trim()) {
      return contact.whatsAppUrl;
    }
    const subject = formData.subject.trim() || contact.defaultSubject;
    const text = `${subject}\n\n${buildComposedBody()}`;
    return `${contact.whatsAppBaseUrl}?text=${encodeURIComponent(text)}`;
  };

  const copyEmail = async () => {
    setCopyError(false);
    try {
      if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(contact.emailValue);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (error) {
      console.error("Failed to copy email address to clipboard:", error);
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-tech-navy-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl space-y-2 mb-12">
          <p className="text-xs font-semibold text-tech-blue-600 dark:text-tech-blue-400">
            {contact.badge}
          </p>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-tech-navy-900 dark:text-white">
            {contact.title}
          </h2>
          <p className="text-sm sm:text-base text-tech-navy-600 dark:text-slate-400">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Reach Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-tech-blue-600 dark:text-tech-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-tech-navy-900 dark:text-white">
                    {contact.emailTitle}
                  </h4>
                  <a
                    href={`mailto:${contact.emailValue}`}
                    className="text-xs sm:text-sm font-semibold text-tech-blue-600 dark:text-tech-blue-400 hover:underline block mt-0.5"
                  >
                    {contact.emailValue}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                aria-label={
                  copyError
                    ? contact.copyErrorTooltip
                    : copiedEmail
                    ? contact.copiedEmailTooltip
                    : contact.copyEmailTooltip
                }
                className="p-2 rounded-lg bg-tech-navy-50 dark:bg-slate-800 text-tech-navy-600 dark:text-slate-300 hover:text-tech-navy-900 dark:hover:text-white transition-colors"
                title={
                  copyError
                    ? contact.copyErrorTooltip
                    : copiedEmail
                    ? contact.copiedEmailTooltip
                    : contact.copyEmailTooltip
                }
              >
                {copyError ? (
                  <AlertCircle className="w-4 h-4 text-rose-500" />
                ) : copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-2 flex-1">
                <div>
                  <h4 className="font-heading font-bold text-sm text-tech-navy-900 dark:text-white">
                    {contact.phoneTitle}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-tech-navy-700 dark:text-slate-300 mt-0.5">
                    {contact.phoneValue}
                  </p>
                </div>
                <a
                  href={contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-600 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{contact.chatWhatsAppBtn}</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3">
              <Linkedin className="w-5 h-5 text-[#0077b5] dark:text-sky-400 shrink-0 mt-0.5" />
              <div className="space-y-2 flex-1">
                <div>
                  <h4 className="font-heading font-bold text-sm text-tech-navy-900 dark:text-white">
                    {contact.linkedInTitle}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-tech-navy-700 dark:text-slate-300 mt-0.5">
                    {contact.linkedInValue}
                  </p>
                </div>
                <a
                  href={contact.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-tech-navy-200 dark:border-slate-700 text-tech-navy-800 dark:text-slate-200 hover:bg-tech-navy-50 dark:hover:bg-slate-800 text-xs font-bold transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>{contact.connectLinkedInBtn}</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3">
              <MapPin className="w-5 h-5 text-tech-blue-600 dark:text-tech-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-bold text-sm text-tech-navy-900 dark:text-white">
                  {contact.locationTitle}
                </h4>
                <p className="text-xs sm:text-sm text-tech-navy-600 dark:text-slate-400 mt-0.5">
                  {contact.locationValue}
                </p>
              </div>
            </div>

            {/* Official CV Download Card */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <FileDown className="w-5 h-5 text-tech-blue-600 dark:text-tech-blue-400 shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-base text-tech-navy-900 dark:text-white">
                    {contact.cvCardTitle}
                  </h4>
                  <span className="text-xs text-tech-navy-500 dark:text-slate-400 font-medium">
                    {contact.cvFormatNote}
                  </span>
                </div>
              </div>
              <p className="text-xs text-tech-navy-600 dark:text-slate-400 leading-relaxed">
                {contact.cvCardDesc}
              </p>
              <a
                href={contact.cvPath}
                download={contact.cvFileName}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-tech-blue-600 text-tech-blue-600 dark:text-tech-blue-400 hover:bg-tech-blue-50 dark:hover:bg-tech-blue-950/40 text-xs font-bold transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>{contact.cvCardBtn}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-tech-navy-900 dark:text-white">
                    {contact.formTitle}
                  </h3>
                  <p className="text-xs text-tech-navy-600 dark:text-slate-400 mt-0.5">
                    {contact.formSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-tech-navy-700 dark:text-slate-300 mb-1.5">
                      {contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={contact.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-lg text-xs bg-tech-navy-50 dark:bg-slate-800 border border-tech-navy-200 dark:border-slate-700 text-tech-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-tech-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-tech-navy-700 dark:text-slate-300 mb-1.5">
                      {contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={contact.emailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-lg text-xs bg-tech-navy-50 dark:bg-slate-800 border border-tech-navy-200 dark:border-slate-700 text-tech-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-tech-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-tech-navy-700 dark:text-slate-300 mb-1.5">
                    {contact.subjectLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={contact.subjectPlaceholder}
                    className="w-full px-4 py-2.5 rounded-lg text-xs bg-tech-navy-50 dark:bg-slate-800 border border-tech-navy-200 dark:border-slate-700 text-tech-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-tech-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-tech-navy-700 dark:text-slate-300 mb-1.5">
                    {contact.messageLabel}
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={contact.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-lg text-xs bg-tech-navy-50 dark:bg-slate-800 border border-tech-navy-200 dark:border-slate-700 text-tech-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-tech-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href={getWhatsAppHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-tech-navy-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-tech-navy-50 dark:hover:bg-slate-700 text-tech-navy-800 dark:text-slate-100 text-xs font-bold transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>{contact.sendViaWhatsAppBtn}</span>
                  </a>

                  <a
                    href={getMailtoHref()}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-tech-blue-600 hover:bg-tech-blue-700 text-white text-xs font-bold shadow-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{contact.sendViaEmailBtn}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
