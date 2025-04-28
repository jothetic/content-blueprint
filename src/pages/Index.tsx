import React, { useState, useEffect } from "react";
import { Element, scroller } from 'react-scroll';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import PricingToggle from "@/components/PricingToggle";
import { ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { AnimatePresence } from "framer-motion";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setVisible(true);
  }, []);

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

  return (
    <div className="min-h-screen bg-deep-purple-gradient overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
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
                  offset: -50
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

      {/* Testimonials Section */}
      <Element name="testimonials">
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

            {/* Written Testimonials Carousel - Mobile Optimized */}
            <div className="max-w-3xl mx-auto mb-8 md:mb-16">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full px-4 md:px-0"
              >
                <CarouselContent>
                  {writtenTestimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-full">
                      <div className="px-1 md:px-4">
                        <TestimonialCard {...testimonial} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-2 md:gap-4">
                  <CarouselPrevious className="static transform-none" />
                  <CarouselNext className="static transform-none" />
                </div>
              </Carousel>
            </div>

            {/* Success Stories Image Carousel - Mobile Optimized */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-center">
                Success Stories Showcase
              </h3>
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full px-4 md:px-0"
              >
                <CarouselContent>
                  {testimonialImages.map((image, index) => (
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
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-2 md:gap-4">
                  <CarouselPrevious className="static transform-none" />
                  <CarouselNext className="static transform-none" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
      </Element>

      {/* Pricing Section */}
      <Element name="pricing-section">
        <section className="py-10 md:py-20 px-4 md:px-6 lg:px-8 bg-deep-purple-gradient">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Choose Your Blueprint
            </motion.h2>
            <motion.p 
              className="text-center text-soft-purple mb-8 md:mb-12 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Here's What You'll Unlock:
            </motion.p>
            
            <PricingToggle onToggle={setIsAnnual} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={isAnnual ? 'annual' : 'monthly'}
                initial={{ opacity: 0, x: isAnnual ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isAnnual ? 20 : -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-xl mx-auto"
              >
                <PricingCard
                  title="Content Blueprint"
                  price={isAnnual ? "179" : "15"}
                  features={[
                    "10+ Premium Trainings",
                    "3 Weekly Live Calls with Maddox",
                    "Private Discord Community",
                    "Exclusive Vendor Resources",
                    "Real Templates and Files",
                    "Premium Real-Time Chat Support"
                  ]}
                  ctaText={`Get ${isAnnual ? 'Yearly' : 'Monthly'} Access`}
                  highlighted={true}
                  onCtaClick={() => window.open(`https://whop.com/content-blueprint/#my-offers-prod_${isAnnual ? '8bOwN6ScSdHgP' : 'BkyKBvhyYTal0'}`, "_blank")}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </Element>
    </div>
  );
};

export default Index;
