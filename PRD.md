# Product Requirements Document (PRD): Personal Portfolio Website

## 1. Project Overview
**Project Name:** Muhammad Juzairi Safitli - Personal Portfolio
**Objective:** Build a clean, professional, and highly performant personal portfolio website to showcase software engineering expertise, educational achievements, and a strong project portfolio. 
**Hosting Target:** GitHub Pages (Static Site).

## 2. Technical Stack
* **Frontend Framework:** React via Vite. (Vite is chosen for fast build times, alignment with previous full-stack experience, and straightforward static exporting for GitHub Pages).
* **UI/Styling:** Tailwind CSS + **shadcn/ui**. This ensures accessible, customizable, and clean components without the bloat of traditional component libraries.
* **State & Theming:** Tailwind's `dark:` modifier with a theme provider for persistent Light/Dark mode state. 
* **Internationalization (i18n):** `react-i18next` for seamless client-side switching between English (Primary) and Bahasa Indonesia (Secondary).
* **Deployment:** GitHub Actions deploying a static export to the `gh-pages` branch.

## 3. Core Features & Functional Requirements

### 3.1. Internationalization (Bilingual Support)
* **Default Language:** English (EN).
* **Secondary Language:** Bahasa Indonesia (ID).
* **Mechanism:** A visible, intuitive toggle button (e.g., "EN | ID") in the navigation bar. All static text, project descriptions, and bio details must be mapped to translation JSON files to maintain clean code and avoid hardcoded text.

### 3.2. Theme Toggle (Dark/Light Mode)
* **Mechanism:** A sun/moon icon toggle in the navigation bar using shadcn/ui button components.
* **Behavior:** Detects and respects the user's system preference on initial load. Manual overrides are saved to local storage to persist across sessions.
* **Design Implementation:** Utilizing shadcn/ui's native support for CSS variables to ensure colors map flawlessly between light and dark modes.

### 3.3. Navigation & Layout
* Fixed or sticky top navigation bar containing:
  * Brand/Logo text (e.g., "Safitli.").
  * Section Links: Experience, Projects, Education.
  * Right-aligned utility group: Theme Toggle and Language Toggle.

### 3.4. Content Strategy (Mapped from CV)

#### A. Hero Section
* **Profile Picture:** Professional, high-quality headshot. Implemented using the shadcn `Avatar` component for a clean, perfectly rounded frame without excessive styling.
* **Headline:** "Muhammad Juzairi Safitli"
* **Sub-headline:** "Software Engineer & Mobile Developer"
* **Badges:** Highlighting "Best Graduate of Information Systems" and "Bangkit Academy Distinction Graduate" using subtle shadcn `Badge` elements.
* **Call-to-Action (CTA):** 
  * Primary: "Download CV" (Direct link to the PDF).
  * Secondary: "Contact Me" (Mailto link to airiagustus82@gmail.com).
* **Social Links:** Minimalist icons for LinkedIn and GitHub.

#### B. About / Summary
* A concise, humanized introduction. Strictly avoiding "AI Slop" copy. The focus is direct: highlighting the combination of academic excellence, practical Android/Kotlin expertise, AI integration skills, and a disciplined approach to problem-solving.

#### C. Work Experience (Timeline or Minimalist Cards)
* **BPS Kota Jambi (Aug 2026 - Present):** IT Intern / Asisten Pranata Komputer. Focus on IT infrastructure support and system documentation.
* **Timedoor Academy (Sep 2024 - Sep 2025):** Teacher. Focus on the 93% satisfaction rate and mentorship of 20+ students in programming logic.
* **LPTIK Univ. Nurdin Hamzah (Aug - Oct 2023):** Laboratory Assistant. Focus on zero-downtime infrastructure management.

#### D. Projects (Grid Layout)
* Displayed using shadcn `Card` components for a structured, uniform grid. Each card includes the title, a brief objective description, tech stack badges, and a GitHub repository link icon.
* **Featured Projects:**
  1. **BAST V2:** Full-stack Web App (Vite, Node.js) automating Excel to Word generation.
  2. **Double A Calorie (A2Bot):** AI WhatsApp Bot integrating Google Gemini 1.5.
  3. **Virtual Class App:** Native Android (Kotlin, MVVM, Room) with real-time attendance.
  4. **Valorant Agent:** Modular Android App using Clean Architecture and CI/CD.

#### E. Education & Certifications
* **Universitas Nurdin Hamzah:** Bachelor of Information Systems (GPA 3.95, Best Graduate).
* **Bangkit Academy:** Mobile Development Cohort (Distinction Graduate).
* **Certifications:** Google Android Developer Expert, Machine Learning for Android, English for Business Communication.

#### F. Footer
* Minimalist dividing line, copyright notice, and repeated social links.

## 4. UI/UX & Design Guidelines
* **Design Philosophy:** Clean, minimalist, and typography-driven. No cluttered animations or unnecessary visual noise. Professionalism is prioritized over flashiness.
* **Typography:** Sans-serif fonts optimized for readability (e.g., Inter, Geist, or Roboto).
* **Color Palette:** 
  * *Light Mode:* Soft cream/off-white background, deep charcoal text, subtle silver borders.
  * *Dark Mode:* Deep Zinc/Slate background (e.g., `#09090b`), warm off-white text, muted silver borders.
  * *Accent Color:* A sophisticated Silver or Cream (Krem) scheme to convey an elegant, clean, and highly professional aesthetic.
* **Component Styling:** Use shadcn defaults with slight border-radius adjustments (`radius: 0.5rem`). Avoid heavy drop shadows to maintain the elegant, flat look.

## 5. Deployment Strategy (GitHub Pages)
1. **Routing Strategy:** The architecture will rely entirely on smooth anchor-link scrolling (one-page portfolio). This ensures a seamless, uninterrupted user experience and avoids the complexities of SPA routing on GitHub Pages.
2. **Configuration:** Set the `base` path in `vite.config.js` to match the repository name (e.g., `/portfolio-safitli/`).
3. **CI/CD Pipeline:** Create a GitHub Actions workflow (`.github/workflows/deploy.yml`) to automatically run `npm run build` and deploy the output to the `gh-pages` branch whenever code is pushed to `main`. This guarantees a "praktis tanpa ribet" deployment flow.