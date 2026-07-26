import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Sparkles, CheckCircle, MessageSquare } from 'lucide-react';
import { siteConfig } from '../../data/config';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="kontak" className="py-24 relative overflow-hidden bg-[#0e0e0e]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />}>
            HUBUNGI SAYA
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
            Mulai Diskusi <span className="text-slate-400">Proyek Anda</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Siap membangun aplikasi web atau sistem digital berkinerja tinggi? Kirimkan pesan atau berkonsultasi langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-4">
            <Card className="p-6 bg-[#201f1f] border-[#333333]" hoverEffect={false}>
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-[#0e0e0e] border border-[#333333] text-emerald-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email Professional</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-base font-bold text-white hover:text-emerald-400 transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-[#201f1f] border-[#333333]" hoverEffect={false}>
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-[#0e0e0e] border border-[#333333] text-emerald-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">WhatsApp / Telepon</p>
                  <a href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" className="text-base font-bold text-white hover:text-emerald-400 transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-[#201f1f] border-[#333333]" hoverEffect={false}>
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-[#0e0e0e] border border-[#333333] text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Lokasi</p>
                  <p className="text-base font-bold text-white">{siteConfig.location} (Remote Available)</p>
                </div>
              </div>
            </Card>

            <div className="p-6 rounded-2xl bg-[#1c1b1b] border border-[#333333]">
              <h4 className="text-sm font-bold text-white mb-2">Komitmen Respon Cepat</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Setiap pesan dan permintaan estimasi proyek akan direspon dalam kurun waktu kurang dari 24 jam.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <Card className="lg:col-span-7 p-8 bg-[#201f1f] border-[#333333]" hoverEffect={false}>
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Pesan Berhasil Terkirim!</h3>
                <p className="text-slate-400 text-sm max-w-md mb-6">
                  Terima kasih telah menghubungi. Saya akan membaca rincian proyek Anda dan membalas secepatnya.
                </p>
                <Button variant="secondary" size="md" onClick={() => setSubmitted(false)}>
                  Kirim Pesan Lain
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                      Nama Anda *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nama Lengkap"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0e0e] border border-[#333333] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                      Email Anda *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0e0e] border border-[#333333] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                    Subjek / Tipe Proyek *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Pengembangan Website Next.js / Redesain UI"
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0e0e] border border-[#333333] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                    Pesan & Rincian *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Jelaskan kebutuhan proyek, target waktu, dan anggaran Anda..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0e0e] border border-[#333333] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  iconRight={<Send className="w-4 h-4" />}
                  className="w-full bg-white hover:bg-emerald-400 text-slate-950 font-bold"
                >
                  Kirim Pesan
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
