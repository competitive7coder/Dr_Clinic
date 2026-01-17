
import React from 'react';
import { SERVICES_DATA } from '../constants';

export const Services: React.FC<{ revealRef: any }> = ({ revealRef }) => (
  <section id="services" className="py-12 md:py-20 px-6 bg-slate-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a03_1px,transparent_1px),linear-gradient(to_bottom,#0f172a03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
    
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-12 gap-6 reveal" ref={revealRef}>
         <div className="space-y-3">
           <div className="flex items-center gap-3">
             <div className="h-0.5 w-6 bg-blue-600 rounded-full"></div>
             <span className="text-blue-600 font-black text-[9px] uppercase tracking-[0.5em]">Provision Matrix</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-[-0.07em] leading-none">
             Advanced <br/> <span className="text-blue-600 italic font-serif">Protocols.</span>
           </h2>
         </div>
         <p className="text-xs md:text-sm text-slate-400 font-medium max-w-sm md:text-right leading-relaxed tracking-tight">
          [SOME RANDOM DETAILS ABOUT CLINIC SERVICES WHICH WILL BE ADDED ACCORDING TO CLIENT REQUIREMENTS]
         </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICES_DATA.map((s, idx) => (
          <div 
            key={s.id} 
            className="group relative p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.15)] hover:-translate-y-2 transition-all duration-700 reveal cursor-pointer overflow-hidden z-0" 
            ref={revealRef} 
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Spotlight Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-full blur-3xl -translate-y-10 translate-x-10 group-hover:bg-blue-600/10 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-slate-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={s.icon} />
                </svg>
              </div>
              
              <h3 className="text-lg font-black text-slate-950 mb-3 tracking-tighter leading-none group-hover:text-blue-600 transition-colors">
                {s.title}
              </h3>
              
              <p className="text-xs text-slate-500 font-medium leading-relaxed tracking-tight mb-6 group-hover:text-slate-600 transition-colors min-h-[3rem] opacity-80 group-hover:opacity-100">
                {s.description}
              </p>
              
              <div className="mt-auto inline-flex items-center gap-2 py-3 px-1 border-t border-slate-50 w-full group/link">
                 <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest group-hover/link:text-blue-600 group-hover/link:tracking-[0.2em] transition-all">Provision Intake</span>
                 <svg className="w-2.5 h-2.5 text-blue-600 translate-x-0 group-hover/link:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
              </div>
            </div>

            {/* Background Index Number */}
            <div className="absolute bottom-[-10px] right-2 opacity-0 group-hover:opacity-10 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
               <span className="text-6xl font-black text-blue-900 italic font-serif tracking-tighter">0{idx + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
