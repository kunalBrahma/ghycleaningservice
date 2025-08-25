'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, Variants } from 'framer-motion';
import { Phone, Calendar, Smile } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const steps = [
  {
    icon: <Phone className="w-7 h-7 text-secondary" />,
    title: '1. Get a Free Quote',
    description: 'Contact us via phone, WhatsApp, or our online form. We\'ll provide a quick, no-obligation quote for your specific needs.',
  },
  {
    icon: <Calendar className="w-7 h-7 text-secondary" />,
    title: '2. We Clean Your Space',
    description: 'Our professional and vetted team arrives on time with all the necessary eco-friendly equipment to make your space shine.',
  },
  {
    icon: <Smile className="w-7 h-7 text-secondary" />,
    title: '3. Relax & Enjoy',
    description: 'Sit back and enjoy your fresh, clean, and healthy environment. Your satisfaction is our top priority and is always guaranteed.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Use useSpring to create a smoother animation for the progress bar
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-14 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
            Our Simple 3-Step Process
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-foreground/70">
            Getting a sparkling clean home has never been easier.
          </p>
        </motion.div>

        {/* Steps with Centered Progress Bar */}
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            {/* Centered Progress Bar Line for Desktop */}
            <motion.div
              style={{ scaleY }}
              className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full bg-primary/20 origin-top"
            />
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={fadeInUp}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Step Content */}
                  <div className={`flex-1 ${
                    index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                  }`}>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Centered Step Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-background border-4 border-primary/10 shadow-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Left-aligned Progress Bar for Mobile */}
            <motion.div
              style={{ scaleY }}
              className="absolute left-8 top-0 w-1 h-full bg-primary/20 origin-top"
            />
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={fadeInUp}
                  className="flex items-start gap-6"
                >
                  {/* Step Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-background border-4 border-primary/10 shadow-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}