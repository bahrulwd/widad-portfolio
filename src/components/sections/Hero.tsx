import React, { useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../data/config';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Staggered Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const techStack = ["Laravel", "React", "Next.js", "Vite", "Tailwind CSS", "MySQL"];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden bg-[#0A0A0A] text-slate-100 selection:bg-white selection:text-slate-950"
    >
      {/* Interactive Cursor Spotlight Background */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), transparent 45%)`,
        }}
      />

      {/* Ambient Grid Pattern & Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Content Animated Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1440px] mx-auto flex flex-col items-center text-center w-full"
      >
        {/* 1. Eyebrow Badge & Currently Building Pill */}
        <motion.div variants={itemVariants} className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#333333] hover:border-white/30 transition-colors shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest font-mono">
              {siteConfig.availabilityText}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A]/90 border border-emerald-500/30 text-xs font-mono text-slate-300 shadow-sm">
            <span className="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Currently Building:
            </span>
            <span className="text-slate-200 font-medium">Nexa (Productivity OS) & Custom CMS</span>
          </div>
        </motion.div>

        {/* 2. H1 Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-extrabold text-white text-3xl sm:text-6xl lg:text-[86px] max-w-5xl mb-8 tracking-tighter leading-[0.98]"
        >
          {siteConfig.name} —{" "}
          <span className="text-slate-400 font-semibold">{siteConfig.role}</span>
        </motion.h1>

        {/* 3. Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-base sm:text-xl max-w-2xl mb-12 opacity-85 leading-relaxed font-normal"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* 4. CTA Buttons with Micro-interactions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          {/* Primary CTA Button */}
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-sm transition-all duration-300 ease-in-out hover:scale-105 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] flex items-center justify-center gap-3"
          >
            <span>Konsultasi via WhatsApp</span>
            <MessageSquare className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Secondary CTA Button (Outlined) */}
          <a
            href="#tentang"
            className="w-full sm:w-auto px-8 py-4 border border-[#333333] text-white rounded-full font-bold text-sm transition-all duration-300 ease-in-out hover:bg-white/10 hover:border-white/40 flex items-center justify-center gap-2 group"
          >
            <span>Lihat Profil Professional</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </a>
        </motion.div>

        {/* Trust & Guarantee Micro-Signals (Conversion Booster) */}
        <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">✓</span> Respon Cepat (&lt; 24 Jam)
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">✓</span> Arsitektur Clean & Type-Safe
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">✓</span> On-Time Delivery
          </span>
        </motion.div>

        {/* 5. Bento Cards & Tech Ribbon */}
        <motion.div
          variants={itemVariants}
          className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-[#333333]/80 w-full flex flex-col items-center"
        >
          {/* Bento Stats / Metric Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-12">
            {[
              { label: "Projects Delivered", val: "5+" },
              { label: "Client Satisfaction", val: "99%" },
              { label: "Lighthouse Score", val: "100" },
              { label: "Response Time", val: "< 24h" },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-[#1A1A1A] border border-[#333333] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer shadow-md"
              >
                <span className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                  {card.val}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-1 uppercase tracking-wider text-center">
                  {card.label}
                </span>
              </div>
            ))}
          </div>

          <span className="text-xs font-semibold text-slate-400 uppercase tracking-[0.3em] mb-8 font-mono">
            Trusted Technologies
          </span>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-14 opacity-60 hover:opacity-100 transition-all duration-500">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-transparent hover:border-[#333333] hover:bg-[#1A1A1A] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span className="text-base sm:text-xl font-bold text-white tracking-tighter italic font-mono">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Corner Accents */}
      <div className="absolute bottom-8 left-8 hidden lg:block pointer-events-none">
        <div className="flex flex-col gap-1 text-xs">
          <span className="text-white font-mono font-bold">01 // INTRODUCTION</span>
          <span className="text-slate-400 uppercase tracking-widest opacity-60 font-mono">
            Digital Craftsmanship
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:block pointer-events-none">
        <div className="[writing-mode:vertical-rl] text-xs text-slate-400 opacity-50 uppercase tracking-[0.5em] font-mono">
          Scroll to explore
        </div>
      </div>
    </section>
  );
};
