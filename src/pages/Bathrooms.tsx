
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet';
import BathroomHero from '@/components/bathrooms/BathroomHero';
import BathroomBenefits from '@/components/bathrooms/BathroomBenefits';
import BathroomFeatures from '@/components/bathrooms/BathroomFeatures';
import BathroomTypes from '@/components/bathrooms/BathroomTypes';
import AtlantaAreas from '@/components/bathrooms/AtlantaAreas';
import BathroomTestimonial from '@/components/bathrooms/BathroomTestimonial';
import BathroomCTA from '@/components/bathrooms/BathroomCTA';

const Bathrooms = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Atlanta Bathroom Remodeling | Expert Bathroom Renovations | 1 Week Remodel</title>
        <meta name="description" content="Atlanta's premier bathroom remodeling service. Transform your bathroom with our expert Atlanta renovation team in just one week. Serving all Atlanta neighborhoods." />
        <meta name="keywords" content="bathroom remodeling Atlanta, Atlanta bathroom renovation, bathroom remodel Atlanta GA, luxury bathroom Atlanta, Atlanta bathroom contractors" />
      </Helmet>

      {/* Hero Section */}
      <BathroomHero />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <BathroomBenefits />

            {/* Right Column - Features */}
            <BathroomFeatures />
          </div>
        </div>
      </section>

      {/* Bathroom Types */}
      <BathroomTypes />

      {/* Atlanta Areas We Serve */}
      <AtlantaAreas />

      {/* Testimonial Section */}
      <BathroomTestimonial />

      {/* CTA Section */}
      <BathroomCTA />
    </PageLayout>
  );
};

export default Bathrooms;
