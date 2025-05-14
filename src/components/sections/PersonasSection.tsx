
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Sparkles, Book, TrendingUp, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scroller } from "react-scroll";

const personas = [
  {
    title: "The Aspiring Creator",
    description: "You have a passion and want to turn it into income, but aren't sure where to start.",
    benefits: [
      "Learn how to identify your niche and target audience",
      "Discover what content performs best for your expertise",
      "Build a growth strategy that attracts followers consistently",
      "Monetize your content from day one with proven strategies"
    ],
    icon: <Sparkles className="h-8 w-8 text-soft-purple" />
  },
  {
    title: "The Broke Genius",
    description: "You have valuable knowledge but struggle to package and sell it profitably.",
    benefits: [
      "Transform your expertise into high-value digital products",
      "Create sales funnels that convert casual viewers into customers",
      "Learn pricing strategies that maximize your revenue",
      "Build systems that sell your products while you sleep"
    ],
    icon: <Gem className="h-8 w-8 text-soft-purple" />
  },
  {
    title: "The Stagnant Business Owner",
    description: "You've hit a plateau and need new strategies to break through to the next level.",
    benefits: [
      "Revitalize your marketing with advanced content strategies",
      "Tap into new audience segments you're currently missing",
      "Optimize your sales process to increase conversion rates",
      "Scale your business with automation and systems"
    ],
    icon: <TrendingUp className="h-8 w-8 text-soft-purple" />
  }
];

const PersonasSection: React.FC = () => {
  const scrollToPricing = () => {
    try {
      scroller.scrollTo('pricing-section', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -50
      });
    } catch (error) {
      console.error("Scroll error:", error);
      // Fallback method
      const pricingSection = document.getElementById('pricing-section');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Who This Is For
        </motion.h2>
        <motion.p 
          className="text-center mb-8 md:mb-12 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Designed for anyone looking to grow and monetize their expertise, no matter where you are in your journey.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {personas.map((persona, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-200 shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-purple-50 p-3 rounded-full">
                      {persona.icon}
                    </div>
                    <h3 className="text-xl font-bold">{persona.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{persona.description}</p>
                  <ul className="space-y-2">
                    {persona.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Add CTA button under "The Broke Genius" card */}
              {index === 1 && (
                <motion.div 
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Button
                    onClick={scrollToPricing}
                    className="bg-soft-purple hover:bg-soft-purple/90 text-white px-6 py-5 font-semibold text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
                  >
                    Start Your Growth Journey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
