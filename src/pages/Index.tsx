
import React, { useEffect, useState } from "react";
import { Element } from 'react-scroll';
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset scroll position on initial load
    window.scrollTo(0, 0);
    setVisible(true);
    
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 1500);
    
    // Set viewport height for mobile devices
    const setViewportHeight = () => {
      document.documentElement.style.setProperty(
        '--vh', 
        `${window.innerHeight * 0.01}px`
      );
    };
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-deep-purple-gradient">
      <Navbar />
      <BackToTop />
      
      <main className="flex-grow">
        <HeroSection visible={visible} />

        <Element name="testimonials">
          <TestimonialsSection isLoading={isLoading} />
        </Element>

        <Element name="pricing-section" id="pricing-section">
          <PricingSection 
            isAnnual={isAnnual} 
            setIsAnnual={setIsAnnual} 
          />
        </Element>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
