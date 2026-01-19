import React, { useState } from 'react';
import { FAQS as INITIAL_FAQS } from '../constants';

export const FAQ: React.FC<{ revealRef: any }> = ({ revealRef }) => {
  const [faqs, setFaqs] = useState(
    INITIAL_FAQS.map((faq, i) => ({ ...faq, open: i === 0 })) 
  );

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false, 
      }))
    );
  };

  return (
    <section id="faq" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal" ref={revealRef}>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-2 h-2 bg-slate-950 rounded-sm"></span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">[Operational Support]</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-[-0.07em] leading-none">
              [Clinical] <span className="text-blue-600">[Guidelines]</span>
            </h2>
          </div>
          <p className="text-sm font-medium text-slate-500 max-w-xs leading-relaxed md:text-right">
            Standard operating protocols and patient guidelines for your upcoming consultation.
          </p>
        </div>

        {/* FAQ List */}
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl border transition-all duration-700 ${
                faq.open ? "border-blue-200 shadow-2xl translate-y-[-4px]" : "border-slate-200 hover:shadow-lg"
              }`}
            >
              {/* Trigger Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 md:p-8 flex items-center justify-between cursor-pointer select-none outline-none"
              >
                <div className="flex items-center gap-6">
                  <span className={`text-xs font-mono font-bold transition-colors duration-500 ${faq.open ? 'text-blue-600' : 'text-blue-200'}`}>
                    0{index + 1}
                  </span>
                  <span className={`text-lg md:text-xl font-bold tracking-tight text-left transition-colors duration-500 ${faq.open ? 'text-blue-900' : 'text-slate-950'}`}>
                    {faq.question}
                  </span>
                </div>

                {/* Animated Icon */}
                <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-1000 ${
                  faq.open ? 'bg-blue-600 text-white rotate-[360deg]' : 'bg-slate-50 text-slate-400'
                }`}>
                  <div className="absolute w-3 h-0.5 bg-current rounded-full"></div>
                  <div className={`absolute w-3 h-0.5 bg-current rounded-full transition-transform duration-1000 ${faq.open ? 'rotate-0' : 'rotate-90'}`}></div>
                </div>
              </button>

              <div 
                className={`grid transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  faq.open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 md:px-8 pb-10 pt-2 md:pl-[5.5rem]">
                    <div className={`h-px bg-blue-600/30 mb-6 transition-all duration-[1500ms] ${faq.open ? 'w-24' : 'w-0'}`}></div>
                    
                    <p className={`text-slate-500 text-base md:text-lg leading-relaxed font-medium transition-all duration-1000 delay-300 ${
                      faq.open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};