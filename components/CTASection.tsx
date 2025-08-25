'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CTASection() {
  return (
    <section className="py-14 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-background px-4 py-6 rounded-3xl shadow-sm border border-foreground/5"
        >
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-4">
              Ready for a Spotless Space?
            </h2>
            <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-foreground/70 mb-8">
              Let us handle the dirty work so you can enjoy a fresh, clean home without the hassle. Get your free, no-obligation quote today!
            </p>
            <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-4 lg:py-6 font-medium shadow-sm hover:shadow-md transition-all duration-300 text-base">
              <Link href="https://wa.me/917099075965?text=I'd%20like%20to%20get%20a%20quote%20for%20your%20cleaning%20services." target='_blank' className='text-white'>
                Get My Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1585417238790-f6d290d6490c?q=80&w=1537&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Minimalist clean interior with a plant"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
