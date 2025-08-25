'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Award, Clock, Heart } from 'lucide-react';

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

const values = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: 'Quality',
    description: 'We use the best tools and eco-friendly products to deliver a consistently high-quality clean, every single time.',
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: 'Reliability',
    description: 'Our professional team is always punctual, respectful of your home and time, and committed to our schedule.',
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: 'Customer Focus',
    description: 'Your complete satisfaction is our ultimate goal. We listen to your needs and aren\'t happy until you are.',
  },
];

export default function OurMissionSection() {
  return (
    <section className="py-14 sm:py-24 bg-primary/5">
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
            Our Commitment to You
          </h2>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-full mb-6 shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed max-w-xs mx-auto">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
