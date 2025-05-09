
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

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
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#1A0033] to-[#0D001F]">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Who This Is For
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            This blueprint is designed for creators who are ready to take their content to the next level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="h-full"
            >
              <Card className="bg-gradient-to-br from-black/80 to-purple-900/20 border border-purple-900/30 p-6 rounded-xl text-left h-full hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300 group">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="p-2 bg-purple-700/30 rounded-lg">
                    <Star className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">{persona.title}</h3>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors pl-10">{persona.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
