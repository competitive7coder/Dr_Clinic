
import React from 'react';

const REASONS = [
  { title: "Friendly Consultation", desc: "Patient-first approach with calm, friendly, and thorough clinical consultations that prioritize your peace of mind.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { title: "Clinical Trust", desc: "Serving as a premier healthcare provider for hundreds of families with a legacy of accuracy and empathy.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944" },
  { title: "Advanced Modalities", desc: "Utilizing modern diagnostic imaging and precision medical tools for comprehensive health management.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
];

export const WhyChooseUs: React.FC<{ revealRef: any }> = ({ revealRef }) => (
  <section className="py-12 md:py-20 px-6 bg-white relative overflow-hidden">
    {/* Architectural Accent */}
    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
    <div className="absolute right-0 bottom-0 w-64 h-64 bg-slate-50 rounded-full blur-[80px] -z-10"></div>
    
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 reveal" ref={revealRef}>
        <div className="space-y-3">
          <div className="flex items-center gap-3 justify-center md:justify-start">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
             <span className="text-blue-600 font-black text-[9px] uppercase tracking-[0.5em]">Standard of Provision</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-[-0.08em] leading-none text-center md:text-left">
            Elite Clinical <br/> <span className="text-blue-600 italic font-serif">Values.</span>
          </h2>
        </div>
        <p className="text-xs md:text-base text-slate-400 font-medium max-w-sm text-center md:text-right leading-relaxed mx-auto md:mx-0">
          We maintain a rigid architectural protocol for patient intake and clinical diagnosis.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {REASONS.map((reason, idx) => (
          <div 
            key={idx} 
            className="group p-8 md:p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all duration-700 reveal flex flex-col h-full relative overflow-hidden hover:scale-[1.02]" 
            ref={revealRef} 
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            {/* Subtle Grid Pattern on Hover */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>

            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 border border-slate-100 relative z-10 group-hover:shadow-lg group-hover:shadow-blue-600/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={reason.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-black text-slate-950 mb-4 tracking-tighter leading-none group-hover:text-blue-600 transition-colors relative z-10">
              {reason.title}
            </h3>
            <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed tracking-tight grow relative z-10">
              {reason.desc}
            </p>
            
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-all relative z-10">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-600">Clinical Code 00{idx+1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
