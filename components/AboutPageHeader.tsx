'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function AboutPageHeader() {
  return (
    <section className="relative bg-primary/5 py-14 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center text-sm text-foreground/60 mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span>About Us</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            Your Trusted Cleaning Partner in Guwahati
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-lg text-foreground/70">
            Learn more about our mission, our values, and the dedicated team that makes your home shine.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
