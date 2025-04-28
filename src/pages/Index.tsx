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
import { AnimatePresence } from "framer-motion";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [visible, setVisible] = useState(false);
  const [isPaid, setIsPaid] = useState(true);
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
      name: "JT Vendors",
      role: "E-commerce Success Story | 28.1K Followers",
      quote: "The strategies from this program helped me scale my store to over $74K in sales. This is the real deal - in just 9 months I've seen a 58% increase in revenue!",
      image: "/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
    },
    {
      name: "Derek Smith",
      role: "Reseller | 65.9K Followers",
      quote: "Started from 2K followers, now at 65.9K. The growth strategies really work - I'm now making consistent sales with my reselling business!",
      image: "/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
    },
    {
      name: "Kenny Witt",
      role: "Content Creator | YouTuber",
      quote: "This course showed me how to grow from 0 to nearly 10K followers. The video content strategies and community support have been game-changing.",
      image: "/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
    },
    {
      name: "Alex Martinez",
      role: "Student Entrepreneur",
      quote: "Went from making $0 to $500/day using these methods. If you're 13-20 and want to start making real money online, this is your blueprint!",
      image: "/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
    },
    {
      name: "Sarah Chen",
      role: "Digital Marketer | 45K Followers",
      quote: "I can't thank you enough brother! Within 3 months, my account grew from 5K to 45K followers. The engagement strategies are pure gold!",
      image: "/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
    },
    {
      name: "Mike Thompson",
      role: "Fitness Influencer | 92K Followers",
      quote: "The blueprint really works! Went from struggling to get views to hitting 100K+ consistently. Made over $12K last month from brand deals alone.",
      image: "/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
    },
    {
      name: "Emma Rodriguez",
      role: "Fashion Creator | 156K Following",
      quote: "Best investment I've made for my social media career. Not only did I grow my following, but I learned how to actually monetize it properly!",
      image: "/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
    },
    {
      name: "James Wilson",
      role: "Tech Reviewer | 83.5K Subscribers",
      quote: "From 10K to 83.5K subscribers in 6 months following your strategies. The engagement methods are next level - averaging 25K views per video now.",
      image: "/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
    },
    {
      name: "Lisa Parker",
      role: "Lifestyle Creator | 120K+ Community",
      quote: "Your mentorship changed everything. The community is incredible, and the strategies helped me quit my 9-5. Now making 5 figures monthly from my content!",
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
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-white tracking-tight"
          >
            🚀 Master the Blueprint to Grow
          </motion.h1>
          <motion.h1 
            variants={fadeIn}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-soft-purple tracking-tight"
          >
            and Monetize Your Audience.
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-base md:text-lg text-white mb-6 md:mb-8 max-w-2xl mx-auto font-medium"
          >
            Turn views into income with proven systems, live coaching, and exclusive tools—built by a creator who made $100K at 15.
          </motion.p>
          
          {/* Video Section */}
          <motion.div
            variants={fadeIn}
            className="relative max-w-4xl mx-auto mb-8 md:mb-12"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <YouTubeEmbed 
                videoId="7EHqhKXjzzs"
                className="w-full"
              />
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
            
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
          
          <PricingToggle onToggle={setIsPaid} />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={isPaid ? 'paid' : 'free'}
              initial={{ opacity: 0, x: isPaid ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isPaid ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-xl mx-auto"
            >
              {isPaid ? (
                <PricingCard
                  title="Content Blueprint"
                  price="24.99"
                  features={[
                    "10+ Premium Trainings",
                    "3 Weekly Live Calls with Maddox",
                    "Private Discord Community",
                    "Exclusive Vendor Resources",
                    "Real Templates and Files",
                    "Premium Real-Time Chat Support"
                  ]}
                  ctaText="Get Full Access"
                  highlighted={true}
                  onCtaClick={() => window.open("https://whop.com/content-blueprint/#my-offers-prod_8bOwN6ScSdHgP", "_blank")}
                />
              ) : (
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
                  highlighted={false}
                  onCtaClick={() => window.open("https://whop.com/creator-blueprint-lite/#my-offers-prod_BkyKBvhyYTal0", "_blank")}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Index;
