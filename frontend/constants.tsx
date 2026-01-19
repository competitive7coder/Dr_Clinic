

export const CLINIC_PLACEHOLDERS = {
  name: "[CLINIC_NAME]",
  doctorName: "DR. lorem ipsum",
  degree: "MD, FACP",
  specialization: "[DEMO: Internal Medicine Specialist Directorate]",
  experience: "15",
  cityState: "[CLIENT CITY], [STATE]",
  address: "KRISHNAPUR ",
  area: "KRISHNAPUR",
  cityPin: "712311",
  phone: "[CLINIC PHONE]",
  email: "[CLINIC EMAIL]",
  timings: "[CLINIC TIMINGS]",
  days: "[CLINIC DAYS]",
  languages: "English, Hindi, Bengali",
  rating: "4.9/5",
  reviewCount: "1,200+ Verified Cases",
  doctorImage: "https://img.freepik.com/premium-vector/vector-doctor-medical-hospital-health-medicine-illustration-care-man-clinic-people-profes_1158065-1372.jpg?semt=ais_hybrid&w=740&q=80",
  tagline: "[CLINIC NAME]",
  heroSubtitle: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.",
  doctorBio: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  stats: {
    experience: "15+",
    patients: "1,200+",
    label: "Board Certified"
  }
};

export const SERVICES_DATA = [
  { id: 1, title: "[Clinic Services]", description: "[basically clinics services will add here according to client requirements]", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { id: 2, title: "lorem ipsum", description: "lorem ipsum dolor sit amet consectetur adipiscing elit", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944" },
  { id: 3, title: "lorem ipsum", description: "lorem ipsum dolor sit amet consectetur adipiscing elit", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10" },
  { id: 4, title: "lorem ipsum", description: "lorem ipsum dolor sit amet consectetur adipiscing elit", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636" }
];

export const REVIEWS = [
  { 
    id: 1, 
    name: "[PATIENT NAME]", 
    rating: 5, 
    treatment: "[PATIENT TREATMENT]", 
    date: "[DATE]",
    text: "[TEXT CONTENT]" 
  },
  { 
    id: 2, 
    name: "[PATIENT NAME]", 
    rating: 5, 
    treatment: "[PATIENT TREATMENT]", 
    date: "[DATE]",
    text: "[TEXT CONTENT]" 
  },
  { 
    id: 3, 
    name: "[PATIENT NAME]", 
    rating: 5, 
    treatment: "[PATIENT TREATMENT]", 
    date: "[DATE]",
    text: "[TEXT CONTENT]" 
  },
  { 
    id: 4, 
    name: "[PATIENT NAME]", 
    rating: 5, 
    treatment: "[PATIENT TREATMENT]", 
    date: "[DATE]",
    text: "[TEXT CONTENT]" 
  }
];

export const GALLERY_IMAGES = [
  { id: 1, title: "Diagnostic Wing", category: "Medical", url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Executive Lounge", category: "Interior", url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Treatment Bay", category: "Clinical", url: "https://silklaser.com.au/silk/wp-content/uploads/2023/01/Silk-Laser-Clinic-Sandy-Bay-new1.jpg" },
  { id: 4, title: "Arrival Terminal", category: "Exterior", url: "https://content3.jdmagicbox.com/v2/comp/mumbai/s2/011pxx11.xx11.180530024510.j5s2/catalogue/medanta-medical-centre-t3-igi-airport-igi-airport-delhi-clinics-vzbt6v6sn3.jpg" }
];

export const FAQS = [
  { id: 1, question: "How do I secure a clinical slot?", answer: "Slots can be requested via our Secure Intake Terminal. We prioritize cases based on diagnostic urgency." },
  { id: 2, question: "What are the operative hours?", answer: `The clinic is active from ${CLINIC_PLACEHOLDERS.timings}, ${CLINIC_PLACEHOLDERS.days}.` },
  { id: 3, question: "Is my medical data secure?", answer: "Absolutely. All digital intake protocols are encrypted and handled under strict clinical confidentiality standards." }
];
