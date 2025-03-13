
import React from 'react';
import SectionCard from '@/components/SectionCard';
import { Building } from 'lucide-react';

interface ServicesSectionProps {
  sections: {
    title: string;
    description: string;
    imageSrc: string;
    link: string;
  }[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ sections }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-reno-accent/10 rounded-full mb-4">
            <Building className="w-8 h-8 text-reno-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-reno-800 mb-4">Our Renovation Services</h2>
          <p className="text-reno-600 max-w-3xl mx-auto text-lg">
            From full home remodels to room-specific renovations, we bring expertise, quality craftsmanship, and 
            attention to detail to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <SectionCard 
              key={index}
              title={section.title}
              description={section.description}
              imageSrc={section.imageSrc}
              link={section.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
