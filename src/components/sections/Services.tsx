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
  ArrowRight,
  Sparkles,
  Clock,
  RotateCcw,
  FilePlus,
  CreditCard,
  Globe,
  PlusCircle,
} from 'lucide-react';
import { pricingPackages, addOnsList } from '../../data/services';
import { siteConfig } from '../../data/config';

export const Services: React.FC = () => {
  const getWaLink = (message: string) => {
    return `https://wa.me/6282147967841?text=${encodeURIComponent(message)}`;
  };

  const getAddOnIcon = (id: string) => {
    switch (id) {
      case 'extra-page':
        return <FilePlus className="w-5 h-5 text-white" />;
      case 'payment-gateway':
        return <CreditCard className="w-5 h-5 text-white" />;
      case 'multi-language':
        return <Globe className="w-5 h-5 text-white" />;
      case 'annual-maintenance':
        return <ShieldCheck className="w-5 h-5 text-white" />;
      default:
        return <PlusCircle className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="layanan" className="w-full bg-[#0e0e0e] text-slate-100">

      {/* 1. Services Catalog & Bento Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 mb-12 sm:mb-20">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-4 block font-mono">
              Katalog Solusi
            </span>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">
              Layanan Profesional
            </h2>
            <p className="text-slate-400 text-base sm:text-xl leading-relaxed font-normal">
              Solusi digital end-to-end untuk kebutuhan bisnis dan personal Anda, dirancang dengan presisi teknis dan estetika tinggi.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow bg-white/10 ml-12 mb-4" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Landing Page (8 cols) */}
          <div className="md:col-span-8 group relative overflow-hidden bg-[#1A1A1A] border border-[#333333] p-6 sm:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[380px] hover:border-white/30 transition-all duration-500 rounded-2xl">
            <div className="flex justify-between items-start">
              <div>
                <span className="px-3.5 py-1 rounded-full border border-white/20 text-xs font-mono text-slate-300 uppercase tracking-wider mb-6 inline-block">
                  UMKM &amp; Startups
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
                Showcase karya &amp; identitas profesional Anda dengan layout yang bercerita.
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

          {/* Custom Website (4 cols - Highlighted Card) */}
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
                Manajemen konten &amp; anggota untuk komunitas atau instansi.
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
                Penyegaran tampilan &amp; optimasi UX untuk website lama Anda.
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
      <div className="w-full bg-[#1c1b1b] py-20 sm:py-28 border-t border-white/5 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 mb-4 block font-mono">
              Paket &amp; Investasi
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Pilih Paket Sesuai Kebutuhan
            </h2>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl p-8 sm:p-10 transition-all duration-500 ${
                  pkg.featured
                    ? 'bg-white text-slate-950 shadow-2xl lg:-translate-y-4 border border-white hover:-translate-y-5 hover:shadow-[0_25px_50px_rgba(255,255,255,0.18)]'
                    : 'bg-[#1A1A1A] border border-[#333333] hover:border-white/40 text-slate-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]'
                }`}
              >
                {/* Floating Top Badge */}
                {pkg.featured && pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full font-mono shadow-lg shadow-emerald-500/30 flex items-center gap-1.5 z-20">
                    <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                {/* Header & Description */}
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight ${
                    pkg.featured ? 'text-slate-950' : 'text-white'
                  }`}>
                    {pkg.name}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-5 min-h-[44px] ${
                    pkg.featured ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {pkg.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-[11px]">
                    <span className={`px-3 py-1 rounded-full flex items-center gap-1.5 font-semibold ${
                      pkg.featured
                        ? 'bg-slate-100 text-slate-800 border border-slate-200'
                        : 'bg-[#242424] text-slate-300 border border-white/5'
                    }`}>
                      <Clock className="w-3.5 h-3.5 opacity-70" />
                      <span>{pkg.deliveryTime}</span>
                    </span>
                    <span className={`px-3 py-1 rounded-full flex items-center gap-1.5 font-semibold ${
                      pkg.featured
                        ? 'bg-slate-100 text-slate-800 border border-slate-200'
                        : 'bg-[#242424] text-slate-300 border border-white/5'
                    }`}>
                      <RotateCcw className="w-3.5 h-3.5 opacity-70" />
                      <span>{pkg.revisionInfo}</span>
                    </span>
                  </div>
                </div>

                {/* Price Display & CTA Button */}
                <div>
                  <div className="mb-6">
                    {pkg.priceLabel && (
                      <span className={`text-[11px] font-mono font-semibold uppercase tracking-wider block mb-1 ${
                        pkg.featured ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        {pkg.priceLabel}
                      </span>
                    )}
                    <div className="flex items-baseline">
                      {pkg.pricePrefix && (
                        <span className={`text-lg sm:text-xl font-bold tracking-normal mr-1.5 align-top ${
                          pkg.featured ? 'text-slate-800' : 'text-slate-300'
                        }`}>
                          {pkg.pricePrefix}
                        </span>
                      )}
                      <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                        pkg.featured ? 'text-slate-950' : 'text-white'
                      }`}>
                        {pkg.priceValue}
                      </span>
                    </div>
                  </div>

                  <a
                    href={getWaLink(pkg.waMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 block hover:scale-[1.02] active:scale-[0.98] ${
                      pkg.featured
                        ? 'bg-slate-950 text-white hover:bg-emerald-400 hover:text-slate-950 shadow-lg'
                        : 'border border-white/20 text-white hover:bg-white hover:text-slate-950'
                    }`}
                  >
                    {pkg.id === 'custom-website' ? 'Tanya Penawaran' : 'Konsultasi Sekarang'}
                  </a>

                  <div className={`w-full h-[1px] my-8 ${
                    pkg.featured ? 'bg-slate-950/10' : 'bg-white/10'
                  }`} />
                </div>

                {/* Features List */}
                <div className="flex-grow">
                  <p className={`text-xs font-bold uppercase tracking-wider mb-4 font-mono ${
                    pkg.featured ? 'text-slate-950' : 'text-slate-300'
                  }`}>
                    {pkg.featuresHeader}
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className={`flex items-start gap-3 text-sm leading-snug ${
                        pkg.featured ? 'text-slate-800 font-medium' : 'text-slate-300'
                      }`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.featured ? 'text-slate-950' : 'text-white opacity-80'
                        }`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

          {/* 3. Add-On Services Section (Flexible Upsell Options) */}
          <div className="mt-20 sm:mt-24 pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 font-mono block mb-2">
                  Fleksibilitas Proyek
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Layanan Tambahan (Add-Ons)
                </h3>
              </div>
              <p className="text-slate-400 text-sm max-w-md">
                Dapat ditambahkan ke paket manapun sesuai kebutuhan spesifik bisnis Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnsList.map((addon) => (
                <div
                  key={addon.id}
                  className="bg-[#1A1A1A] border border-[#333333] hover:border-white/30 p-6 sm:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors">
                        {getAddOnIcon(addon.id)}
                      </div>
                      <span className="text-[11px] font-mono font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                        {addon.price}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 tracking-tight">
                      {addon.name}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Teaser */}
          <div className="mt-20 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-base">
              Butuh solusi kustom yang tidak ada di daftar di atas?
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
