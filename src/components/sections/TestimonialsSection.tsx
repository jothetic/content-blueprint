
import React, { useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialSkeleton from "@/components/TestimonialSkeleton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

interface TestimonialsSectionProps {
  isLoading: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isLoading }) => {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [testimonialCarouselApi, setTestimonialCarouselApi] = useState<CarouselApi | null>(null);
  const isMobile = useIsMobile();

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

  // Success story images - grouped for desktop display
  const successStoryGroups = [
    // Group 1
    [
      "/lovable-uploads/2124a9ca-5b47-4407-bc1d-3e0426632f0c.png",
      "/lovable-uploads/926dd0ff-9b19-4738-bdb1-8ba1a92a7fc8.png",
      "/lovable-uploads/f0e0f1dd-3cdb-42b6-81aa-6e31b25c2612.png"
    ],
    // Group 2
    [
      "/lovable-uploads/171f1432-c3ef-4494-bf8e-3de920255ad2.png",
      "/lovable-uploads/fd4edd9c-d981-4a64-a1cd-31ac4b99e115.png",
      "/lovable-uploads/ea5ac916-acb8-42e8-9695-e42bc31aede1.png"
    ],
    // Group 3
    [
      "/lovable-uploads/0d79d1cb-7250-40c9-b0bf-c6d6003a5c10.png",
      "/lovable-uploads/1d23383f-2912-463f-9355-15c54d694e34.png",
      "/lovable-uploads/d0cddb8d-dae4-4011-9f4b-93dc8b114512.png"
    ],
    // Group 4
    [
      "/lovable-uploads/c4a4c75f-fefa-46b0-a89e-12d70f36b467.png",
      "/lovable-uploads/4ed3fc31-8cbf-4bd2-95c9-618c54edba8b.png",
      "/lovable-uploads/4ee30212-8722-4c54-b21c-13d3ead83a36.png"
    ],
    // Group 5
    [
      "/lovable-uploads/67162bff-1d28-4fcf-9cea-b25419541e4c.png",
      "/lovable-uploads/34464386-e73c-4de1-a744-f16a4b6b4b29.png",
      "/lovable-uploads/9ac7752e-e8a9-4b1c-a151-45fbf20484bb.png"
    ],
    // Group 6
    [
      "/lovable-uploads/6da00e19-deb3-43a3-9431-9b89ca44e15a.png",
      "/lovable-uploads/51a943ac-c3fa-45e0-882c-0f2db5942a8a.png", 
      "/lovable-uploads/1c09b964-cc50-46b4-902a-9b28bea52ba8.png"
    ],
    // Group 7
    [
      "/lovable-uploads/424b3593-d73e-43d2-9b3f-d5c8f6599283.png",
      "/lovable-uploads/42e66244-bd3b-4ff8-b130-b3e9e75c8902.png"
    ]
  ];
  
  // Individual images for mobile display
  const mobileImages = [
    "/lovable-uploads/2124a9ca-5b47-4407-bc1d-3e0426632f0c.png",
    "/lovable-uploads/926dd0ff-9b19-4738-bdb1-8ba1a92a7fc8.png",
    "/lovable-uploads/f0e0f1dd-3cdb-42b6-81aa-6e31b25c2612.png",
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
              <CarouselNext className="static transform-none h-6 w-6 sm:h-8 sm:w-8" />
            </div>
          </Carousel>
        </div>

        {/* Success Stories Image Showcase */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xs sm:text-sm md:text-xl font-semibold mb-2 md:mb-4 text-center">
            Success Stories Showcase
          </h3>
          
          {/* Desktop View - Stacked Images in Box Groups */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, groupIndex) => (
                <Card key={`group-skeleton-${groupIndex}`} className="p-4 bg-white shadow-md">
                  <div className="flex flex-col gap-3">
                    {Array.from({ length: 3 }).map((_, imageIndex) => (
                      <Skeleton key={`image-skeleton-${groupIndex}-${imageIndex}`} className="w-full h-24 md:h-36" />
                    ))}
                  </div>
                </Card>
              ))
            ) : (
              successStoryGroups.map((group, groupIndex) => (
                <motion.div 
                  key={`group-${groupIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1 }}
                >
                  <Card className="p-3 bg-white shadow-md border-none hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="flex flex-col gap-3">
                      {group.map((image, imageIndex) => (
                        <motion.div
                          key={`image-${groupIndex}-${imageIndex}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: imageIndex * 0.1 }}
                          className="w-full overflow-hidden rounded-md bg-gray-100"
                        >
                          <img 
                            src={image}
                            alt={`Success story ${groupIndex * 3 + imageIndex + 1}`}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
          
          {/* Mobile View - Carousel */}
          <div className="block md:hidden">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={`mobile-skeleton-${index}`} className="basis-1/2">
                      <div className="px-1">
                        <Skeleton className="w-full aspect-square rounded-lg" />
                      </div>
                    </CarouselItem>
                  ))
                ) : (
                  mobileImages.map((image, index) => (
                    <CarouselItem key={`mobile-image-${index}`} className="basis-1/2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                        className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 px-1"
                      >
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">
                          <img 
                            src={image} 
                            alt={`Success story ${index + 1}`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))
                )}
              </CarouselContent>
              <div className="flex justify-center mt-2 gap-1">
                <CarouselPrevious className="static transform-none h-5 w-5 sm:h-7 sm:w-7" />
                <CarouselNext className="static transform-none h-5 w-5 sm:h-7 sm:w-7" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
