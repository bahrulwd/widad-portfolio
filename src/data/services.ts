export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  priceLabel: string;
  priceValue: string;
  featured?: boolean;
  features: string[];
}

export const pricingPackages: ServicePackage[] = [
  {
    id: "landing-page",
    name: "Paket Landing Page",
    priceLabel: "Mulai dari",
    priceValue: "Rp 1.500.000",
    features: [
      "1 Halaman Teroptimasi",
      "Responsive Design (Mobile First)",
      "SEO Friendly Structure",
      "WhatsApp Integration",
    ],
  },
  {
    id: "company-profile",
    name: "Company Profile",
    badge: "Most Popular",
    priceLabel: "",
    priceValue: "Harga Tetap",
    featured: true,
    features: [
      "Up to 5 Halaman Utama",
      "CMS Dasar (Update Mandiri)",
      "Custom Design System",
      "Email Bisnis (Google/Zoho)",
      "Free Hosting & Domain (1yr)",
    ],
  },
  {
    id: "custom-website",
    name: "Website Custom",
    priceLabel: "",
    priceValue: "Penawaran Khusus",
    features: [
      "Fitur Kompleks & Logic",
      "Integrasi API Pihak Ketiga",
      "Dashboard Admin Eksklusif",
      "Support Prioritas 24/7",
    ],
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
