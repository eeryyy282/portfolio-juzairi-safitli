# Product Requirements Document (PRD)

**Project Name:** portfolio-juzairi-safitli

## 1. Project Overview

* **Description:** Website portofolio profesional untuk menampilkan profil, pengalaman, rekam jejak proyek, dan keahlian teknis dari seorang Software Engineer & Game Developer.

* **Target Audience:** Perekrut teknis, HR, dan sesama profesional IT.

* **Core Concept (Couple Theme):** Website dirancang berpasangan (couple) dengan portofolio Yulti Syaridayanti (Referensi: [GitHub - portfolio-yulti-syaridayanti](https://github.com/eeryyy282/portfolio-yulti-syaridayanti)). Menggunakan struktur tata letak dan tingkat kecerahan yang identik (Light Mode), namun dengan palet warna teknis (Putih-Biru) yang komplementer dengan warna Putih-Pink pada portofolio Yulti, dilengkapi dengan elemen interaktif silang.

## 2. Design System & UI Architecture

* **Color Palette (Light Tech Theme Default):**

  * **Background Default:** Putih atau abu-abu sangat terang (Slate-50) agar sejajar dan *couple* dengan latar belakang putih pada portofolio Yulti. Fitur Dark Mode tetap tersedia sebagai opsi.

  * **Primary Accent:** Navy Blue (mencerminkan profesionalisme dan teknis) untuk teks utama, border, dan tombol.

  * **Secondary Accent:** Azure atau Cyan untuk efek *hover*, tautan, dan *micro-interactions*.

* **Typography:** Inter atau Geist.

* **UI Framework & Components:**

  * Tailwind CSS untuk *utility-first styling*.

  * Shadcn/UI untuk komponen antarmuka modular (Card, Tabs, Button).

  * Magic UI / Aceternity UI untuk *micro-interactions* (seperti efek *Shine Border* atau *Magic Card* pada kartu proyek agar terlihat premium).

  * Navigasi: Menggunakan *Floating Navbar* bergaya *dock* (opsional melayang di bawah/atas) untuk memaksimalkan ruang baca konten.

* **Couple Theme Execution:**

  * **Shared Components:** Menggunakan kembali aset komponen `HeartbeatLine.tsx` dan `BlobPhotoFrame.tsx` yang ada pada repositori portofolio Yulti ([Lihat Repositori](https://github.com/eeryyy282/portfolio-yulti-syaridayanti)) untuk menjaga konsistensi gaya visual.

  * **Mirrored Animation:** Membalik arah animasi detak jantung pada komponen `HeartbeatLine.tsx` agar seolah-olah mengalir menuju website pasangan saat kedua website dibuka.

  * **Easter Egg Link:** Penempatan ikon minimalis dengan aksen warna Pink (inisial "Y" atau ikon hati/link) di sudut navigasi atau *footer* sebagai tautan langsung menuju portofolio Yulti.

## 3. Content Structure & Features

Seluruh teks statis dipisahkan ke dalam folder konfigurasi statis (seperti `src/content/id.ts`) untuk mematuhi aturan lokalisasi dan memudahkan pembaruan konten.

* **Hero Section:** Nama (Muhammad Juzairi Safitli), *tagline* profesional, *highlight* pencapaian akademik (Lulusan Terbaik & Distinction Graduate), tombol unduh CV, dan tautan sosial.

* **About Section:** Narasi ringkas mengenai etos kerja, kedisiplinan, kemampuan belajar cepat, dan antusiasme dalam tim teknologi.

* **Experience Section:** Garis waktu (*timeline*) rekam jejak pekerjaan (BPS Kota Jambi, Timedoor Academy, LPTIK, Kampus Merdeka).

* **Projects Section (Tabbable):**

  * Menggunakan sistem *Tabs* untuk kategorisasi proyek: "All", "Android", "Web", dan "AI & Backend".

  * **Case Study (MDX):** Mendukung navigasi ke halaman detail proyek berbasis MDX untuk menjelaskan arsitektur, tantangan teknis, dan *tech stack* mendalam (sangat direkomendasikan untuk *Tech Recruiter*).

* **Skills Section:** Visualisasi *tech stack* teknis (Kotlin, Node.js, Android Native, Clean Architecture, Web, Google Gemini AI, CI/CD).

* **Contact Section:** Formulir kontak fungsional yang diintegrasikan dengan layanan pihak ketiga (seperti Resend/React Email atau Formspree/EmailJS) agar pesan langsung terkirim ke email pribadi.

## 4. Technical Specifications & Stack

* **Framework:** Next.js (App Router).

* **Language:** TypeScript.

* **Styling:** PostCSS & Tailwind CSS dengan dukungan `next-themes` untuk manajemen tema (Light/Dark).

* **Code Quality:** ESLint (`next/core-web-vitals`) dan Prettier.

* **Deployment & Analytics:** Vercel (Continuous Deployment), dilengkapi Vercel Analytics & Speed Insights untuk pelacakan performa dan kunjungan tanpa membebani *load* website.

## 5. Coding Standards & Repository Management

* **Clean Code & DRY:** Abstraksi logika dan komponen UI yang berulang.

* **English-First Naming:** Penamaan variabel, fungsi, direktori, dan pesan komit wajib menggunakan bahasa Inggris secara mutlak.

* **No Dead Code:** Penghapusan penuh pada kode yang tidak lagi terpakai saat *refactoring* (jangan di-*comment out*).

* **Komentar Efisien:** Komentar hanya ditulis untuk menjelaskan alasan (*why*) dari sebuah logika kompleks atau algoritma spesifik.

* **Version Control:** Pelacakan penuh menggunakan Git dan GitHub dengan standar *commit message* (contoh: `feat: add hero section`).

## 6. Visibility & Accessibility

* **SEO & Open Graph:** Injeksi *Meta Tags* dinamis dan penyediaan aset `og-image` statis (`og-image.jpg`/`png`) untuk pratinjau tautan yang profesional saat dibagikan.

* **Responsivitas Penuh:** Pendekatan *mobile-first design* untuk memastikan tata letak berjalan sempurna dan responsif di semua perangkat (Desktop, Tablet, Mobile).