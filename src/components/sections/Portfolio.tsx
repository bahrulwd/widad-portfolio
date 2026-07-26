import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code, ExternalLink, X, CheckCircle2 } from 'lucide-react';
import { portfolioProjects, Project } from '../../data/portfolio';
import { siteConfig } from '../../data/config';
import { GithubIcon } from '../ui/SocialIcons';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeModalProject]);

  const categories = ['All', 'Landing Page', 'Company Profile', 'Custom Website'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

  const marqueeItems = [
    "UI/UX DESIGN",
    "FRONTEND ENGINEERING",
    "DIGITAL CRAFTSMANSHIP",
    "MOTION DESIGN",
    "MODERN WEB STACK"
  ];

  return (
    <section id="portofolio" className="w-full bg-[#0E0E0E] text-slate-100 relative overflow-hidden selection:bg-white selection:text-slate-950">
      
      {/* 1. Header Section */}
      <div className="relative px-6 lg:px-8 pt-24 pb-12 max-w-[1440px] mx-auto flex flex-col items-start">
        {/* Background Large Watermark */}
        <div className="absolute top-16 right-8 opacity-10 select-none pointer-events-none hidden lg:block">
          <span className="font-extrabold text-[12vw] leading-none tracking-tighter text-white mix-blend-overlay">
            WORKS
          </span>
        </div>

        <div className="z-10 w-full">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.3em] uppercase mb-4 block font-mono">
            04 // PORTFOLIO
          </span>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tighter leading-[1.05] mb-6">
              Karya{" "}
              <span className="[-webkit-text-stroke:1px_rgba(255,255,255,0.4)] text-transparent">
                Terpilih
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
              Koleksi proyek yang mendefinisikan standar baru dalam estetika digital dan fungsionalitas teknis.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Category Filter Pills */}
      <div className="px-6 lg:px-8 mb-12 max-w-[1440px] mx-auto">
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 font-mono tracking-wider ${
                  isActive
                    ? 'bg-white text-slate-950 font-bold scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                    : 'bg-[#1A1A1A] border border-[#333333] text-slate-400 hover:text-white hover:border-white/30'
                }`}
              >
                {cat === 'All' ? 'Semua Proyek' : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Bento Grid Portfolio with Framer Motion Layout Filtering */}
      <div className="px-6 lg:px-8 pb-24 max-w-[1440px] mx-auto min-h-[450px]">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`col-span-12 ${
                  project.colSpanDesktop === 8
                    ? 'lg:col-span-8'
                    : project.colSpanDesktop === 6
                    ? 'lg:col-span-6'
                    : project.colSpanDesktop === 4
                    ? 'lg:col-span-4'
                    : 'lg:col-span-6'
                } group relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#333333] hover:border-[#555555] transition-all duration-500 shadow-xl flex flex-col justify-between`}
              >
                {/* Fixed-Height Image Frame with Cinematic Zoom */}
                <div className="relative aspect-[16/9] min-h-[260px] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Fading Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Micro Action Icons Overlay on Image Hover */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-full bg-slate-950/80 border border-white/20 text-slate-300 hover:text-white hover:border-white/50 transition-all hover:scale-110"
                        title="Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-full bg-white text-slate-950 font-bold hover:bg-emerald-400 transition-all hover:scale-110"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Interactive Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#0E0E0E] border border-[#333333] text-slate-400 hover:text-white hover:border-white/40 hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-bold text-slate-300 group-hover:text-white flex items-center gap-1.5 transition-colors font-mono tracking-wider"
                    >
                      <span>Lihat Detail Studi Kasus</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="p-2 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all"
                      title="Inspect Code & Details"
                    >
                      <Code className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 4. Collaboration CTA Section ("Punya Proyek Impian?") */}
      <div className="px-6 lg:px-8 py-24 relative overflow-hidden bg-[#1C1B1B] border-t border-white/5">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 tracking-tighter">
            Punya Proyek{" "}
            <span className="[-webkit-text-stroke:1px_rgba(255,255,255,0.4)] text-transparent">
              Impian?
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-12 leading-relaxed font-normal">
            Mari diskusikan bagaimana kita dapat membangun sesuatu yang luar biasa bersama-sama. Fokus pada detail, performa, dan pengalaman pengguna yang tak terlupakan.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-slate-950 font-bold text-xs uppercase tracking-[0.15em] px-10 py-5 rounded-full hover:bg-emerald-400 transition-all transform hover:scale-105 inline-flex items-center gap-3 group shadow-lg"
            >
              <span>Mulai Kolaborasi</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="#layanan"
              className="text-white font-bold text-xs uppercase tracking-[0.15em] px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 transition-all"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </div>

      {/* 5. Synchronized Running Text Marquee Decor Banner */}
      <div className="w-full border-y border-white/5 py-6 overflow-hidden bg-[#0E0E0E] select-none flex group">
        <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <span
              key={idx}
              className="text-xl sm:text-2xl font-bold tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors uppercase italic font-mono px-8 sm:px-12"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <span
              key={`dup-${idx}`}
              className="text-xl sm:text-2xl font-bold tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors uppercase italic font-mono px-8 sm:px-12"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Clean Premium Case Study Modal Drawer */}
      {activeModalProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-3xl bg-[#1C1B1B] border border-[#333333] rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header Row */}
            <div className="sticky top-0 z-20 bg-[#1C1B1B]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#333333] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#0E0E0E] border border-white/10 text-white text-xs font-mono font-semibold uppercase tracking-wider">
                  {activeModalProject.category}
                </span>
                {activeModalProject.metrics && (
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{activeModalProject.metrics}</span>
                  </span>
                )}
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-full bg-[#0E0E0E] border border-[#333333] text-slate-400 hover:text-white hover:border-white/30 transition-colors"
                title="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Scroll Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {activeModalProject.title}
              </h2>

              {/* Project Main Image */}
              <div className="rounded-2xl overflow-hidden border border-[#333333] bg-slate-950 aspect-[16/9]">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Project Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeModalProject.longDescription}
              </p>

              {/* Tech Stack Pills */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold block">
                  Teknologi & Infrastruktur:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-[#0E0E0E] border border-[#333333] text-xs font-mono text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Bottom Actions Bar */}
            <div className="sticky bottom-0 z-20 bg-[#1C1B1B]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-t border-[#333333] flex flex-col sm:flex-row items-center gap-4">
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Kunjungi Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#0E0E0E] border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-colors flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Lihat Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
