import React from 'react';
import ServicesPageHeader from '@/components/ServicesPageHeader';
import { Metadata } from 'next';
import SofaCleaningSection from '@/components/SofaCleaningSection';
import BathroomCleaningSection from '@/components/BathroomCleaningSection';
import FullHomeCleaningSection from '@/components/FullHomeCleaningSection';
import CommercialCleaningSection from '@/components/CommercialCleaningSection';
import CTASection from '@/components/CTASection';
import KitchenCleaningSection from '@/components/KitchenCleaningSection';

// SEO Metadata for the Services Page
export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Guwahati | Sofa, Home & Office',
  description: 'Explore the professional cleaning services offered by Guwahati Cleaning Service. We specialize in sofa, bathroom, and full home cleaning for residents and businesses across Guwahati, Assam.',
  keywords: ['cleaning services guwahati', 'sofa cleaning guwahati', 'bathroom cleaning assam', 'home cleaning services', 'commercial cleaning guwahati'],
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageHeader />
      <SofaCleaningSection />
      <BathroomCleaningSection />
      <KitchenCleaningSection />
      <FullHomeCleaningSection />
      <CommercialCleaningSection />
      <CTASection />
    </>
  );
}
