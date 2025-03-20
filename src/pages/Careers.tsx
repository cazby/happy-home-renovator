
import React from 'react';
import PageLayout from '@/components/PageLayout';
import CareerHeader from '@/components/careers/CareerHeader';
import CareersGrid from '@/components/careers/CareersGrid';
import CareersCallToAction from '@/components/careers/CareersCallToAction';
import { careerPositions } from '@/data/careerPositions';

const Careers: React.FC = () => {
  return (
    <PageLayout>
      <div className="container py-12 md:py-16">
        <CareerHeader />
        <CareersGrid positions={careerPositions} />
        <CareersCallToAction />
      </div>
    </PageLayout>
  );
};

export default Careers;
