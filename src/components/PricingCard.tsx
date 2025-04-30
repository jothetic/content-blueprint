
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  monthlyPrice?: string;
  upfrontPrice?: string | null;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
  onCtaClick?: () => void;
}

const PricingCard = ({ 
  title, 
  monthlyPrice, 
  upfrontPrice, 
  features, 
  ctaText, 
  highlighted = false, 
  onCtaClick 
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`rounded-2xl p-4 sm:p-6 flex flex-col h-full relative overflow-hidden 
      ${highlighted ? 'bg-white shadow-lg border-white/10' : 'bg-white/10 border border-white/20'}`}
    >
      {highlighted && (
        <div className="absolute -top-4 -right-4 bg-soft-purple text-white text-xs py-1 px-3 rounded-lg shadow-md transform rotate-12">
          Best value
        </div>
      )}
      
      <div className="mb-4">
        <h3 className={`text-xl font-bold mb-1 ${highlighted ? 'text-black' : 'text-white'}`}>
          {title}
        </h3>
        <div className="flex items-baseline">
          {monthlyPrice && (
            <div className="flex items-baseline">
              <span className={`text-3xl font-bold ${highlighted ? 'text-black' : 'text-white'}`}>
                ${monthlyPrice}
              </span>
              <span className={`text-sm ml-1 ${highlighted ? 'text-gray-500' : 'text-gray-300'}`}>
                /month
              </span>
            </div>
          )}
        </div>
        
        {upfrontPrice && (
          <p className={`text-sm ${highlighted ? 'text-gray-600' : 'text-gray-300'}`}>
            or ${upfrontPrice} upfront (save 50%)
          </p>
        )}
      </div>
      
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className={`mr-2 h-5 w-5 flex-shrink-0 ${highlighted ? 'text-green-500' : 'text-green-400'}`} />
            <span className={`text-sm ${highlighted ? 'text-gray-700' : 'text-gray-200'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <Button
        className={`w-full py-6 rounded-full text-base ${
          highlighted 
            ? 'bg-soft-purple hover:bg-soft-purple/90 text-white' 
            : 'bg-white hover:bg-white/90 text-soft-purple'
        }`}
        onClick={onCtaClick}
      >
        {ctaText}
      </Button>
    </motion.div>
  );
};

export default PricingCard;
