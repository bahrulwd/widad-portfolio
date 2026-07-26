export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  shortBio: string;
  fullBio: string;
  university: string;
  major: string;
  email: string;
  phone: string;
  location: string;
  availableForFreelance: boolean;
  availabilityText: string;
  cvUrl?: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter?: string;
    whatsapp: string;
  };
  stats: {
    label: string;
    value: string;
    numericValue?: number;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Muhammad Bahrul Widad",
  shortName: "MBW",
  role: "Full-Stack Web Developer & UI/UX Designer",
  tagline: "Specializing in React, Next.js, and robust backend systems to build scalable web applications that help businesses launch faster and deliver clean user experiences.",
  shortBio: "Premium digital craftsmanship for the next generation of deep-tech and SaaS ventures.",
  fullBio: "Saya adalah mahasiswa S1 Sistem Informasi di Universitas Negeri Semarang (UNNES). Berfokus pada pengembangan web modern, saya menggabungkan ketajaman teknis dengan minat mendalam pada desain UI/UX untuk menciptakan solusi digital yang tidak hanya fungsional, tetapi juga estetis.",
  university: "Universitas Negeri Semarang (UNNES)",
  major: "S1 Sistem Informasi",
  email: "bahrulwidad.work@gmail.com",
  phone: "+62 821 4796 7841",
  location: "Gunungpati, Semarang, Indonesia",
  availableForFreelance: true,
  availabilityText: "Available for Q4 Projects",
  cvUrl: "/CV_Muhammad_Bahrul_Widad.pdf",
  socials: {
    github: "https://github.com/bahrulwd",
    linkedin: "https://www.linkedin.com/in/muhammadbahrulwidad/",
    instagram: "https://www.instagram.com/bhrlwidadd/",
    whatsapp: "https://wa.me/6282147967841?text=Halo%20Muhammad%20Bahrul%20Widad,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20web",
  },
  stats: [
    { label: "Projects Delivered", value: "50+", numericValue: 50 },
    { label: "Client Satisfaction", value: "99%", numericValue: 99 },
  ],
};
