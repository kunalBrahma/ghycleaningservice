'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
};

export default function OurStorySection() {
  return (
    <section className="py-14 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Image */}
          <motion.div 
            variants={slideInLeft}
            className="relative w-full h-96 rounded-2xl overflow-hidden"
          >
            <Image 
              src="/5.webp" 
              alt="A friendly team member ready to clean" 
              fill 
              className="object-cover"
            />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl sm:text-4xl font-bold text-primary tracking-tight">
              Our Story
            </h2>
            <p className="mt-6 text-sm sm:text-lg text-foreground/70 leading-relaxed">
              Founded in 2020, Guwahati Cleaning Service was born from a simple idea: to provide a reliable, high-quality cleaning service that the people of our city could trust. We saw a need for a professional team that not only delivered spotless results but also cared about the health and well-being of its clients.
            </p>
            <p className="mt-4 text-sm sm:text-lg text-foreground/70 leading-relaxed">
              As locals, we are deeply connected to the Guwahati community. Our mission is to make life a little easier for our neighbors by creating clean, peaceful, and healthy living and working environments.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
