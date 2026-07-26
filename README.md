# 🚀 Muhammad Bahrul Widad — Portfolio Website

Platform portofolio personal dan *showcase* karya digital interaktif berbasis **React 19**, **TypeScript**, **Vite**, dan **Tailwind CSS v4** dengan estetika modern *Obsidian & Glassmorphism dark mode*.

---

## 🌟 Tentang Proyek

Website ini dibangun untuk merepresentasikan identitas profesional **Muhammad Bahrul Widad** (Mahasiswa S1 Sistem Informasi UNNES & Web Developer / Tech Consultant). Platform ini mengintegrasikan standar desain web terkini, performa tinggi, animasi mikro halus, serta sistem filter karya berbasis Bento Grid.

### 👤 Profile Brief
- **Nama**: Muhammad Bahrul Widad
- **Peran**: Full-Stack Web Developer & UI/UX Designer
- **Pendidikan**: S1 Sistem Informasi — Universitas Negeri Semarang (UNNES)
- **Lokasi**: Gunungpati, Semarang, Indonesia
- **Email**: `bahrulwidad.work@gmail.com`
- **Telepon / WA**: `+62 821 4796 7841`
- **Socials**: [LinkedIn](https://www.linkedin.com/in/muhammadbahrulwidad/) | [GitHub](https://github.com/bahrulwd) | [Instagram](https://www.instagram.com/bhrlwidadd/)

---

## 🛠️ Teknologi & Stack Utama

### Frontend & Core
- **Framework & Core**: React 19 + Vite (SPA & Fast Refresh)
- **Bahasa**: TypeScript (Strict Type Safety)
- **Styling**: Tailwind CSS v4 (Custom Dark Aesthetics, Glassmorphism, Micro-animations)
- **Animasi & Transisi**: Framer Motion (Staggered Animations, Bento Grid Layout Filter)
- **Icons**: Lucide React & Custom SVG Social Icons
- **Visualisasi Data**: Recharts

### Backend / Core Stack Expertise
- **Frameworks**: Next.js (App Router), Laravel (REST API)
- **Database**: MySQL / MariaDB, PostgreSQL
- **ORM & Auth**: Prisma ORM, Laravel Sanctum

---

## 📂 Struktur Karya & Portofolio

Platform ini menampilkan proyek-proyek unggulan yang telah diselesaikan:

1. **Nexa — SaaS & Decision Support System**
   - *Deskripsi*: Platform manajemen tugas full-stack & DSS dengan *Smart Priority Scoring* dan *Workload Monitoring*.
   - *Stack*: React 19, TypeScript, Tailwind v4, Laravel 11 API, MySQL.
2. **CV. Kencana Adhi Saka — Profile & CMS**
   - *Deskripsi*: Company profile & CMS premium berbasis web untuk industri pemancangan dan beton produksi.
   - *Stack*: React 19, TypeScript, Tailwind CSS, Recharts, Laravel 12 API, MySQL.
3. **Arthara — Think Before You Spend**
   - *Deskripsi*: Decision Support System (DSS) & platform *behavioral finance* untuk memindai kebocoran dana (*money leaks*), mencegah *impulse purchase*, serta simulasi skenario keuangan.
   - *Stack*: Next.js 16 (App Router), React 19, TypeScript, Tailwind v4, Prisma ORM v7.8, MariaDB.
4. **PPPA — Crowdfunding & Donation Platform**
   - *Deskripsi*: Platform donasi publik, zakat, infaq, dan wakaf transparan dilengkapi *Smart Zakat Calculator*.
   - *Stack*: React, TypeScript, Tailwind CSS, Laravel, MySQL.

---

## 💻 Struktur Folder Proyek

```
widad-portfolio/
├── public/
│   └── images/
│       ├── logo full.png
│       └── portfolio/
│           ├── nexa.png
│           ├── kencana.png
│           ├── arthara.png
│           └── pppa.png
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navbar.tsx        # Navigasi simetris & responsive
│   │   │   ├── Hero.tsx          # Interactive Cursor Spotlight & Tech Ribbon
│   │   │   ├── About.tsx         # Profil, Bio, & Statistik
│   │   │   ├── Services.tsx      # Katalog Layanan Bento Grid & Paket Harga
│   │   │   ├── Portfolio.tsx     # Bento Grid Filterable Showcase & Modal Drawer
│   │   │   ├── ProcessFAQ.tsx    # Alur Kerja 4-Langkah & Accordion FAQ
│   │   │   ├── Contact.tsx       # Kartu Kontak & Form Pesan Interaktif
│   │   │   └── Footer.tsx        # Footer Callout & Link Sosial
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── SocialIcons.tsx
│   ├── data/
│   │   ├── config.ts             # Informasi personal, kontak, & statistik
│   │   ├── portfolio.ts          # Dataset proyek portofolio
│   │   └── services.ts           # Dataset layanan & paket harga
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                 # Global Design System & Custom Utilities
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

---

## ⚡ Cara Menjalankan Proyek Secara Lokal

### Prerequisites
Pastikan Anda telah menginstal:
- **Node.js** (`>= v18.0.0`)
- **npm** / **yarn** / **pnpm**

### Langkah Instalasi

1. **Clone Repository**:
   ```bash
   git clone https://github.com/bahrulwd/Portofolio-Website-Widad.git
   cd widad-portfolio
   ```

2. **Instal Depedensi**:
   ```bash
   npm install
   ```

3. **Jalankan Server Development**:
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:5173`.

4. **Build untuk Produksi**:
   ```bash
   npm run build
   ```

5. **Preview Build Produksi**:
   ```bash
   npm run preview
   ```

---

## 📄 Lisensi

© 2026 **Muhammad Bahrul Widad**. All Rights Reserved.
