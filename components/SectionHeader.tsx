// components/SectionHeader.tsx

'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
      className="text-center"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-primary tracking-tight">
        {title}
      </h2>
      <p className="mt-4 text-sm sm:text-lg text-foreground/70">
        {subtitle}
      </p>
    </motion.div>
    </div>
  );
}