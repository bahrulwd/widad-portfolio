import React, { useState } from 'react';
import {
  MessageSquare,
  Layers,
  Terminal,
  Quote,
  User,
  ChevronDown,
  CheckCircle2,
  Rocket
} from 'lucide-react';
import { faqList, testimonialsList } from '../../data/services';

export const ProcessFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-[#0e0e0e] text-slate-100">

      {/* SECTION: 05 // PROSES */}
      <section id="proses" className="px-6 lg:px-8 py-24 max-w-[1440px] mx-auto flex flex-col gap-16 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-[#333333] pb-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold text-slate-400 tracking-[0.4em] uppercase font-mono">
              05 // PROSES
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white max-w-2xl tracking-tight">
              Work Flow.
            </h2>
          </div>
          <div className="hidden md:block max-w-sm text-right">
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Metodologi presisi untuk hasil yang tak tertandingi. Setiap langkah dirancang untuk efisiensi maksimal.
            </p>
          </div>
        </div>

        {/* Bento Grid Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[550px]">

          {/* Step 1: Konsultasi (4 cols) */}
          <div className="col-span-12 md:col-span-4 bg-[#201f1f] border border-[#333333] p-8 flex flex-col justify-between group hover:bg-[#2a2a2a] transition-colors duration-500 rounded-2xl">
            <div className="flex justify-between items-start">
              <span className="text-3xl font-extrabold text-white/20 group-hover:text-white transition-colors font-mono">
                01
              </span>
              <MessageSquare className="w-6 h-6 text-white/40 group-hover:rotate-12 transition-transform" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Konsultasi</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Diskusi mendalam untuk memahami visi, tantangan, dan tujuan bisnis Anda secara menyeluruh.
              </p>
            </div>
          </div>

          {/* Step 2: Perencanaan (5 cols) */}
          <div className="col-span-12 md:col-span-5 bg-[#201f1f] border border-[#333333] p-8 flex flex-col justify-between group hover:bg-[#2a2a2a] transition-colors duration-500 rounded-2xl">
            <div className="flex justify-between items-start">
              <span className="text-3xl font-extrabold text-white/20 group-hover:text-white transition-colors font-mono">
                02
              </span>
              <Layers className="w-6 h-6 text-white/40 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Perencanaan</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Penyusunan blueprint teknis dan strategi implementasi yang terukur untuk menjamin keberhasilan proyek.
              </p>
            </div>
          </div>

          {/* Center Decorative Image Slot (3 cols) */}
          <div className="col-span-12 md:col-span-3 relative overflow-hidden bg-[#201f1f] border border-[#333333] rounded-2xl min-h-[220px]">
            <div className="absolute inset-0 opacity-40 bg-gradient-to-t from-[#0e0e0e] to-transparent z-10" />
            <img
              src="/images/project-1.jpg"
              alt="System Ready Setup"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="text-xs font-mono font-bold text-white bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                SYSTEM READY
              </span>
            </div>
          </div>

          {/* Step 3: Pengembangan (5 cols) */}
          <div className="col-span-12 md:col-span-5 bg-[#201f1f] border border-[#333333] p-8 flex flex-col justify-between group hover:bg-[#2a2a2a] transition-colors duration-500 rounded-2xl">
            <div className="flex justify-between items-start">
              <span className="text-3xl font-extrabold text-white/20 group-hover:text-white transition-colors font-mono">
                03
              </span>
              <Terminal className="w-6 h-6 text-white/40 group-hover:translate-x-2 transition-transform" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Pengembangan</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Eksekusi kode dengan standar industri tertinggi, mengutamakan performa dan skalabilitas sistem.
              </p>
            </div>
          </div>

          {/* Step 4 & 5 Mini-Grid (7 cols) */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Step 4 QC */}
            <div className="bg-[#201f1f] border border-[#333333] p-8 flex flex-col justify-between group hover:bg-[#2a2a2a] transition-colors duration-500 rounded-2xl">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono group-hover:text-white transition-colors">
                04 QC
              </span>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <h4 className="text-xl font-bold text-white">Quality Control</h4>
              </div>
            </div>

            {/* Step 5 Launch */}
            <div className="bg-white text-slate-950 p-8 flex flex-col justify-between group hover:bg-emerald-400 transition-colors duration-500 rounded-2xl shadow-xl">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-widest font-mono">
                05 LAUNCH
              </span>
              <div className="flex items-center gap-3">
                <Rocket className="w-6 h-6 text-slate-950 shrink-0" />
                <h4 className="text-xl font-extrabold text-slate-950">Live Release</h4>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: 06 // VOICES (Word Wrapped Grid for Clean UX) */}
      <section className="bg-[#0e0e0e] py-24 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

          <div className="mb-12">
            <span className="text-xs font-semibold text-slate-400 tracking-[0.4em] uppercase block font-mono">
              06 // TESTIMONIALS
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white mt-3 tracking-tight">
              Voices of Trust.
            </h2>
          </div>

          {/* Grid Layout with Word Wrapping */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsList.map((testi) => (
              <div
                key={testi.id}
                className="bg-[#1A1A1A] border border-[#333333] p-8 flex flex-col justify-between gap-6 rounded-2xl hover:border-white/30 transition-all duration-300 shadow-lg"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-white/20" />
                  <p className="text-slate-200 text-sm sm:text-base italic leading-relaxed break-words">
                    "{testi.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#201f1f] border border-[#333333] flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="font-bold text-white text-sm truncate">{testi.author}</div>
                    <div className="text-xs text-slate-400 font-mono truncate">{testi.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: 07 // INQUIRY */}
      <section id="faq" className="px-6 lg:px-8 py-24 max-w-4xl mx-auto w-full border-t border-white/5">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.4em] uppercase block font-mono">
            07 // INQUIRY
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight">
            F.A.Q.
          </h2>
        </div>

        <div className="flex flex-col gap-px bg-[#333333] border border-[#333333] rounded-2xl overflow-hidden">
          {faqList.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="bg-[#0e0e0e] transition-colors">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 sm:p-8 text-left hover:bg-[#201f1f] transition-colors"
                >
                  <span className="text-lg sm:text-xl font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full bg-[#201f1f] border border-[#333333] transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 text-sm sm:text-base text-slate-400 leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
