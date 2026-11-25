# Product Requirements Document (PRD)

**Project Name:** `portfolio-juzairi-safitli`  
**Owner:** Muhammad Juzairi Safitli, S.Kom.  
**Target Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS

---

## 1. Project Overview

- **Description:** Professional portfolio website showcasing the software engineering, native Android, web, and AI integration projects, work experience, and technical skills of Muhammad Juzairi Safitli, S.Kom.
- **Target Audience:** Technical recruiters, engineering managers, HR, and fellow software developers.
- **Localization:** Bilingual support (`en` default and `id`) managed through `LanguageProvider` (`src/components/providers/LanguageProvider.tsx`) and `src/content/{en,id}.ts`, with all code identifiers, file names, comments, and documentation written in English.
- **Couple Theme Concept:** Designed as a complementary companion to [portfolio-yulti-syaridayanti](https://portfolio-yulti-syaridayanti.vercel.app/), featuring a light-first slate/blue palette, mirrored `HeartbeatLine` flow, and a cross-portfolio link in the navbar and footer.

---

## 2. Tech Stack & Architecture

- **Framework:** Next.js 14 (App Router) with TypeScript (`strict: true`).
- **Styling & Theming:** Tailwind CSS with custom `tech` (`blue`, `navy`, `cyan`) and `partner` (`pink`) palettes (`tailwind.config.ts`), `next-themes` (`light` default with optional `dark` toggle), and lightweight CSS transitions (no `shadcn/ui` or MDX).
- **Icons:** `lucide-react`.
- **Code Quality:** ESLint (`next/core-web-vitals` in `.eslintrc.json`) and `tsc --noEmit`.
- **Deployment:** Vercel.

---

## 3. Visual & Anti-AI-Slop Standards

- **Light-Mode Default:** Clean slate background (`#F8FAFC`) with high-contrast navy text (`#0F172A`) and a single clear blue accent for primary actions.
- **Typography:** `Plus Jakarta Sans` (`--font-sans`) for body copy and `Quicksand` (`--font-heading`) for headings via `next/font/google`.
- **Anti-AI-Slop Rules:**
  - No purple gradients, gradient text, heavy `blur-3xl` glow blobs, cursor-tracking radial glows, or bouncing/pulsing animations.
  - No pills above section headlines, stat banners, decorative icon boxes, tiny ALL-CAPS labels, or emojis in navigation bars.
  - 4-point spacing grid, left-aligned section headers, direct value-driven copy, and one primary CTA per section.

---

## 4. Information Architecture & Core Flow

Single-page application (`src/app/page.tsx`) with smooth-scroll navigation:

1. **Navbar (`Navbar.tsx`):** Brand initials (`MJS`), section links, couple-portfolio link, `LanguageToggle`, `ThemeToggle`, and CV download action (`CV_Muhammad_Juzairi_Safitli.pdf`).
2. **Hero (`HeroSection.tsx`):** Name, degree (`S.Kom.`), role headline, concise bio, primary CTA (Download CV), secondary CTA (Get in Touch), GitHub/LinkedIn links, and `BlobPhotoFrame` (`/images/profile.jpg`).
3. **About (`AboutSection.tsx`):** Engineering philosophy, academic summary (Universitas Nurdin Hamzah, Best Graduate GPA `3.95/4.00`), and core competency pillars.
4. **Experience (`ExperienceSection.tsx`):** Chronological timeline covering BPS Kota Jambi, Timedoor Academy, Bangkit Academy by Google, LPTIK UNH, and Kampus Merdeka.
5. **Projects (`ProjectsSection.tsx` & `ProjectModal.tsx`):** Category-filterable project grid (`All`, `Android`, `Web`, `AI & Backend`) with interactive modal case studies (overview, architecture, challenges, solutions, impact, and repository links) powered by typed data in `src/content/`.
6. **Skills & Honors (`SkillsSection.tsx`):** Grouped technical skills and academic/professional certifications.
7. **Contact (`ContactSection.tsx`) & Footer (`Footer.tsx`):**
   - Direct contact cards (Email with safe `navigator.clipboard.writeText` copy + error handling, WhatsApp, LinkedIn, Location, and CV download).
   - Direct message composer routing directly to **WhatsApp** (`https://wa.me/...`) and **Email** (`mailto:...`) without external form backends.

---

## 5. SEO, Metadata & Coding Standards

- **SEO & Open Graph:** Configured in `src/app/layout.tsx` using `getSiteUrl()` (`NEXT_PUBLIC_SITE_URL`, `VERCEL_PROJECT_PRODUCTION_URL`, `VERCEL_URL`) and `1200x630` `/og-image.jpg`.
- **Content Separation:** All user-facing strings, modal labels, toggle aria-labels, and URLs are centralized in `src/content/en.ts` and `src/content/id.ts` (typed in `src/content/types.ts`).
- **Clean Code & DRY:** English-first naming across all identifiers, files, and data keys; no dead code, unused imports, or orphaned assets.
