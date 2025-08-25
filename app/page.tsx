// app/page.tsx

import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/hero-section";
import ContactSection from "@/components/Conatcus";
import SectionHeader from "@/components/SectionHeader"; // Import the new component

// SEO Metadata for the Home Page
export const metadata: Metadata = {
  // ... (your metadata)
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesOverview />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <CTASection />

      <SectionHeader
        title="Get In Touch"
        subtitle="We're here to help! Send us a message, and we'll get back to you shortly."
      />

      <ContactSection />
    </>
  );
}
