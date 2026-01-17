
import React from 'react';
import { CLINIC_PLACEHOLDERS } from '../constants';
import { Placeholder } from './Placeholder';

export const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 px-6 overflow-hidden relative">
    {/* Architectural Gradients & Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-20"></div>
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none opacity-40 animate-pulse"></div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-white/5">
        {/* BRAND IDENTITY */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-950 font-black text-xl shadow-xl hover:scale-110 transition-transform duration-300">
              <span className="text-slate-950">+</span>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-white tracking-tighter leading-none mb-0.5">
                <Placeholder text={CLINIC_PLACEHOLDERS.name} />
              </h2>
              <p className="text-[8px] font-black text-blue-500 uppercase tracking-[0.4em]">
                <Placeholder text={CLINIC_PLACEHOLDERS.specialization} /> Directorate
              </p>
            </div>
          </div>
          <p className="text-sm font-medium leading-relaxed max-w-sm text-slate-500">
            Professional clinical services delivering patient-first care and high-fidelity medical protocols for elite healthcare delivery.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-[9px] font-black text-white uppercase tracking-[0.4em] mb-4">Clinic Matrix</h3>
          <ul className="space-y-3 text-[10px] font-black uppercase tracking-[0.3em]">
            <li><a href="#about" className="text-slate-600 hover:text-white transition-all hover:translate-x-1 inline-block">Physician Base</a></li>
            <li><a href="#services" className="text-slate-600 hover:text-white transition-all hover:translate-x-1 inline-block">Specialties</a></li>
            <li><a href="#clinic" className="text-slate-600 hover:text-white transition-all hover:translate-x-1 inline-block">Location</a></li>
            <li><a href="#appointment" className="text-slate-600 hover:text-white transition-all hover:translate-x-1 inline-block">Booking</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="lg:col-span-4 space-y-5">
          <h3 className="text-[9px] font-black text-white uppercase tracking-[0.4em] mb-4">Communication</h3>
          <div className="space-y-3">
            <a href={`tel:${CLINIC_PLACEHOLDERS.phone}`} className="flex items-center gap-3 group" title="Call clinic">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2-0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2-0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <p className="text-base font-black text-white tracking-tighter group-hover:text-blue-500 transition-colors"><Placeholder text={CLINIC_PLACEHOLDERS.phone} /></p>
            </a>
            <a href={`mailto:${CLINIC_PLACEHOLDERS.email}`} className="flex items-center gap-3 group" title="Email clinic">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2-0 002-2V7a2 2-0 01-2-2H5a2 2-0 00-2 2v10a2 2-0 002 2z" /></svg>
              </div>
              <p className="text-xs font-medium text-slate-400 group-hover:text-blue-500 transition-colors tracking-tight"><Placeholder text={CLINIC_PLACEHOLDERS.email} /></p>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-[9px] font-black text-white uppercase tracking-[0.4em] mb-1.5 opacity-60">
            © 2026 Elite Medical Terminal.
          </p>
          <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">
            Developed by <a href="https://protyush.is-a.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-white transition-all underline decoration-blue-500/30 underline-offset-4">Protyush</a>
          </p>
        </div>
        
        <div className="flex gap-6">
           <a href="#" className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-600 hover:text-blue-500 transition-colors">Privacy</a>
           <a href="#" className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-600 hover:text-blue-500 transition-colors">Terms</a>
           <a href="#" className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-600 hover:text-blue-500 transition-colors">Compliance</a>
        </div>
      </div>
    </div>
  </footer>
);
