
import React, { useState, useEffect } from "react";
import { Element, scroller } from 'react-scroll';
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(true);
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-deep-purple-gradient">
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
