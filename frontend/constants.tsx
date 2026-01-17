

export const CLINIC_PLACEHOLDERS = {
  name: "Elite Health",
  doctorName: "DR. lorem ipsum",
  degree: "MD, FACP",
  specialization: "Internal Medicine Specialist",
  experience: "15",
  cityState: "Manhattan, NY",
  address: "742 Lexington Avenue",
  area: "Upper East Side",
  cityPin: "New York - 10022",
  phone: "+1 (212) 555-0198",
  email: "care@elitehealth.com",
  timings: "10:00 AM - 08:00 PM",
  days: "Monday to Saturday",
  languages: "English, Hindi, Bengali",
  rating: "4.9/5",
  reviewCount: "1,200+ Verified Cases",
  doctorImage: "https://img.freepik.com/premium-vector/vector-doctor-medical-hospital-health-medicine-illustration-care-man-clinic-people-profes_1158065-1372.jpg?semt=ais_hybrid&w=740&q=80",
  tagline: "Global Standard Clinical Hub",
  heroSubtitle: "Experience architectural precision in healthcare. Providing diagnostic excellence and patient-first advocacy with 15+ years of clinical mastery.",
  doctorBio: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  stats: {
    experience: "15+",
    patients: "1,200+",
    label: "Board Certified"
  }
};

export const SERVICES_DATA = [
  { id: 1, title: "Diagnostic Triage", description: "Comprehensive health assessments utilizing advanced metabolic and physiological screening.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { id: 2, title: "Infection Control", description: "Expert management of acute viral and bacterial infections with evidence-based protocols.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944" },
  { id: 3, title: "Metabolic Mastery", description: "Precision diabetes and endocrine management focused on long-term systemic stability.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10" },
  { id: 4, title: "Systemic Advocacy", description: "Specialized care for hypertension and cardiovascular health to ensure optimal life quality.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636" }
];

export const REVIEWS = [
  { 
    id: 1, 
    name: "Alexander Thorne", 
    rating: 5, 
    treatment: "Diagnostic Screening", 
    date: "2 days ago",
    text: "The clinical precision here is unmatched. Dr. Sterling's approach to diagnostic triage saved me weeks of uncertainty. Truly a world-class facility." 
  },
  { 
    id: 2, 
    name: "Sarah Miller", 
    rating: 5, 
    treatment: "Chronic Care", 
    date: "1 week ago",
    text: "Highly efficient metabolic management. The digital intake was seamless, and the follow-up protocols are the most thorough I've ever experienced." 
  },
  { 
    id: 3, 
    name: "David K.", 
    rating: 5, 
    treatment: "General Wellness", 
    date: "2 weeks ago",
    text: "A masterpiece of medical architecture. The lobby is calm, the staff is elite, and the doctor's insight is profound. Highly recommended for families." 
  },
  { 
    id: 4, 
    name: "Elena V.", 
    rating: 5, 
    treatment: "Infection Control", 
    date: "1 month ago",
    text: "Expert handling of my acute recovery. The clinic is pristine and utilizes modern tools that make you feel truly cared for. Five stars." 
  }
];

export const GALLERY_IMAGES = [
  { id: 1, title: "Diagnostic Wing", category: "Medical", url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Executive Lounge", category: "Interior", url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Treatment Bay", category: "Clinical", url: "https://images.unsplash.com/photo-1581595221475-1c990b7bc708?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Arrival Terminal", category: "Exterior", url: "https://images.unsplash.com/photo-1538108149393-fdfd81895907?q=80&w=1000&auto=format&fit=crop" }
];

export const FAQS = [
  { id: 1, question: "How do I secure a clinical slot?", answer: "Slots can be requested via our Secure Intake Terminal. We prioritize cases based on diagnostic urgency." },
  { id: 2, question: "What are the operative hours?", answer: `The clinic is active from ${CLINIC_PLACEHOLDERS.timings}, ${CLINIC_PLACEHOLDERS.days}.` },
  { id: 3, question: "Is my medical data secure?", answer: "Absolutely. All digital intake protocols are encrypted and handled under strict clinical confidentiality standards." }
];
