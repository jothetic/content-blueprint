
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

const PricingCard = ({ title, price, features, ctaText, popular }: PricingCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`p-8 ${popular ? 'bg-gradient-to-br from-teal-500/10 to-transparent' : 'bg-gradient-to-br from-white/5 to-transparent'} backdrop-blur-xl border-white/10 relative overflow-hidden`}>
        {popular && (
          <div className="absolute top-0 right-0">
            <div className="bg-teal-500 text-white text-xs px-3 py-1 rotate-45 transform translate-y-2 translate-x-2">
              Popular
            </div>
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="text-gray-400 ml-1">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <Check className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full ${popular ? 'bg-teal-500 hover:bg-teal-600' : 'bg-white/10 hover:bg-white/20'} transition-all duration-200`}
        >
          {ctaText}
        </Button>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
