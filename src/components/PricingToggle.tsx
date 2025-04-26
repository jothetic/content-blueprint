
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <motion.span 
          className={`text-lg font-medium mr-3 cursor-pointer transition-all duration-300 ${isAnnual ? 'text-white scale-110' : 'text-gray-400 scale-90'}`}
          onClick={() => {
            setIsAnnual(true);
            onToggle(true);
          }}
          whileHover={{ scale: 1.1 }}
        >
          Annual
          <AnimatePresence>
            {isAnnual && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-green-400 text-sm mt-1"
              >
                Save 50%
              </motion.div>
            )}
          </AnimatePresence>
        </motion.span>
        <div 
          className="w-16 h-8 bg-white/20 rounded-full p-1 cursor-pointer flex relative"
          onClick={handleToggle}
        >
          <motion.div 
            className="w-6 h-6 rounded-full bg-soft-purple shadow-lg shadow-soft-purple/50"
            animate={{ 
              x: isAnnual ? 0 : 32,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 30,
              scale: { duration: 0.2 }
            }}
          />
        </div>
        <motion.span 
          className={`text-lg font-medium ml-3 cursor-pointer transition-all duration-300 ${!isAnnual ? 'text-white scale-110' : 'text-gray-400 scale-90'}`}
          onClick={() => {
            setIsAnnual(false);
            onToggle(false);
          }}
          whileHover={{ scale: 1.1 }}
        >
          Monthly
        </motion.span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={isAnnual ? 'annual' : 'monthly'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center text-white/80"
        >
          {isAnnual ? (
            "🎉 Save 50% with annual billing!"
          ) : (
            "Flexible monthly payments"
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PricingToggle;
