import React from 'react';
import AboutPageHeader from '@/components/AboutPageHeader';
import { Metadata } from 'next';
import OurStorySection from '@/components/OurStorySection';
import OurMissionSection from '@/components/OurMissionSection';
import CTASection from '@/components/CTASection';

// SEO Metadata for the About Us Page
export const metadata: Metadata = {
  title: 'About Guwahati Cleaning Service | Our Mission & Values',
  description: 'Learn about Guwahati Cleaning Service, your trusted local partner for professional cleaning in Guwahati, Assam. Discover our commitment to quality, reliability, and customer satisfaction.',
  keywords: ['about cleaning service guwahati', 'professional cleaners assam', 'guwahati cleaning company mission'],
};

export default function AboutPage() {
  return (
    <>
      <AboutPageHeader />
      <OurStorySection />
      <OurMissionSection />
      <CTASection />
    </>
  );
}
