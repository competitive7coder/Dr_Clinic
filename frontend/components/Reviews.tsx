
import React from 'react';
import { REVIEWS } from '../constants';

export const Reviews: React.FC<{ revealRef: any }> = ({ revealRef }) => (
  <section id="reviews" className="py-16 md:py-24 px-6 bg-slate-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>

    <div className="max-w-6xl mx-auto relative z-10">
      {/* SECTION HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 gap-8 reveal" ref={revealRef}>
        <div className="space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
             <div className="h-[1px] w-10 bg-blue-600"></div>
             <span className="text-blue-600 font-black text-[9px] uppercase tracking-[0.5em]">Global Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-[-0.08em] leading-[0.9]">
            Patient <br/><span className="text-blue-600 italic font-serif">Outcomes.</span>
          </h2>
        </div>

        {/* SATISFACTION INDEX */}
        <div className="bg-white p-2.5 rounded-[2rem] shadow-xl border border-slate-100 flex items-center gap-5 group hover:scale-[1.02] transition-transform duration-500 cursor-default">
           <div className="bg-slate-950 text-white px-8 py-6 rounded-[1.5rem] flex flex-col items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
              <span className="text-3xl font-black tracking-tighter leading-none">4.9</span>
              <span className="text-[8px] font-black uppercase tracking-widest text-blue-400 group-hover:text-white mt-1.5 transition-colors">Index Score</span>
           </div>
           <div className="pr-6">
              <div className="flex gap-1 mb-1.5">
                 {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-blue-600 fill-current animate-subtle-pulse" style={{ animationDelay: `${i * 100}ms` }} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                 ))}
              </div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Verified Patient Hub</p>
           </div>
        </div>
      </div>

      {/* REVIEWS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {REVIEWS.map((r, idx) => (
          <div 
            key={r.id} 
            className="p-8 md:p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-700 reveal flex flex-col group relative overflow-hidden" 
            ref={revealRef} 
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Treatment Tag */}
            <div className="absolute top-6 right-8 z-10">
               <span className="px-3 py-1 bg-slate-50 text-[8px] font-black text-slate-400 uppercase tracking-widest rounded-full border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {r.treatment}
               </span>
            </div>
            
            {/* Watermark Quote Icon */}
            <div className="absolute -bottom-4 -right-4 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform rotate-12">
               <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>

            <div className="flex items-center gap-1 mb-6 relative z-10">
               {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-3 h-3 ${i < r.rating ? 'text-blue-600 fill-current' : 'text-slate-100 fill-current'} group-hover:scale-110 transition-transform duration-300`} style={{ transitionDelay: `${i * 50}ms` }} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
               ))}
            </div>

            <p className="text-slate-700 font-medium text-base md:text-lg leading-relaxed mb-8 grow tracking-tight relative z-10">
              "{r.text}"
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-slate-50 relative z-10">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center text-white text-[10px] font-black group-hover:bg-blue-600 transition-all shadow-lg shrink-0 relative">
                     {r.name.split(' ').map(n => n[0]).join('')}
                     {/* Verified Check */}
                     <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                     </div>
                  </div>
                  <div>
                    <p className="text-base font-black text-slate-950 tracking-tighter leading-none group-hover:text-blue-600 transition-colors">{r.name}</p>
                    <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1.5">Verified Patient</p>
                  </div>
               </div>
               <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">{r.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
