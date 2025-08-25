'use client';

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      // The 'smoothTouch' property has been removed as it's no longer a valid option
    });

    // This function is called on every animation frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation frame loop
    requestAnimationFrame(raf);

    // Clean up the Lenis instance when the component unmounts
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <>{children}</>;
}
