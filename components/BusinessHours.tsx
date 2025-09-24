'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Clock } from 'lucide-react';
import clsx from 'clsx';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Updated business hours to be 24/7
const daysOfWeek = [
    { id: 1, name: 'Monday', time: 'Open 24 Hours' },
    { id: 2, name: 'Tuesday', time: 'Open 24 Hours' },
    { id: 3, name: 'Wednesday', time: 'Open 24 Hours' },
    { id: 4, name: 'Thursday', time: 'Open 24 Hours' },
    { id: 5, name: 'Friday', time: 'Open 24 Hours' },
    { id: 6, name: 'Saturday', time: 'Open 24 Hours' },
    { id: 0, name: 'Sunday', time: 'Open 24 Hours' },
];

export default function BusinessHours() {
  // Since the business is always open, we no longer need state or effects to check the time.
  const isOpen = true; 
  const currentDay = new Date().getDay();

  return (
    <section className="py-14 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-primary tracking-tight">
              Our Working Hours
            </h2>
            <p className="mt-4 text-sm sm:text-lg text-foreground/70">
              We&apos;re available 24/7 to serve you.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto lg:flex rounded-2xl shadow-sm border border-foreground/10 overflow-hidden bg-background">
            {/* Left Side: Status */}
            <div className="p-8 lg:w-1/3 flex flex-col items-center justify-center text-center bg-primary/5 lg:border-r border-foreground/10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-semibold text-lg text-foreground">
                        We are Open 24/7
                    </span>
                </div>
                <p className="text-sm text-foreground/60">
                    Feel free to call us anytime!
                </p>
            </div>

            {/* Right Side: Schedule */}
            <div className="p-8 lg:w-2/3">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    Weekly Schedule
                </h3>
                <ul className="space-y-2">
                {daysOfWeek.map(day => (
                    <li key={day.id} className={clsx(
                    "flex justify-between items-center p-3 rounded-lg",
                    // We still highlight the current day for user context
                    day.id === currentDay ? "bg-primary/10" : ""
                    )}>
                    <span className={clsx(
                        "font-semibold",
                        day.id === currentDay ? "text-primary" : "text-foreground"
                    )}>
                        {day.name}
                    </span>
                    <span className={clsx(
                        "text-sm",
                        day.id === currentDay ? "text-primary/90" : "text-foreground/70"
                    )}>
                        {day.time}
                    </span>
                    </li>
                ))}
                </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
