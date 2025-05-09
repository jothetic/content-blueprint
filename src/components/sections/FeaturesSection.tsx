
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Creator Masterclass (views + income)",
    description: "Grow fast. Monetize smart. Build something real."
  },
  {
    title: "Premium Discord",
    description: "Get access to a community of like-minded individuals who are putting in the work."
  },
  {
    title: "Premium Content Blueprints",
    description: "Unlock exclusive files, templates, and resources available only here."
  },
  {
    title: "Premium Chat",
    description: "Chat in real-time and connect with the other members of our community."
  },
  {
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
              <Card className="bg-black/70 border-gray-800 p-4">
                <div>
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
