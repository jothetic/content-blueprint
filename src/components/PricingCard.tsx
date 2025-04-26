
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PricingCardProps {
  title: string;
  price?: string;
  features: string[];
  ctaText: string;
  applyOnly?: boolean;
}

const PricingCard = ({ title, price, features, ctaText, applyOnly }: PricingCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl relative overflow-hidden h-full flex flex-col">
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
            <li key={index} className="flex items-center text-gray-200">
              <Check className="h-5 w-5 text-soft-purple mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full ${applyOnly ? 'bg-white text-[#1A0033] hover:bg-gray-200' : 'bg-soft-purple hover:bg-soft-purple/90'} transition-all duration-200 font-medium`}
        >
          {ctaText}
        </Button>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
