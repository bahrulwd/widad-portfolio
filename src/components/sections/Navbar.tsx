import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../../data/config';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#hero', id: 'hero' },
    { name: 'Tentang', href: '#tentang', id: 'tentang' },
    { name: 'Layanan', href: '#layanan', id: 'layanan' },
    { name: 'Portofolio', href: '#portofolio', id: 'portofolio' },
    { name: 'Proses', href: '#proses', id: 'proses' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#0e0e0e]/75 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto h-20 px-6 lg:px-8 flex items-center justify-between relative">
        {/* Brand Logo Image */}
        <a href="#hero" className="flex items-center gap-4 group shrink-0">
          <img
            src="/images/logo full.png"
            alt={siteConfig.name}
            className="h-11 sm:h-13 w-auto object-contain hover:opacity-90 transition-opacity"
          />
        </a>

        {/* Desktop Nav Links (Centered) */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0e0e]/95 backdrop-blur-2xl border-b border-white/10 px-6 pt-4 pb-6 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 rounded-full bg-white text-slate-950 text-center font-semibold text-sm hover:bg-emerald-400 transition-all shadow-md"
            >
              Konsultasi via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
