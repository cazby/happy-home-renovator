
import React from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';
import { homeSections } from '@/data/homeSections';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection sections={homeSections} />
      <ServicesSection sections={homeSections} />
      <FeaturesSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
