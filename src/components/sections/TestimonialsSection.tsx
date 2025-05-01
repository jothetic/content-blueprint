import React, { useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialSkeleton from "@/components/TestimonialSkeleton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import type { CarouselApi } from "@/components/ui/carousel";

interface TestimonialsSectionProps {
  isLoading: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isLoading }) => {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [testimonialCarouselApi, setTestimonialCarouselApi] = useState<CarouselApi | null>(null);
  const [imageCarouselApi, setImageCarouselApi] = useState<CarouselApi | null>(null);

  // Sample data for testimonials
  const writtenTestimonials = [
    {
      name: "Viral Creator",
      role: "Content Creator | 2.7M+ Views",
      quote: "Hit over 2.7M views using the viral content strategies from the program. The engagement tactics really work!",
      image: "/lovable-uploads/2124a9ca-5b47-4407-bc1d-3e0426632f0c.png"
    },
    {
      name: "Growth Expert",
      role: "Social Media Influencer | 65K+ Followers",
      quote: "Grew from 0 to 65K real followers using the community building strategies. The engagement has been incredible!",
      image: "/lovable-uploads/926dd0ff-9b19-4738-bdb1-8ba1a92a7fc8.png"
    },
    {
      name: "E-commerce Pro",
      role: "Shopify Merchant | $10K+ Revenue",
      quote: "Scaled to over $10,000 in monthly revenue using the sales funnel blueprint. The ROI has been amazing!",
      image: "/lovable-uploads/f0e0f1dd-3cdb-42b6-81aa-6e31b25c2612.png"
    },
    {
      name: "JT Vendors",
      role: "E-commerce Entrepreneur | 116K+ Sessions",
      quote: "Scaled to $39.5K in total sales with a 1.94% conversion rate and 793% session growth. The strategies and systems really work!",
      image: "/lovable-uploads/171f1432-c3ef-4494-bf8e-3de920255ad2.png"
    },
    {
      name: "JJ Vending",
      role: "Shopify Merchant | 389+ Orders",
      quote: "Hit $4,005.41 in sales with a 2.09% conversion rate in just 22 days. The growth strategies and support have been invaluable!",
      image: "/lovable-uploads/fd4edd9c-d981-4a64-a1cd-31ac4b99e115.png"
    },
    {
      name: "Motivated Vendor",
      role: "E-commerce Success Story | $5K+ Monthly",
      quote: "Reached $5,000+ in monthly revenue with consistent growth. This program gave me the blueprint I needed to scale!",
      image: "/lovable-uploads/ea5ac916-acb8-42e8-9695-e42bc31aede1.png"
    }
  ];

  // Updated testimonial images - only keeping the ones you uploaded
  const testimonialImages = [
    "/lovable-uploads/52f12300-ac22-47c8-84d3-45cf87da4e5f.png", // JT Vendors profile
    "/lovable-uploads/6852ec17-2622-4bf6-959f-8ae9d6f60fe0.png", // Pinned video
    "/lovable-uploads/5ffa9307-ef60-4441-bdbd-2ebc1ef3d332.png", // Needed some chrome
    "/lovable-uploads/7007967c-7847-4694-9e2b-1faffaaa70f7.png", // Need some denim tears
    "/lovable-uploads/e821eee0-de19-4fc1-ba54-9d8908178f38.png", // 5k this month
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

  React.useEffect(() => {
    if (imageCarouselApi) {
      const updateImageSlide = () => {
        setCurrentImageSlide(imageCarouselApi.selectedScrollSnap());
      };
      
      imageCarouselApi.on("select", updateImageSlide);
      // Call once to set initial state
      updateImageSlide();
      
      return () => {
        imageCarouselApi.off("select", updateImageSlide);
      };
    }
  }, [imageCarouselApi]);

  return (
    <section id="testimonials-section" className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-white touch-auto">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-black"
        >
          Real Results from Real Students 🚀
        </motion.h2>

        {/* Written Testimonials Carousel */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-16">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setTestimonialCarouselApi}
            className="w-full px-4 md:px-0"
          >
            <CarouselContent>
              {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={`skeleton-${index}`} className="md:basis-full">
                    <div className="px-1 md:px-4">
                      <TestimonialSkeleton />
                    </div>
                  </CarouselItem>
                ))
              ) : (
                writtenTestimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-full">
                    <div className="px-1 md:px-4">
                      <TestimonialCard {...testimonial} />
                    </div>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2 md:gap-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>

        {/* Success Stories Image Carousel - Simple Square Images */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-center">
            Success Stories Showcase
          </h3>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setImageCarouselApi}
            className="w-full px-4 md:px-0"
          >
            <CarouselContent>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={`image-skeleton-${index}`} className="basis-3/4 md:basis-1/2">
                    <div className="aspect-[9/16] overflow-hidden px-1 md:px-2">
                      <Skeleton className="w-full h-full" />
                    </div>
                  </CarouselItem>
                ))
              ) : (
                testimonialImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-3/4 md:basis-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="aspect-[9/16] px-1 md:px-2"
                    >
                      <img 
                        src={image} 
                        alt={`Success story ${index + 1}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </motion.div>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2 md:gap-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
