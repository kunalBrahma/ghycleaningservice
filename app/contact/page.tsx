import React from 'react';
import ContactPageHeader from '@/components/ContactPageHeader';

import { Metadata } from 'next';
import ContactSection from '@/components/Conatcus';
import BusinessHours from '@/components/BusinessHours';

// SEO Metadata for the Contact Us Page
export const metadata: Metadata = {
  title: 'Contact Us | Guwahati Cleaning Service',
  description: 'Get in touch with Guwahati Cleaning Service. Contact us for a free quote, to book a service, or for any questions about our cleaning services in Guwahati, Assam.',
};

export default function ContactPage() {
  return (
    <>
      <ContactPageHeader />
      <ContactSection />
      <BusinessHours />
    </>
  );
}
