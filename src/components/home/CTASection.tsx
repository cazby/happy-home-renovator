
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="bg-reno-accent text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Take the first step toward your dream home with our team of experts. 
          Get your project completed in just 1 week!
        </p>
        <Link to="/quote">
          <Button 
            variant="outline" 
            size="lg" 
            className="text-reno-accent bg-white hover:bg-white/90 border-white text-lg px-8 py-6 h-auto"
          >
            Contact
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
