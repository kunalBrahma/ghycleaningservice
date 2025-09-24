'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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

const includedItems = [
    "Deep Disinfection Treatment",
    "Pathogen Elimination",
    "Chemical-Free Solutions",
    "Long-Lasting Protection"
];

export default function DisinfectionCleaningSection() {
  return (
    <section id="disinfection" className="py-14 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Content */}
          <motion.div variants={fadeInUp} className="lg:order-1">
            <h2 className="text-2xl sm:text-4xl font-bold text-primary tracking-tight">
              Advanced Disinfection in Guwahati
            </h2>
            <p className="mt-4 text-sm sm:text-lg text-foreground/70">
              Our comprehensive disinfection service uses hospital-grade solutions to eliminate 99.9% of harmful microorganisms, ensuring maximum protection for your space.
            </p>
            
            <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">What&apos;s Included:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {includedItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm text-foreground/80">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-10 bg-background border border-primary/10 p-6 rounded-2xl">
                <p className="text-lg font-semibold text-foreground">Ideal for healthcare facilities, schools, and spaces requiring maximum hygiene standards.</p>
            </div>

            <Button asChild size="lg" className="group mt-8 rounded-xl px-8 py-4 lg:py-6 font-medium text-base text-white">
                <Link href="https://wa.me/917099075965" target='_blank'>
                  Schedule Disinfection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div variants={fadeInUp} className="relative w-full h-96 rounded-2xl overflow-hidden lg:order-2">
            <Image 
              src="https://images.unsplash.com/photo-1668600418844-5b3d2e381e10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Professional disinfection process with advanced equipment" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
