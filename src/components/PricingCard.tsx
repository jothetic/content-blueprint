
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
  onCtaClick?: () => void;
}

const PricingCard = ({ title, price, features, ctaText, applyOnly, onCtaClick }: PricingCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Card className="p-8 glass-card relative overflow-hidden h-full flex flex-col group">
        <div className="absolute inset-0 animate-shine pointer-events-none"/>
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
              <span className="text-3xl font-bold text-gradient">${price}</span>
              <span className="text-gray-300 ml-1">/month</span>
            </motion.div>
          </AnimatePresence>
        )}
        <motion.ul 
          variants={listVariants}
          className="space-y-4 mb-8 flex-grow"
        >
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              variants={itemVariants}
              className="flex items-center text-gray-200 group-hover:text-white transition-colors duration-300"
            >
              <Check className="h-5 w-5 text-[#9B6FFF] mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
        <Button 
          className={`w-full ${
            applyOnly 
              ? 'bg-white text-[#2A0F49] hover:bg-gray-200' 
              : 'bg-[#9B6FFF] hover:bg-[#8A5FEE]'
          } transition-all duration-200 font-medium shadow-lg hover:shadow-xl`}
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
