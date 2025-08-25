import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// SEO Metadata for the Terms & Conditions Page
export const metadata: Metadata = {
  title: 'Terms & Conditions | Guwahati Cleaning Service',
  description: 'Read the terms and conditions for using the services of Guwahati Cleaning Service.',
  robots: 'noindex, follow', // Tells search engines not to index this page
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center text-sm text-foreground/60 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span>Terms & Conditions</span>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Terms and Conditions
            </h1>

            <div className="text-sm sm:text-base text-foreground/70 space-y-4 leading-relaxed">
              <p>Welcome to Guwahati Cleaning Service. These terms and conditions outline the rules and regulations for the use of our services.</p>
              <p>By accessing this website and booking our services, we assume you accept these terms and conditions. Do not continue to use Guwahati Cleaning Service if you do not agree to all of the terms and conditions stated on this page.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl  font-semibold text-foreground pt-4 border-t border-foreground/10">
                1. Services
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                We provide professional cleaning services as detailed on our Services page. The scope of services will be agreed upon at the time of booking. Any additional services requested may incur extra charges.
              </p>

              <h2 className="text-xl  font-semibold text-foreground pt-4 border-t border-foreground/10">
                2. Booking and Cancellation
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                All bookings are subject to availability. We require at least 24 hours notice for any cancellations or rescheduling. Cancellations made with less than 24 hours&apos; notice may be subject to a cancellation fee.
              </p>

              <h2 className="text-xl  font-semibold text-foreground pt-4 border-t border-foreground/10">
                3. Payment
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                Payment for services is due upon completion of the work, unless otherwise agreed upon in writing. We accept cash, UPI, and other digital payment methods.
              </p>
              
              <h2 className="text-xl  font-semibold text-foreground pt-4 border-t border-foreground/10">
                4. Liability
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                Guwahati Cleaning Service is insured and takes utmost care in cleaning your property. However, we are not liable for pre-existing damage, wear and tear, or damage caused by improper installation of any item.
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
