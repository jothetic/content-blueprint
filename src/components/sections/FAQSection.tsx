
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

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
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-deep-purple-gradient">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Frequently asked questions
        </motion.h2>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-black/70 border border-gray-800 rounded-lg mb-4 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-white text-left hover:no-underline">
                    <div className="flex-1 font-medium text-base md:text-lg">{faq.question}</div>
                    <ChevronDown className="h-5 w-5 text-gray-400 shrink-0 transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
