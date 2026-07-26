import React, { useEffect, useState, useRef } from 'react';
import { Palette, School } from 'lucide-react';

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
      <section id="tentang" className="py-24 px-6 lg:px-8 border-t border-white/5 bg-[#1c1b1b]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Header */}
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-6 font-mono">
                02 // Background
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Tentang Saya
              </h2>
            </div>

            {/* Right Narrative & Cards */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
                Saya adalah mahasiswa S1 Sistem Informasi di{" "}
                <strong className="text-white font-semibold underline decoration-white/30 underline-offset-4">
                  Universitas Negeri Semarang (UNNES)
                </strong>
                . Berfokus pada pengembangan web modern, saya menggabungkan ketajaman teknis dengan minat mendalam pada desain UI/UX untuk menciptakan solusi digital yang tidak hanya fungsional, tetapi juga estetis.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Academic Card */}
                <div className="p-8 rounded-xl bg-[#201f1f] border border-white/5 hover:border-white/20 transition-all">
                  <School className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Akademik</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    S1 Sistem Informasi, UNNES. Mempelajari struktur data, manajemen basis data, dan arsitektur sistem.
                  </p>
                </div>

                {/* Design Vision Card */}
                <div className="p-8 rounded-xl bg-[#201f1f] border border-white/5 hover:border-white/20 transition-all">
                  <Palette className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Visi Desain</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Menciptakan antarmuka yang intuitif dengan prinsip desain yang bersih dan berpusat pada pengguna.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lighthouse & Performance Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#1c1b1b] border-t border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Lighthouse Left Card */}
            <div className="lg:col-span-8 p-8 sm:p-12 rounded-2xl bg-[#201f1f] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-6 font-mono">
                  Performance First
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  Lighthouse Scores that stay in the green.
                </h2>
                <p className="text-slate-400 text-base sm:text-lg max-w-md leading-relaxed">
                  Optimizing for Core Web Vitals to ensure your search rankings and user retention are second to none.
                </p>
              </div>
            </div>

            {/* Stat Stack Right Cards */}
            <div className="lg:col-span-4 flex flex-col gap-6" ref={counterRef}>
              <div className="flex-1 p-8 sm:p-12 rounded-2xl bg-[#201f1f] border border-white/5 flex flex-col items-center justify-center text-center min-h-[160px]">
                <span className="text-6xl font-extrabold text-white leading-none mb-3 tracking-tight">
                  {projectCount}+
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 font-mono">
                  Projects Delivered
                </span>
              </div>

              <div className="flex-1 p-8 sm:p-12 rounded-2xl bg-[#201f1f] border border-white/5 flex flex-col items-center justify-center text-center min-h-[160px]">
                <span className="text-6xl font-extrabold text-white leading-none mb-3 tracking-tight">
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
