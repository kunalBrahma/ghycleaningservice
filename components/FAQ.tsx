'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const faqData = [
  {
    question: 'What areas in Guwahati do you serve?',
    answer: 'We proudly serve all major areas within Guwahati, including Beltola, Dispur, Six Mile, Chandmari, and more. Contact us to confirm if we cover your specific location.',
  },
  {
    question: 'Are your cleaning products safe for pets and children?',
    answer: 'Absolutely. We prioritize the health of your family, which is why we use high-quality, eco-friendly, and non-toxic cleaning products that are safe for everyone, including pets and children.',
  },
  {
    question: 'How do I get a price quote?',
    answer: 'For standard services like Sofa, Bathroom, or Full Home cleaning, you can get an instant estimate by calling us or sending a message on WhatsApp. For commercial services, we provide a free on-site visit to give you a precise, no-obligation quote.',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'It\'s completely up to you. You can be home during the service, or you can provide us with access and we\'ll handle the rest. Our staff is thoroughly vetted and trustworthy.',
  },
];

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-foreground/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left"
      >
        <h3 className="text-sm lg:text-lg font-medium text-foreground">
          {question}
        </h3>
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
          {isOpen ? <Minus className="w-5 h-5 text-secondary" /> : <Plus className="w-5 h-5 text-foreground/50" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm lg:text-lg text-foreground/70 pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  return (
    <section id='faq' className="py-14 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-10 lg:mb-16"
        >
          <h2 className="text-2xl  md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-foreground/70">
            Have questions? We have answers. Here are some of the most common inquiries we receive.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {faqData.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
