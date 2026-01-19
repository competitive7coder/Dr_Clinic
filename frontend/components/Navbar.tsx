import React, { useState, useEffect } from 'react';
import { CLINIC_PLACEHOLDERS } from '../constants';
import { Placeholder } from './Placeholder';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', id: 'about' },
    { name: 'Specialties', id: 'services' },
    { name: 'The Space', id: 'clinic' },
    { name: 'Insights', id: 'reviews' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[4000] transition-all duration-700 ${scrolled ? 'py-3 md:py-4' : 'py-6 md:py-10'}`}>
        <div className={`max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled ? 'glass rounded-[2rem] md:rounded-full shadow-2xl py-2 md:py-3 max-w-[95%] border border-white/40 ring-1 ring-slate-900/5' : 'bg-transparent py-2'}`}>
          <a href="#home" className="flex items-center gap-3 md:gap-4 group outline-none">
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-slate-950 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500 shadow-lg scale-95 group-hover:scale-100">
              <span className="text-white font-black text-xl md:text-2xl leading-none relative z-10">+</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter text-slate-950 leading-none group-hover:text-blue-600 transition-colors">
                <Placeholder text={CLINIC_PLACEHOLDERS.name.split(' ')[0]} />
              </span>
              <span className="text-[7px] md:text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mt-0.5">Clinical HUB</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-blue-600 transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <div className="h-4 w-px bg-slate-200 mx-2"></div>
            {/* <a
              href="https://protyush.is-a.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] hover:text-blue-600 transition-colors mr-2 group flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100"></span>
              by Protyush
            </a> */}
            <a
              href="#appointment"
              className="px-6 py-3 bg-slate-950 text-white rounded-xl text-[9px] font-black uppercase tracking-[0.3em] hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-slate-950/20"
            >
              Secure Slot
            </a>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-3 bg-slate-950 text-white rounded-xl active:scale-90 transition-all shadow-xl"
          >
            <div className="w-5 h-0.5 bg-white mb-1"></div>
            <div className="w-3 h-0.5 bg-white mb-1 ml-auto"></div>
            <div className="w-5 h-0.5 bg-white ml-auto"></div>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[5000] transition-all duration-700 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-full sm:w-[450px] bg-white p-8 md:p-12 flex flex-col transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black">+</div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Triage Navigation</span>
            </div>
            <button type="button" aria-label="Close navigation menu" onClick={() => setIsMenuOpen(false)} className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-4xl font-black text-slate-950 tracking-tighter hover:text-blue-600 hover:translate-x-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}.
              </a>
            ))}
            <a
              href="#appointment"
              className="block w-full py-6 bg-slate-950 text-white rounded-2xl font-black text-lg text-center mt-8 shadow-2xl shadow-slate-950/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Secure Appointment
            </a>
          </div>

          <div className="mt-auto pt-12 border-t border-slate-50 space-y-4 text-center">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">Operational Support</p>
            <p className="text-xl font-black text-slate-950 tracking-tighter">
              <Placeholder text={CLINIC_PLACEHOLDERS.phone} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
