
import React from 'react';
import { FAQS } from '../constants';

export const FAQ: React.FC<{ revealRef: any }> = ({ revealRef }) => (
  <section id="faq" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
    {/* Architectural Guidelines Background */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

    <div className="max-w-5xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal" ref={revealRef}>
         <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
               <span className="w-2 h-2 bg-slate-950 rounded-sm"></span>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Operational Support</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-[-0.07em] leading-none">
              Clinical <span className="text-slate-400">Guidelines.</span>
            </h2>
         </div>
         <p className="text-sm font-medium text-slate-500 max-w-xs leading-relaxed md:text-right">
            Standard operating protocols and patient guidelines for your upcoming consultation.
         </p>
      </div>

      <div className="grid gap-4">
        {FAQS.map((faq, idx) => (
          <details 
            key={idx} 
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200 reveal open:ring-1 open:ring-blue-100"
            ref={revealRef}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <summary className="p-6 md:p-8 flex items-center justify-between cursor-pointer list-none select-none relative overflow-hidden">
              <div className="flex items-center gap-6 relative z-10">
                 <span className="text-xs font-mono font-bold text-blue-200 group-hover:text-blue-500 transition-colors">0{idx + 1}</span>
                 <span className="text-lg md:text-xl font-bold text-slate-950 tracking-tight group-hover:text-blue-900 transition-colors">{faq.question}</span>
              </div>
              
              <div className="relative z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                 <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
              </div>

              {/* Hover highlight bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
            </summary>
            
            <div className="px-6 md:px-8 pb-8 pt-2 pl-[4.5rem]">
              <div className="h-px w-12 bg-slate-100 mb-6"></div>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);
