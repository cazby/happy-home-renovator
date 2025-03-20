
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import WhyChooseUsCTA from '@/components/home/WhyChooseUsCTA';
import CTASection from '@/components/home/CTASection';
import { homeSections } from '@/data/homeSections';
import { Helmet } from 'react-helmet';
import { Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Premier Kitchen, Bathroom & Home Remodeling in Atlanta, GA | 1 Week Remodel</title>
        <meta name="description" content="Atlanta's trusted home renovation experts. Complete kitchen remodels, bathroom renovations, and home additions in just 1 week. Serving Atlanta and surrounding areas." />
        <meta name="keywords" content="kitchen remodeling Atlanta, bathroom renovation Atlanta, home additions Atlanta, 1 week remodel, quick remodeling Atlanta GA" />
        <meta property="og:title" content="Atlanta's #1 Kitchen & Bathroom Remodeling | 1-Week Projects" />
        <meta property="og:description" content="Transform your Atlanta home in just 1 week. Premium kitchen remodels, bathroom renovations and home additions with our expert team." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      
      <HeroSection sections={homeSections} />
      <ServicesSection sections={homeSections} />
      <WhyChooseUsCTA />
      
      {/* Atlanta Service Area Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-reno-800 mb-6">Serving Atlanta and Surrounding Areas</h2>
          <p className="text-center text-reno-600 max-w-3xl mx-auto mb-8">
            Our team provides premium renovation services throughout the Atlanta metropolitan area, including Buckhead, 
            Decatur, Sandy Springs, Marietta, Alpharetta, Roswell, and beyond. Experience the fastest, highest-quality 
            renovations in the Atlanta region.
          </p>
          <div className="text-center font-medium text-reno-600">
            <p>1-Week Renovation Guarantee for All Atlanta Homes</p>
          </div>
        </div>
      </section>
      
      {/* Limited-Time Offer Banner */}
      <section className="py-10 bg-reno-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <Tag className="h-6 w-6 text-reno-accent-alt" />
              <h3 className="text-xl font-bold text-reno-800">Limited-Time Special Offer</h3>
            </div>
            <p className="text-lg text-reno-700 font-medium">$500 OFF any repair or remodel over $2,500!</p>
            <Link to="/coupon">
              <Button variant="outline" className="border-reno-accent-alt text-reno-accent-alt hover:bg-reno-accent-alt/10">
                Get Your Coupon
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
