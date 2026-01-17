
import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ClinicInfo } from '../components/ClinicInfo';
import { Reviews } from '../components/Reviews';
import { Appointment } from '../components/Appointment';
import { FAQ } from '../components/FAQ';

interface HomeProps {
  reveal: (el: HTMLElement | null) => void;
}

const Home: React.FC<HomeProps> = ({ reveal }) => {
  return (
    <>
      <Hero revealRef={reveal} />
      <About revealRef={reveal} />
      <Services revealRef={reveal} />
      <WhyChooseUs revealRef={reveal} />
      <Gallery revealRef={reveal} />
      <ClinicInfo revealRef={reveal} />
      <Reviews revealRef={reveal} />
      <Appointment revealRef={reveal} />
      <FAQ revealRef={reveal} />
    </>
  );
};

export default Home;
