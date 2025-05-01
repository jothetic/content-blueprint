
import React, { useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialSkeleton from "@/components/TestimonialSkeleton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import CarouselIndicator from "@/components/CarouselIndicator";

interface TestimonialsSectionProps {
  isLoading: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isLoading }) => {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [testimonialCarouselApi, setTestimonialCarouselApi] = useState<CarouselApi | null>(null);
  const [currentSuccessStorySlide, setCurrentSuccessStorySlide] = useState(0);
  const [successStoryCarouselApi, setSuccessStoryCarouselApi] = useState<CarouselApi | null>(null);
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
  
  // Set up effect to update currentSlide when carousel changes
  React.useEffect(() => {
    if (testimonialCarouselApi) {
      const updateTestimonialSlide = () => {
        setCurrentTestimonialSlide(testimonialCarouselApi.selectedScrollSnap());
      };
      
      testimonialCarouselApi.on("select", updateTestimonialSlide);
      // Call once to set initial state
      updateTestimonialSlide();
      
      return () => {
        testimonialCarouselApi.off("select", updateTestimonialSlide);
      };
    }
  }, [testimonialCarouselApi]);

  // Set up effect for success story carousel
  React.useEffect(() => {
    if (successStoryCarouselApi) {
      const updateSuccessStorySlide = () => {
        setCurrentSuccessStorySlide(successStoryCarouselApi.selectedScrollSnap());
      };
      
      successStoryCarouselApi.on("select", updateSuccessStorySlide);
      updateSuccessStorySlide();
      
      return () => {
        successStoryCarouselApi.off("select", updateSuccessStorySlide);
      };
    }
  }, [successStoryCarouselApi]);

  const handleSelectSlide = (index: number) => {
    if (testimonialCarouselApi) {
      testimonialCarouselApi.scrollTo(index);
    }
  };

  const handleSelectSuccessStorySlide = (index: number) => {
    if (successStoryCarouselApi) {
      successStoryCarouselApi.scrollTo(index);
    }
  };

  return (
    <section className="py-6 md:py-16 px-2 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold text-center mb-3 md:mb-8 text-black"
        >
          Real Results from Real Students 🚀
        </motion.h2>

        {/* Written Testimonials Carousel */}
        <div className="max-w-3xl mx-auto mb-4 md:mb-10">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setTestimonialCarouselApi}
            className="w-full"
          >
            <CarouselContent>
              {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={`skeleton-${index}`} className="md:basis-full">
                    <div className="px-0 md:px-2">
                      <TestimonialSkeleton />
                    </div>
                  </CarouselItem>
                ))
              ) : (
                writtenTestimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-full">
                    <TestimonialCard {...testimonial} />
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <div className="flex justify-center mt-2 gap-1 sm:gap-2">
              <CarouselPrevious className="static transform-none h-6 w-6 sm:h-8 sm:w-8" />
              <CarouselIndicator 
                totalSlides={writtenTestimonials.length}
                currentSlide={currentTestimonialSlide}
                onSelect={handleSelectSlide}
              />
              <CarouselNext className="static transform-none h-6 w-6 sm:h-8 sm:w-8" />
            </div>
          </Carousel>
        </div>

        {/* Success Stories Carousel - For both desktop and mobile */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xs sm:text-sm md:text-xl font-semibold mb-2 md:mb-4 text-center">
            Success Stories Showcase
          </h3>
          
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setSuccessStoryCarouselApi}
            className="w-full"
          >
            <CarouselContent>
              {isLoading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <CarouselItem key={`success-skeleton-${index}`} className={`${isMobile ? 'basis-2/3' : 'basis-1/3'} sm:basis-1/3 md:basis-1/4`}>
                    <div className="p-1">
                      <Skeleton className="w-full aspect-[3/4] rounded-lg" />
                    </div>
                  </CarouselItem>
                ))
              ) : (
                tiktokImages.map((item, index) => (
                  <CarouselItem key={`success-image-${index}`} className={`${isMobile ? 'basis-2/3' : 'basis-1/3'} sm:basis-1/3 md:basis-1/4`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="p-1"
                    >
                      <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <img 
                          src={item.image} 
                          alt={`Success story ${index + 1}`}
                          className="w-full h-auto object-cover rounded-lg"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center">
                          <span className="mr-1">👁️</span> {item.views}
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <div className="flex justify-center mt-2 gap-1 sm:gap-2">
              <CarouselPrevious className="static transform-none h-5 w-5 sm:h-7 sm:w-7" />
              <CarouselIndicator 
                totalSlides={tiktokImages.length}
                currentSlide={currentSuccessStorySlide}
                onSelect={handleSelectSuccessStorySlide}
              />
              <CarouselNext className="static transform-none h-5 w-5 sm:h-7 sm:w-7" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
