import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import NotFoundAnimation from '@/components/NotFoundAnimation';


export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-md">
          <NotFoundAnimation />
        </div>
        <h1 className="mt-8 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-4 text-base sm:text-lg text-foreground/70">
          Oops! The page you&apos;re looking for doesn&apos;t seem to exist.
        </p>
        <Button asChild size="lg" className="group mt-8 rounded-xl px-8 py-4 lg:py-6 font-medium text-base text-white">
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
