
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "../Image";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/lovable-uploads/ecc8f11c-9d03-46a3-9a8c-94dda0626c2c.png",
    title: "Creator Masterclass (views + income)",
    description: "Grow fast. Monetize smart. Build something real."
  },
  {
    icon: "/lovable-uploads/ecc8f11c-9d03-46a3-9a8c-94dda0626c2c.png",
    title: "Premium Discord",
    description: "Get access to a community of like-minded individuals who are putting in the work."
  },
  {
    icon: "/lovable-uploads/82f67761-11d6-4185-9bf5-c1a1a95d6919.png",
    title: "Premium Content Blueprints",
    description: "Unlock exclusive files, templates, and resources available only here."
  },
  {
    icon: "/lovable-uploads/5c16301b-adb1-4001-aa82-c1fe27aefbf9.png",
    title: "Premium Chat",
    description: "Chat in real-time and connect with the other members of our community."
  },
  {
    icon: "/lovable-uploads/82f67761-11d6-4185-9bf5-c1a1a95d6919.png",
    title: "Announcements",
    description: "Share your thoughts and connect with others on topics that matter to you."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-deep-purple-gradient">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Here's what you'll get
        </motion.h2>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-black/70 border-gray-800 p-4 flex items-center gap-4">
                <div className="w-14 h-14 flex-shrink-0">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={56} 
                    height={56} 
                    className="rounded-lg" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
