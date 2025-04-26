
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PricingCardProps {
  title: string;
  price?: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
  applyOnly?: boolean;
  onCtaClick?: () => void;
}

const PricingCard = ({ 
  title, 
  price, 
  features, 
  ctaText, 
  highlighted = false,
  applyOnly, 
  onCtaClick 
}: PricingCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Card className={`p-8 ${
        highlighted 
          ? 'bg-white/15 border-soft-purple/50' 
          : 'bg-white/10 border-white/20'
        } backdrop-blur-sm border shadow-xl relative overflow-hidden h-full flex flex-col`}>
        {highlighted && (
          <div className="absolute top-0 right-0 bg-soft-purple text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
            Recommended
          </div>
        )}
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        {!applyOnly && (
          <AnimatePresence mode="wait">
            <motion.div 
              key={price}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <span className="text-3xl font-bold text-white">${price}</span>
              <span className="text-gray-300 ml-1">/month</span>
            </motion.div>
          </AnimatePresence>
        )}
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-center text-gray-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Check className={`h-5 w-5 ${
                highlighted ? 'text-soft-purple' : 'text-white/70'
              } mr-3 flex-shrink-0`} />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
        <Button 
          className={`w-full ${
            highlighted 
              ? 'bg-soft-purple hover:bg-soft-purple/90' 
              : 'bg-white/20 hover:bg-white/30'
          } transition-all duration-200 font-medium`}
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
