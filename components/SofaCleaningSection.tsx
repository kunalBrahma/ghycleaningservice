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
    "Deep Vacuuming",
    "Stain & Spot Treatment",
    "Eco-Friendly Shampooing",
    "Fabric Conditioning & Sanitizing"
];

export default function SofaCleaningSection() {
  return (
    <section id="sofa" className="py-14 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Image Gallery */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 grid-rows-2 gap-4 h-96">
            <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden">
                <Image src="/1.webp" alt="Before cleaning - a comfortable, lived-in sofa" fill className="object-cover"/>
                <div className="absolute top-2 left-2 bg-background/80 text-foreground text-xs font-semibold px-3 py-1 rounded-full bg-primary text-white">Before</div>
            </div>
            <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden">
                <Image src="/2.webp" alt="After cleaning - a bright, pristine sofa" fill className="object-cover"/>
                <div className="absolute top-2 left-2 bg-secondary text-white text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">After</div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl sm:text-4xl font-bold text-primary tracking-tight">
              Sofa & Upholstery Cleaning in Guwahati
            </h2>
            <p className="mt-4 text-sm sm:text-lg text-foreground/70">
              We revitalize your furniture, removing deep-seated dirt, stains, and allergens to bring back its original freshness and comfort for your family.
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

           

            <Button asChild size="lg" className="group mt-8 rounded-xl px-8 py-4 lg:py-6 font-medium text-base text-white">
                <Link href="https://wa.link/kuga2i" target='_blank'>
                  Book Sofa Cleaning
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
