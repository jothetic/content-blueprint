
import React, { useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialSkeleton from "@/components/TestimonialSkeleton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CarouselIndicator from "@/components/CarouselIndicator";
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

  const testimonialImages = [
    "/lovable-uploads/2124a9ca-5b47-4407-bc1d-3e0426632f0c.png", // 2.7M views
    "/lovable-uploads/926dd0ff-9b19-4738-bdb1-8ba1a92a7fc8.png", // 65K followers
    "/lovable-uploads/f0e0f1dd-3cdb-42b6-81aa-6e31b25c2612.png", // Shopify dashboard
    "/lovable-uploads/171f1432-c3ef-4494-bf8e-3de920255ad2.png",
    "/lovable-uploads/fd4edd9c-d981-4a64-a1cd-31ac4b99e115.png",
    "/lovable-uploads/ea5ac916-acb8-42e8-9695-e42bc31aede1.png",
    "/lovable-uploads/0d79d1cb-7250-40c9-b0bf-c6d6003a5c10.png",
    "/lovable-uploads/1d23383f-2912-463f-9355-15c54d694e34.png",
    "/lovable-uploads/d0cddb8d-dae4-4011-9f4b-93dc8b114512.png",
    "/lovable-uploads/c4a4c75f-fefa-46b0-a89e-12d70f36b467.png",
    "/lovable-uploads/4ed3fc31-8cbf-4bd2-95c9-618c54edba8b.png",
    "/lovable-uploads/4ee30212-8722-4c54-b21c-13d3ead83a36.png",
    "/lovable-uploads/67162bff-1d28-4fcf-9cea-b25419541e4c.png",
    "/lovable-uploads/34464386-e73c-4de1-a744-f16a4b6b4b29.png",
    "/lovable-uploads/9ac7752e-e8a9-4b1c-a151-45fbf20484bb.png",
    "/lovable-uploads/6da00e19-deb3-43a3-9431-9b89ca44e15a.png",
    "/lovable-uploads/51a943ac-c3fa-45e0-882c-0f2db5942a8a.png",
    "/lovable-uploads/1c09b964-cc50-46b4-902a-9b28bea52ba8.png",
    "/lovable-uploads/424b3593-d73e-43d2-9b3f-d5c8f6599283.png",
    "/lovable-uploads/42e66244-bd3b-4ff8-b130-b3e9e75c8902.png"
  ];

  // Handle indicator clicks
  const handleTestimonialSelect = (index: number) => {
    if (testimonialCarouselApi) {
      testimonialCarouselApi.scrollTo(index);
    }
  };

  const handleImageSelect = (index: number) => {
    if (imageCarouselApi) {
      imageCarouselApi.scrollTo(index);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-white">
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
            onSelect={() => {
              if (testimonialCarouselApi) {
                setCurrentTestimonialSlide(testimonialCarouselApi.selectedScrollSnap() || 0);
              }
            }}
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
          <CarouselIndicator
            totalSlides={writtenTestimonials.length}
            currentSlide={currentTestimonialSlide}
            onSelect={handleTestimonialSelect}
          />
        </div>

        {/* Success Stories Image Carousel */}
        <div className="max-w-2xl mx-auto">
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
            onSelect={() => {
              if (imageCarouselApi) {
                setCurrentImageSlide(imageCarouselApi.selectedScrollSnap() || 0);
              }
            }}
          >
            <CarouselContent>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={`image-skeleton-${index}`} className="basis-3/4 md:basis-1/2 lg:basis-1/3">
                    <div className="aspect-[9/16] rounded-lg overflow-hidden px-1 md:px-2">
                      <Skeleton className="w-full h-full" />
                    </div>
                  </CarouselItem>
                ))
              ) : (
                testimonialImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-3/4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="aspect-[9/16] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 px-1 md:px-2"
                    >
                      <img 
                        src={image} 
                        alt={`Success story ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
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
          <CarouselIndicator
            totalSlides={testimonialImages.length}
            currentSlide={currentImageSlide}
            onSelect={handleImageSelect}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
