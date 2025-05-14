import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Target, Trophy } from "lucide-react";
import { scroller } from "react-scroll";

interface Persona {
  title: string;
  description: string;
}

const personas: Persona[] = [
  {
    title: "The 'I Post but I Don't Grow' Creator",
    description: "Posts consistently but struggles to see real growth."
  },
  {
    title: "The Young Builder",
    description: "Under 18 and ready to build something bigger than school ever taught them."
  },
  {
    title: "The Hidden Creator",
    description: "Wants to grow but doesn't know how to get real attention."
  },
  {
    title: "The Hustler with No Blueprint",
    description: "Works hard but lacks a clear system to turn content into money."
  },
  {
    title: "The Broke Genius",
    description: "Has the ideas and drive, but needs a strategy to monetize."
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
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-deep-purple-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Who This Is For</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our program is designed for anyone looking to build and grow their online presence
          </p>
        </motion.div>

        <div className="space-y-4">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-black/70 border-gray-800 p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
                <h3 className="text-xl font-semibold text-white mb-2">{persona.title}</h3>
                <p className="text-gray-400">{persona.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            onClick={scrollToPricing}
            className="bg-soft-purple hover:bg-soft-purple/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Growth Journey Today
          </Button>
          <p className="text-white/70 text-sm mt-2">Limited spots available!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonasSection;
