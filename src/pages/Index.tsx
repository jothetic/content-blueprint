
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#1A1F2C] to-[#6E59A5]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in">
          Master digital content.
          <br />
          <span className="text-teal-500">Scale your influence.</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Watch this complete guide to build your authentic presence on social media platforms in 2025
        </p>
        
        {/* Video Section */}
        <div className="relative max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/public/lovable-uploads/f6d412a1-a0ef-414f-a003-446d06141402.png" 
            alt="Course Preview" 
            className="w-full rounded-2xl"
          />
          <Button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-20 h-20"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2" />
          </Button>
        </div>
        
        <Button className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-6 rounded-full">
          Start Now <ArrowRight className="ml-2" />
        </Button>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          We've helped <span className="text-teal-500">1,000+ creators</span> reach their goals
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
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
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-black/20">
        <h2 className="text-4xl font-bold text-center mb-4">Start your journey today</h2>
        <p className="text-center text-gray-300 mb-12">Choose the plan that fits your needs</p>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
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
      </section>
    </div>
  );
};

export default Index;
