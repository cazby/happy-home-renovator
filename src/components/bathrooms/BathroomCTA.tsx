
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BathroomCTA = () => {
  return (
    <section className="py-16 bg-reno-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready for Your Atlanta Bathroom Transformation?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to schedule a free in-home design consultation and get a detailed estimate for your Atlanta bathroom renovation.
        </p>
        <Link to="/quote">
          <Button className="bg-reno-accent-alt hover:bg-reno-accent-alt/90 text-white text-lg px-8 py-6">
            Start Your Atlanta Bathroom Project
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BathroomCTA;
