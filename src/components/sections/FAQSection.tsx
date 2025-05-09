
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do I need a big following to start?",
    answer: "Nope. I started from zero. This blueprint is built to help you grow from the ground up—even if you've never posted before."
  },
  {
    question: "How long will it take to see results?",
    answer: "Depends on your effort—most see progress within a few consistent weeks."
  },
  {
    question: "What makes this different from other programs?",
    answer: "It's real, tested strategies + weekly support from someone actually doing it."
  },
  {
    question: "What exactly will I learn?",
    answer: "How to grow on social media and turn views into income, step by step."
  },
  {
    question: "Is this blueprint just for teens?",
    answer: "Not at all. It's for anyone ready to take social media seriously."
  }
];

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-deep-purple-gradient">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-purple-700/80 text-white text-sm font-medium py-2 px-6 rounded-full inline-block mb-4"
          >
            FAQ
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get answers to the most common questions about the creator blueprint.
          </motion.p>
        </div>

        <motion.div 
          className="space-y-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {faqs.map((faq, index) => (
            <Collapsible
              key={index}
              open={openItem === `faq-${index}`}
              onOpenChange={() => toggleItem(`faq-${index}`)}
              className="border-b border-gray-800 py-3"
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-800/50 flex items-center justify-center">
                    <span className="text-gray-400 text-xs">?</span>
                  </div>
                  <h3 className="text-xl text-white font-medium">{faq.question}</h3>
                </div>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-gray-400 transition-transform duration-200",
                    openItem === `faq-${index}` ? "rotate-180" : ""
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2 pb-4 pl-9 pr-4">
                <div className={cn(
                  "bg-gray-900/60 rounded-lg p-6 text-gray-300",
                  openItem === `faq-${index}` ? "border-l-2 border-purple-500" : ""
                )}>
                  <p>{faq.answer}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
