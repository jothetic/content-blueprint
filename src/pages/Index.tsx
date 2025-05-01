
import React, { useState, useEffect } from "react";
import { Element, scroller } from 'react-scroll';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import PricingToggle from "@/components/PricingToggle";
import { ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { AnimatePresence } from "framer-motion";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import BackToTop from "@/components/BackToTop";
import CarouselIndicator from "@/components/CarouselIndicator";
import TestimonialSkeleton from "@/components/TestimonialSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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
    
    // iOS specific fix to ensure content is scrollable
    const handleTouchMove = (e: TouchEvent) => {
      // Don't stop propagation - allow the event to bubble naturally
    };
    
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    
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
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);

  return (
    <div className="min-h-[var(--vh,1vh)*100] overflow-x-hidden bg-deep-purple-gradient" style={{ touchAction: "auto" }}>
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
