
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

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [visible, setVisible] = useState(false);

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
      <section className="pt-32 pb-16 px-4">
        <motion.div
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white"
          >
            Master short-form content.
          </motion.h1>
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-soft-purple"
          >
            Scale your business.
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-white mb-8 max-w-2xl mx-auto"
          >
            Watch this complete guide to build your authentic fanbase on TikTok and Instagram in 2025:
          </motion.p>
          
          {/* Video Section */}
          <motion.div
            variants={fadeIn}
            className="relative max-w-4xl mx-auto mb-12"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/public/lovable-uploads/f6d412a1-a0ef-414f-a003-446d06141402.png" 
                alt="Course Preview" 
                className="w-full aspect-video object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-green-500/80 px-4 py-2 rounded-md text-white font-medium text-sm">
                go viral authentically.
              </div>
              <Button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center"
          >
            <Button className="bg-soft-purple hover:bg-soft-purple/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-grow mb-4">
              Start <ArrowRightIcon className="ml-1 w-5 h-5" />
            </Button>
            
            <div className="flex items-center text-gray-400 text-sm mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2">4.98 (40+ reviews)</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <Element name="testimonials">
        <section className="py-20 px-4 bg-white">
          <p className="text-soft-purple text-sm font-medium tracking-wide uppercase mb-3 text-center">STUDENT TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            We've helped over 1,000 entrepreneurs reach 10K per month
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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
            <div className="lg:col-span-2 bg-soft-gray rounded-lg p-6">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <VideoTestimonialCard
                          quote="Mino got me from 10k to 55k followers on TikTok, 300 to 355k followers on IG."
                          thumbnail="/public/lovable-uploads/f6d412a1-a0ef-414f-a003-446d06141402.png"
                          onClick={() => setIsPlaying(!isPlaying)}
                        />
                      </div>
                      <div className="flex items-center">
                        <div>
                          <h3 className="font-bold text-xl mb-3">Alison Chang</h3>
                          <p className="text-gray-700 leading-relaxed">
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
        </section>
      </Element>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-deep-purple-gradient">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Start your personal branding journey today
          </h2>
          <p className="text-center text-soft-purple mb-12">
            Join the program that fits your needs
          </p>
          
          <PricingToggle onToggle={setIsAnnual} />
          
          <div className="grid md:grid-cols-2 gap-8">
            <PricingCard
              title="Content Academy"
              price={isAnnual ? "49.75" : "99.99"}
              features={[
                "13+ Hours of Video Guides",
                "5 Weekly LIVE Community Calls",
                "Private Creator Community",
                "Bi-Annual In-person Creator Events",
                "4+ TikTok/IG Business Guides"
              ]}
              ctaText="Start for Free"
            />
            <PricingCard
              title="Academy Inner Circle"
              features={[
                "2 Weekly Private Calls with Mino",
                "2 Weekly Business Coaching Calls",
                "Private Entrepreneur Community",
                "Exclusive Sales + Webinar Guides",
                "Exclusive Copy+Paste Funnels",
                "EditorMatch: pairing with an editor"
              ]}
              ctaText="Apply Now"
              applyOnly={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
