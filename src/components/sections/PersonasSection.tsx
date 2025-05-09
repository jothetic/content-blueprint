
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-deep-purple-gradient">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Who this is for
        </motion.h2>

        <div className="space-y-4">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-black/70 border-gray-800 p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{persona.title}</h3>
                <p className="text-gray-400">{persona.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
