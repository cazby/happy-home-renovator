
import React from 'react';

const BathroomHero = () => {
  return (
    <div className="relative">
      <img 
        src="/lovable-uploads/0d4c3dd7-3970-4f22-bbee-6d58bbffb691.png" 
        alt="Atlanta Bathroom Remodel" 
        className="w-full h-[50vh] object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Atlanta Bathroom Remodels</h1>
          <p className="text-xl text-white max-w-2xl">
            Transform your Atlanta bathroom into a luxurious personal retreat with custom designs and premium fixtures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BathroomHero;
