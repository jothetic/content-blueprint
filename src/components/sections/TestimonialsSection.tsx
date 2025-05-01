
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialsSectionProps {
  isLoading: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isLoading }) => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeSuccessStoryIndex, setActiveSuccessStoryIndex] = useState(0);
  const isMobile = useIsMobile();

  // Sample data for testimonials
  const writtenTestimonials = [
    {
      name: "JT Vendors",
      role: "Content Creator | 28.1K Followers",
      quote: "Hit over 2.7M views using the viral content strategies from the program. The engagement tactics really work!",
      image: "/lovable-uploads/eeade0df-9b63-4931-8239-487b84c7d70f.png"
    },
    {
      name: "JT Vendors",
      role: "E-commerce Entrepreneur | 28.1K Followers",
      quote: "Scaled to $5K+ monthly revenue in my store. The strategies and systems from Creator Blueprint really work!",
      image: "/lovable-uploads/d621778c-3862-4e47-adf2-c5d7622c67a8.png"
    },
    {
      name: "Kenny Witt",
      role: "YouTuber | 9.6K Followers",
      quote: "Grew my audience and hit over 1.1M views with the content strategies I learned. This program delivers results!",
      image: "/lovable-uploads/d566d175-fcf0-446b-8574-fd48732ea0fe.png"
    },
    {
      name: "Motivated Vendor",
      role: "TikTok Creator | 30K+ Views",
      quote: "Making $500/day consistently using the blueprint strategies. This program gave me everything I needed to succeed.",
      image: "/lovable-uploads/54aed5d5-d93f-4968-ba06-a68d0ba3b3dc.png"
    },
    {
      name: "Derek",
      role: "Reseller | 65.9K Followers",
      quote: "Grew from 2K to 65K followers in just months using the community building strategies. The engagement is amazing!",
      image: "/lovable-uploads/e391df20-ee53-424b-8270-82a179dc0090.png"
    }
  ];

  // TikTok screenshot images
  const tiktokImages = [
    {
      image: "/lovable-uploads/d621778c-3862-4e47-adf2-c5d7622c67a8.png",
      views: "2.7M",
      caption: "going to the check out..."
    },
    {
      image: "/lovable-uploads/54aed5d5-d93f-4968-ba06-a68d0ba3b3dc.png", 
      views: "48.3K",
      caption: "$500/day"
    },
    {
      image: "/lovable-uploads/d566d175-fcf0-446b-8574-fd48732ea0fe.png",
      views: "1.1M",
      caption: "JT making"
    },
    {
      image: "/lovable-uploads/e391df20-ee53-424b-8270-82a179dc0090.png",
      views: "65.9K",
      caption: "Sneaky strategy"
    }
  ];

  // Next testimonial
  const goToNextTestimonial = () => {
    setActiveTestimonialIndex((prev) => 
      (prev + 1) % writtenTestimonials.length
    );
  };

  // Previous testimonial
  const goToPrevTestimonial = () => {
    setActiveTestimonialIndex((prev) => 
      (prev - 1 + writtenTestimonials.length) % writtenTestimonials.length
    );
  };

  // Next success story
  const goToNextSuccessStory = () => {
    setActiveSuccessStoryIndex((prev) => 
      (prev + 1) % tiktokImages.length
    );
  };

  // Previous success story
  const goToPrevSuccessStory = () => {
    setActiveSuccessStoryIndex((prev) => 
      (prev - 1 + tiktokImages.length) % tiktokImages.length
    );
  };

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      goToNextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isLoading]);

  // Testimonial indicator dots
  const TestimonialDots = () => (
    <div className="flex justify-center gap-2 mt-4">
      {writtenTestimonials.map((_, index) => (
        <button
          key={`testimonial-dot-${index}`}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeTestimonialIndex === index 
              ? "bg-purple-500 scale-110" 
              : "bg-gray-300"
          }`}
          onClick={() => setActiveTestimonialIndex(index)}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  );

  // Success story indicator dots
  const SuccessStoryDots = () => (
    <div className="flex justify-center gap-2 mt-4">
      {tiktokImages.map((_, index) => (
        <button
          key={`success-dot-${index}`}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeSuccessStoryIndex === index 
              ? "bg-purple-500 scale-110" 
              : "bg-gray-300"
          }`}
          onClick={() => setActiveSuccessStoryIndex(index)}
          aria-label={`Go to success story ${index + 1}`}
        />
      ))}
    </div>
  );

  return (
    <section className="py-10 md:py-20 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold text-center mb-6 md:mb-12 text-black"
        >
          Real Results from Real Students 🚀
        </motion.h2>

        {/* Text Testimonials Section - Perspective Slider */}
        <div className="mb-16 md:mb-24">
          <div className="relative py-4 md:py-10">
            {/* Large decorative quotation mark */}
            <div className="absolute top-0 left-0 text-6xl md:text-8xl text-purple-100 font-serif opacity-50 z-0">
              "
            </div>
            
            {/* Testimonial Slider */}
            <div className="relative perspective-container h-[280px] sm:h-[240px] md:h-[220px]">
              <div 
                className="absolute inset-x-0 testimonial-track flex items-center justify-center"
                style={{ 
                  transform: `translateX(${-activeTestimonialIndex * 100}%)`,
                  transition: "transform 0.5s ease-out"
                }}
              >
                {isLoading ? (
                  <div className="flex justify-center w-full px-4">
                    <Skeleton className="w-full max-w-3xl h-[200px] rounded-lg" />
                  </div>
                ) : (
                  writtenTestimonials.map((testimonial, index) => {
                    // Calculate distance from active
                    const distance = Math.abs(activeTestimonialIndex - index);
                    const isActive = activeTestimonialIndex === index;
                    
                    // Transform values based on position
                    const scale = isActive ? 1 : Math.max(0.85, 1 - distance * 0.1);
                    const translateX = (index - activeTestimonialIndex) * (isMobile ? 100 : 75) + "%";
                    const opacity = isActive ? 1 : Math.max(0.5, 1 - distance * 0.3);
                    const zIndex = isActive ? 10 : 10 - distance;
                    const blur = isActive ? 0 : distance * 2;
                    
                    return (
                      <div 
                        key={`testimonial-${index}`}
                        className="testimonial-slide absolute w-full max-w-3xl px-4"
                        style={{ 
                          transform: `translateX(${translateX}) scale(${scale})`,
                          opacity,
                          zIndex,
                          filter: `blur(${blur}px)`,
                          transition: "all 0.5s ease-out",
                          pointerEvents: isActive ? "auto" : "none"
                        }}
                      >
                        <TestimonialCard {...testimonial} />
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="relative z-20 flex justify-between items-center mt-4 max-w-3xl mx-auto px-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevTestimonial}
                className="bg-white/80 hover:bg-white shadow-sm"
                disabled={isLoading}
              >
                <ChevronLeft className="h-5 w-5 text-purple-500" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              
              <TestimonialDots />
              
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNextTestimonial}
                className="bg-white/80 hover:bg-white shadow-sm"
                disabled={isLoading}
              >
                <ChevronRight className="h-5 w-5 text-purple-500" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Success Stories Showcase - 3D Gallery */}
        <div className="mt-16">
          <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-4 md:mb-8 text-center">
            Success Stories Showcase
          </h3>
          
          <div className="relative max-w-5xl mx-auto h-[500px] md:h-[600px]">
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <Skeleton className="w-[300px] md:w-[350px] lg:w-[400px] aspect-[3/5] rounded-lg" />
              </div>
            ) : (
              <div className="relative h-full flex items-center justify-center">
                {tiktokImages.map((item, index) => {
                  // Calculate distance from active
                  const distance = Math.abs(activeSuccessStoryIndex - index);
                  const isActive = activeSuccessStoryIndex === index;
                  
                  // Calculate angle in the "circle"
                  const angle = ((index - activeSuccessStoryIndex) / tiktokImages.length) * Math.PI * 2;
                  const radiusX = isMobile ? 120 : 200;
                  
                  // Position based on angle
                  const zPosition = isActive ? 0 : -100 - distance * 50; // Z position for depth
                  const xPosition = isActive ? 0 : Math.sin(angle) * radiusX; // X position in circle
                  
                  // Visual properties based on position
                  const scale = isActive ? 1 : Math.max(0.7, 0.9 - distance * 0.1);
                  const opacity = isActive ? 1 : Math.max(0.5, 0.7 - distance * 0.2);
                  const blur = isActive ? 0 : distance * 2;
                  const zIndex = isActive ? 10 : 10 - distance;
                  
                  return (
                    <div
                      key={`success-story-${index}`}
                      className={`absolute transition-all duration-500 ease-out cursor-pointer
                              ${isActive ? 'story-shadow' : ''}`}
                      style={{
                        transform: `translateX(${xPosition}px) translateZ(${zPosition}px) scale(${scale})`,
                        opacity,
                        zIndex,
                        filter: `blur(${blur}px)`,
                      }}
                      onClick={() => setActiveSuccessStoryIndex(index)}
                    >
                      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={item.image}
                          alt={`Success story ${index + 1}`}
                          className="w-[300px] md:w-[350px] lg:w-[400px] object-cover rounded-lg"
                          loading="lazy"
                        />
                        <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center">
                          <span className="mr-1">👁️</span> {item.views}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Navigation Controls */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevSuccessStory}
                className="bg-white/80 hover:bg-white shadow-sm"
                disabled={isLoading}
              >
                <ChevronLeft className="h-4 w-4 mr-1 text-purple-500" />
                <span>Prev</span>
              </Button>
              
              <SuccessStoryDots />
              
              <Button
                variant="outline"
                size="sm"
                onClick={goToNextSuccessStory}
                className="bg-white/80 hover:bg-white shadow-sm"
                disabled={isLoading}
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4 ml-1 text-purple-500" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
