
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

interface Feature {
  title: string;
  description: string;
  color: string;
  tags?: string[];
}

const features: Feature[] = [
  {
    title: "Creator Masterclass (views + income)",
    description: "Grow fast. Monetize smart. Build something real.",
    color: "bg-blue-100",
    tags: ["Video Training", "PDF Guides"]
  },
  {
    title: "Premium Discord",
    description: "Get access to a community of like-minded individuals who are putting in the work.",
    color: "bg-orange-100",
    tags: ["Community", "Support"]
  },
  {
    title: "Premium Content Blueprints",
    description: "Unlock exclusive files, templates, and resources available only here.",
    color: "bg-purple-100",
    tags: ["Templates", "Resources"]
  },
  {
    title: "Premium Chat",
    description: "Chat in real-time and connect with the other members of our community.",
    color: "bg-green-100",
    tags: ["Real-time", "Messaging"]
  },
  {
    title: "Announcements",
    description: "Share your thoughts and connect with others on topics that matter to you.",
    color: "bg-pink-100",
    tags: ["Updates", "News"]
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-deep-purple-gradient">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              Here's What You'll Get
            </span>
          </h2>
          <div className="w-24 h-1 bg-soft-purple mx-auto rounded-full mt-2 mb-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="h-full"
            >
              <Card className={`rounded-xl overflow-hidden bg-white dark:bg-black/30 border-0 shadow-lg h-full flex flex-col ${
                index === features.length - 1 && features.length % 2 !== 0 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""
              }`}>
                <div className={`${feature.color} dark:opacity-10 p-4 md:p-6 lg:p-7 h-full flex flex-col`}>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 md:mb-5 flex-grow">{feature.description}</p>
                  
                  {feature.tags && (
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-6">
                      {feature.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-medium bg-white/30 dark:bg-white/10 text-gray-800 dark:text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-auto">
                    <Link 
                      to="pricing-section" 
                      spy={true} 
                      smooth={true}
                      offset={-70} 
                      duration={500}
                      className="group inline-flex items-center font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"
                    >
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
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
