
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PricingToggleProps {
  onToggle: (isPaid: boolean) => void;
}

const PricingToggle = ({ onToggle }: PricingToggleProps) => {
  const [isPaid, setIsPaid] = useState(true);

  const handleToggle = () => {
    const newValue = !isPaid;
    setIsPaid(newValue);
    onToggle(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <motion.span 
          className={`text-lg font-medium mr-3 cursor-pointer transition-all duration-300 ${isPaid ? 'text-white scale-110' : 'text-gray-400 scale-90'}`}
          onClick={() => {
            setIsPaid(true);
            onToggle(true);
          }}
          whileHover={{ scale: 1.1 }}
        >
          Premium Access
          <AnimatePresence>
            {isPaid && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-green-400 text-sm mt-1"
              >
                Most Popular
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
              x: isPaid ? 0 : 32,
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
          className={`text-lg font-medium ml-3 cursor-pointer transition-all duration-300 ${!isPaid ? 'text-white scale-110' : 'text-gray-400 scale-90'}`}
          onClick={() => {
            setIsPaid(false);
            onToggle(false);
          }}
          whileHover={{ scale: 1.1 }}
        >
          Free Plan
        </motion.span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={isPaid ? 'paid' : 'free'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center text-white/80"
        >
          {isPaid ? (
            "🚀 Unlock all premium features and support"
          ) : (
            "Try our basic features for free"
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PricingToggle;
