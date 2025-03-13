
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-reno-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Home in Just 7 Days?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Our Atlanta team completes most renovation projects in just one week. Contact us today for a free consultation and estimate on your Atlanta home renovation project.
        </p>
        <Button className="bg-white text-reno-accent hover:bg-gray-100 text-lg px-8 py-6 inline-flex items-center gap-2">
          Get Started Today <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
