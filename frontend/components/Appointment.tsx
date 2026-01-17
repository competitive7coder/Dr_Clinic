
import React, { useState } from 'react';
import { CLINIC_PLACEHOLDERS } from '../constants';
import { Placeholder } from './Placeholder';

// Production API URL Strategy
const getApiUrl = () => {
  // In a real Vite app: import.meta.env.VITE_API_URL
  // For this environment, we default to localhost or relative path if served together
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    return '/api/appointments'; // Production: Served from same origin or proxy
  }
  return 'http://localhost:8000/api/appointments'; // Dev
};

export const Appointment: React.FC<{ revealRef: any }> = ({ revealRef }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ fullname: '', phone: '', note: '' });

  const validateForm = () => {
    if (formData.fullname.length < 2) return "Name is too short.";
    // Basic phone validation (digits, plus, parens, dash, space)
    const phoneRegex = /^[\d\+\-\(\)\s]{10,20}$/;
    if (!phoneRegex.test(formData.phone)) return "Please enter a valid phone number.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }

    setStatus('loading');
    
    try {
      const response = await fetch(getApiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ fullname: '', phone: '', note: '' });
        // Reset status after delay to allow new submissions
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Transmission rejected by server.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Backend is not connected yet...');
    }
  };

  return (
    <section id="appointment" className="py-20 md:py-32 px-6 bg-slate-950 relative overflow-hidden text-white selection:bg-blue-500 selection:text-white" aria-label="Appointment Scheduling">
      {/* CYBER-MEDICAL BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: COMMAND CENTER TEXT */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-12 reveal" ref={revealRef}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full backdrop-blur-sm">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-[pulse_2s_infinite]"></div>
                 <span className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Secure Triage Hub</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-[-0.08em] leading-[0.85]">
                Secure <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 italic font-serif">Intake.</span>
              </h2>
              
              <p className="text-base text-slate-400 font-medium leading-relaxed max-w-sm border-l-2 border-slate-800 pl-6">
                Submit your clinical profile for diagnostic triage. Our medical team reviews all transmissions within 24 operational hours.
              </p>
            </div>

            {/* STATUS DISPLAY */}
            <div className="p-6 rounded-[2rem] bg-slate-900/50 border border-slate-800 backdrop-blur-md relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
               <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
               </div>
               
               <p className="text-[9px] font-mono text-blue-400 uppercase tracking-widest mb-2">Direct Hub Uplink</p>
               <div className="flex items-baseline gap-2">
                 <span className="text-2xl md:text-3xl font-mono font-bold text-white tracking-tighter"><Placeholder text={CLINIC_PLACEHOLDERS.phone} /></span>
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               </div>
               <p className="text-[10px] text-slate-500 mt-2 font-mono">ENCRYPTED VOICE LINE • ACTIVE</p>
            </div>
          </div>

          {/* RIGHT: THE CONSOLE (FORM) */}
          <div className="lg:col-span-7 reveal" ref={revealRef} style={{ transitionDelay: '200ms' }}>
            <div className="relative rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-[0_0_60px_-15px_rgba(37,99,235,0.1)] overflow-hidden">
               {/* Console Header */}
               <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600"></div>
               <div className="px-8 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/50">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Protocol v2.4</span>
               </div>

               <div className="p-8 md:p-12">
                 {status === 'success' ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center space-y-6 animate-subtle-pulse" role="alert">
                        <div className="w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center relative">
                            <div className="absolute inset-0 rounded-full border border-blue-400 opacity-20 animate-ping"></div>
                            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white tracking-tight">Transmission Secured.</h3>
                            <p className="text-slate-400 mt-2 font-mono text-sm">Reference ID: <span className="text-blue-400">#TR-{Math.floor(Math.random()*10000)}</span></p>
                        </div>
                    </div>
                 ) : (
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        {errorMessage && (
                          <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-xl text-red-200 text-sm font-medium flex items-center gap-3 animate-pulse" role="alert">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             {errorMessage}
                          </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3 group">
                                <label htmlFor="fullname" className="text-[10px] font-mono uppercase tracking-widest text-slate-400 group-focus-within:text-blue-400 transition-colors">Patient Identity</label>
                                <input 
                                    id="fullname"
                                    name="fullname"
                                    type="text" 
                                    value={formData.fullname}
                                    onChange={(e) => setFormData({...formData, fullname: e.target.value})}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono text-sm"
                                    placeholder="ALEXANDER THORNE"
                                    required
                                    disabled={status === 'loading'}
                                    autoComplete="name"
                                />
                            </div>
                            <div className="space-y-3 group">
                                <label htmlFor="phone" className="text-[10px] font-mono uppercase tracking-widest text-slate-400 group-focus-within:text-blue-400 transition-colors">Contact Uplink</label>
                                <input 
                                    id="phone"
                                    name="phone"
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono text-sm"
                                    placeholder="+1 (000) 000-0000"
                                    required
                                    disabled={status === 'loading'}
                                    autoComplete="tel"
                                />
                            </div>
                        </div>

                        <div className="space-y-3 group">
                            <label htmlFor="note" className="text-[10px] font-mono uppercase tracking-widest text-slate-400 group-focus-within:text-blue-400 transition-colors">Clinical Objective / Data</label>
                            <textarea 
                                id="note"
                                name="note"
                                rows={3}
                                value={formData.note}
                                onChange={(e) => setFormData({...formData, note: e.target.value})}
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono text-sm resize-none"
                                placeholder="Consultation goals or symptom summary..."
                                disabled={status === 'loading'}
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button 
                                type="submit" 
                                disabled={status === 'loading'}
                                className="relative w-full group overflow-hidden bg-white text-slate-950 py-5 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-blue-500 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                   {status === 'loading' ? (
                                     <>
                                       <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                       Encrypting...
                                     </>
                                   ) : (
                                     <>Authorize Transmission</>
                                   )}
                                </span>
                                {/* Tech Scan Effect */}
                                <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shimmer transition-all"></div>
                            </button>
                            
                            <div className="flex justify-center mt-6 items-center gap-2 opacity-50">
                                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2-0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">End-to-End Encryption Enabled</span>
                            </div>
                        </div>
                    </form>
                 )}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
