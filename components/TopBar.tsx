import React from 'react';
import { Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// Self-contained SVG for WhatsApp as it's not in Lucide

export default function TopBar() {
  return (
    // ADDED fixed positioning here
    <div className="fixed w-full top-0 z-50 bg-primary text-primary-foreground h-10 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-xs sm:text-sm">
          {/* Left Side: Call Us */}
          <div className="flex items-center space-x-2 text-white">
            <Phone className="h-4 w-4" />
            <a href="tel:+917099075965" className="hover:underline">
              Call Us: +91 70990 75965
            </a>
          </div>

          {/* Middle: Offers */}
          <div className="hidden md:block font-semibold tracking-wide text-white">
            <span></span>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex items-center space-x-4 text-white">
            <a href="https://api.whatsapp.com/send?phone=917099075965" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="hover:opacity-80 transition-opacity">
              <FaWhatsapp size={24}/>
            </a>
            <a href="https://www.facebook.com/share/1CpnfgQ4Lb/" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook" className="hover:opacity-80 transition-opacity">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram" className="hover:opacity-80 transition-opacity">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
