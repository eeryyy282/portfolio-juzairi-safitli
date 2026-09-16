# Personal Portfolio - Muhammad Juzairi Safitli

Website portofolio personal yang bersih, cepat, dan profesional untuk menampilkan keahlian software engineering, mobile development (Android/Kotlin), integrasi AI, serta latar belakang pendidikan dan pencapaian akademik.

Dibangun dengan arsitektur modern berbasis **React + Vite**, **Tailwind CSS**, komponen bergaya **shadcn/ui**, dukungan dwibahasa **react-i18next**, dan otomatisasi deployment ke **GitHub Pages**.

---

## 🚀 Fitur Utama

- **Bilingual (EN / ID):** Pengalihan bahasa instan antara English (default) dan Bahasa Indonesia menggunakan `react-i18next` dan persistensi di `localStorage`.
- **Dark / Light Theme:** Skema warna elegan (Soft Cream untuk Light Mode, Deep Slate/Zinc `#09090b` untuk Dark Mode) dengan pencegahan FOUC (*Flash of Unstyled Content*) dan deteksi preferensi OS.
- **Modern UI Components:** Komponen modular dan terstruktur (`Button`, `Card`, `Badge`, `Avatar`) berbasis standar shadcn/ui.
- **Section Terstruktur:**
  - **Hero:** Foto profil, gelar akademik, badge lulusan terbaik & Bangkit Distinction, CTA unduh CV, dan tombol kontak email.
  - **About:** Ringkasan profesional, metrik pencapaian (IPK 3.95, kepuasan mentoring 93%), dan 4 pilar kompetensi.
  - **Experience:** Timeline riwayat karir (BPS Kota Jambi, Timedoor Academy, LPTIK Universitas Nurdin Hamzah).
  - **Projects:** Grid proyek unggulan (BAST V2, A2Bot Gemini 1.5, Virtual Class App, Valorant Agent Explorer).
  - **Education & Certifications:** Informasi sarjana Sistem Informasi dan sertifikasi profesional (Google, Bangkit, Dicoding).
  - **Contact & Footer:** Direct email link, lokasi, tautan GitHub & LinkedIn.
- **CI/CD Ready:** Workflow GitHub Actions (`.github/workflows/deploy.yml`) untuk build dan deploy otomatis ke branch `gh-pages`.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **i18n:** [react-i18next](https://react.i18next.com/)
- **Component Primitives:** [@radix-ui/react-avatar](https://www.radix-ui.com/), [@radix-ui/react-slot](https://www.radix-ui.com/)
- **Hosting:** GitHub Pages via GitHub Actions

---

## 💻 Memulai Proyek (Local Development)

### 1. Prasyarat
Pastikan Node.js (v18+) dan npm telah terpasang di komputer Anda:
```bash
node -v
npm -v
```

### 2. Menjalankan Development Server
```bash
npm run dev
```
Buka browser pada URL lokal yang ditampilkan di terminal (biasanya `http://localhost:5173`).

### 3. Membangun Proyek (Production Build)
```bash
npm run build
```
Hasil build statis akan disimpan di folder `dist/`. Anda dapat mengujinya secara lokal dengan:
```bash
npm run preview
```

---

## 📂 Struktur Direktori

```
portfolio-juzairi-safitli/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow untuk GitHub Pages
├── public/
│   ├── assets/
│   │   └── cv-muhammad-juzairi-safitli.pdf   # File CV untuk download
│   └── favicon.svg             # Favicon monogram S.
├── src/
│   ├── components/
│   │   ├── sections/           # Bagian-bagian halaman portofolio
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                 # Komponen UI dasar (shadcn/ui style)
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── language-toggle.tsx # Tombol toggle EN | ID
│   │   ├── theme-provider.tsx  # Context provider Dark/Light mode
│   │   └── theme-toggle.tsx    # Tombol toggle Sun/Moon
│   ├── i18n/
│   │   ├── locales/
│   │   │   ├── en.json         # Konten Bahasa Inggris
│   │   │   └── id.json         # Konten Bahasa Indonesia
│   │   └── index.ts            # Konfigurasi i18next
│   ├── lib/
│   │   └── utils.ts            # Helper function cn()
│   ├── App.tsx
│   ├── index.css               # Definisi Tailwind & CSS Variables
│   └── main.tsx
├── PRD.md
├── README.md
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🌐 Deploy ke GitHub Pages

1. Buat repository di GitHub dengan nama misalnya `portfolio-juzairi-safitli`.
2. Hubungkan remote repository lokal ke GitHub:
   ```bash
   git add .
   git commit -m "feat: initial portfolio project setup"
   git remote add origin https://github.com/<username>/portfolio-juzairi-safitli.git
   git push -u origin main
   ```
3. Di pengaturan repository GitHub:
   - Masuk ke menu **Settings** > **Pages**.
   - Pada bagian **Build and deployment**, pilih Source: **Deploy from a branch** dan pilih branch **`gh-pages`** (folder `/root`).
4. GitHub Actions akan secara otomatis menjalankan workflow deployment setiap kali ada commit baru di branch `main`.

---

## 📝 Kustomisasi Profil

- **Foto Profil:** Simpan foto Anda di `public/assets/profile.jpg` (akan otomatis ditampilkan di Hero section).
- **File CV:** Simpan file CV terbaru Anda di `public/assets/cv-muhammad-juzairi-safitli.pdf`.
- **Tautan Media Sosial:** Perbarui URL profil LinkedIn dan GitHub Anda di `src/components/sections/Hero.tsx`, `Contact.tsx`, dan `Footer.tsx`.

