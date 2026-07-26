export interface Project {
  id: string;
  title: string;
  category: "Landing Page" | "Company Profile" | "Custom Website";
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics?: string;
  featured?: boolean;
  colSpanDesktop: number; // e.g. 8 for large, 4 for small, 6 for medium
  liveUrl?: string;
  githubUrl?: string;
}

export const portfolioProjects: Project[] = [
  {
    id: "nexa-saas",
    title: "Nexa — SaaS & Decision Support System",
    category: "Custom Website",
    description: "Premium full-stack task management SaaS & Decision Support System dengan Smart Priority Scoring dan Workload Monitoring.",
    longDescription: "Nexa is a premium full-stack task management SaaS & Decision Support System. Powered by React 19 (Vite), TypeScript, and Tailwind CSS v4 on the frontend, with a robust Laravel 11 REST API and MySQL database on the backend featuring token-based Sanctum authentication, Smart Priority Scoring, and Workload Monitoring.",
    image: "/images/portfolio/nexa.png",
    tags: ["React 19", "TypeScript", "Tailwind v4", "Laravel 11", "MySQL", "Vite"],
    metrics: "Smart Priority Scoring & Workload Monitoring",
    featured: true,
    colSpanDesktop: 8,
    githubUrl: "https://github.com/bahrulwd/Nexa---Your-Productivity-Operating-System",
  },
  {
    id: "kencana-adhi-saka",
    title: "CV. Kencana Adhi Saka — Profile & CMS",
    category: "Company Profile",
    description: "Sistem Company Profile dan Content Management System (CMS) premium berbasis web untuk industri pemancangan dan beton produksi.",
    longDescription: "Sebuah sistem Company Profile dan Content Management System (CMS) premium berbasis web yang dirancang khusus untuk CV. Kencana Adhi Saka. Platform ini menyajikan profil perusahaan yang modern serta antarmuka manajemen proyek, data analitik, dan pelacakan prospek (leads) yang handal untuk industri pemancangan dan beton produksi. Built with React 19.2 (Vite), TypeScript, Tailwind CSS, Recharts analytics, and Laravel 12.0 REST API with MySQL 8.0 & Sanctum authentication.",
    image: "/images/portfolio/kencana.png",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Laravel 12", "MySQL", "Recharts"],
    metrics: "Real-time Analytics & Leads Management",
    colSpanDesktop: 4,
    liveUrl: "https://kencanaadhisaka.com",
  },
  {
    id: "arthara-financial",
    title: "Arthara — Think Before You Spend",
    category: "Custom Website",
    description: "Decision Support System & platform kelola keuangan berbasis behavioral finance untuk mencegah impulse purchase dan simulasi skenario keuangan.",
    longDescription: "Arthara adalah Decision Support System (DSS) dan platform behavioral finance premium yang dirancang untuk membantu pengguna melacak pemicu emosional belanja, mencegah impulse purchases, memindai kebocoran dana (money leaks), serta membangun kesejahteraan finansial yang berkelanjutan. Dilengkapi fitur unggulan Pre-Spending Check & Scenario Simulator. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Prisma ORM v7.8, MariaDB/MySQL, Zod, React Hook Form, and Recharts analytics.",
    image: "/images/portfolio/arthara.png",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Prisma ORM", "MariaDB"],
    metrics: "Pre-Spending Check & Scenario Simulator",
    colSpanDesktop: 6,
    githubUrl: "https://github.com/bahrulwd/Arthara---Think-Before-You-Spend",
  },
  {
    id: "pppa-crowdfunding",
    title: "PPPA — Crowdfunding & Donation Platform",
    category: "Custom Website",
    description: "Platform crowdfunding dan pengelolaan donasi publik modern untuk donasi, zakat, infaq, dan wakaf secara digital dan transparan.",
    longDescription: "Platform crowdfunding dan pengelolaan donasi publik modern yang dirancang untuk mempermudah masyarakat dalam menunaikan donasi, zakat, infaq, dan wakaf secara digital, transparan, dan terstruktur. Dilengkapi dengan kalkulasi progress perolehan dana, integrasi Payment Gateway & konfirmasi transfer manual, Smart Zakat & Wakaf Calculators (Zakat Profesi & Zakat Maal berbasis Nisab harga emas real-time), Recurring Donation Engine, serta Comprehensive Admin Dashboard dengan visualisasi tren donasi harian.",
    image: "/images/portfolio/pppa.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Laravel", "MySQL"],
    metrics: "Payment Gateway & Smart Zakat Calculator",
    colSpanDesktop: 6,
  },
];
