
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Users, BookOpen, Rocket, LightbulbIcon } from "lucide-react";

interface Persona {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const personas: Persona[] = [
  {
    title: "The 'I Post but I Don't Grow' Creator",
    description: "Posts consistently but struggles to see real growth.",
    icon: <Star className="h-6 w-6" />
  },
  {
    title: "The Young Builder",
    description: "Under 18 and ready to build something bigger than school ever taught them.",
    icon: <Rocket className="h-6 w-6" />
  },
  {
    title: "The Hidden Creator",
    description: "Wants to grow but doesn't know how to get real attention.",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "The Hustler with No Blueprint",
    description: "Works hard but lacks a clear system to turn content into money.",
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    title: "The Broke Genius",
    description: "Has the ideas and drive, but needs a strategy to monetize.",
    icon: <LightbulbIcon className="h-6 w-6" />
  }
];

const PersonasSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0033] to-[#0D001F] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-soft-purple bg-clip-text text-transparent">
              Who This Is For
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            This blueprint is designed for creators who are ready to take their content to the next level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="h-full"
            >
              <Card className="bg-gradient-to-br from-black/70 via-purple-900/20 to-black/50 border border-purple-500/30 p-7 rounded-xl text-left h-full 
                hover:shadow-2xl hover:shadow-purple-600/20 transform hover:-translate-y-2 transition-all duration-500 group backdrop-blur-sm">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-600/30 to-blue-500/20 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                    {persona.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors mt-1">
                    {persona.title}
                  </h3>
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors pl-16 text-base">
                  {persona.description}
                </p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
