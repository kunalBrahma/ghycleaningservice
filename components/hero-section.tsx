'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Shield, Leaf, Star } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
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

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0 pb-16">
        
        {/* Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh]">
          
          {/* Visual Column */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative h-80 sm:h-96">
              
              {/* Mobile-Only Info Cards */}
              <motion.div 
                variants={slideInLeft}
                className="lg:hidden absolute top-0 left-0 w-40"
              >
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-4 border border-foreground/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">500+</div>
                        <div className="text-xs text-foreground/60">Happy Homes</div>
                      </div>
                    </div>
                  </div>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="lg:hidden absolute bottom-0 right-0 w-32"
              >
                  <div className="bg-primary/95 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current text-secondary" />
                        ))}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">5.0</div>
                        <div className="text-xs text-white">Rating</div>
                      </div>
                    </div>
                  </div>
              </motion.div>

              {/* Desktop-Only Info Cards */}
              <div className="hidden lg:block">
                <motion.div variants={slideInLeft} className="absolute top-0 left-0 w-48 h-36 bg-gradient-to-br from-background via-secondary/5 to-primary/5 rounded-3xl shadow-sm border border-foreground/5 backdrop-blur-sm z-30">
                  <div className="p-5 h-full flex flex-col justify-between">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center"><Sparkles className="w-5 h-5 text-primary" /></div>
                    <div><div className="text-lg font-semibold text-foreground mb-1">Premium Clean</div><div className="text-xs text-foreground/60">Professional Service</div></div>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="absolute top-8 right-4 w-32 h-24 rounded-2xl overflow-hidden shadow-sm group z-30">
                  <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Clean space" fill className="object-cover"/>
                </motion.div>
                <motion.div variants={slideInLeft} className="absolute bottom-8 z-30 left-8 w-36 h-20 bg-primary/95 rounded-2xl shadow-md flex items-center justify-center">
                  <div className="text-center text-white"><div className="text-xl font-bold">500+</div><div className="text-xs opacity-90">Happy Homes</div></div>
                </motion.div>
                <motion.div variants={fadeInUp} className="absolute bottom-0 right-0 w-24 h-16 bg-gradient-to-br from-background via-secondary/5 to-primary/5 backdrop-blur-sm rounded-2xl shadow-sm flex flex-col items-center justify-center">
                  <div className="flex space-x-0.5 mb-1">{[...Array(5)].map((_, i) => (<Star key={i} className="w-2.5 h-2.5 fill-current text-secondary" />))}</div>
                  <div className="text-xs font-medium text-foreground">5.0 Rating</div>
                </motion.div>
              </div>

              {/* CENTER FLOATING IMAGE - Visible on all screen sizes */}
              <motion.div 
                variants={fadeInUp}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-48 sm:w-80 sm:h-60 rounded-3xl overflow-hidden shadow-2xl group z-20"
              >
                <motion.div
                  animate={{ y: [0, -6, 3, 0], x: [0, 2, -2, 0], rotate: [0, -1, 1, 0], scale: [1, 1.04, 0.98, 1]}}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image 
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Sparkling clean kitchen" 
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left space-y-4 sm:space-y-6"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Trusted in Guwahati Since 2020
            </motion.div>
            <motion.div variants={slideInRight} className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-foreground">Your Home Deserves</span><br />
                <span className="text-primary">The Best Care</span>
              </h1>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto lg:mx-0" />
            </motion.div>
            <motion.p variants={slideInRight} className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
              Experience professional cleaning that transforms your space into a sanctuary. Our eco-friendly approach ensures your family&apos;s health while delivering spotless results.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-foreground/60">
              <div className="flex items-center gap-1.5 sm:gap-2"><Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" /><span>Fully Insured</span></div>
              <div className="flex items-center gap-1.5 sm:gap-2"><Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-primary" /><span>Eco-Safe</span></div>
              <div className="flex items-center gap-1.5 sm:gap-2"><Star className="w-3 h-3 sm:w-4 sm:h-4 text-secondary fill-current" /><span>5★ Rated</span></div>
            </motion.div>
            <motion.div variants={slideInRight} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2 px-4 sm:px-0">
              <Button asChild size="lg" className="group bg-primary hover:bg-primary/90  text-primary-foreground rounded-xl px-6 py-3 sm:py-3 font-medium shadow-sm hover:shadow-md transition-all duration-300 text-sm sm:text-base">
                <Link href="https://api.whatsapp.com/send?phone=917099075965&text=I'd%20like%20to%20get%20a%20quote%20for%20your%20cleaning%20services." target='_blank' className='text-white'>
                  Get Free Quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border border-primary/20 hover:border-primary/40 text-foreground hover:bg-primary/5 rounded-xl px-6 py-3 sm:py-3 font-medium transition-all duration-300 text-sm sm:text-base">
                <Link href="/services">
                  Our Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-foreground/5"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-4 text-xs sm:text-sm text-foreground/60">
            <div className="flex items-center gap-2 text-center lg:text-left">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><span className="text-xs font-semibold text-primary">MR</span></div>
              <span className="leading-tight">&quot;Absolutely transformed our home. Professional and reliable!&quot; - Manish R.</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
              <span>Serving 15+ areas in Guwahati</span>
              <div className="hidden sm:block w-px h-4 bg-foreground/20" />
              <span>Same-day booking available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
