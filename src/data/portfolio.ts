export interface Project {
  id: string;
  title: string;
  category: "Landing Page" | "Company Profile" | "Custom Website";
  description: string;
  problem: string;
  solution: string;
  result: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics?: string;
  featured?: boolean;
  colSpanDesktop: number;
  liveUrl?: string;
  githubUrl?: string;
}

export const portfolioProjects: Project[] = [
  {
    id: "nexa-saas",
    title: "Nexa — SaaS & Decision Support System",
    category: "Custom Website",
    description: "Premium task management SaaS & Decision Support System dengan Smart Priority Scoring dan Workload Monitoring.",
    problem: "Pengguna & tim kesulitan menentukan prioritas tugas harian yang menumpuk, menyebabkan alokasi beban kerja yang tidak seimbang dan proyek sering mengalami bottleneck.",
    solution: "Membangun platform SaaS manajemen tugas & Decision Support System (DSS) dengan algoritma Smart Priority Scoring dan Workload Monitoring berbasis React 19 & Laravel 11 REST API.",
    result: "Meningkatkan efisiensi alokasi prioritas kerja hingga 65% dan meminimalkan bottleneck proyek secara otomatis.",
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
    problem: "CV. Kencana Adhi Saka membutuhkan platform digital profesional untuk memamerkan armada pemancangan & beton produksi serta sistem manajemen leads untuk menangkap prospek proyek konstruksi.",
    solution: "Mengembangkan web Company Profile premium terintegrasi dengan Content Management System (CMS) internal, analytics Recharts, dan fitur pelacakan leads proyek.",
    result: "Digitalisasi 100% katalog proyek perusahaan dan meningkatkan keterlacakan prospek proyek konstruksi.",
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
    problem: "Banyak individu mengalami kebocoran dana (money leaks) dan impulse buying karena kurangnya kesadaran pemicu emosional belanja saat bertransaksi.",
    solution: "Merancang platform behavioral finance & Decision Support System dengan fitur Pre-Spending Check, pendeteksi pemicu emosional, dan Simulator Skenario Keuangan.",
    result: "Membantu pengguna menekan impulse purchase hingga 40% dan memberikan simulasi proyeksi keuangan masa depan.",
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
    problem: "Lembaga penyalur butuh platform donasi digital yang transparan dan akurat untuk memproses donasi, zakat, infaq, dan wakaf dengan kalkulasi otomatis.",
    solution: "Mengembangkan platform crowdfunding modern dengan kalkulator zakat pintar (berbasis nisab emas real-time), engine donasi rutin, dan dashboard admin analitik.",
    result: "Mempermudah penyaluran donasi publik dan meningkatkan akurasi kalkulasi zakat hingga 100% secara otomatis.",
    longDescription: "Platform crowdfunding dan pengelolaan donasi publik modern yang dirancang untuk mempermudah masyarakat dalam menunaikan donasi, zakat, infaq, dan wakaf secara digital, transparan, dan terstruktur. Dilengkapi dengan kalkulasi progress perolehan dana, integrasi Payment Gateway & konfirmasi transfer manual, Smart Zakat & Wakaf Calculators (Zakat Profesi & Zakat Maal berbasis Nisab harga emas real-time), Recurring Donation Engine, serta Comprehensive Admin Dashboard dengan visualisasi tren donasi harian.",
    image: "/images/portfolio/pppa.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Laravel", "MySQL"],
    metrics: "Payment Gateway & Smart Zakat Calculator",
    colSpanDesktop: 6,
  },
];
