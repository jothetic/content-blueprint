import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  visible: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ visible }) => {
  const scrollToPricing = () => {
    try {
      scroller.scrollTo('pricing-section', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -50
      });
    } catch (error) {
      console.error("Scroll error:", error);
      // Fallback method
      const pricingSection = document.getElementById('pricing-section');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 lg:px-8 overflow-hidden bg-deep-purple-gradient">
      <motion.div 
        className="absolute inset-0 z-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[url('/bg-pattern-1.svg')] bg-center bg-repeat"></div>
        <div className="absolute inset-0 bg-[url('/grid-dots.svg')] bg-center bg-repeat mix-blend-soft-light"></div>
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              Grow Your Following & Monetize
            </span>
            <br />
            <span className="text-white">Digital Products</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              Like Never Before
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Unlock the secrets to scaling your online influence and turning your passion into profit.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button 
            onClick={scrollToPricing}
            className="bg-soft-purple hover:bg-soft-purple/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            See Pricing Options <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <a href="https://dubowsky.gumroad.com/l/creator-os" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-white hover:bg-white/10 px-6 py-4 text-base md:text-lg rounded-full transition-colors duration-300">
              Get Free Training
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
