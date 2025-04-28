
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight as ArrowRightIcon, Star } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { scroller } from 'react-scroll';

interface HeroSectionProps {
  visible: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ visible }) => {
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
    <section className="pt-24 md:pt-32 pb-10 md:pb-16 px-4 md:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={heroVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={titleVariants}>
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-white tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            🚀 Master the Blueprint to Grow
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
          Turn views into income with proven systems, live coaching, and exclusive tools—built by a creator who made $100K at 15.
        </motion.p>
        
        {/* Video Section */}
        <motion.div
          variants={fadeUpVariant}
          className="relative max-w-4xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="rounded-lg overflow-hidden shadow-2xl border border-white/10">
            <YouTubeEmbed 
              videoId="7EHqhKXjzzs"
              className="w-full"
            />
          </div>
        </motion.div>
        
        <motion.div
          variants={fadeUpVariant}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button 
            className="bg-soft-purple hover:bg-soft-purple/90 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-grow mb-4"
            onClick={() => {
              scroller.scrollTo('pricing-section', {
                duration: 800,
                smooth: true,
                offset: -50,
                spy: true
              });
            }}
          >
            → Start Your Journey <ArrowRightIcon className="ml-1 w-4 h-4 md:w-5 md:h-5" />
          </Button>
          
          <div className="flex items-center text-gray-400 text-xs md:text-sm mt-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2">4.98 (40+ reviews)</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
