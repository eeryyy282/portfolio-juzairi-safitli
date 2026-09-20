import { PortfolioContent } from "./types";

export const siteContent: PortfolioContent = {
  metadata: {
    title: "Muhammad Juzairi Safitli, S.Kom. | Software Engineer & Game Developer",
    description:
      "Website portofolio profesional Muhammad Juzairi Safitli, S.Kom. - Software Engineer & Game Developer, Lulusan Terbaik Universitas Nurdin Hamzah (IPK 3.95) & Distinction Graduate Bangkit Academy by Google.",
    keywords: [
      "Muhammad Juzairi Safitli",
      "Software Engineer",
      "Game Developer",
      "Android Developer",
      "Kotlin",
      "Jetpack Compose",
      "Next.js",
      "Google Gemini AI",
      "Bangkit Academy Distinction",
      "Portofolio Juzairi",
    ],
    ogTitle: "Muhammad Juzairi Safitli, S.Kom. | Software Engineer Portfolio",
    ogDescription:
      "Lihat rekam jejak, proyek rekayasa perangkat lunak, dan keahlian teknis Muhammad Juzairi Safitli.",
  },
  navbar: {
    brandName: "Muhammad Juzairi Safitli",
    brandDegree: "S.Kom.",
    brandRole: "Software Engineer",
    downloadCvBtn: "Unduh CV",
    partnerTooltip: "Kunjungi Portofolio Yulti Syaridayanti 💖",
    partnerUrl: "https://portfolio-yulti-syaridayanti.vercel.app/",
    navItems: [
      { id: "hero", label: "Beranda", href: "#hero" },
      { id: "about", label: "Tentang", href: "#about" },
      { id: "experience", label: "Pengalaman", href: "#experience" },
      { id: "projects", label: "Proyek", href: "#projects" },
      { id: "skills", label: "Keahlian", href: "#skills" },
      { id: "contact", label: "Kontak", href: "#contact" },
    ],
  },
  hero: {
    greetingBadge: "👋 Halo! Selamat Datang di Portofolio Saya",
    fullName: "Muhammad Juzairi Safitli",
    degree: "S.Kom.",
    headline: "Software Engineer & Game Developer",
    bio: "Lulusan Terbaik Sistem Informasi Universitas Nurdin Hamzah (IPK 3.95) dan Distinction Graduate Bangkit Academy by Google. Saya antusias membangun aplikasi Android, mengintegrasikan AI seperti Google Gemini, dan mengembangkan web modern yang andal dan fungsional.",
    badges: {
      cumlaude: "Wisudawan Terbaik (IPK 3.95)",
      distinction: "Distinction Graduate (Bangkit by Google)",
      role: "IT Intern BPS Kota Jambi",
    },
    downloadCvBtn: "Unduh CV Lengkap",
    contactBtn: "Hubungi Saya",
    explorePrompt: "Lihat Pengalaman & Proyek",
  },
  about: {
    badge: "TENTANG SAYA",
    title: "Membangun Solusi Digital yang Bersih dan Praktis",
    subtitle:
      "Fokus pada penulisan kode yang rapi, cepat belajar teknologi baru, dan senang bekerja sama dalam tim.",
    bioNarrative:
      "Sebagai seorang Software Engineer dan Game Developer, saya selalu tertarik untuk memecahkan masalah melalui baris kode. Saat ini, saya bekerja sebagai IT Intern (Asisten Pranata Komputer) di Badan Pusat Statistik (BPS) Kota Jambi, di mana saya banyak membantu mengelola data statistik dan membuat sistem administrasi menjadi lebih otomatis.",
    approachNarrative:
      "Selain menulis kode dengan pendekatan Clean Architecture, saya juga punya pengalaman mengelola lab komputer dan mengajar pemrograman. Saya sangat suka mengeksplorasi AI untuk membuat aplikasi yang tidak hanya kuat secara teknis, tapi juga benar-benar mempermudah pekerjaan penggunanya.",
    educationSummary: {
      institution: "Universitas Nurdin Hamzah",
      degree: "Sarjana Sistem Informasi (S.Kom.)",
      predicate: "Wisudawan Terbaik (Best Graduate)",
      gpa: "3.95 / 4.00",
      focusHighlight:
        "Fokus pada rekayasa perangkat lunak dan manajemen basis data. Sering berkolaborasi langsung dengan dosen untuk proyek digitalisasi kampus.",
    },
    stats: [
      {
        value: "3.95",
        label: "IPK Kelulusan (Skala 4.00)",
        note: "Wisudawan Terbaik UNH",
      },
      {
        value: "Top Tier",
        label: "Distinction Graduate",
        note: "Bangkit Academy by Google",
      },
      {
        value: "20+",
        label: "Siswa Terbimbing",
        note: "Tingkat kepuasan pengajaran 93%",
      },
      {
        value: "4+",
        label: "Proyek Utama Selesai",
        note: "Android, Web & Sistem AI",
      },
    ],
    pillars: [
      {
        title: "Clean Architecture",
        desc: "Menerapkan struktur kode yang modular, minim ketergantungan, dan mudah dirawat atau dikembangkan ke depannya.",
        tag: "Software Engineering",
        iconName: "Layers",
      },
      {
        title: "Native Android",
        desc: "Fokus pada ekosistem Kotlin, Jetpack Compose, Coroutines/Flow, Room DB, serta manajemen dependensi seperti Koin.",
        tag: "Mobile Development",
        iconName: "Smartphone",
      },
      {
        title: "AI & Automation",
        desc: "Memanfaatkan model AI seperti Google Gemini 1.5 Flash untuk membuat sistem otomatisasi yang interaktif dan solutif.",
        tag: "AI & Backend",
        iconName: "Cpu",
      },
      {
        title: "Mentorship",
        desc: "Punya pengalaman mengajar logika pemrograman dasar dan memastikan operasional lab komputer berjalan lancar.",
        tag: "Communication",
        iconName: "Users",
      },
    ],
  },
  experience: {
    badge: "PENGALAMAN KERJA",
    title: "Rekam Jejak & Pekerjaan",
    subtitle:
      "Pengalaman saya di instansi pemerintahan, akademi teknologi, laboratorium kampus, dan program sertifikasi nasional.",
    items: [
      {
        id: "bps-jambi",
        role: "IT Intern - Asisten Pranata Komputer",
        organization: "Badan Pusat Statistik Kota Jambi",
        location: "Jambi, Indonesia",
        period: "Agu 2026 - Sekarang",
        badge: "Posisi Saat Ini",
        highlights: [
          "Membantu infrastruktur IT dan pemrosesan data untuk memastikan pengelolaan data statistik kota berjalan lancar.",
          "Menangani kendala hardware/software serta menyusun dokumentasi teknis sistem di kantor.",
          "Membuat aplikasi web BAST V2 untuk mengotomatisasi pembuatan dokumen Berita Acara Serah Terima dan kontrak kerja mitra statistik.",
        ],
        tags: ["Data Systems", "Fullstack Web", "Express.js", "Vite", "IT Infrastructure"],
      },
      {
        id: "timedoor-academy",
        role: "Teacher",
        organization: "Timedoor Academy",
        location: "Jambi, Indonesia",
        period: "Sep 2024 - Sep 2025",
        badge: "Pendidikan Teknologi",
        highlights: [
          "Mengajar logika pemrograman menggunakan Roblox Studio (Lua), Construct 3, dan Python dengan sistem belajar berbasis proyek.",
          "Membimbing lebih dari 20 siswa sampai mereka bisa membuat proyek software dan game mandiri.",
          "Membantu meningkatkan literasi digital anak-anak dengan respons kepuasan mencapai 93% dari siswa dan orang tua.",
        ],
        tags: ["Python", "Roblox Studio", "Construct 3", "Project-Based Learning", "Mentoring"],
      },
      {
        id: "bangkit-academy",
        role: "Mobile Development Cohort (Distinction Graduate)",
        organization: "Bangkit Academy by Google, GoTo, Traveloka",
        location: "Remote",
        period: "Feb - Jul 2024",
        badge: "Prestasi Tertinggi (Distinction)",
        highlights: [
          "Lulus dengan predikat Distinction, masuk dalam kelompok Top Tier dari ribuan peserta di seluruh Indonesia.",
          "Mempelajari pengembangan Android lanjutan mulai dari Kotlin, Jetpack Compose, Clean Architecture, hingga Dependency Injection.",
          "Melatih skill manajemen waktu, komunikasi profesional, dan kepemimpinan dalam tim proyek software.",
        ],
        tags: ["Android Native", "Kotlin", "Jetpack Compose", "Clean Architecture", "Google Certified"],
      },
      {
        id: "lptik-unh",
        role: "Laboratory Assistant",
        organization: "Lembaga Pengembangan Teknologi Informasi dan Komunikasi (LPTIK) UNH",
        location: "Jambi, Indonesia",
        period: "Agu - Okt 2023",
        badge: "Infrastruktur & Jaringan",
        highlights: [
          "Merawat hardware dan jaringan di seluruh laboratorium komputer kampus agar perkuliahan berjalan lancar tanpa hambatan teknis.",
          "Mendampingi dosen saat sesi praktikum dan memastikan tata tertib serta keamanan lab tetap terjaga.",
        ],
        tags: ["Network Maintenance", "Hardware Troubleshooting", "Lab Management", "Academic Collaboration"],
      },
      {
        id: "kampus-merdeka",
        role: "Teacher & Educator Participant",
        organization: "Kampus Merdeka",
        location: "Jambi, Indonesia",
        period: "Feb - Jun 2023",
        badge: "Pengabdian Masyarakat",
        highlights: [
          "Berkolaborasi dengan para guru untuk memasukkan unsur teknologi ke dalam kurikulum belajar mengajar di sekolah.",
          "Membantu mendesain ulang tata ruang perpustakaan menjadi lebih interaktif dan mendigitalisasi papan informasi sekolah.",
          "Belajar tentang dasar pedagogi, psikologi anak, dan cara menerapkan Kurikulum Merdeka di lapangan.",
        ],
        tags: ["Digital Literacy", "Pedagogy", "Curriculum Integration", "Educational Tech"],
      },
    ],
  },
  projects: {
    badge: "PORTFOLIO PROYEK",
    title: "Karya & Studi Kasus",
    subtitle:
      "Beberapa proyek andalan saya, mulai dari aplikasi Android, sistem web, sampai asisten chat berbasis AI.",
    categories: ["Semua", "Android", "Web", "AI & Backend"],
    caseStudyBtn: "Lihat Studi Kasus",
    sourceCodeBtn: "Kode Sumber GitHub",
    items: [
      {
        id: "bast-v2",
        title: "BAST V2 (Badan Pusat Statistik Kota Jambi)",
        role: "Fullstack Web Developer",
        period: "Agu 2026",
        location: "Jambi, Indonesia",
        category: "Web",
        description:
          "Aplikasi web untuk mengotomatisasi pembuatan Berita Acara Serah Terima (BAST) dan kontrak mitra statistik di BPS Kota Jambi.",
        highlights: [
          "Mengubah proses manual menjadi otomatis dengan membaca data Excel dan mengubahnya jadi ratusan dokumen Word.",
          "Dokumen langsung dikemas dalam format ZIP yang siap cetak dan ditandatangani hanya dalam hitungan detik.",
          "Menggunakan antarmuka modern yang warnanya disesuaikan dengan identitas BPS (Navy Blue).",
        ],
        tags: ["Vite", "Node.js", "Express.js", "Docx Automation", "JSZip", "Tailwind CSS"],
        githubUrl: "https://github.com/eeryyy282",
        caseStudy: {
          overview:
            "Setiap periode sensus, BPS Kota Jambi perlu menerbitkan BAST dan kontrak kerja untuk ratusan mitra statistik. Awalnya, proses pembuatan dokumen ini dikerjakan satu per satu secara manual, yang memakan waktu berhari-hari dan rawan salah ketik nama atau data mitra.",
          architecture: [
            "Frontend: SPA menggunakan Vite dan Tailwind CSS untuk form input, pemetaan kolom, dan pratinjau data.",
            "Backend: REST API dengan Node.js & Express.js yang bertugas membaca file spreadsheet Excel (XLSX).",
            "Templating Engine: Memakai docx-templater untuk memasukkan data mitra ke dalam template dokumen resmi BPS.",
            "Compression: Mengemas ratusan dokumen jadi satu file ZIP menggunakan JSZip agar gampang diunduh.",
          ],
          challenges: [
            "Format data Excel yang sering berbeda-beda dari setiap divisi survei.",
            "Memproses banyak dokumen sekaligus di server tanpa membuat Node.js kehabisan memori (memory leak).",
          ],
          solutions: [
            "Membuat validasi skema data (schema validation) sebelum Excel mulai diproses.",
            "Menerapkan sistem streaming buffer dan membersihkan cache secara otomatis untuk menjaga server tetap stabil.",
          ],
          impact:
            "Proses pembuatan dokumen yang awalnya butuh waktu berhari-hari kini bisa selesai kurang dari 1 menit untuk ratusan orang mitra, formatnya juga jadi jauh lebih rapi dan akurat.",
        },
      },
      {
        id: "double-a-calorie",
        title: "Double A Calorie (A2Bot)",
        role: "AI Engineer & Backend Developer",
        period: "Des 2025",
        location: "Jambi, Indonesia",
        category: "AI & Backend",
        description:
          "Bot WhatsApp pintar bertenaga Google Gemini 1.5 Flash untuk membantu mencatat kalori harian hanya dengan mengirim pesan chat biasa.",
        highlights: [
          "Terintegrasi dengan AI Google Gemini untuk mengenali nama makanan dan memperkirakan jumlah kalorinya.",
          "Bisa digunakan di obrolan pribadi maupun di dalam grup WhatsApp.",
          "Memakai penyimpanan lokal berformat JSON yang ringan tanpa butuh server database yang mahal.",
        ],
        tags: ["Google Gemini AI", "Node.js", "Baileys WhatsApp API", "JSON DB", "Dotenv"],
        githubUrl: "https://github.com/eeryyy282",
        caseStudy: {
          overview:
            "A2Bot saya buat agar orang-orang lebih mudah mencatat asupan kalori mereka tanpa harus repot menginstal atau membuka aplikasi fitness khusus. Pengguna cukup nge-chat bot di WhatsApp tentang apa yang baru saja mereka makan.",
          architecture: [
            "WhatsApp Client: Pakai library Baileys agar koneksi WhatsApp berjalan lancar dan responsif.",
            "AI Inference Engine: Menggunakan Google Gemini 1.5 Flash untuk memahami bahasa santai pengguna (NLP) dan menebak kalori berdasarkan porsi.",
            "Data Layer: Database JSON sederhana untuk menyimpan ID pengguna, target kalori harian, dan riwayat makan mereka.",
          ],
          challenges: [
            "Orang sering menggunakan bahasa gaul atau singkatan saat menyebut nama makanan Indonesia.",
            "Mencegah bot error saat banyak pengguna mengirim pesan bersamaan di dalam grup.",
          ],
          solutions: [
            "Melatih AI (prompt engineering) agar lebih mengerti konteks makanan lokal dan cara orang Indonesia mengetik pesan.",
            "Membuat sistem antrean pesan (message queue) sederhana agar database tidak rusak karena ditimpa banyak data sekaligus.",
          ],
          impact:
            "Membuat gaya hidup sehat dan pelacakan kalori jadi jauh lebih praktis karena langsung terintegrasi di aplikasi chat yang dibuka setiap hari.",
        },
      },
      {
        id: "virtual-class-app",
        title: "Virtual Class Android App",
        role: "Native Android Developer (Tugas Akhir)",
        period: "Mei 2025",
        location: "Jambi, Indonesia",
        category: "Android",
        description:
          "Aplikasi belajar jarak jauh untuk mahasiswa dan dosen UNH. Sudah dilengkapi mode offline, absen otomatis, dan manajemen pengumpulan tugas.",
        highlights: [
          "Dikembangkan dengan pola MVVM dan Dependency Injection Koin yang modular.",
          "Bisa berjalan offline menggunakan Room Database yang disinkronkan otomatis lewat Coroutines & Flow.",
          "Berpindah antar layar dengan mulus berkat Jetpack Navigation.",
        ],
        tags: ["Kotlin", "Android Native", "MVVM", "Koin", "Coroutines & Flow", "Room DB", "Jetpack Navigation"],
        githubUrl: "https://github.com/eeryyy282",
        caseStudy: {
          overview:
            "Aplikasi ini adalah proyek Tugas Akhir saya, dirancang khusus untuk membantu mahasiswa Universitas Nurdin Hamzah yang sering terkendala sinyal internet tidak stabil saat mengikuti kelas online.",
          architecture: [
            "Presentation Layer: Menggunakan ViewModel dan StateFlow agar tampilan layar bisa update otomatis.",
            "Domain Layer: Memisahkan aturan absensi dan tugas dalam Use Cases mandiri.",
            "Data Layer: Menggunakan sistem cache lokal (Room) agar mahasiswa tetap bisa melihat data aplikasi walau internet mati.",
            "Dependency Injection: Mengandalkan Koin karena pengaturannya lebih ringkas.",
          ],
          challenges: [
            "Mencegah mahasiswa memalsukan absen saat aplikasi dalam mode offline.",
            "Menyinkronkan data tugas yang menumpuk saat koneksi internet mahasiswa kembali aktif.",
          ],
          solutions: [
            "Menyimpan waktu absen (timestamp) yang sudah dicek ulang dengan waktu server, lalu mengenkripsinya.",
            "Memakai Android WorkManager untuk menyinkronkan data di belakang layar secara bertahap saat sinyal stabil.",
          ],
          impact:
            "Aplikasi ini membantu saya meraih nilai A dan predikat Tugas Akhir Terbaik, sekaligus mengantarkan saya menjadi Wisudawan Terbaik di kampus.",
        },
      },
      {
        id: "valorant-agent-android",
        title: "Valorant Agent Android",
        role: "Android Engineer (Course Submission)",
        period: "Sep 2024",
        location: "Remote",
        category: "Android",
        description:
          "Aplikasi Android yang memuat panduan taktik dan ensiklopedia agen Valorant, dibuat dengan standar keamanan dan arsitektur kelas industri.",
        highlights: [
          "Menerapkan Clean Architecture penuh untuk memisahkan fitur dan mempermudah update.",
          "Dilengkapi integrasi MapBox untuk peta taktis, animasi Lottie, dan sistem laporan error Firebase Crashlytics.",
          "Punya sistem CI/CD otomatis untuk testing dan compile file APK setiap kali ada pembaruan kode.",
        ],
        tags: ["Clean Architecture", "Kotlin", "Coroutines Flow", "Dagger/Koin", "MapBox", "Lottie", "Firebase Crashlytics", "CI/CD"],
        githubUrl: "https://github.com/eeryyy282",
        caseStudy: {
          overview:
            "Aplikasi ini pada dasarnya adalah ensiklopedia game Valorant, tapi saya rancang seserius mungkin untuk membuktikan pemahaman saya tentang standar pengembangan aplikasi Android skala besar.",
          architecture: [
            "Modular Clean Architecture: Memecah kode jadi beberapa modul (Dynamic Feature Modules) agar waktu loading dan build lebih cepat.",
            "Reactive Data Stream: Menggunakan Kotlin Flow agar pengambilan data lebih responsif dan mulus.",
            "Monitoring: Mengawasi performa dan log error pengguna pakai Firebase Crashlytics.",
            "DevOps: Mengotomatisasi testing dan rilis APK lewat GitHub Actions.",
          ],
          challenges: [
            "Menampilkan banyak aset gambar resolusi tinggi dan animasi tanpa membuat HP pengguna kentang menjadi lag.",
            "Menghemat kuota internet pengguna saat aplikasi mengambil data agen dari server.",
          ],
          solutions: [
            "Mengoptimalkan animasi Lottie dan memakai sistem lazy loading (gambar hanya dimuat saat di-scroll).",
            "Menambahkan sistem cache HTTP dan database Room agar data tidak di-download berulang kali.",
          ],
          impact:
            "Proyek ini mendapat nilai sempurna di program Bangkit Academy by Google dan sekarang sering saya jadikan referensi portofolio untuk arsitektur kode Android yang bersih.",
        },
      },
    ],
  },
  skills: {
    badge: "KEAHLIAN TEKNIS",
    title: "Teknologi & Spesialisasi",
    subtitle:
      "Berbagai bahasa pemrograman, framework, dan alat yang biasa saya gunakan untuk mendevelop sistem.",
    categories: [
      {
        title: "Bahasa Pemrograman",
        iconName: "Code2",
        skills: ["Kotlin", "TypeScript", "JavaScript", "SQL", "Python", "Pascal", "HTML5 & CSS3"],
      },
      {
        title: "Rekayasa Mobile Android",
        iconName: "Smartphone",
        skills: [
          "Android Native (Kotlin)",
          "Jetpack Compose",
          "Clean Architecture",
          "MVVM Architecture",
          "Coroutines & Flow",
          "Koin & Dagger",
          "Room Database",
          "Jetpack Navigation",
        ],
      },
      {
        title: "Web, AI & Backend",
        iconName: "Server",
        skills: [
          "Next.js (App Router)",
          "React.js",
          "Node.js & Express.js",
          "Vite",
          "Google Gemini 1.5 Flash AI",
          "WhatsApp API (Baileys)",
          "RESTful APIs",
          "Tailwind CSS",
        ],
      },
      {
        title: "Tools, DevOps & Infrastruktur",
        iconName: "Wrench",
        skills: [
          "Git & GitHub",
          "Android Studio",
          "Firebase (Crashlytics, Auth)",
          "CI/CD Pipelines (GitHub Actions)",
          "Postman",
          "Linux & Terminal",
          "Vercel Deployment",
        ],
      },
      {
        title: "Soft Skills & Metodologi",
        iconName: "BrainCircuit",
        skills: [
          "Adaptive Learning",
          "Critical Thinking",
          "Public Speaking & Teaching",
          "Project Management",
          "Problem Solving",
          "Agile / Scrum Collaboration",
        ],
      },
    ],
    awardsHeaderBadge: "SERTIFIKASI & PENGHARGAAN",
    awardsHeaderTitle: "Pencapaian Akademik",
    awards: [
      {
        title: "Wisudawan Terbaik (Best Graduate)",
        category: "Penghargaan Akademik Universitas",
        description: "Meraih predikat Lulusan Terbaik Sistem Informasi di Universitas Nurdin Hamzah dengan IPK akhir 3.95.",
        iconName: "Trophy",
        year: "Des 2025",
      },
      {
        title: "Distinction Graduate - Mobile Development",
        category: "Google, GoTo, Traveloka (Bangkit Academy)",
        description: "Masuk dalam kelompok lulusan terbaik (Top Tier) di program inkubasi talenta digital Bangkit Academy.",
        iconName: "Award",
        year: "Jul 2024",
      },
      {
        title: "Google: Android Developer Expert",
        category: "Sertifikasi Kompetensi Teknis",
        description: "Sertifikat resmi dari Google untuk keahlian mengembangkan aplikasi Android dengan Kotlin.",
        iconName: "CheckCircle",
        year: "2024",
      },
      {
        title: "Google: Machine Learning for Android",
        category: "Sertifikasi Kompetensi AI Mobile",
        description: "Sertifikat kemampuan mengimplementasikan model machine learning di dalam aplikasi Android.",
        iconName: "Cpu",
        year: "2024",
      },
      {
        title: "English for Business Communication",
        category: "Komunikasi Profesional",
        description: "Sertifikasi bahasa Inggris untuk keperluan presentasi dan komunikasi profesional di lingkungan kerja.",
        iconName: "Globe",
        year: "2024",
      },
    ],
  },
  contact: {
    badge: "KONTAK",
    title: "Mari Terhubung",
    subtitle:
      "Saya sangat terbuka untuk diskusi teknologi, peluang kolaborasi, maupun tawaran posisi Software Engineer/Web/Android.",
    emailTitle: "Kirim Email",
    emailValue: "airiagustus82@gmail.com",
    phoneTitle: "Telepon & WhatsApp",
    phoneValue: "+62 821-8665-7316",
    chatWhatsAppBtn: "Chat via WhatsApp",
    whatsAppUrl: "https://wa.me/6282186657316?text=Halo%20Juzairi,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
    locationTitle: "Lokasi",
    locationValue: "Jambi, Indonesia (Terbuka untuk On-site & Remote)",
    cvCardTitle: "Curriculum Vitae",
    cvCardDesc: "Silakan unduh dokumen CV resmi saya untuk melihat ringkasan pendidikan, pengalaman kerja, dan daftar proyek secara lengkap.",
    cvCardBtn: "Unduh CV (.PDF)",
    cvPath: "/cv/CV_Muhammad_Juzairi_Safitli.pdf",
    formTitle: "Kirim Pesan Langsung",
    formSubtitle: "Isi form di bawah ini, saya akan membalas pesan Anda secepatnya.",
    nameLabel: "Nama Lengkap",
    namePlaceholder: "Masukkan nama Anda",
    emailLabel: "Alamat Email",
    emailPlaceholder: "nama@perusahaan.com",
    subjectLabel: "Subjek Pesan",
    subjectPlaceholder: "Peluang Kerja / Kolaborasi / Pertanyaan",
    messageLabel: "Isi Pesan",
    messagePlaceholder: "Tulis detail pesan atau proyek yang ingin didiskusikan...",
    submitBtn: "Kirim Pesan",
    successTitle: "Pesan Berhasil Dikirim!",
    successMessageTemplate: (name: string, email: string) =>
      `Terima kasih, ${name}! Pesan Anda sudah masuk. Saya akan membalasnya segera ke email ${email}.`,
    sendAnotherBtn: "Kirim Pesan Lagi",
  },
  footer: {
    brandName: "Muhammad Juzairi Safitli",
    brandDegreeRole: "S.Kom. | Software Engineer & Game Developer",
    missionStatement:
      "Fokus membangun produk teknologi dari sisi software engineering dan AI yang praktis, cepat, dan bermanfaat untuk banyak orang.",
    partnerNote: "Dibuat sepenuh hati, berdampingan dengan portofolio",
    partnerName: "Yulti Syaridayanti, S.K.M.",
    partnerUrl: "https://portfolio-yulti-syaridayanti.vercel.app/",
    navTitle: "Navigasi Cepat",
    contactTitle: "Kontak & Media Sosial",
    backToTopBtn: "Kembali ke Atas",
    copyrightText: `© ${new Date().getFullYear()} Muhammad Juzairi Safitli. All rights reserved.`,
  },
  ui: {
    heartbeatBadge: "CONNECTED PULSE",
    avatarFallbackRole: "Software Engineer & Game Developer",
    avatarFallbackSpecialty: "Android & AI Systems",
    avatarBadgeBestGraduate: "Wisudawan Terbaik",
    avatarBadgeGpa: "IPK 3.95 / 4.00",
    avatarBadgeDistinction: "Distinction Graduate",
    avatarBadgeBangkit: "Bangkit Academy by Google",
  },
};