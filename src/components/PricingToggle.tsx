
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
    <div className="flex flex-col items-center justify-center mb-6 md:mb-12">
      <div className="flex items-center justify-center mb-3 md:mb-4">
        <span 
          className={`text-sm sm:text-base md:text-lg font-medium mr-2 sm:mr-3 cursor-pointer transition-all duration-300 ${isAnnual ? 'text-white scale-105' : 'text-gray-400 scale-95'}`}
          onClick={() => {
            setIsAnnual(true);
            onToggle(true);
          }}
        >
          Yearly
          {isAnnual && (
            <div className="text-green-400 text-xs sm:text-sm mt-0.5 sm:mt-1">
              Save 50%
            </div>
          )}
        </span>
        <motion.div 
          className="w-12 h-6 sm:w-14 sm:h-7 md:w-16 md:h-8 bg-white/20 rounded-full p-1 cursor-pointer flex relative overflow-hidden"
          onClick={handleToggle}
          whileHover={{ boxShadow: "0 0 15px rgba(177, 151, 255, 0.5)" }}
        >
          <motion.div 
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-soft-purple shadow-lg shadow-soft-purple/50"
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
          className={`text-sm sm:text-base md:text-lg font-medium ml-2 sm:ml-3 cursor-pointer transition-all duration-300 ${!isAnnual ? 'text-white scale-105' : 'text-gray-400 scale-95'}`}
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
