'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check, ArrowRight, Star, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';

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

const packages = [
  {
    bhk: '1 BHK',
    description: 'Perfect for individuals and couples.',
    inclusions: ['1 Bedroom', '1 Hall', '1 Kitchen', '1 Bathroom'],
    popular: false,
  },
  {
    bhk: '2 BHK',
    description: 'Ideal for small families.',
    inclusions: ['2 Bedrooms', '1 Hall', '1 Kitchen', '2 Bathrooms'],
    popular: true,
  },
  {
    bhk: '3 BHK',
    description: 'For larger families and spaces.',
    inclusions: ['3 Bedrooms', '1 Hall', '1 Kitchen', '3 Bathrooms'],
    popular: false,
  },
  {
    bhk: '4+ BHK / Custom',
    description: 'For villas, large apartments, and custom needs.',
    inclusions: ['Customized Checklist', 'On-Site Assessment', 'Flexible Scheduling'],
    popular: false,
    custom: true, // Flag for special styling
  },
];

export default function FullHomeCleaningSection() {
  return (
    <section id="full-home" className="py-14 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-primary tracking-tight">
            Full Home Cleaning Packages
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-foreground/70">
            Choose the perfect package to make your entire home feel fresh and new. All packages are customizable.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={clsx(
                "rounded-2xl border p-8 flex flex-col transition-all duration-300",
                pkg.popular ? "bg-background border-primary shadow-lg" : "bg-background border-foreground/10",
                pkg.custom ? "border-dashed" : ""
              )}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-foreground">
                  {pkg.bhk}
                </h3>
                {pkg.popular && (
                  <div className="flex items-center gap-2 text-xs font-semibold bg-secondary text-primary px-3 py-1 rounded-full">
                    <Star className="w-4 h-4" />
                    Popular
                  </div>
                )}
                 {pkg.custom && (
                  <div className="flex items-center gap-2 text-xs font-semibold bg-foreground/10 text-primary px-3 py-1 rounded-full">
                    <Home className="w-4 h-4" />
                    Custom
                  </div>
                )}
              </div>
              <p className="mt-2 text-sm flex-grow text-foreground/70">
                {pkg.description}
              </p>
              
              <ul className="space-y-3 my-8">
                {pkg.inclusions.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className={clsx(
                "group w-full mt-auto rounded-xl py-4 lg:py-6 font-medium text-base",
                pkg.popular ? "bg-primary text-white" : "bg-transparent text-foreground hover:bg-foreground/10"
              )}>
                <Link href={`https://wa.me/917099075965?text=I'm%20interested%20in%20the%20${pkg.bhk}%20cleaning%20package.`} target='_blank'>
                  Inquire Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
