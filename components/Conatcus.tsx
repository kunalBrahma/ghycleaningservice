'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Phone, Mail, ArrowRight, ChevronDown } from 'lucide-react';

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

export default function ContactSection() {
  return (
    <section className="py-14 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Form & Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-foreground mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-foreground/20 py-3 px-1 outline-none focus:border-primary transition-colors duration-300"/>
                <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-foreground/20 py-3 px-1 outline-none focus:border-primary transition-colors duration-300"/>
                <div className="relative">
                  <select defaultValue="" className="w-full bg-transparent border-b border-foreground/20 py-3 px-1 outline-none focus:border-primary transition-colors duration-300 appearance-none text-foreground/70 focus:text-foreground">
                    <option value="" disabled>Service of Interest</option>
                    <option value="sofa">Sofa Cleaning</option>
                    <option value="bathroom">Bathroom Cleaning</option>
                    <option value="full-home">Full Home Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                  </select>
                  <ChevronDown className="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50 pointer-events-none" />
                </div>
                <textarea placeholder="Your Message" rows={4} className="w-full bg-transparent border-b border-foreground/20 py-3 px-1 outline-none focus:border-primary transition-colors duration-300"></textarea>
                <button type="submit" className="w-full text-white group bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-2 lg:py-4 font-medium text-base flex items-center justify-center transition-all duration-300 mt-4">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-12">
                <div className="flex items-start gap-4 mb-4">
                    <Phone className="w-5 h-5 mt-1 text-primary"/>
                    <div>
                        <h4 className="font-semibold">Call Us</h4>
                        <a href="tel:+917099075965" className="text-foreground/70 hover:text-primary transition-colors">+91 70990 75965</a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 mt-1 text-primary"/>
                    <div>
                        <h4 className="font-semibold">Email Us</h4>
                        <a href="mailto:contact@gcs.com" className="text-foreground/70 hover:text-primary transition-colors">contact@gcs.com</a>
                    </div>
                </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="relative w-full h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229169.62032151158!2d91.53992362529294!3d26.14393693246321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436b835a!2sGuwahati%2C%20Assam%2C%20India!5e0!3m2!1sen!2sus!4v1692880000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
