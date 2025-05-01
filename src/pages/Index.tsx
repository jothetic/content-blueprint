
import React, { useEffect, useState } from "react";
import { Element } from 'react-scroll';
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fix iOS Safari scrolling
  useEffect(() => {
    // Reset scroll position on initial load
    window.scrollTo(0, 0);
    setVisible(true);
    
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 1500);
    
    // Set up the viewport correctly for iOS
    const setViewportHeight = () => {
      document.documentElement.style.setProperty(
        '--vh', 
        `${window.innerHeight * 0.01}px`
      );
    };
    
    // Call it initially and on resize
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    
    // Force document to be scrollable 
    document.body.style.position = 'relative';
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
    document.documentElement.style.position = 'relative';
    
    // Add passive listeners for better scroll performance
    document.addEventListener('touchstart', function() {}, {passive: true});
    document.addEventListener('touchmove', function() {}, {passive: true});
    document.addEventListener('wheel', function() {}, {passive: true});
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);

  return (
    <div 
      className="min-h-screen bg-deep-purple-gradient"
      style={{ 
        height: "auto",
        position: "relative",
        touchAction: "pan-y",
      }}
    >
      <Navbar />
      <BackToTop />
      
      {/* Hero Section */}
      <HeroSection visible={visible} />

      {/* Testimonials Section */}
      <Element name="testimonials">
        <TestimonialsSection isLoading={isLoading} />
      </Element>

      {/* Pricing Section */}
      <Element name="pricing-section">
        <PricingSection 
          isAnnual={isAnnual} 
          setIsAnnual={setIsAnnual} 
        />
      </Element>
    </div>
  );
};

export default Index;
