"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Send,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";
import { siteContent } from "@/content";

export const ContactSection: React.FC = () => {
  const { contact } = siteContent;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto as fallback so the message opens directly in their client
    const mailtoUrl = `mailto:${contact.emailValue}?subject=${encodeURIComponent(
      formData.subject || "Pesan dari Portofolio"
    )}&body=${encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )}`;

    // Set submitted state for friendly UI feedback
    setSubmitted(true);

    // Also optionally trigger mailto
    window.open(mailtoUrl, "_blank");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.emailValue);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-tech-navy-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-tech-blue-100 text-tech-blue-700 dark:bg-tech-blue-950 dark:text-tech-blue-300 border border-tech-blue-200 dark:border-tech-blue-800 tracking-wider">
            {contact.badge}
          </span>
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
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-tech-blue-50 dark:bg-tech-blue-950 text-tech-blue-600 dark:text-tech-blue-400 flex items-center justify-center shrink-0 border border-tech-blue-200/60 dark:border-tech-blue-800">
                  <Mail className="w-5 h-5" />
                </div>
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
                aria-label="Salin Alamat Email"
                className="p-2 rounded-xl bg-tech-navy-50 dark:bg-slate-800 text-tech-navy-600 dark:text-slate-300 hover:text-tech-navy-900 dark:hover:text-white transition-colors"
                title="Salin Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200/60 dark:border-emerald-800">
                <MessageSquare className="w-5 h-5" />
              </div>
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{contact.chatWhatsAppBtn}</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-tech-cyan-50 dark:bg-tech-cyan-950 text-tech-cyan-600 dark:text-tech-cyan-400 flex items-center justify-center shrink-0 border border-tech-cyan-200/60 dark:border-tech-cyan-800">
                <MapPin className="w-5 h-5" />
              </div>
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
            <div className="p-6 rounded-3xl bg-gradient-to-br from-tech-blue-600 to-tech-blue-800 text-white shadow-lg space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                  <FileDown className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base">{contact.cvCardTitle}</h4>
                  <span className="text-[11px] text-tech-blue-200 font-medium">Format PDF • Siap Cetak</span>
                </div>
              </div>
              <p className="text-xs text-tech-blue-100 leading-relaxed">
                {contact.cvCardDesc}
              </p>
              <a
                href={contact.cvPath}
                download="CV_Muhammad_Juzairi_Safitli.pdf"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-2xl bg-white text-tech-blue-700 hover:bg-tech-blue-50 text-xs font-extrabold shadow-md transition-all hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4" />
                <span>{contact.cvCardBtn}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-tech-navy-200/80 dark:border-slate-800 shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        {contact.nameLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={contact.namePlaceholder}
                        className="w-full px-4 py-2.5 rounded-2xl text-xs bg-tech-navy-50 dark:bg-slate-800 border border-tech-navy-200 dark:border-slate-700 text-tech-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-tech-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-tech-navy-700 dark:text-slate-300 mb-1.5">
                        {contact.emailLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={contact.emailPlaceholder}
                        className="w-full px-4 py-2.5 rounded-2xl text-xs bg-tech-navy-50 dark:bg-slate-800 border border-tech-navy-200 dark:border-slate-700 text-tech-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-tech-blue-500 transition-all"
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
                      className="w-full px-4 py-2.5 rounded-2xl text-xs bg-tech-navy-50 dark:bg-slate-800 border border-tech-navy-200 dark:border-slate-700 text-tech-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-tech-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-tech-navy-700 dark:text-slate-300 mb-1.5">
                      {contact.messageLabel} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={contact.messagePlaceholder}
                      className="w-full px-4 py-2.5 rounded-2xl text-xs bg-tech-navy-50 dark:bg-slate-800 border border-tech-navy-200 dark:border-slate-700 text-tech-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-tech-blue-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-gradient-to-r from-tech-blue-600 to-tech-blue-700 hover:from-tech-blue-700 hover:to-tech-blue-800 text-white text-xs font-extrabold shadow-md shadow-tech-blue-600/30 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{contact.submitBtn}</span>
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-extrabold text-xl text-tech-navy-900 dark:text-white">
                    {contact.successTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-tech-navy-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                    {contact.successMessageTemplate(formData.name, formData.email)}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-5 py-2.5 rounded-2xl bg-tech-blue-100 dark:bg-slate-800 text-tech-blue-700 dark:text-tech-blue-300 text-xs font-bold hover:bg-tech-blue-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {contact.sendAnotherBtn}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

