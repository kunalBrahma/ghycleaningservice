'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// Self-contained SVG for WhatsApp as it's not in Lucide

const keyFeatures = [
    "Flexible Scheduling (Daily, Weekly)",
    "Customized Cleaning Checklists",
    "Trained & Insured Staff",
    "On-Site Assessment"
];

export default function CommercialCleaningSection() {
  return (
    <section id="commercial" className="py-14 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Image */}
          <motion.div variants={fadeInUp} className="relative w-full h-96 rounded-2xl overflow-hidden">
            <Image 
              src="/4.webp" 
              alt="A clean and modern office space" 
              fill 
              className="object-cover"
            />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl sm:text-4xl font-bold text-primary tracking-tight">
              Commercial & Office Cleaning
            </h2>
            <p className="mt-4 text-sm sm:text-lg text-foreground/70">
              We offer customized cleaning plans for offices, retail stores, and clinics to ensure a professional and healthy environment for your employees and customers in Guwahati.
            </p>
            
            <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Key Features:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {keyFeatures.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm text-foreground/80">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-10 bg-primary/5 border-dashed border-primary/20 p-6 rounded-2xl text-center">
                <p className="text-base font-semibold text-foreground">For a personalized quote, we provide a <span className="text-primary font-bold">free on-site visit</span>.</p>
            </div>

            <Button asChild size="lg" className="group mt-8 rounded-xl px-8 py-4 lg:py-6 font-medium text-base bg-primary text-white w-full sm:w-auto">
                <Link href="https://wa.me/919876543210?text=I'm%20interested%20in%20a%20quote%20for%20commercial%20cleaning.">
                  <FaWhatsapp size={24} />
                  <span className="ml-2">Inquire on WhatsApp</span>
                </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
