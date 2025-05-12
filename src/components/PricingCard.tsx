
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface PricingCardProps {
  title: string;
  price?: string;
  secondaryPrice?: string;
  monthlyPrice?: string;
  upfrontPrice?: string | null;
  oneTimeText?: string;
  monthlyText?: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
  applyOnly?: boolean;
  onCtaClick?: () => void;
  displayPriceAsMonthly?: boolean;
}

const PricingCard = ({ 
  title, 
  price,
  secondaryPrice,
  monthlyPrice,
  upfrontPrice,
  oneTimeText,
  monthlyText,
  features, 
  ctaText, 
  highlighted = false,
  applyOnly, 
  onCtaClick,
  displayPriceAsMonthly = false
}: PricingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="w-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className={`p-8 ${
        highlighted 
          ? 'bg-white/15 border-soft-purple/50' 
          : 'bg-white/10 border-white/20'
        } backdrop-blur-sm border shadow-xl relative overflow-hidden h-full flex flex-col`}>
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
          animate={{ 
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div 
          className="absolute -inset-[1px] rounded-lg"
          style={{ 
            background: highlighted 
              ? "linear-gradient(90deg, rgba(177,151,255,0.3) 0%, rgba(177,151,255,0.1) 50%, rgba(177,151,255,0.3) 100%)" 
              : "transparent",
            opacity: 0,
            zIndex: -1
          }}
          animate={{ 
            opacity: isHovered && highlighted ? 1 : 0,
            background: highlighted && isHovered 
              ? ["linear-gradient(90deg, rgba(177,151,255,0.3) 0%, rgba(177,151,255,0.1) 50%, rgba(177,151,255,0.3) 100%)",
                 "linear-gradient(180deg, rgba(177,151,255,0.3) 0%, rgba(177,151,255,0.1) 50%, rgba(177,151,255,0.3) 100%)",
                 "linear-gradient(270deg, rgba(177,151,255,0.3) 0%, rgba(177,151,255,0.1) 50%, rgba(177,151,255,0.3) 100%)",
                 "linear-gradient(0deg, rgba(177,151,255,0.3) 0%, rgba(177,151,255,0.1) 50%, rgba(177,151,255,0.3) 100%)",
                 "linear-gradient(90deg, rgba(177,151,255,0.3) 0%, rgba(177,151,255,0.1) 50%, rgba(177,151,255,0.3) 100%)"]
              : "transparent"
          }}
          transition={{ 
            duration: isHovered ? 4 : 0.3,
            repeat: isHovered ? Infinity : 0,
            ease: "linear"
          }}
        />
        
        <h3 className="text-xl font-semibold mb-4 text-white relative z-10">{title}</h3>
        {!applyOnly && (
          <div className="mb-6">
            {price && (
              <div className="flex items-center">
                {displayPriceAsMonthly ? (
                  <>
                    <div className="flex flex-col">
                      <div className="flex items-end">
                        <motion.span
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 500,
                            damping: 10
                          }}
                          className="text-3xl font-bold text-white"
                        >
                          ${price}
                        </motion.span>
                        <span className="text-gray-300 ml-1">/mo</span>
                      </div>
                      
                      {secondaryPrice && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-gray-300 text-sm mt-1"
                        >
                          ${secondaryPrice} billed yearly
                        </motion.div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <motion.span
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 500,
                        damping: 10
                      }}
                      className="text-3xl font-bold text-white"
                    >
                      ${price}
                    </motion.span>
                    {monthlyText && <span className="text-gray-300 ml-1">{monthlyText}</span>}
                  </>
                )}
              </div>
            )}
            
            {oneTimeText && !displayPriceAsMonthly && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-sm mt-1"
              >
                {oneTimeText}
              </motion.div>
            )}
          </div>
        )}
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-center text-gray-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 500,
                  damping: 10,
                  delay: index * 0.1 + 0.2
                }}
              >
                <Check className={`h-5 w-5 ${
                  highlighted ? 'text-soft-purple' : 'text-white/70'
                } mr-3 flex-shrink-0`} />
              </motion.div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {feature}
              </motion.span>
            </motion.li>
          ))}
        </ul>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 500, damping: 10 }}
        >
          <Button 
            className={`w-full ${
              highlighted 
                ? 'bg-soft-purple hover:bg-soft-purple/90' 
                : 'bg-white/20 hover:bg-white/30'
            } transition-all duration-200 font-medium relative overflow-hidden group`}
            onClick={onCtaClick}
          >
            <motion.span
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{
                translateX: isHovered ? '100%' : '-100%',
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                repeat: isHovered ? Infinity : 0,
                repeatType: "loop",
              }}
            />
            <span className="relative z-10">{ctaText}</span>
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
