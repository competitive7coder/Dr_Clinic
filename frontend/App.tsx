
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import { CLINIC_PLACEHOLDERS } from './constants';
import { useScrollReveal } from './hooks/useScrollReveal';

const App: React.FC = () => {
  const addToRefs = useScrollReveal();
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      <Navbar revealRef={addToRefs} />
      
      <main>
        <Home reveal={addToRefs} />
      </main>
      
      <Footer revealRef={addToRefs} />

      {/* CENTERED COMMAND CAPSULE - OPTIMIZED FOR MOBILE */}
      <div 
        className={`fixed z-[5000] bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] transition-all duration-1000 ease-[cubic-bezier(0.19, 1, 0.22, 1)] 
          ${showSticky ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-90 pointer-events-none'}`}
      >
        <div className="glass p-1 rounded-[2rem] md:rounded-full shadow-[0_30px_80px_-15px_rgba(2,6,23,0.3)] flex flex-row items-center gap-1 border border-white/80">
          <a 
            href={`tel:${CLINIC_PLACEHOLDERS.phone}`} 
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-full text-[9px] md:text-[10px] font-black text-slate-950 shadow-sm hover:text-blue-600 transition-all active:scale-95 group overflow-hidden"
          >
            <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 5a2 2-0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2-0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="uppercase tracking-[0.3em] whitespace-nowrap">Call Hub</span>
          </a>

          <a 
            href="#appointment" 
            className="flex-[1.5] flex items-center justify-center gap-2.5 px-6 py-3 bg-slate-950 text-white rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] shadow-lg hover:bg-blue-600 transition-all active:scale-95 group"
          >
            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-white group-hover:text-blue-600 transition-all">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2-0 01-2-2H5a2 2-0 00-2 2v12a2 2-0 002 2z" />
              </svg>
            </div>
            <span className="whitespace-nowrap">Secure Slot</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
