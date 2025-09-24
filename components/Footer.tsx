'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Code2 } from 'lucide-react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Self-contained SVG for WhatsApp as it's not in Lucide

export default function Footer() {
  return (
    <>
      <footer className="bg-background border-t border-foreground/10 pb-12 md:pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16"
          >
            {/* Column 1: Logo & Tagline */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <Image 
                  src="/logo.svg" 
                  alt="Guwahati Cleaning Service" 
                  width={160} 
                  height={45} 
                  className="object-contain"
                />
              </Link>
              <p className="max-w-xs text-sm text-foreground/70">
                Your trusted partner for professional home and commercial cleaning services in Guwahati.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/#faq" className="text-sm text-foreground/70 hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/70">Milijuli Path,  Satgaon, Guwahati - 781037</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                  <a href="tel:+917099075965" className="text-sm text-foreground/70 hover:text-primary transition-colors">+91 70990 75965</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                  <a href="mailto:guwahaticleaningservice@gmail.com" className="text-sm text-foreground/70 hover:text-primary transition-colors">guwahaticleaningservice@gmail.com</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Media */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex items-center space-x-4">
                <a href="https://wa.me/917099075965" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors"><FaWhatsapp size={24} /></a>
                <a href="https://www.facebook.com/share/1CpnfgQ4Lb/" target='_blank' className="text-foreground/70 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </motion.div>

         
           {/* Bottom Bar with Legal Links & Credit */}
          <div className="py-6 border-t border-foreground/10 text-center text-xs text-foreground/60">
            <p>&copy; {new Date().getFullYear()} Guwahati Cleaning Service. All Rights Reserved.</p>
            <div className="flex justify-center items-center space-x-4 mt-4">
                <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                <span className="text-foreground/30">|</span>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
            <div className='flex justify-center gap-1 items-center pt-2'>
                <Code2 className='text-blue-500 w-5 h-5' /> 
                <span>Design by <a href='https://sitemakerlab.com/' target='_blank' className='text-blue-600 hover:underline'>Sitemaker Lab</a></span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile-Only Fixed CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0  z-50">
        <div className="flex justify-around items-center">
          <a href="https://wa.me/917099075965" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 bg-primary text-primary-foreground font-medium py-3 text-white ">
            <FaWhatsapp size={24} />
            <span className="text-sm">WhatsApp</span>
          </a>
          <a href="tel:+917099075965" className="flex flex-1 items-center justify-center gap-2 bg-secondary text-white font-medium py-3">
            <FaPhone size={24}/>
            <span className="text-sm">Call Now</span>
          </a>
        </div>
      </div>
    </>
  );
}
