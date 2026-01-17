import React from 'react';
import { CLINIC_PLACEHOLDERS } from '../constants';
import { Placeholder } from './Placeholder';

export const ClinicInfo: React.FC<{ revealRef: any }> = ({ revealRef }) => {
  const infoMatrix = [
    { 
      label: "Consultation Hub", 
      value: CLINIC_PLACEHOLDERS.timings, 
      sub: "Active Operating Window",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
    },
    { 
      label: "Clinical Availability", 
      value: CLINIC_PLACEHOLDERS.days, 
      sub: "Operational Weekly Cycle",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14" 
    },
    { 
      label: "Communication Hub", 
      value: CLINIC_PLACEHOLDERS.phone, 
      sub: "24/7 Priority Support",
      icon: "M3 5a2 2-0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2-0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
    }
  ];

  // Map query for embedding
  const mapQuery = encodeURIComponent(`${CLINIC_PLACEHOLDERS.address}, ${CLINIC_PLACEHOLDERS.cityPin}`);

  return (
    <section id="clinic" className="py-16 md:py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-10 reveal" ref={revealRef}>
            <div className="space-y-5 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                 <div className="h-[1px] w-10 bg-blue-600"></div>
                 <span className="text-blue-600 font-black text-[9px] uppercase tracking-[0.5em]">Physical Directorate</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-950 tracking-[-0.08em] leading-[0.9]">
                The Clinical <br/><span className="text-blue-600 italic font-serif">Aperture.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                Centrally located clinical base serving the medical heart of <Placeholder text={CLINIC_PLACEHOLDERS.cityState} />.
              </p>
            </div>

            {/* OPERATIONAL PARAMETERS MATRIX */}
            <div className="space-y-5">
              {/* PRIMARY ADDRESS CARD */}
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group transition-all duration-700 hover:bg-white hover:shadow-2xl hover:border-blue-100 hover:-translate-y-1 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100/50 rounded-full blur-2xl -translate-y-10 translate-x-10 group-hover:bg-blue-600/10 transition-colors"></div>
                 <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center relative z-10">
                   <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                   </div>
                   <div className="space-y-1.5">
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] leading-none mb-1 group-hover:text-blue-500 transition-colors">Clinical Location</p>
                     <p className="text-xl font-black text-slate-950 tracking-tighter leading-tight group-hover:text-blue-900 transition-colors">
                        {CLINIC_PLACEHOLDERS.address}, {CLINIC_PLACEHOLDERS.area}, {CLINIC_PLACEHOLDERS.cityPin}
                     </p>
                     <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic group-hover:text-slate-500">Official Directorate Registered Address</p>
                   </div>
                 </div>
              </div>

              {/* TIMINGS & AVAILABILITY TILES */}
              <div className="grid md:grid-cols-3 gap-5">
                {infoMatrix.map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 text-center space-y-3 group hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-700">
                    <div className="w-10 h-10 mx-auto bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-50 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={item.icon} /></svg>
                    </div>
                    <div>
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">{item.label}</p>
                      <p className="text-xs font-black text-slate-950 uppercase tracking-tight mb-1">{item.value}</p>
                      <p className="text-[7px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-blue-400 transition-colors">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left pt-2">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-slate-950 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.5em] shadow-2xl hover:bg-blue-600 transition-all hover:scale-[1.03] active:scale-95 relative overflow-hidden"
              >
                <span className="relative z-10">Start Navigation</span>
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                {/* Pulse Glow */}
                <div className="absolute inset-0 rounded-[1.5rem] ring-4 ring-blue-500/0 group-hover:ring-blue-500/30 transition-all duration-500"></div>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE MAP PORTAL */}
          <div className="lg:col-span-5 reveal h-full min-h-[400px]" ref={revealRef} style={{ transitionDelay: '300ms' }}>
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(2,6,23,0.25)] border-[8px] border-white bg-slate-100 group transform transition-transform duration-700 hover:scale-[1.01]">
                
                {/* MAP IFRAME */}
                <iframe 
                    width="100%" 
                    height="100%" 
                    id="gmap_canvas" 
                    src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`} 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full grayscale-[100%] contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 transition-all duration-[1.5s] ease-in-out"
                    title="Clinic Location"
                ></iframe>

                {/* ATMOSPHERIC OVERLAY */}
                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none mix-blend-multiply group-hover:bg-transparent transition-colors duration-700"></div>
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.1)]"></div>
                
                {/* FLOATING GLASS STATUS CARD */}
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/80 backdrop-blur-xl p-5 rounded-[1.5rem] border border-white/60 shadow-xl flex items-center gap-4 hover:bg-white/95 transition-colors duration-300">
                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30 shrink-0">
                             <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                        </div>
                        <div className="min-w-0">
                            <p className="text-lg font-black text-slate-950 tracking-tighter leading-none truncate"><Placeholder text={CLINIC_PLACEHOLDERS.name} /></p>
                            <div className="flex items-center gap-2 mt-1.5">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] truncate">Official Hub Access</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CORNER ACCENT */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-slate-950 text-white text-[8px] font-black uppercase tracking-[0.2em] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-10px] group-hover:translate-y-0 shadow-lg pointer-events-none">
                    Live Map
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
