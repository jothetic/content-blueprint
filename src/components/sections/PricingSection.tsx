
import React from "react";
import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";

const PricingSection: React.FC = () => {
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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {/* Basic Plan */}
          <PricingCard
            title="Content Blueprint Basic"
            price="29"
            oneTimeText="One-Time Payment"
            features={[
              "Creator Masterclass (views + income)",
              "Premium Discord",
              "Premium Content Blueprints",
              "Premium Chat",
              "Announcements",
              "Blueprint Bot (free AI hook generator)"
            ]}
            ctaText="Get One-Time Access"
            highlighted={false}
            onCtaClick={() => window.open("https://whop.com/checkout/plan_UXAh2KKSIAy75/", "_blank")}
          />

          {/* Annual Plan */}
          <PricingCard
            title="Content Blueprint Pro"
            price="179"
            oneTimeText="Billed Yearly ($15/month)"
            features={[
              "Creator Masterclass (views + income)",
              "Premium Discord",
              "Premium Content Blueprints",
              "Premium Chat",
              "Announcements",
              "Blueprint Bot (free AI hook generator)"
            ]}
            ctaText="Get Yearly Access"
            highlighted={true}
            onCtaClick={() => window.open("https://whop.com/checkout/plan_MC63d0DmpMZ7f?d2c=true", "_blank")}
          />

          {/* Monthly Plan */}
          <PricingCard
            title="Content Blueprint Monthly"
            price="25"
            monthlyText="per month"
            features={[
              "Creator Masterclass (views + income)",
              "Premium Discord",
              "Premium Content Blueprints",
              "Premium Chat",
              "Announcements",
              "Blueprint Bot (free AI hook generator)"
            ]}
            ctaText="Get Monthly Access"
            highlighted={false}
            onCtaClick={() => window.open("https://whop.com/checkout/plan_D22BacLLTv4zt?d2c=true", "_blank")}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
