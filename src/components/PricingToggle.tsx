
import React, { useState } from "react";
import { motion } from "framer-motion";

interface PricingToggleProps {
  onToggle: (isAnnual: boolean) => void;
}

const PricingToggle = ({ onToggle }: PricingToggleProps) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleToggle = () => {
    const newValue = !isAnnual;
    setIsAnnual(newValue);
    onToggle(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <span 
          className={`text-lg font-medium mr-3 cursor-pointer transition-all duration-300 ${isAnnual ? 'text-headline-text scale-110' : 'text-muted-text scale-90'}`}
          onClick={() => {
            setIsAnnual(true);
            onToggle(true);
          }}
        >
          Yearly
          {isAnnual && (
            <div className="text-success-accent text-sm mt-1">
              Save 50%
            </div>
          )}
        </span>
        <motion.div 
          className="w-16 h-8 bg-neutral-bg rounded-full p-1 cursor-pointer flex relative overflow-hidden"
          onClick={handleToggle}
          whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
        >
          <motion.div 
            className="w-6 h-6 rounded-full bg-primary-blue shadow-lg shadow-primary-blue/50"
            animate={{ 
              x: isAnnual ? 0 : 32,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 30,
            }}
          />
        </motion.div>
        <span 
          className={`text-lg font-medium ml-3 cursor-pointer transition-all duration-300 ${!isAnnual ? 'text-headline-text scale-110' : 'text-muted-text scale-90'}`}
          onClick={() => {
            setIsAnnual(false);
            onToggle(false);
          }}
        >
          Monthly
        </span>
      </div>
    </div>
  );
};

export default PricingToggle;
