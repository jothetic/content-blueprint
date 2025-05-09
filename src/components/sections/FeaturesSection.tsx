
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Users, Star, Award, Gift } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Creator Masterclass (views + income)",
    description: "Grow fast. Monetize smart. Build something real.",
    icon: <Book className="h-6 w-6" />
  },
  {
    title: "Premium Discord",
    description: "Get access to a community of like-minded individuals who are putting in the work.",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Premium Content Blueprints",
    description: "Unlock exclusive files, templates, and resources available only here.",
    icon: <Star className="h-6 w-6" />
  },
  {
    title: "Premium Chat",
    description: "Chat in real-time and connect with the other members of our community.",
    icon: <Gift className="h-6 w-6" />
  },
  {
    title: "Announcements",
    description: "Share your thoughts and connect with others on topics that matter to you.",
    icon: <Award className="h-6 w-6" />
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#0D001F] to-[#150033]">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 text-white">
            Here's What You'll Get
          </h2>
          <div className="w-24 h-1 bg-soft-purple mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            Everything you need to grow and monetize your audience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-gradient-to-br from-black/80 to-purple-900/20 border border-purple-900/30 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-900/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-soft-purple/20 rounded-xl text-soft-purple">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
