
import React, { useState } from "react";
import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import PricingToggle from "@/components/PricingToggle";

const CustomPricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const features = [
    "10+ hours of video content",
    "Group Coaching Calls",
    "Premium Discord Community",
    "Content Blueprints (templates)",
    "Blueprint AI Bot"
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-deep-purple/40 to-deep-purple/90">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              Invest in Your Future
            </span>
          </h2>
          <div className="w-24 h-1 bg-soft-purple mx-auto rounded-full mt-2 mb-6"></div>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Join today and get lifetime access to all features, resources, and future updates
          </p>
          
          <div className="mt-8">
            <PricingToggle 
              value={billingCycle}
              onChange={setBillingCycle}
            />
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PricingCard
              title="Creator Blueprint"
              price={billingCycle === "monthly" ? 47 : 397}
              priceCycle={billingCycle === "monthly" ? "month" : "year"}
              description="Everything you need to succeed as a digital creator"
              buttonText="Get Instant Access"
              features={features}
              primary={true}
              ctaLink={billingCycle === "monthly" ? 
                "https://whop.com/checkout/plan_b0JOwg2UwCX8A/" : 
                "https://whop.com/checkout/plan_SGCoEJubA4kjw/"}
            />
          </motion.div>
          
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-slate-900/40 rounded-xl shadow-lg border border-purple-500/10"></div>
              <div className="bg-white/5 border border-white/10 md:border-white/[0.05] rounded-xl shadow-lg p-8 md:p-12 h-full">
                <h3 className="text-2xl font-bold text-white mb-4">Got Questions?</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-1">Not sure if this is for you?</h4>
                    <p className="text-white/70 text-sm">
                      Book a free 15-minute call to discuss your specific situation and goals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Looking for a custom solution?</h4>
                    <p className="text-white/70 text-sm">
                      We offer personalized coaching and consulting services for creators with specific needs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Need more information?</h4>
                    <p className="text-white/70 text-sm">
                      Send us an email with your questions and we'll get back to you within 24 hours.
                    </p>
                  </div>
                  <div className="pt-4">
                    <a 
                      href="mailto:support@creatorblueprint.co"
                      className="inline-block bg-white/10 hover:bg-white/20 text-white text-center py-3 px-8 rounded-lg transition-all duration-300 w-full"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomPricingSection;
