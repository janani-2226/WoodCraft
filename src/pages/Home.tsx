import React from 'react';
import { Banner } from '../components/Banner';
import { CategoryGrid } from '../components/CategoryGrid';
import { AboutSection } from '../components/AboutSection';

export function Home() {
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-amber-950">
      <Banner />
      <CategoryGrid />
      <AboutSection />
    </div>
  );
}