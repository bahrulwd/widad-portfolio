import React, { useEffect, useState, useRef } from 'react';
import { Palette, School, Code2, Cpu, Sparkles, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const [projectCount, setProjectCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let count = 0;
            const target = 50;
            const duration = 2000;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
              count += increment;
              if (count >= target) {
                setProjectCount(target);
                clearInterval(timer);
              } else {
                setProjectCount(Math.floor(count));
              }
            }, 16);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <>
      {/* About Section (Tentang Saya) */}
      <section id="tentang" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#1c1b1b]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            
            {/* Left Header */}
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-4 sm:mb-6 font-mono">
                02 // Background & Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                Tentang Saya
              </h2>
              <p className="text-slate-400 text-sm font-mono leading-relaxed">
                Kombinasi antara arsitektur perangkat lunak yang kokoh dan desain antarmuka yang presisi.
              </p>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
                Saya adalah mahasiswa S1 Sistem Informasi di{" "}
                <strong className="text-white font-semibold underline decoration-white/30 underline-offset-4">
                  Universitas Negeri Semarang (UNNES)
                </strong>
                . Berfokus pada pengembangan web modern, saya menggabungkan ketajaman teknis dengan minat mendalam pada desain UI/UX untuk menciptakan solusi digital yang tidak hanya fungsional, tetapi juga memberikan dampak nyata bagi bisnis.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-6 rounded-xl bg-[#201f1f] border border-white/5 hover:border-white/20 transition-all flex items-start gap-4">
                  <School className="w-6 h-6 text-white shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Latar Belakang Akademik</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">S1 Sistem Informasi UNNES — fokus pada struktur data, arsitektur perangkat lunak & manajemen sistem.</p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#201f1f] border border-white/5 hover:border-white/20 transition-all flex items-start gap-4">
                  <Palette className="w-6 h-6 text-white shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Fokus & Visi UI/UX</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">Mendesain produk yang minim *friction*, intuitif, dan selaras dengan tujuan pertumbuhan bisnis.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Development Philosophy Highlight Block */}
          <div className="pt-10 border-t border-white/5">
            <div className="flex items-center gap-2 mb-8">
              <Compass className="w-5 h-5 text-white" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                My Development Philosophy
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Philosophy 1 */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#201f1f] border border-white/5 hover:border-white/20 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 font-mono font-bold text-sm mb-5 group-hover:border-white/30 transition-colors">
                  01
                </div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-slate-300" />
                  Simple Architecture
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Menghindari *over-engineering*. Membangun sistem yang modular, bersih, dan mudah dikembangkan seiring pertumbuhan produk.
                </p>
              </div>

              {/* Philosophy 2 */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#201f1f] border border-white/5 hover:border-white/20 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 font-mono font-bold text-sm mb-5 group-hover:border-white/30 transition-colors">
                  02
                </div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-slate-300" />
                  Clean & Type-Safe Code
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Kode yang *self-documenting* dan aman (TypeScript / Clean Code) untuk mempermudah maintenance dan efisiensi kolaborasi tim.
                </p>
              </div>

              {/* Philosophy 3 */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#201f1f] border border-white/5 hover:border-white/20 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 font-mono font-bold text-sm mb-5 group-hover:border-white/30 transition-colors">
                  03
                </div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-slate-300" />
                  Business-Driven UX
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  UI/UX bukan sekadar visual indah, melainkan tentang mengurangi *friction*, performa yang cepat, serta efisiensi konversi.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lighthouse & Performance Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1c1b1b] border-t border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Lighthouse Left Card */}
            <div className="lg:col-span-8 p-6 sm:p-12 rounded-2xl bg-[#201f1f] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-4 sm:mb-6 font-mono">
                  Performance First
                </span>
                <h2 className="text-2xl sm:text-5xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">
                  Lighthouse Scores that stay in the green.
                </h2>
                <p className="text-slate-400 text-sm sm:text-lg max-w-md leading-relaxed">
                  Optimizing for Core Web Vitals to ensure your search rankings and user retention are second to none.
                </p>
              </div>
            </div>

            {/* Stat Stack Right Cards */}
            <div className="lg:col-span-4 flex flex-col gap-6" ref={counterRef}>
              <div className="flex-1 p-6 sm:p-12 rounded-2xl bg-[#201f1f] border border-white/5 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px]">
                <span className="text-5xl sm:text-6xl font-extrabold text-white leading-none mb-3 tracking-tight">
                  {projectCount}+
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 font-mono">
                  Projects Delivered
                </span>
              </div>

              <div className="flex-1 p-6 sm:p-12 rounded-2xl bg-[#201f1f] border border-white/5 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px]">
                <span className="text-5xl sm:text-6xl font-extrabold text-white leading-none mb-3 tracking-tight">
                  99%
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 font-mono">
                  Client Satisfaction
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
