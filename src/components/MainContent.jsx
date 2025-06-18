import React from 'react';
import HeroSection from './HeroSection';
import FlutterDawnSection from './FlutterDawnSection';
import ServicesSection from './ServicesSection';
// import Footer from './Footer';

const MainContent = () => {
  return (
    <main className='flex-1'>
      <HeroSection />
      <FlutterDawnSection />
      <div className='my-320 py-160'>
        {/* This adds vertical space */}
        <ServicesSection />
      </div>
    </main>
  );
};

export default MainContent;
