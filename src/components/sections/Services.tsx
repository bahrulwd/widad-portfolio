import React from 'react';
import {
  MousePointerClick,
  UserCheck,
  Building2,
  Terminal,
  ShieldCheck,
  Users,
  Wand2,
  CheckCircle2,
  Check,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { pricingPackages } from '../../data/services';
import { siteConfig } from '../../data/config';

export const Services: React.FC = () => {
  return (
    <section id="layanan" className="w-full bg-[#0e0e0e] text-slate-100">

      {/* 1. Services Catalog & Bento Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-24 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-4 block font-mono">
              Katalog Solusi
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Layanan Profesional
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed font-normal">
              Solusi digital end-to-end untuk kebutuhan bisnis dan personal Anda, dirancang dengan presisi teknis dan estetika tinggi.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow bg-white/10 ml-12 mb-4" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Landing Page (8 cols) */}
          <div className="md:col-span-8 group relative overflow-hidden bg-[#1A1A1A] border border-[#333333] p-8 sm:p-10 flex flex-col justify-between min-h-[380px] hover:border-white/30 transition-all duration-500 rounded-2xl">
            <div className="flex justify-between items-start">
              <div>
                <span className="px-3.5 py-1 rounded-full border border-white/20 text-xs font-mono text-slate-300 uppercase tracking-wider mb-6 inline-block">
                  UMKM & Startups
                </span>
                <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                  Landing Page
                </h3>
                <p className="text-slate-400 text-base max-w-md leading-relaxed">
                  Fokus pada konversi dan performa tinggi. Dirancang untuk mengubah pengunjung menjadi pelanggan setia melalui UX yang persuasif.
                </p>
              </div>
              <MousePointerClick className="w-10 h-10 text-white opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="mt-auto pt-12">
              <div className="flex gap-4 items-center">
                <div className="h-[2px] w-12 bg-white" />
                <span className="text-xs font-bold text-white uppercase tracking-widest font-mono">
                  Performance First
                </span>
              </div>
            </div>

            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 blur-[100px] rounded-full group-hover:bg-white/10 transition-all duration-700 pointer-events-none" />
          </div>

          {/* Portfolio (4 cols) */}
          <div className="md:col-span-4 group bg-[#1A1A1A] border border-[#333333] p-8 sm:p-10 flex flex-col justify-between hover:border-white/30 transition-all duration-500 rounded-2xl">
            <div className="flex justify-between items-start">
              <UserCheck className="w-8 h-8 text-white" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Profesional
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-3">Portofolio</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Showcase karya & identitas profesional Anda dengan layout yang bercerita.
              </p>
            </div>
          </div>

          {/* Company Profile (4 cols) */}
          <div className="md:col-span-4 group bg-[#1A1A1A] border border-[#333333] p-8 sm:p-10 flex flex-col justify-between hover:border-white/30 transition-all duration-500 rounded-2xl">
            <div className="flex justify-between items-start">
              <Building2 className="w-8 h-8 text-white" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Perusahaan
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-3">Company Profile</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Membangun kredibilitas bisnis melalui kehadiran digital yang prestisius.
              </p>
            </div>
          </div>

          {/* Custom Website (4 cols - Highlighted White Card) */}
          <div className="md:col-span-4 group bg-white text-slate-950 p-8 sm:p-10 flex flex-col justify-between hover:opacity-95 transition-all duration-500 rounded-2xl shadow-xl">
            <div className="flex justify-between items-start text-slate-950">
              <Terminal className="w-8 h-8" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest">
                Scale-up
              </span>
            </div>
            <div className="mt-8 text-slate-950">
              <h3 className="text-2xl font-extrabold mb-3">Custom Website</h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Fitur spesifik, integrasi kompleks, dan fungsionalitas tanpa batas sesuai kebutuhan unik Anda.
              </p>
            </div>
          </div>

          {/* Maintenance (4 cols) */}
          <div className="md:col-span-4 group bg-[#1A1A1A] border border-[#333333] p-8 sm:p-10 flex flex-col justify-between hover:border-white/30 transition-all duration-500 rounded-2xl">
            <div className="flex justify-between items-start">
              <ShieldCheck className="w-8 h-8 text-white" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Semua Sektor
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-3">Maintenance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Keamanan berlapis dan update rutin untuk memastikan website selalu dalam performa puncak.
              </p>
            </div>
          </div>

          {/* Website Organisasi (6 cols split) */}
          <div className="md:col-span-6 group bg-[#1A1A1A] border border-[#333333] p-8 sm:p-10 flex flex-col md:flex-row gap-8 hover:border-white/30 transition-all duration-500 rounded-2xl">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">Website Organisasi</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Manajemen konten & anggota untuk komunitas atau instansi.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-[#353534] text-[10px] text-white uppercase tracking-wider font-mono rounded">
                  CMS
                </span>
                <span className="px-2.5 py-1 bg-[#353534] text-[10px] text-white uppercase tracking-wider font-mono rounded">
                  Member Area
                </span>
              </div>
            </div>
            <div className="w-full md:w-48 h-32 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden">
              <Users className="w-12 h-12 text-white/20" />
            </div>
          </div>

          {/* Redesign Service (6 cols split) */}
          <div className="md:col-span-6 group bg-[#1A1A1A] border border-[#333333] p-8 sm:p-10 flex flex-col md:flex-row gap-8 hover:border-white/30 transition-all duration-500 rounded-2xl">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">Redesign Service</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Penyegaran tampilan & optimasi UX untuk website lama Anda.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-[#353534] text-[10px] text-white uppercase tracking-wider font-mono rounded">
                  Modern UI
                </span>
                <span className="px-2.5 py-1 bg-[#353534] text-[10px] text-white uppercase tracking-wider font-mono rounded">
                  SEO Fix
                </span>
              </div>
            </div>
            <div className="w-full md:w-48 h-32 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden">
              <Wand2 className="w-12 h-12 text-white/20" />
            </div>
          </div>

        </div>
      </div>

      {/* 2. Pricing Packages Section */}
      <div className="w-full bg-[#1c1b1b] py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

          <div className="text-center mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 mb-4 block font-mono">
              Paket Layanan
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Pilih Paket Anda
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative p-8 sm:p-10 flex flex-col h-full rounded-2xl transition-all duration-300 ${pkg.featured
                    ? 'bg-[#1A1A1A] border-2 border-white transform lg:-translate-y-4 shadow-2xl'
                    : 'bg-[#1A1A1A] border border-[#333333] hover:border-white/30'
                  }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-slate-950 px-6 py-1 text-xs font-bold uppercase tracking-widest rounded-full font-mono shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-10">
                  <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                  <div className="flex items-baseline gap-2 mt-4">
                    {pkg.priceLabel && (
                      <span className="text-slate-400 text-sm font-medium">{pkg.priceLabel}</span>
                    )}
                    <span className="text-2xl font-extrabold text-white">{pkg.priceValue}</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-4 mb-12 flex-grow">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 ${pkg.featured
                      ? 'bg-white text-slate-950 hover:bg-emerald-400 shadow-lg'
                      : 'border border-white text-white hover:bg-white hover:text-slate-950'
                    }`}
                >
                  {pkg.id === 'custom-website' ? 'Tanya Penawaran' : 'Konsultasi Sekarang'}
                </a>
              </div>
            ))}
          </div>

          {/* FAQ Teaser */}
          <div className="mt-28 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-base">
              Butuh solusi yang tidak ada di daftar di atas?
            </p>
            <a
              href="#kontak"
              className="group flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-emerald-400 transition-colors"
            >
              <span>Diskusikan Kebutuhan Anda</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      {/* 3. CTA Section */}
      <div className="w-full px-6 lg:px-8 py-24 bg-[#0e0e0e]">
        <div className="max-w-[1440px] mx-auto bg-white py-20 px-8 sm:px-12 rounded-3xl relative overflow-hidden flex flex-col items-center text-center text-slate-950 shadow-2xl">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          />

          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950 mb-6 relative z-10 max-w-3xl tracking-tight leading-[1.05]">
            Mari Bangun Sesuatu yang Luar Biasa Bersama
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mb-10 relative z-10 max-w-xl leading-relaxed font-medium">
            Konsultasi gratis untuk tahap awal proyek Anda. Mari wujudkan ide digital Anda menjadi kenyataan.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto">
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-4 bg-slate-950 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:scale-105 hover:bg-emerald-400 hover:text-slate-950 transition-all text-center"
            >
              Mulai Proyek
            </a>
            <a
              href="#portofolio"
              className="px-10 py-4 border border-slate-950/30 text-slate-950 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-950/10 transition-colors text-center"
            >
              Lihat Portofolio
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};
