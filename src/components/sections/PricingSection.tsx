
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import PricingToggle from "@/components/PricingToggle";

interface PricingSectionProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ isAnnual, setIsAnnual }) => {
  return (
    <section className="py-10 md:py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-headline-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Blueprint
        </motion.h2>
        <motion.p 
          className="text-center text-primary-blue mb-8 md:mb-12 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here's What You'll Unlock:
        </motion.p>
        
        <PricingToggle onToggle={setIsAnnual} />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={isAnnual ? 'annual' : 'monthly'}
            initial={{ opacity: 0, x: isAnnual ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isAnnual ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <PricingCard
              title="Content Blueprint"
              monthlyPrice={isAnnual ? "15" : "30"}
              upfrontPrice={isAnnual ? "179" : null}
              features={[
                "3 Weekly Live Calls with Maddox",
                "Private Discord Community",
                "Exclusive Vendor Resources",
                "Real Templates and Files",
                "Premium Real-Time Chat Support"
              ]}
              ctaText={`Get ${isAnnual ? 'Yearly' : 'Monthly'} Access`}
              highlighted={true}
              onCtaClick={() => window.open(isAnnual 
                ? "https://whop.com/checkout/plan_MC63d0DmpMZ7f?d2c=true" 
                : "https://whop.com/checkout/plan_D22BacLLTv4zt?d2c=true", "_blank")}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PricingSection;
