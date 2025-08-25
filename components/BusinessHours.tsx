'use client';

import React, { useState, useEffect } from 'react';
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

// Define your business hours here (24-hour format)
const workingHours = {
  1: { open: 9, close: 18 }, // Monday
  2: { open: 9, close: 18 }, // Tuesday
  3: { open: 9, close: 18 }, // Wednesday
  4: { open: 9, close: 18 }, // Thursday
  5: { open: 9, close: 18 }, // Friday
  6: { open: 9, close: 18 }, // Saturday
  0: null, // Sunday (Closed)
};

const daysOfWeek = [
    { id: 1, name: 'Monday', time: '9:00 AM - 6:00 PM' },
    { id: 2, name: 'Tuesday', time: '9:00 AM - 6:00 PM' },
    { id: 3, name: 'Wednesday', time: '9:00 AM - 6:00 PM' },
    { id: 4, name: 'Thursday', time: '9:00 AM - 6:00 PM' },
    { id: 5, name: 'Friday', time: '9:00 AM - 6:00 PM' },
    { id: 6, name: 'Saturday', time: '9:00 AM - 6:00 PM' },
    { id: 0, name: 'Sunday', time: 'Closed' },
];

export default function BusinessHours() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState<number | null>(null);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      setCurrentDay(day);

      const hours = workingHours[day as keyof typeof workingHours];
      if (hours && hour >= hours.open && hour < hours.close) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); 
    return () => clearInterval(interval);
  }, []);

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
              We&apos;re ready to serve you during our business hours.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto lg:flex rounded-2xl shadow-sm border border-foreground/10 overflow-hidden bg-background">
            {/* Left Side: Status */}
            <div className="p-8 lg:w-1/3 flex flex-col items-center justify-center text-center bg-primary/5 lg:border-r border-foreground/10">
                <div className="flex items-center gap-3 mb-2">
                    <div className={clsx("w-3 h-3 rounded-full", isOpen ? "bg-green-500" : "bg-red-500")}></div>
                    <span className="font-semibold text-lg text-foreground">
                        {isOpen ? 'We are Open' : 'We are Closed'}
                    </span>
                </div>
                <p className="text-sm text-foreground/60">
                    {isOpen ? "Feel free to call us now!" : "We'll be back on Monday."}
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
