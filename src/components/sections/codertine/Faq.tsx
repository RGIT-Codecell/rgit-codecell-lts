"use client"; // This component uses React hooks, so it must be a client component

import React, { useState } from "react";
import { cn } from "@/lib/utils"; // Assuming you have this utility for class names

// Data for the FAQ section
const faqData = [
  {
    question: "What programming languages can we use?",
    answer:
      "All the latest programming languages are accepted, including C, C++, Python, and Java. The CodeChef platform supports a wide variety.",
  },
  {
    question: "Can we team up with others?",
    answer:
      "No, CODERTINE 2.0 is a solo event. Only individuals can compete, not groups. This ensures a fair assessment of individual skill.",
  },
  {
    question: "How do I register for Codertine?",
    answer:
      "You're in the right place! Just scroll up on the main page and click the ‘Register Now’ button. You will be guided to a form to fill in your details.",
  },
  {
    question: "Can I cancel my entry once paid?",
    answer:
      "Unfortunately, we do not provide this option. Once the registration fee is paid, the entry is considered final and cannot be canceled.",
  },
  {
    question: "What is the judging criteria?",
    answer:
      "Your score is based on the number of problems you solve correctly. In case of a tie, the participant with the lower time penalty will be ranked higher. Time penalties are calculated based on the time of your successful submissions.",
  },
  {
    question: "Are we allowed to use pre-written code templates or snippets?",
    answer:
      "You are not allowed to use any code written before the start of the event. However, you are permitted to write your own templates for common data structures or algorithms during the competition.",
  },
  {
    question: "Will participation certificates be provided?",
    answer:
      "Yes, all participants who make at least one successful submission will receive a digital certificate of participation via email after the event.",
  },
];

// Reusable component for a single accordion item
const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-foreground/50 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left gap-4"
      >
        <h3 className="md:text-lg text-md font-medium text-white">
          {item.question}
        </h3>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-500 ease-in-out",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <p className="pt-4 text-sm md:text-md text-foreground/60">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

// SVG for the chevron icon
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn(
      "w-5 h-5 text-foreground/50 transition-transform duration-300 flex-shrink-0",
      isOpen && "rotate-180"
    )}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default to first item open

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle behavior
  };

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-[20rem]">
        {/* Left Column: Title */}
        <div className="lg:col-span-1 md:w-[30rem]">
          <h2 className="text-4xl md:text-7xl font-porticoRough text-white text-center lg:text-left">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-foreground/80">
            Your queries, answered. If you don't see your question here, feel
            free to reach out to our team.
          </p>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-2">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
