
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight as ArrowRightIcon, Star } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { scroller } from 'react-scroll';
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroSectionProps {
  visible: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ visible }) => {
  const [hasShownInitialAnimation, setHasShownInitialAnimation] = useState(false);
  const controls = useAnimation();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (visible && !hasShownInitialAnimation) {
      controls.start("visible");
      setHasShownInitialAnimation(true);
    }
  }, [visible, hasShownInitialAnimation, controls]);

  const scrollToPricing = () => {
    console.log("Scroll to pricing clicked");
    try {
      scroller.scrollTo('pricing-section', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -50
      });
    } catch (error) {
      console.error("Scroll error:", error);
      // Fallback scrolling mechanism if scroller fails
      const pricingSection = document.getElementById('pricing-section');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <section className="pt-6 md:pt-8 pb-10 md:pb-16 px-4 md:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={heroVariants}
        className="max-w-4xl mx-auto text-center relative"
      >
        {/* Animated background elements - simplified for better performance */}
        <div className="absolute top-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl"></div>

        <motion.div variants={titleVariants} className="relative z-10">
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-white tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block">🚀</span>{" "}
            Master the Blueprint to Grow
          </motion.h1>
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-soft-purple tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            and Monetize Your Audience.
          </motion.h1>
        </motion.div>

        <motion.p 
          variants={fadeUpVariant}
          className="text-base md:text-lg text-white mb-6 md:mb-8 max-w-2xl mx-auto font-medium"
        >
          Watch this complete guide to grow your fan base on Instagram and TikTok in 2025.
        </motion.p>
        
        {/* Video Section - simplified for better performance */}
        <motion.div
          variants={fadeUpVariant}
          className="relative max-w-4xl mx-auto mb-8 md:mb-12"
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10">
            <YouTubeEmbed 
              videoId="txknTYo3Gvs"
              className="w-full"
            />
          </div>
        </motion.div>
        
        <motion.div
          variants={fadeUpVariant}
          className="flex flex-col items-center"
        >
          <div className="mb-4">
            <Button 
              className="bg-soft-purple hover:bg-soft-purple/90 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative z-50"
              onClick={scrollToPricing}
              tabIndex={0}
              role="button"
              aria-label="Start your journey - go to pricing section"
            >
              <span className="relative z-10 flex items-center">
                → Start Your Journey <ArrowRightIcon className="ml-1 w-4 h-4 md:w-5 md:h-5" />
              </span>
            </Button>
          </div>
          
          <motion.div 
            className="flex items-center text-gray-400 text-xs md:text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2">
              4.98 (40+ reviews)
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
