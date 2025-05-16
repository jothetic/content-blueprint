
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "@/components/Image";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
  iconSrc?: string;
  lucideIcon?: React.ReactNode;
  tags?: string[];
}

const features: Feature[] = [
  {
    title: "Coaching Calls",
    description: "Access to 3 coaching calls per week to get direct help with your content growth.",
    iconSrc: "/lovable-uploads/bb4f54b5-5fb8-4804-a001-6bb3f9c90622.png",
    tags: ["Weekly", "Live Support"]
  },
  {
    title: "Creator Masterclass (views + income)",
    description: "Grow fast. Monetize smart. Build something real.",
    iconSrc: "/lovable-uploads/0609190e-9589-45c3-8e24-8c2eac94b4f3.png",
    tags: ["Video Training", "PDF Guides"]
  },
  {
    title: "Premium Discord",
    description: "Get access to a community of like-minded individuals who are putting in the work.",
    iconSrc: "/lovable-uploads/0609190e-9589-45c3-8e24-8c2eac94b4f3.png",
    tags: ["Community", "Support"]
  },
  {
    title: "Premium Content Blueprints",
    description: "Unlock exclusive files, templates, and resources available only here.",
    iconSrc: "/lovable-uploads/787869c9-3de6-44dd-a1c9-b9235f055e06.png",
    tags: ["Templates", "Resources"]
  },
  {
    title: "Blueprint Bot",
    description: "A trained AI hook generator which has been trained only on the BEST hooks.",
    lucideIcon: <Bot className="w-10 h-10 text-blue-400" />,
    tags: ["AI", "Hook Generator"]
  }
];

const FeaturesSection: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="h-full"
            >
              <Card className="rounded-xl overflow-hidden bg-white/10 dark:bg-black/30 border border-white/10 shadow-lg h-full flex flex-col">
                <div className="p-3 md:p-5 lg:p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {feature.iconSrc ? (
                      <div className="w-12 h-12 rounded-md mr-3 flex-shrink-0 overflow-hidden">
                        <Image 
                          src={feature.iconSrc} 
                          alt={feature.title}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : feature.lucideIcon ? (
                      <div className="w-12 h-12 rounded-md mr-3 flex-shrink-0 flex items-center justify-center">
                        {feature.lucideIcon}
                      </div>
                    ) : null}
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  
                  <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4 flex-grow">{feature.description}</p>
                  
                  {feature.tags && (
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-0">
                      {feature.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-1.5 md:px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            onClick={scrollToPricing}
            className="bg-soft-purple hover:bg-soft-purple/90 text-white px-6 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Unlock All Features Now
          </Button>
          <p className="text-white/70 text-sm mt-2">Limited-time offer available today!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
