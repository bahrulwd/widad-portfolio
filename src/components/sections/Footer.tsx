import React from 'react';
import { ArrowUp } from 'lucide-react';
import { siteConfig } from '../../data/config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="w-full bg-[#1A1A1A] border-t border-[#333333] pt-16 sm:pt-24 pb-8 sm:pb-12 text-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">

          {/* Left Hero Callout Column (6 cols) */}
          <div className="md:col-span-6 flex flex-col gap-8">
            <h3 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
              Mari mulai membangun.
            </h3>
            <p className="text-slate-400 text-base sm:text-lg max-w-md leading-relaxed">
              Kirimkan brief proyek Anda atau jadwalkan panggilan konsultasi gratis dengan tim teknis kami hari ini.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.15em] hover:bg-emerald-400 transition-colors"
              >
                HUBUNGI KAMI
              </a>
              <a
                href="#portofolio"
                className="border border-[#333333] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#201f1f] transition-colors"
              >
                LIHAT PORTOFOLIO
              </a>
            </div>
          </div>

          {/* Contact Column (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Kontak
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-slate-200 hover:text-white transition-colors text-sm sm:text-base"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-slate-200 hover:text-white transition-colors text-sm sm:text-base"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="text-xs text-slate-400 leading-relaxed font-mono">
              {siteConfig.location}<br />
              Sistem Informasi UNNES
            </div>
          </div>

          {/* Socials Column (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Sosial
            </span>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
                Instagram
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-8 border-t border-[#333333] text-xs text-slate-400 uppercase tracking-widest font-mono gap-4">
          <div>© 2026 MBW OBSIDIAN FLUX. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <button onClick={scrollToTop} className="hover:text-white flex items-center gap-1 transition-colors">
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <span className="hover:text-white cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-white cursor-pointer">TERMS OF SERVICE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
