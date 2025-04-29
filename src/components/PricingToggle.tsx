
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            type: "spring",
            stiffness: 100 
          }}
        >
          Yearly
          <AnimatePresence>
            {isAnnual && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.8 }}
                transition={{ 
                  duration: 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                className="text-green-400 text-sm mt-1"
              >
                Save 50%
              </motion.div>
            )}
          </AnimatePresence>
        </motion.span>
        <motion.div 
          className="w-16 h-8 bg-white/20 rounded-full p-1 cursor-pointer flex relative overflow-hidden"
          onClick={handleToggle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ boxShadow: "0 0 15px rgba(177, 151, 255, 0.5)" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
            animate={{
              x: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
            }}
          />
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
        </motion.div>
        <motion.span 
          className={`text-lg font-medium ml-3 cursor-pointer transition-all duration-300 ${!isAnnual ? 'text-white scale-110' : 'text-gray-400 scale-90'}`}
          onClick={() => {
            setIsAnnual(false);
            onToggle(false);
          }}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            delay: 0.2,
            type: "spring",
            stiffness: 100 
          }}
        >
          Monthly
        </motion.span>
      </div>
    </div>
  );
};

export default PricingToggle;
