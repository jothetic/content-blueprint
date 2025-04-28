
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

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(true);
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-deep-purple-gradient overflow-x-hidden">
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
