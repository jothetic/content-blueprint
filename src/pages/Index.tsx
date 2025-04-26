import React, { useState, useEffect } from "react";
import { Element } from 'react-scroll';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import PricingToggle from "@/components/PricingToggle";
import VideoTestimonialCard from "@/components/VideoTestimonialCard";
import { ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const testimonials = [
    {
      name: "Renzo Guevarra",
      role: "CEO Growthology Agency, 500k+ followers",
      quote: "The academy transformed my content strategy. My engagement increased by 300% in just two months.",
      image: "/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
    },
    {
      name: "Sarah Miller",
      role: "Fashion Influencer, 250k+ followers",
      quote: "This program helped me turn my passion into a 6-figure business. The community support is incredible.",
      image: "/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
    },
    {
      name: "David Chen",
      role: "Digital Creator, 400k+ followers",
      quote: "The strategies taught here are game-changing. I've tripled my monthly revenue since joining.",
      image: "/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
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
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-white"
          >
            🚀 Master the Blueprint to Grow
          </motion.h1>
          <motion.h1 
            variants={fadeIn}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-soft-purple"
          >
            and Monetize Your Audience.
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-base md:text-lg text-white mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            Turn views into income with proven systems, live coaching, and exclusive tools—built by a creator who made $100K at 15.
          </motion.p>
          
          {/* Video Section */}
          <motion.div
            variants={fadeIn}
            className="relative max-w-4xl mx-auto mb-8 md:mb-12"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/public/lovable-uploads/f6d412a1-a0ef-414f-a003-446d06141402.png" 
                alt="Course Preview" 
                className="w-full aspect-video object-cover"
              />
              <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 bg-green-500/80 px-3 py-1 md:px-4 md:py-2 rounded-md text-white font-medium text-xs md:text-sm">
                go viral authentically.
              </div>
              <Button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 backdrop-blur-sm rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <div className="w-0 h-0 border-t-[12px] md:border-t-[15px] border-t-transparent border-l-[20px] md:border-l-[25px] border-l-white border-b-[12px] md:border-b-[15px] border-b-transparent ml-1" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center"
          >
            <Button 
              className="bg-soft-purple hover:bg-soft-purple/90 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-grow mb-4"
              onClick={() => window.open("https://whop.com/content-blueprint/", "_blank")}
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
        <section className="py-10 md:py-20 px-4 md:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-black px-2 md:px-4">
              🔥 Your Step-by-Step Blueprint for Real Growth and Income
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto px-4">
              Creator Blueprint isn't just another content course—it's the complete system Maddox used to scale past $100K before turning 16. Inside, you'll unlock real strategies, weekly coaching calls, exclusive vendor tools, and a community that pushes you to win.
            </p>
            
            {!isMobile ? (
              // Desktop layout
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
                <div className="lg:col-span-1">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index}>
                          <TestimonialCard {...testimonial} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-6 gap-4">
                      <CarouselPrevious className="relative inset-0 translate-y-0" />
                      <CarouselNext className="relative inset-0 translate-y-0" />
                    </div>
                  </Carousel>
                </div>
                
                {/* Video Testimonial Carousel */}
                <div className="lg:col-span-2 bg-soft-gray rounded-lg p-4 md:p-6">
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                          <div>
                            <VideoTestimonialCard
                              quote="Mino got me from 10k to 55k followers on TikTok, 300 to 355k followers on IG."
                              thumbnail="/public/lovable-uploads/f6d412a1-a0ef-414f-a003-446d06141402.png"
                              onClick={() => setIsPlaying(!isPlaying)}
                            />
                          </div>
                          <div className="flex items-center">
                            <div className="py-4 md:py-0">
                              <h3 className="font-bold text-xl mb-3">Alison Chang</h3>
                              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                "This program completely transformed my approach to social media. 
                                I've not only gained more followers but also built a genuine community 
                                that engages with my content and converts to sales."
                              </p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <div className="flex justify-center mt-6 gap-4">
                      <CarouselPrevious className="relative inset-0 translate-y-0" />
                      <CarouselNext className="relative inset-0 translate-y-0" />
                    </div>
                  </Carousel>
                </div>
              </div>
            ) : (
              // Mobile layout - completely different structure
              <div className="space-y-6 mb-8">
                {/* Mobile Video Testimonial */}
                <div className="bg-soft-gray rounded-lg p-4">
                  <VideoTestimonialCard
                    quote="Mino got me from 10k to 55k followers on TikTok, 300 to 355k followers on IG."
                    thumbnail="/public/lovable-uploads/f6d412a1-a0ef-414f-a003-446d06141402.png"
                    onClick={() => setIsPlaying(!isPlaying)}
                  />
                  <div className="mt-4">
                    <h3 className="font-bold text-lg mb-2">Alison Chang</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      "This program completely transformed my approach to social media. 
                      I've not only gained more followers but also built a genuine community 
                      that engages with my content and converts to sales."
                    </p>
                  </div>
                </div>
                
                {/* Mobile Regular Testimonials */}
                <Carousel className="w-full">
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <TestimonialCard {...testimonial} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-4 gap-2">
                    <CarouselPrevious className="relative inset-0 translate-y-0 h-8 w-8" />
                    <CarouselNext className="relative inset-0 translate-y-0 h-8 w-8" />
                  </div>
                </Carousel>
              </div>
            )}
          </div>
        </section>
      </Element>

      {/* Pricing Section */}
      <section className="py-10 md:py-20 px-4 md:px-6 lg:px-8 bg-deep-purple-gradient">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-white">
            Choose Your Blueprint
          </h2>
          <p className="text-center text-soft-purple mb-8 md:mb-12 text-sm md:text-base">
            Here's What You'll Unlock:
          </p>
          
          <PricingToggle onToggle={setIsAnnual} />
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <PricingCard
              title="Creator Blueprint Lite"
              price="0"
              features={[
                "Starter program with 7-day content roadmap",
                "Free resources and guides",
                "Basic community access",
                "Essential growth templates"
              ]}
              ctaText="Start for Free"
              onCtaClick={() => window.open("https://whop.com/content-blueprint/", "_blank")}
            />
            <PricingCard
              title="Content Blueprint"
              price={isAnnual ? "24.99" : "30"}
              features={[
                "10+ Premium Trainings",
                "3 Weekly Live Calls with Maddox",
                "Private Discord Community",
                "Exclusive Vendor Resources",
                "Real Templates and Files",
                "Premium Real-Time Chat Support"
              ]}
              ctaText="Get Full Access"
              onCtaClick={() => window.open("https://whop.com/content-blueprint/", "_blank")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
