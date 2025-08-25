'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sofa, Bath, Home, Building2, ArrowRight, UtensilsCrossed, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const services = [
  {
    icon: <Sofa className="w-7 h-7 text-secondary" />,
    title: 'Sofa & Upholstery',
    description: 'Deep cleaning for your sofas, chairs, and other upholstery to remove stains and allergens.',
    image: '/2.webp',
    href: '/services#sofa',
  },
  {
    icon: <Bath className="w-7 h-7 text-secondary" />,
    title: 'Bathroom Cleaning',
    description: 'Complete sanitization of tiles, fixtures, and surfaces for a sparkling, hygienic bathroom.',
    image: '/bathroomm.webp',
    href: '/services#bathroom',
  },
  {
    icon: <UtensilsCrossed className="w-7 h-7 text-secondary" />,
    title: 'Kitchen Cleaning',
    description: 'Specialized cleaning for countertops, cabinets, and appliances to ensure a hygienic cooking space.',
    image: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/services#kitchen',
  },
  {
    icon: <Home className="w-7 h-7 text-secondary" />,
    title: 'Full Home Cleaning',
    description: 'Comprehensive packages (1, 2, 3 BHK) to make your entire home feel fresh and new.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    href: '/services#full-home',
  },
  {
    icon: <Building2 className="w-7 h-7 text-secondary" />,
    title: 'Commercial Spaces',
    description: 'Customized cleaning solutions for offices, shops, and other commercial properties.',
    image: '/4.webp',
    href: '/services#commercial',
  },
];

export default function ServicesOverview() {
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
          <h2 className="text-2xl  md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
            Our Range of Services
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-foreground/70">
            From a single sofa to an entire office, we offer tailored cleaning solutions to meet your specific needs.
          </p>
        </motion.div>

        {/* Services Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="relative px-4 md:px-8 lg:px-12"
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            }}
            
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-8"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-background rounded-2xl shadow-sm border border-foreground/5 overflow-hidden group flex flex-col h-full">
                  <div className="relative w-full h-48">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-foreground/60 leading-relaxed flex-grow mb-6">
                      {service.description}
                    </p>
                    <Link 
                      href={service.href}
                      className="flex items-center text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors mt-auto"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Modern Custom Navigation Arrows */}
          <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-0 md:left-2 lg:left-0 z-10 cursor-pointer group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-black/5 flex items-center justify-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-110 active:scale-95">
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-primary transition-colors" />
            </div>
          </div>
          
          <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-0 md:right-2 lg:right-0 z-10 cursor-pointer group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-black/5 flex items-center justify-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-110 active:scale-95">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary transition-colors" />
            </div>
          </div>

          {/* Mobile Navigation Dots (Optional Enhancement) */}
          <div className="flex justify-center mt-6 gap-2 md:hidden">
            <div className="swiper-pagination-custom flex gap-2"></div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}