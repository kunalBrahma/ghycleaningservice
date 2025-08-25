'use client';

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/public/404 Error - Doodle animation.json'; // Make sure this path is correct

export default function NotFoundAnimation() {
  return <Lottie animationData={animationData} loop={true} />;
}
