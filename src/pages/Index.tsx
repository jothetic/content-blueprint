
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
    
    // Fix iOS Safari scrolling issues
    document.addEventListener('touchstart', function() {}, {passive: true});
    document.addEventListener('touchmove', function() {}, {passive: true});
    
    // Remove animation styles that might interfere with scrolling
    const cleanup = () => {
      const motionElements = document.querySelectorAll('[data-framer-motion-components], div[style*="transform"]');
      motionElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.pointerEvents = 'none';
          el.style.touchAction = 'none';
        }
      });
    };
    
    // Run cleanup after animations finish
    setTimeout(cleanup, 2000);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);

  return (
    <div 
      className="overflow-x-hidden bg-deep-purple-gradient" 
      style={{ 
        minHeight: "var(--vh, 1vh) * 100", 
        touchAction: "auto",
        WebkitOverflowScrolling: "touch"
      }}
      data-ios-fix="true"
    >
      <Navbar />
      <BackToTop />
      
      {/* Hero Section */}
      <HeroSection visible={visible} />

      {/* Testimonials Section */}
      <Element name="testimonials" style={{ touchAction: "auto" }}>
        <TestimonialsSection isLoading={isLoading} />
      </Element>

      {/* Pricing Section */}
      <Element name="pricing-section" style={{ touchAction: "auto" }}>
        <PricingSection 
          isAnnual={isAnnual} 
          setIsAnnual={setIsAnnual} 
        />
      </Element>
    </div>
  );
};

export default Index;
