
import React, { useState } from "react";
import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import PricingToggle from "@/components/PricingToggle";

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);
  
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
          Master the blueprint to selling digital products
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
        
        <PricingToggle onToggle={setIsYearly} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-6xl">
            {/* Yearly Plan (only shown when toggle is set to yearly) */}
            {isYearly && (
              <div className="w-full md:w-1/3 max-w-md mx-auto">
                <PricingCard
                  title="Content Blueprint Pro"
                  price="5"
                  secondaryPrice="60"
                  oneTimeText="Billed Yearly"
                  features={[
                    "Creator Masterclass (views + income)",
                    "Premium Discord + Chat",
                    "Exclusive Files, Templates, and Resources",
                    "14+ Hours of Video Content",
                    "Announcements",
                    "Blueprint Bot (free AI hook generator)"
                  ]}
                  ctaText="Get Yearly Access"
                  highlighted={true}
                  onCtaClick={() => window.open("https://whop.com/checkout/plan_MC63d0DmpMZ7f?d2c=true", "_blank")}
                  displayPriceAsMonthly={true}
                />
              </div>
            )}

            {/* Monthly Plan (only shown when toggle is set to monthly) */}
            {!isYearly && (
              <div className="w-full md:w-1/3 max-w-md mx-auto">
                <PricingCard
                  title="Content Blueprint Monthly"
                  price="9.99"
                  monthlyText="per month"
                  features={[
                    "Creator Masterclass (views + income)",
                    "Premium Discord + Chat",
                    "Exclusive Files, Templates, and Resources",
                    "14+ Hours of Video Content",
                    "Announcements",
                    "Blueprint Bot (free AI hook generator)"
                  ]}
                  ctaText="Get Monthly Access"
                  highlighted={true}
                  onCtaClick={() => window.open("https://whop.com/checkout/plan_D22BacLLTv4zt?d2c=true", "_blank")}
                />
              </div>
            )}

            {/* Basic Plan (always visible) */}
            <div className="w-full md:w-1/3 max-w-md mx-auto">
              <PricingCard
                title="Content Blueprint Basic"
                price="29"
                oneTimeText="One-Time Payment"
                features={[
                  "Creator Masterclass (views + income)",
                  "Premium Discord + Chat",
                  "Exclusive Files, Templates, and Resources",
                  "14+ Hours of Video Content",
                  "Announcements",
                  "Blueprint Bot (free AI hook generator)"
                ]}
                ctaText="Get One-Time Access"
                highlighted={false}
                onCtaClick={() => window.open("https://whop.com/checkout/plan_UXAh2KKSIAy75/", "_blank")}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
