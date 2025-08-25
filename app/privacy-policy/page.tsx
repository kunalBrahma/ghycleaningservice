import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// SEO Metadata for the Privacy Policy Page
export const metadata: Metadata = {
  title: 'Privacy Policy | Guwahati Cleaning Service',
  description: 'Read the privacy policy for Guwahati Cleaning Service to understand how we collect, use, and protect your personal information.',
  robots: 'noindex, follow', // Tells search engines not to index this page
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center text-sm text-foreground/60 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span>Privacy Policy</span>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Privacy Policy
            </h1>

            <div className="text-sm sm:text-base text-foreground/70 space-y-4 leading-relaxed">
              <p>At Guwahati Cleaning Service, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl  font-semibold text-foreground pt-4 border-t border-foreground/10">
                1. Information We Collect
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. This may include your name, phone number, email address, and the details of the services you request.
              </p>

              <h2 className="text-xl  font-semibold text-foreground pt-4 border-t border-foreground/10">
                2. How We Use Your Information
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                We use the information we collect in various ways, including to: provide, operate, and maintain our services; communicate with you for customer service, to provide you with updates and other information relating to the service; and for booking and billing purposes.
              </p>

              <h2 className="text-xl  font-semibold text-foreground pt-4 border-t border-foreground/10">
                3. Consent
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                By using our website and booking our services, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
              
              <h2 className="text-xl  font-semibold text-foreground pt-4 border-t border-foreground/10">
                4. Contact Us
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                If you have any questions about this Privacy Policy, you can contact us via the details provided on our Contact Us page.
              </p>
            </div>

            <div className="pt-6 border-t border-foreground/10 text-sm text-foreground/60">
                <p>Last updated: August 24, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
