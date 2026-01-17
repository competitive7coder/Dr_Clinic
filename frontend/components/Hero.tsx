
import React from 'react';
import { CLINIC_PLACEHOLDERS } from '../constants';
import { Placeholder } from './Placeholder';

export const Hero: React.FC<{ revealRef: any }> = ({ revealRef }) => (
  <section id="home" className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 px-6 overflow-hidden bg-white min-h-[auto] lg:min-h-[600px] flex items-center">
    {/* Cinematic Background Atmosphere */}
    <div className="noise-bg opacity-40"></div>
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-drift"></div>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50/80 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4 pointer-events-none animate-drift" style={{ animationDelay: '3s' }}></div>
    
    {/* Architectural Grid Lines */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>
    <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-900/5 hidden lg:block"></div>
    <div className="absolute right-6 top-0 bottom-0 w-px bg-slate-900/5 hidden lg:block"></div>
    
    <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10 w-full">
      <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
        
        {/* LIVE STATUS PILL */}
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start reveal" ref={revealRef}>
          <div className="inline-flex items-center gap-3 pl-2 pr-5 py-1.5 bg-slate-900 rounded-full shadow-[0_10px_30px_-10px_rgba(2,6,23,0.4)] border border-slate-800 ring-1 ring-white/10 cursor-default group hover:scale-105 transition-transform duration-500">
            <div className="h-5 w-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </div>
            <p className="text-[9px] font-black text-slate-200 uppercase tracking-[0.3em] leading-none group-hover:text-white transition-colors">
              System Online • <span className="text-blue-400"><Placeholder text={CLINIC_PLACEHOLDERS.tagline} /></span>
            </p>
          </div>
        </div>

        {/* MAMMOTH TYPOGRAPHY - Compacted */}
        <div className="space-y-6 relative">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-black text-slate-950 leading-[0.9] tracking-[-0.08em] reveal" ref={revealRef} style={{ transitionDelay: '100ms' }}>
            <span className="block hover:translate-x-2 transition-transform duration-700 cursor-default">
              <Placeholder text={CLINIC_PLACEHOLDERS.name.split(' ')[0]} />
            </span>
            <span className="relative block mt-1 group">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 italic font-serif tracking-tight pr-4 pb-1 transition-all duration-700 group-hover:tracking-normal">
                Clinical
              </span>
              <span className="absolute -bottom-1 left-0 w-20 h-2 bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
            </span>
            <span className="block text-slate-900 hover:translate-x-2 transition-transform duration-700 delay-75 cursor-default">
              Practice.
            </span>
          </h1>

          <div className="reveal space-y-8" ref={revealRef} style={{ transitionDelay: '200ms' }}>
            <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed tracking-tight border-l-4 border-blue-600/20 pl-6 lg:pl-6">
              <Placeholder text={CLINIC_PLACEHOLDERS.heroSubtitle} />
            </p>
            
            {/* STATS ROW */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12 py-4">
               {/* Experience */}
               <div className="group cursor-default">
                  <h4 className="text-3xl font-black text-slate-950 tracking-tighter leading-none group-hover:text-blue-600 transition-colors">15+</h4>
                  <div className="h-0.5 w-8 bg-slate-200 mt-2 mb-2 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500"></div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Experience</p>
               </div>
               
               {/* Vertical Divider */}
               <div className="w-px h-10 bg-slate-200 rotate-12 hidden sm:block"></div>
               
               {/* Patients */}
               <div className="group cursor-default">
                  <h4 className="text-3xl font-black text-slate-950 tracking-tighter leading-none group-hover:text-blue-600 transition-colors">1000+</h4>
                  <div className="h-0.5 w-8 bg-slate-200 mt-2 mb-2 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500"></div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Patients</p>
               </div>

               {/* Vertical Divider */}
               <div className="w-px h-10 bg-slate-200 rotate-12 hidden sm:block"></div>

               {/* Rating */}
               <div className="group cursor-default">
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                     <h4 className="text-3xl font-black text-slate-950 tracking-tighter leading-none group-hover:text-blue-600 transition-colors">4.8</h4>
                  </div>
                  <div className="h-0.5 w-8 bg-slate-200 mt-2 mb-2 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500"></div>
                  <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Avg Rating</p>
                      <div className="flex text-blue-500">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* HIGH-IMPACT CTAS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 reveal" ref={revealRef} style={{ transitionDelay: '300ms' }}>
          <a href="#appointment" className="group relative px-8 py-5 bg-slate-950 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-[0_20px_40px_-10px_rgba(2,6,23,0.4)] transition-all hover:scale-[1.02] active:scale-95 text-center overflow-hidden border border-slate-800">
            <span className="relative z-10 flex items-center justify-center gap-3">
              Request Intake
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-colors">
                <svg className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </span>
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
            {/* Shimmer Effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer" />
          </a>
          
          <a href={`tel:${CLINIC_PLACEHOLDERS.phone}`} className="group px-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.3em] text-slate-950 hover:border-blue-600 hover:text-blue-600 transition-all text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Direct Line</span>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors"></div>
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN - EXECUTIVE DASHBOARD PORTRAIT  */}
      <div className="hidden lg:block lg:col-span-5 relative reveal h-full flex items-center justify-center" ref={revealRef} style={{ transitionDelay: '500ms' }}>
        <div className="relative w-full max-w-[420px] perspective-1000">
          
          {/* Main Architectural Frame */}
          <div className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-[0_40px_80px_-20px_rgba(2,6,23,0.15)] border-[8px] border-white ring-1 ring-slate-200 group transition-all duration-1000 transform hover:rotate-y-2 hover:scale-[1.02]">
            <img 
              src={CLINIC_PLACEHOLDERS.doctorImage} 
              alt={CLINIC_PLACEHOLDERS.doctorName} 
              className="w-full h-full object-cover grayscale-[10%] contrast-[1.1] transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105" 
            />
            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent mix-blend-multiply opacity-80"></div>
            
            {/* Internal Label */}
            <div className="absolute bottom-8 left-8 text-white">
                <div className="inline-block px-2.5 py-1 bg-blue-600 text-white text-[8px] font-black uppercase tracking-[0.3em] mb-2 rounded-md shadow-lg">Medical Director</div>
                <p className="font-serif italic text-2xl opacity-90">{CLINIC_PLACEHOLDERS.doctorName}</p>
            </div>
          </div>
          
          {/* FLOATING GLASS CARD: TENURE */}
          <div className="absolute top-8 -left-12 z-30 animate-float hover:z-50">
            <div className="glass px-6 py-4 rounded-[1.5rem] shadow-[0_20px_40px_-10px_rgba(2,6,23,0.15)] border border-white/60 flex items-center gap-4 rotate-[-6deg] hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer backdrop-blur-xl bg-white/70">
              <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-blue-500 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 font-serif italic text-xl font-bold text-white">15</span>
              </div>
              <div className="pr-1">
                <p className="text-xs font-black text-slate-950 tracking-tight leading-none mb-0.5">Years Practice</p>
                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.3em]">Senior Level</p>
              </div>
            </div>
          </div>

          {/* FLOATING DARK CARD: METRICS */}
          <div className="absolute bottom-12 -right-8 z-20 bg-slate-950 text-white p-6 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(2,6,23,0.5)] border border-white/10 w-[220px] animate-float-slow hover:bg-blue-900 transition-colors duration-700 cursor-pointer">
             <div className="flex flex-col gap-4">
               <div className="flex justify-between items-start">
                   <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white backdrop-blur-md">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                   </div>
                   <div className="text-right">
                       <p className="text-2xl font-black tracking-tighter">1.2k</p>
                       <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Cases</p>
                   </div>
               </div>
               <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                   <div className="bg-blue-500 h-full w-[85%] rounded-full animate-[shimmer_2s_infinite]"></div>
               </div>
               <p className="text-[8px] font-black text-blue-300 uppercase tracking-[0.4em]">Success Rate 98%</p>
             </div>
          </div>
          
        </div>
      </div>
    </div>
    
    {/* SCROLL DISCOVERY INTERACTION */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60 animate-bounce cursor-pointer hover:opacity-100 transition-opacity">
      <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-400 writing-mode-vertical">Scroll</span>
      <div className="w-[1px] h-8 bg-gradient-to-b from-slate-300 to-blue-500"></div>
    </div>
  </section>
);
