'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Users, Leaf, Award } from 'lucide-react';
import Image from 'next/image';

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
};

const benefits = [
  {
    icon: <Users className="w-6 h-6 text-secondary" />,
    title: 'Experienced & Vetted Staff',
    description: 'Our team is professionally trained, background-checked, and dedicated to delivering exceptional quality.',
  },
  {
    icon: <Leaf className="w-6 h-6 text-secondary" />,
    title: 'Eco-Friendly Products',
    description: 'We use safe, non-toxic cleaning agents that are powerful on dirt but gentle on your home and family.',
  },
  {
    icon: <Award className="w-6 h-6 text-secondary" />,
    title: 'Satisfaction Guarantee',
    description: "If you're not completely satisfied, we'll come back and re-clean for free. It's that simple.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-2xl  md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
            Why Guwahati Trusts Us
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-foreground/70">
            We&apos;re more than just a cleaning service; we&apos;re your partners in creating a healthier, happier home.
          </p>
        </motion.div>

        {/* New Modern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: New Layered Image Layout */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInLeft}
            className="relative w-full h-96 lg:h-[500px] flex items-center justify-center"
          >
            {/* Background Decorative Shape */}
            <div className="absolute w-full h-full bg-secondary/10 rounded-3xl transform rotate-3 scale-95"></div>
            
            {/* Foreground Image */}
            <div className="relative w-5/6 h-5/6 rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
              <Image 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
                alt="Professional cleaner smiling"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Benefits List */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
