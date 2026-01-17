
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

export const Gallery: React.FC<{ revealRef: any }> = ({ revealRef }) => (
  <section id="gallery" className="py-16 md:py-20 px-6 bg-white overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-8 reveal" ref={revealRef}>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-8 bg-blue-600 rounded-full"></div>
            <span className="text-blue-600 font-black text-[9px] uppercase tracking-[0.5em]">Facility Spaces</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-[-0.07em] leading-none">
            Curated <span className="text-blue-600 italic font-serif">Environments.</span>
          </h2>
        </div>
        <p className="text-sm text-slate-400 font-medium max-w-xs md:text-right leading-relaxed">
          Environments designed for maximum healing efficiency and architectural precision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {GALLERY_IMAGES.map((img, idx) => (
          <div 
            key={img.id} 
            className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl reveal border border-slate-50 bg-slate-100 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 cursor-none" 
            ref={revealRef}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* ARCHITECTURAL IMAGE TREATMENT  */}
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover transform scale-110 group-hover:scale-100 group-hover:rotate-1 transition-all duration-[1.5s] ease-out grayscale-[10%] group-hover:grayscale-0" 
            />
            
            {/* CINEMATIC FOCUS OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8">
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.5em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.category}</span>
              <h3 className="text-xl font-black text-white tracking-tighter leading-none translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{img.title}</h3>
              <div className="w-8 h-0.5 bg-blue-600 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200"></div>
            </div>
            
            {/* Lens Shine Effect */}
            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
