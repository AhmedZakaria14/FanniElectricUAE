"use client";
import { ChevronDown } from '@/components/icons';


import { useState } from 'react';


interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white border shadow-sm rounded-lg overflow-hidden transition-all duration-200"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-right p-5 flex items-center justify-between focus:outline-none"
            aria-expanded={openIndex === index}
          >
            <h3 className="font-bold text-lg text-amazon-blue">{faq.question}</h3>
            <ChevronDown 
              className={`w-5 h-5 text-amazon-orange transition-transform duration-200 flex-shrink-0 ${openIndex === index ? 'transform rotate-180' : ''}`} 
            />
          </button>
          
          <div 
            className={`transition-grid duration-300 ease-in-out grid ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="overflow-hidden">
              <div className="p-5 pt-0 border-t border-gray-100 mt-2">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
