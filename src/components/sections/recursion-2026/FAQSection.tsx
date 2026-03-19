"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is the team size for Recursion 7.0?",
      answer: "You can form teams of 2 to 4 members. Lone wolves are not permitted in the descent. You need a crew to survive.",
    },
    {
      question: "Is there any registration fee?",
      answer: "Check the registration portal for the latest fee structure. The cost of entry is small compared to Hastar's gold.",
    },
    {
      question: "Who can participate?",
      answer: "Recursion is open to all undergraduate engineering students who have the grit to build under pressure.",
    },
    {
      question: "Will food and internet be provided?",
      answer: "Yes. High-speed Wi-Fi and survival rations (food and energy drinks) will be provided for the entire 24-hour duration.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 px-3 sm:px-4 bg-transparent flex flex-col items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#8B0000]/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl md:text-6xl font-black tracking-wider uppercase mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] to-[#8B6508]">
            Knowledge
          </h2>
          <p className="text-gray-400 font-light tracking-widest text-sm uppercase">
            Read carefully before you enter the well
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[#D4AF37]/20 bg-black/20 backdrop-blur-sm border-b border-[#3a2a18]/40 data-[state=open]:bg-black/40 rounded-lg overflow-hidden data-[state=open]:border-[#D4AF37]/60 transition-colors"
              >
                <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base text-gray-200 hover:text-[#D4AF37] font-medium tracking-wide hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm text-gray-400 leading-relaxed bg-black/40 pt-2 border-t border-[#D4AF37]/10">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
