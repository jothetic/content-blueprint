
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
    <div className="flex flex-col items-center justify-center mb-5">
      <div className="flex items-center justify-center mb-2">
        <span 
          className={`text-sm font-medium mr-2 cursor-pointer transition-all duration-300 ${isAnnual ? 'text-white scale-105' : 'text-gray-400 scale-95'}`}
          onClick={() => {
            setIsAnnual(true);
            onToggle(true);
          }}
        >
          Yearly
          {isAnnual && (
            <div className="text-green-400 text-xs mt-0.5">
              Save 50%
            </div>
          )}
        </span>
        <motion.div 
          className="w-12 h-6 bg-white/20 rounded-full p-1 cursor-pointer flex relative overflow-hidden"
          onClick={handleToggle}
          whileHover={{ boxShadow: "0 0 10px rgba(177, 151, 255, 0.5)" }}
        >
          <motion.div 
            className="w-4 h-4 rounded-full bg-soft-purple shadow-lg shadow-soft-purple/50"
            animate={{ 
              x: isAnnual ? 0 : [null, 24],
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 30,
            }}
          />
        </motion.div>
        <span 
          className={`text-sm font-medium ml-2 cursor-pointer transition-all duration-300 ${!isAnnual ? 'text-white scale-105' : 'text-gray-400 scale-95'}`}
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
