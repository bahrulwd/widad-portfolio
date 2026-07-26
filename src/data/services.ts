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
  quote: string;
  author: string;
  role: string;
}

export const testimonialsList: TestimonialItem[] = [
  {
    id: "1",
    quote: "Transformasi digital yang mereka bawa ke perusahaan kami bukan sekadar update teknologi, tapi perubahan fundamental pada efisiensi operasional kami.",
    author: "Adrian Wijaya",
    role: "CTO, Nexus Corp",
  },
  {
    id: "2",
    quote: "Presisi dan perhatian terhadap detail adalah apa yang membedakan MBW. Mereka mengerti kebutuhan teknis yang sangat kompleks tanpa banyak kompromi.",
    author: "Santi Permata",
    role: "Product Owner, Fintech ID",
  },
  {
    id: "3",
    quote: "Kecepatan eksekusi yang luar biasa. Dari konsep hingga deployment hanya memakan waktu setengah dari estimasi vendor kami sebelumnya.",
    author: "Budi Santoso",
    role: "CEO, Creative Flow",
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
