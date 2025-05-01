
import React, { useState, useEffect } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselIndicator from "@/components/CarouselIndicator";

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

  return (
    <section className="py-10 md:py-20 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold text-center mb-6 md:mb-12 text-black">
          Real Results from Real Students 🚀
        </h2>

        {/* Text Testimonials Section - Simple Carousel */}
        <div className="mb-6 md:mb-8">
          <div className="relative py-4 md:py-10">
            {/* Large decorative quotation mark */}
            <div className="absolute top-0 left-0 text-6xl md:text-8xl text-purple-100 font-serif opacity-50 z-0">
              "
            </div>
            
            {/* Testimonial Slider */}
            <div className="relative h-[280px] sm:h-[240px] md:h-[220px]">
              {isLoading ? (
                <div className="flex justify-center w-full px-4">
                  <Skeleton className="w-full max-w-3xl h-[200px] rounded-lg" />
                </div>
              ) : (
                <div className="flex justify-center">
                  <div className="w-full max-w-3xl px-4">
                    <TestimonialCard {...writtenTestimonials[activeTestimonialIndex]} />
                  </div>
                </div>
              )}
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
              
              <CarouselIndicator 
                totalSlides={writtenTestimonials.length} 
                currentSlide={activeTestimonialIndex} 
                onSelect={setActiveTestimonialIndex} 
              />
              
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

        {/* Image Carousel - Simple Version */}
        <div className="mt-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative flex justify-center items-center h-[500px] md:h-[600px]">
              {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <Skeleton className="w-[320px] md:w-[500px] lg:w-[600px] aspect-[9/16] rounded-lg" />
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="overflow-hidden rounded-xl shadow-xl transition-all duration-300 ring-4 ring-purple-500/30">
                    <img
                      src={tiktokImages[activeSuccessStoryIndex].image}
                      alt={`Success story ${activeSuccessStoryIndex + 1}`}
                      className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] object-cover rounded-xl"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full flex items-center text-xs sm:text-sm">
                      <span className="mr-1">👁️</span> {tiktokImages[activeSuccessStoryIndex].views}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevSuccessStory}
                className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-md h-10 w-10 rounded-full z-10"
                disabled={isLoading}
              >
                <ChevronLeft className="h-5 w-5 text-purple-500" />
                <span className="sr-only">Previous image</span>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={goToNextSuccessStory}
                className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-md h-10 w-10 rounded-full z-10"
                disabled={isLoading}
              >
                <ChevronRight className="h-5 w-5 text-purple-500" />
                <span className="sr-only">Next image</span>
              </Button>
              
              <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center">
                <CarouselIndicator 
                  totalSlides={tiktokImages.length} 
                  currentSlide={activeSuccessStoryIndex} 
                  onSelect={setActiveSuccessStoryIndex} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
