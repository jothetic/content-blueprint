
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <section className="pt-16 pb-6 px-4 overflow-hidden bg-deep-purple-gradient">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={heroVariants}
        className="max-w-lg mx-auto text-center relative"
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-white tracking-tight"
          variants={titleVariants}
        >
          Master short-form content.
        </motion.h1>
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-purple-300 tracking-tight"
          variants={titleVariants}
        >
          Scale your business.
        </motion.h1>

        <motion.p 
          variants={titleVariants}
          className="text-sm sm:text-base text-white mb-6 max-w-md mx-auto font-medium"
        >
          Watch this complete guide to build your authentic fanbase on TikTok and Instagram in 2025:
        </motion.p>
        
        {/* Video Section */}
        <motion.div
          variants={titleVariants}
          className="relative max-w-lg mx-auto mb-6"
        >
          <div className="rounded-lg overflow-hidden shadow-lg border border-white/10 relative z-10">
            <YouTubeEmbed 
              videoId="7EHqhKXjzzs"
              className="w-full"
            />
          </div>
        </motion.div>
        
        <motion.div
          variants={titleVariants}
          className="flex flex-col items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-5 text-lg rounded-full shadow-lg transition-all duration-300 mb-3"
              onClick={() => {
                scroller.scrollTo('pricing-section', {
                  duration: 800,
                  smooth: true,
                  offset: -50,
                  spy: true
                });
              }}
            >
              <motion.span className="flex items-center whitespace-nowrap">
                Start <ArrowRightIcon className="ml-1 w-4 h-4" />
              </motion.span>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center text-white text-sm mt-1"
            variants={titleVariants}
          >
            <motion.div className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </motion.div>
            <motion.span className="ml-2">
              4.98 (40+ reviews)
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
