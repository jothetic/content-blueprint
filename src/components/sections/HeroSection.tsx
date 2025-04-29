
import React, { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight as ArrowRightIcon, Star } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { scroller } from 'react-scroll';

interface HeroSectionProps {
  visible: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ visible }) => {
  const [hasShownInitialAnimation, setHasShownInitialAnimation] = useState(false);
  const controls = useAnimation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="pt-24 md:pt-32 pb-10 md:pb-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={heroVariants}
        className="max-w-4xl mx-auto text-center relative"
        onMouseMove={handleMouseMove}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div
          className="absolute bottom-0 -right-20 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />

        <motion.div variants={titleVariants}>
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-white tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block"
            >
              🚀
            </motion.span>{" "}
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
          Turn views into income with proven systems, live coaching, and exclusive tools—built by a creator who made $100K at 15.
        </motion.p>
        
        {/* Video Section - Simplified animation */}
        <motion.div
          variants={fadeUpVariant}
          className="relative max-w-4xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 rounded-lg blur-sm"
          />
          <div className="rounded-lg overflow-hidden shadow-2xl border border-white/10 relative z-10">
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-soft-purple hover:bg-soft-purple/90 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden mb-4"
              onClick={() => {
                scroller.scrollTo('pricing-section', {
                  duration: 800,
                  smooth: true,
                  offset: -50,
                  spy: true
                });
              }}
            >
              <motion.span
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
              />
              <motion.span className="relative z-10 flex items-center">
                → Start Your Journey <ArrowRightIcon className="ml-1 w-4 h-4 md:w-5 md:h-5" />
              </motion.span>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center text-gray-400 text-xs md:text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 1 + (i * 0.1),
                    type: "spring",
                    stiffness: 500,
                    damping: 15
                  }}
                >
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </motion.div>
            <motion.span 
              className="ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              4.98 (40+ reviews)
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
