'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

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

const testimonials = [
  {
    name: 'Anjali Sharma',
    location: 'Beltola, Guwahati',
    quote: 'Absolutely transformed our home! The team was professional, punctual, and incredibly thorough. Our sofas look brand new. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Dispur, Guwahati',
    quote: 'The best cleaning service in the city. They handled our office space with great care and the results were impeccable. We have them on a monthly contract now.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Priya Das',
    location: 'Chandmari, Guwahati',
    quote: 'I was amazed by their attention to detail, especially in the bathroom cleaning. Everything was sparkling. Excellent service and very friendly staff.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Testimonials() {
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-foreground/70">
            We take pride in our work, and our clients feedback speaks for itself.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-background p-8 rounded-2xl shadow-sm border border-foreground/5 flex flex-col"
            >
              <div className="flex-grow mb-6">
                <Quote className="w-8 h-8 text-secondary mb-4" />
                <p className="text-foreground/80 italic">&quot;{testimonial.quote}&quot;</p>
              </div>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
