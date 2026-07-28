export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  badge?: string;
  priceLabel: string;
  pricePrefix?: string;
  priceValue: string;
  featured?: boolean;
  deliveryTime: string;
  revisionInfo: string;
  featuresHeader: string;
  features: string[];
  waMessage: string;
}

export const pricingPackages: ServicePackage[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    description: "Cocok untuk promosi produk, event, atau bisnis personal yang ingin tampil profesional & cepat konversi.",
    priceLabel: "Mulai dari",
    pricePrefix: "Rp",
    priceValue: "800.000",
    deliveryTime: "2 – 4 Hari Kerja",
    revisionInfo: "2x Revisi Minor",
    featuresHeader: "Yang Termasuk:",
    features: [
      "1 Halaman Focus-Conversion",
      "Desain Responsif (Desktop & Mobile)",
      "Formulir / Direct WhatsApp CTA",
      "Bantuan Setup Hosting (Vercel/Free Tier)",
      "SEO Basic & Speed Optimization",
      "Garansi Bug-Fix & Support 30 Hari",
    ],
    waMessage: "Halo Widad, saya tertarik dengan Paket Landing Page (Rp 800.000). Bisa konsultasi lebih lanjut?",
  },
  {
    id: "company-profile",
    name: "Company Profile",
    description: "Solusi lengkap untuk bisnis & perusahaan yang ingin memperkuat kredibilitas serta mengelola konten secara mandiri.",
    badge: "Paling Populer",
    priceLabel: "Mulai dari",
    pricePrefix: "Rp",
    priceValue: "3.000.000",
    featured: true,
    deliveryTime: "7 – 14 Hari Kerja",
    revisionInfo: "3x Revisi Desain & Konten",
    featuresHeader: "Semua di Landing Page, plus:",
    features: [
      "Hingga 5 Halaman Utama Bisnis",
      "Desain Custom Sesuai Brand Identity",
      "Panel Admin CMS + Video Tutorial Penggunaan",
      "Free Domain (.com/.id) & Hosting (1 Tahun)",
      "Integrasi Google Analytics & Optimasi SEO",
      "Garansi Bug-Fix & Support 30 Hari",
    ],
    waMessage: "Halo Widad, saya tertarik dengan Paket Company Profile (Rp 3.000.000). Bisa konsultasi lebih lanjut?",
  },
  {
    id: "custom-website",
    name: "Website Custom",
    description: "Untuk aplikasi bisnis khusus, sistem manajemen data, integrasi API, atau platform dengan alur unik.",
    priceLabel: "Penawaran Khusus",
    pricePrefix: "",
    priceValue: "Custom Price",
    deliveryTime: "Sesuai Scope Proyek",
    revisionInfo: "Revisi Fleksibel (Per Milestone)",
    featuresHeader: "Semua di Company Profile, plus:",
    features: [
      "Fitur & Logika Bisnis Khusus (Custom Logic)",
      "Integrasi API & Database Pihak Ke-3",
      "Dashboard Admin & Analytics Data",
      "Arsitektur Skalabel & High Performance",
      "Konsultasi Fitur & Garansi Maintenance Prioritas",
    ],
    waMessage: "Halo Widad, saya ingin konsultasi mengenai Paket Website Custom. Bisa minta jadwal diskusi?",
  },
];

export interface AddOnItem {
  id: string;
  name: string;
  price: string;
  description: string;
}

export const addOnsList: AddOnItem[] = [
  {
    id: "extra-page",
    name: "Tambah Halaman Ekstra",
    price: "+ Rp 250rb / Halaman",
    description: "Penambahan halaman struktur baru di luar kuota paket utama.",
  },
  {
    id: "payment-gateway",
    name: "Integrasi Payment Gateway",
    price: "+ Rp 1.000.000",
    description: "Otomatisasi pembayaran QRIS, Virtual Account, & Kartu Kredit (Midtrans/Xendit).",
  },
  {
    id: "multi-language",
    name: "Fitur Multi-Bahasa",
    price: "+ Rp 500rb",
    description: "Dukungan 2+ bahasa (Indonesian & English) untuk jangkauan pasar internasional.",
  },
  {
    id: "annual-maintenance",
    name: "Maintenance Tahunan",
    price: "+ Rp 750rb / Tahun",
    description: "Perpanjangan domain, hosting, backup berkala & monitoring server pasca tahun ke-1.",
  },
];

export interface TestimonialItem {
  id: string;
  type: "Client Review" | "Independent Project";
  quote: string;
  author: string;
  role: string;
}

export const testimonialsList: TestimonialItem[] = [
  {
    id: "1",
    type: "Client Review",
    quote: "Sistem Company Profile dan CMS yang dibangun oleh Widad sangat modern, responsif, dan fungsional. Membantu menyajikan kredibilitas bisnis kami secara prestisius serta mempermudah pengelolaan data proyek dan pelacakan prospek klien secara terstruktur.",
    author: "Ahmad Qoidunnas",
    role: "Executive Director — CV. Kencana Adhi Saka",
  },
  {
    id: "2",
    type: "Independent Project",
    quote: "Platform behavioral finance mandiri yang dirancang untuk membedah pola impulse buying dan menyediakan Decision Support System (DSS) serta skenario simulasi keputusan keuangan bagi pengguna.",
    author: "Arthara Platform",
    role: "Self-Initiated Financial DSS",
  },
  {
    id: "3",
    type: "Independent Project",
    quote: "Riset dan pengembangan sistem operasi produktivitas mandiri yang mengintegrasikan Smart Priority Scoring, analitik real-time Recharts, dan arsitektur REST API berkinerja tinggi.",
    author: "Nexa SaaS",
    role: "Self-Initiated Productivity System",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    question: "Berapa lama waktu pengerjaan proyek?",
    answer: "Waktu pengerjaan sangat bervariasi tergantung pada kompleksitas fitur. Untuk MVP sederhana biasanya memakan waktu 4-8 minggu, sedangkan sistem enterprise kompleks bisa 4-6 bulan.",
  },
  {
    question: "Apakah ada biaya maintenance bulanan?",
    answer: "Kami menawarkan paket maintenance opsional untuk memastikan sistem Anda selalu up-to-date dan aman. Biaya ini mencakup monitoring server, security patches, dan minor updates.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Kami biasanya menggunakan sistem termin: DP 30% di awal, 40% saat milestone pengembangan tengah tercapai, dan 30% setelah final QC sebelum serah terima.",
  },
  {
    question: "Apakah saya memiliki akses penuh ke source code?",
    answer: "Ya, kepemilikan source code sepenuhnya menjadi hak milik klien setelah pelunasan akhir dilakukan. Kami akan menyerahkan repositori GitHub/GitLab secara transparan.",
  },
];
