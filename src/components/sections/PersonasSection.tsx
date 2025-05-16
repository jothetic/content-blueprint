
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    description: "Wants to grow but doesn't know how to get attention."
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
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-deep-purple-gradient">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              Who This Is For
            </span>
          </h2>
          <div className="w-24 h-1 bg-soft-purple mx-auto rounded-full mt-2 mb-4"></div>
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

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            onClick={scrollToPricing}
            variant="default" 
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
          >
            See Pricing Options
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonasSection;
