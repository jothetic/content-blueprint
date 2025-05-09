
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
    answer: "No, you don't need a large following to start. Our blueprint is designed for creators at all stages of their journey. We'll teach you how to grow your audience from scratch using proven strategies."
  },
  {
    question: "How long will it take to see results?",
    answer: "Results vary by individual and commitment level, but most users begin seeing improvements within 4-6 weeks of implementing our strategies consistently. Success comes from applying what you learn consistently."
  },
  {
    question: "What makes this different from other programs?",
    answer: "Unlike generic courses, our blueprint provides real-world templates, personalized support, and a community of serious creators. We focus on practical implementation rather than just theory."
  },
  {
    question: "What exactly will I learn?",
    answer: "You'll learn content strategy, growth tactics, monetization methods, audience engagement techniques, and systems to scale your creative business without burning out."
  },
  {
    question: "Is this blueprint just for teens?",
    answer: "No, our blueprint is for creators of all ages. We have members ranging from teenagers to professionals in their 50s. The principles work regardless of your age."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-deep-purple-gradient">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h2 
            className="text-2xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently asked questions
          </motion.h2>
          
          <Button 
            variant="outline" 
            className="bg-blue-600 hover:bg-blue-700 text-white border-blue-500"
          >
            Edit FAQs
          </Button>
        </div>

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
