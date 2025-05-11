
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
    <section className="py-10 md:py-20 px-4 md:px-6 lg:px-8 bg-deep-purple-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Blueprint
        </motion.h2>
        <motion.p 
          className="text-center text-soft-purple mb-8 md:mb-12 text-sm md:text-base"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {/* Basic Plan */}
            <PricingCard
              title="Content Blueprint Basic"
              price="29"
              features={[
                "7+ hours of video guides",
                "Access to Discord Community",
                "Basic Templates",
                "Email Support"
              ]}
              ctaText="Get One-Time Access"
              highlighted={false}
              onCtaClick={() => window.open("https://whop.com/checkout/plan_UXAh2KKSIAy75/", "_blank")}
            />

            {/* Main Plan */}
            <PricingCard
              title="Content Blueprint Pro"
              monthlyPrice={isAnnual ? "15" : "30"}
              upfrontPrice={isAnnual ? "179" : null}
              features={[
                "14+ hours of video guides",
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

            {/* Additional Plan (can be customized) */}
            <PricingCard
              title="Content Blueprint Team"
              monthlyPrice={isAnnual ? "25" : "45"}
              upfrontPrice={isAnnual ? "299" : null}
              features={[
                "Everything in Pro plan",
                "Team access (up to 3 members)",
                "Priority support",
                "1-on-1 strategy call",
                "Custom content review",
                "Advanced analytics tools"
              ]}
              ctaText={`Get ${isAnnual ? 'Yearly' : 'Monthly'} Team Access`}
              highlighted={false}
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
