
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
    <div className="flex items-center justify-center mb-12">
      <span 
        className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-400'} mr-3 cursor-pointer`}
        onClick={() => {
          setIsAnnual(true);
          onToggle(true);
        }}
      >
        Annual
      </span>
      <div 
        className="w-12 h-6 bg-white/20 rounded-full p-1 cursor-pointer flex"
        onClick={handleToggle}
      >
        <motion.div 
          className="w-4 h-4 rounded-full bg-soft-purple shadow-lg shadow-soft-purple/50"
          animate={{ x: isAnnual ? 0 : 24 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
      <span 
        className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'} ml-3 cursor-pointer`}
        onClick={() => {
          setIsAnnual(false);
          onToggle(false);
        }}
      >
        Monthly
      </span>
    </div>
  );
};

export default PricingToggle;
