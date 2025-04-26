
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#1A1F2C] to-[#2C1F3D]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Master digital content.
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Scale your influence.
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Watch this complete guide to build your authentic presence on social media platforms in 2025
          </p>
          
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-4xl mx-auto mb-12"
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10">
              <img 
                src="/public/lovable-uploads/f6d412a1-a0ef-414f-a003-446d06141402.png" 
                alt="Course Preview" 
                className="w-full rounded-2xl transform hover:scale-105 transition-transform duration-700"
              />
              <Button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 transition-all duration-300"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2" />
              </Button>
            </div>
          </motion.div>
          
          <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Start Now <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            We've helped <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">1,000+ creators</span> reach their goals
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Alex Rivera"
              role="Content Creator"
              followers="500k+ followers"
              quote="The academy transformed my content strategy. My engagement increased by 300% in just two months."
              image="/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
            />
            <TestimonialCard
              name="Sarah Chen"
              role="Digital Entrepreneur"
              followers="250k+ followers"
              quote="The community and resources here are unmatched. I went from 10k to 200k followers in under a year."
              image="/public/lovable-uploads/01d386bc-2c28-41ed-bb80-b177b7c6a656.png"
            />
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-black/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Start your journey today
          </h2>
          <p className="text-center text-gray-400 mb-12">Choose the plan that fits your needs</p>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="0"
              features={[
                "Basic Content Templates",
                "Community Access",
                "Weekly Newsletter"
              ]}
              ctaText="Start Free"
            />
            <PricingCard
              title="Pro Creator"
              price="49.99"
              features={[
                "Advanced Content Strategy",
                "1-on-1 Mentoring",
                "Private Community Access",
                "Weekly Live Sessions"
              ]}
              ctaText="Join Now"
              popular
            />
            <PricingCard
              title="Enterprise"
              price="199.99"
              features={[
                "Custom Content Strategy",
                "Daily Support",
                "Brand Partnerships",
                "Advanced Analytics"
              ]}
              ctaText="Contact Us"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
