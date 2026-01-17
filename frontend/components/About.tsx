
import React from 'react';
import { CLINIC_PLACEHOLDERS } from '../constants';
import { Placeholder } from './Placeholder';

export const About: React.FC<{ revealRef: any }> = ({ revealRef }) => {
  const highlightMatrix = [
    { 
      label: "Clinical Protocol", 
      value: `${CLINIC_PLACEHOLDERS.experience}+ Years`,
      desc: "Internal medicine mastery.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944"
    },
    { 
      label: "Patient Outcome", 
      value: "Advanced",
      desc: "Clinical patient advocacy.",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    },
    { 
      label: "Language", 
      value: "Native+",
      desc: CLINIC_PLACEHOLDERS.languages,
      icon: "M3 5h12M9 3v2m1.047 13.106l2.107 2.106"
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-40 px-6 bg-slate-50 relative overflow-hidden">
      {/* Texture & Structure */}
      <div className="noise-bg opacity-30"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white transform -skew-x-12 translate-x-1/3 pointer-events-none shadow-[-50px_0_100px_rgba(0,0,0,0.02)]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT */}
          <div className="lg:col-span-5 reveal relative flex justify-center lg:justify-end" ref={revealRef}>
            <div className="relative group w-full max-w-[420px]">
              
              {/* IMAGE FRAME */}
              <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-[0_40px_100px_-20px_rgba(2,6,23,0.1)] bg-slate-100 ring-1 ring-slate-200/50 group-hover:ring-blue-200 transition-all duration-1000">
                <img 
                  src={CLINIC_PLACEHOLDERS.doctorImage} 
                  alt={CLINIC_PLACEHOLDERS.doctorName} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1.5s] transform group-hover:scale-110" 
                />
                
                {/* Floating Name Plate */}
                <div className="absolute bottom-8 left-0 right-0 px-8">
                  <div className="glass p-6 rounded-3xl border-white/40 shadow-lg backdrop-blur-xl bg-white/60">
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2">Hey, i'm</p>
                     <p className="font-serif italic text-2xl text-slate-900 leading-none">{CLINIC_PLACEHOLDERS.doctorName}</p>
                  </div>
                </div>
              </div>

              {/* ROTATING SEAL  */}
              <div className="absolute -top-10 -right-10 z-20 hover:scale-110 transition-transform duration-500">
                 <div className="w-32 h-32 relative flex items-center justify-center bg-white rounded-full shadow-2xl border border-slate-100">
                    <svg className="w-full h-full text-slate-950 animate-[spin_12s_linear_infinite] p-2" viewBox="0 0 100 100">
                       <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                       <text width="100%">
                         <textPath xlinkHref="#curve" startOffset="0" className="text-[11px] font-black uppercase tracking-[0.22em] fill-current">
                           Board Certified • Official • Medical • 
                         </textPath>
                       </text>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-inner border-4 border-white">
                          <span className="font-serif italic text-lg font-bold">MD</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 space-y-12 reveal delay-200" ref={revealRef}>
            
            <div className="space-y-8 text-center lg:text-left">
               <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                     <div className="h-0.5 w-12 bg-blue-600"></div>
                     <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em]">Physician Directorate</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-slate-950 tracking-[-0.06em] leading-[0.9]">
                    Clinical <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-400 italic font-serif">Perspective.</span>
                  </h2>
               </div>
               
               <p className="text-lg md:text-xl font-medium text-slate-500 leading-relaxed tracking-tight max-w-2xl mx-auto lg:mx-0 border-l-[3px] border-slate-200 pl-8 py-2">
                 <span className="text-slate-900 font-bold">"</span>
                 <Placeholder text={CLINIC_PLACEHOLDERS.doctorBio} />
                 <span className="text-slate-900 font-bold">"</span>
               </p>
            </div>

            {/* EXPANDED DATA MATRIX */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {highlightMatrix.map((m, i) => (
                 <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col group hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] hover:-translate-y-2 transition-all duration-500 cursor-default relative overflow-hidden h-full">
                    
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={m.icon} /></svg>
                    </div>
                    
                    <div className="relative z-10 mt-auto">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 group-hover:text-blue-500 transition-colors">{m.label}</p>
                      <h4 className="text-2xl font-black text-slate-950 uppercase tracking-tighter mb-2 leading-none">{m.value}</h4>
                      <p className="text-xs font-bold text-slate-400 leading-relaxed group-hover:text-slate-600">{m.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            {/* CERTIFICATION BAR */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start opacity-100 transition-opacity">
               <div className="flex -space-x-3 transition-all duration-500">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-[4px] border-slate-50 bg-slate-200 overflow-hidden shadow-sm hover:translate-y-[-6px] hover:z-10 transition-transform duration-300">
                     <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="Patient Success" className="w-full h-full object-cover" />
                   </div>
                 ))}
               </div>
               <div>
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <p className="text-xs font-black text-slate-950 uppercase tracking-[0.3em] leading-none">Verified Provision Intake</p>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 text-center sm:text-left">Authenticated Clinical Protocol Standards 2026</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
