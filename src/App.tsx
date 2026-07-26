import React, { useState, useEffect } from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { ProcessFAQ } from './components/sections/ProcessFAQ';
import { Footer } from './components/sections/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'tentang', 'layanan', 'portofolio', 'proses', 'faq', 'kontak'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-slate-100 font-sans selection:bg-white selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Content */}
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ProcessFAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
