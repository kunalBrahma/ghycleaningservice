'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Logo = () => (
  <Link href="/" className="flex items-center">
    <Image 
      src="/logo.svg" 
      alt="Guwahati Cleaning Service" 
      width={140} 
      height={40} 
      priority 
      className="object-contain"
    />
  </Link>
);

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        animate={hidden ? 'hidden' : 'visible'}
        variants={{
          hidden: { y: '-100%' },
          visible: { y: '0%' },
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-10 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b shadow-sm"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>
            <div className="hidden md:block">
              <Link href="https://api.whatsapp.com/send?phone=917099075965&text=I'd%20like%20to%20get%20a%20quote%20for%20your%20cleaning%20services." target='_blank'>
                <button className="bg-primary text-white text-primary-foreground font-semibold py-2.5 px-6 rounded-full hover:bg-primary/90 transition-all duration-200 text-sm shadow-sm hover:shadow-md">
                  Get Quote
                </button>
              </Link>
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 rounded-lg hover:bg-background/80 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-5 w-5 text-foreground/80" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={closeMobileMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-background bg-white z-50 md:hidden shadow-xl"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center">
                  <Image 
                    src="/logo.svg" 
                    alt="Logo" 
                    width={100} 
                    height={50} 
                    className="object-contain"
                  />
                </div>
                <button 
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg hover:bg-background/80 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-foreground/80" />
                </button>
              </div>
              <div className="flex flex-col p-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block px-4 py-3 rounded-lg text-lg font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6"
                >
                  <Link href="tel:+917099075965" onClick={closeMobileMenu}>
                    <button className="w-full text-white bg-primary text-primary-foreground font-semibold py-2 px-6 rounded-lg hover:bg-primary/90 transition-all duration-200 text-lg shadow-sm">
                      Call Now
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
