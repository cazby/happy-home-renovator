
import React from 'react';
import { Check } from 'lucide-react';

const BathroomTypes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-reno-800 mb-10 text-center">Atlanta Bathroom Transformation Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-reno-800 mb-3">Atlanta Master Bathroom Suites</h3>
            <p className="text-reno-600 mb-4">
              Luxurious retreats with dual vanities, spa showers, soaking tubs, and custom storage designed for Atlanta's discerning homeowners.
            </p>
            <ul className="text-reno-600 space-y-2">
              <li className="flex items-start">
                <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Dual vanities with ample counter space</span>
              </li>
              <li className="flex items-start">
                <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Walk-in showers with multiple shower heads</span>
              </li>
              <li className="flex items-start">
                <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Freestanding soaking or jetted tubs</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-reno-800 mb-3">Atlanta Guest Bathrooms</h3>
            <p className="text-reno-600 mb-4">
              Stylish, functional spaces that impress Atlanta visitors while providing all the amenities they need during their stay.
            </p>
            <ul className="text-reno-600 space-y-2">
              <li className="flex items-start">
                <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Elegant fixtures and finishes</span>
              </li>
              <li className="flex items-start">
                <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Efficient layouts that maximize space</span>
              </li>
              <li className="flex items-start">
                <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Thoughtful storage solutions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-reno-800 mb-3">Atlanta Powder Rooms</h3>
            <p className="text-reno-600 mb-4">
              Small but impactful spaces where bold design choices create a memorable impression for guests in your Atlanta home.
            </p>
            <ul className="text-reno-600 space-y-2">
              <li className="flex items-start">
                <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Statement vanities and mirrors</span>
              </li>
              <li className="flex items-start">
                <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Dramatic lighting fixtures</span>
              </li>
              <li className="flex items-start">
                <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Designer wallpaper and accent walls</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BathroomTypes;
