
import React from 'react';

const BathroomFeatures = () => {
  const features = [
    {
      title: "Luxury Showers",
      description: "Custom tile work, multiple shower heads, and frameless glass enclosures designed for Atlanta homes."
    },
    {
      title: "Soaking Tubs",
      description: "Freestanding tubs, jetted options, and space-saving designs perfect for Atlanta properties."
    },
    {
      title: "Smart Storage",
      description: "Custom vanities, recessed cabinets, and innovative storage solutions for Atlanta bathrooms."
    },
    {
      title: "Premium Fixtures",
      description: "High-quality faucets, showerheads, and hardware in designer finishes popular in Atlanta."
    }
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-reno-800 mb-6">Luxury Bathroom Features for Atlanta Homes</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-reno-800 mb-2">{feature.title}</h4>
            <p className="text-reno-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-reno-accent/10 rounded-lg p-6">
        <h3 className="text-xl font-bold text-reno-800 mb-2">Our Atlanta Bathroom Renovation Process</h3>
        <ol className="space-y-4">
          <li className="flex">
            <span className="font-bold text-reno-accent mr-2">1.</span>
            <div>
              <p className="font-medium text-reno-800">In-Home Atlanta Design Consultation</p>
              <p className="text-reno-600">We explore your vision, needs, and budget in your Atlanta home to create the perfect plan.</p>
            </div>
          </li>
          <li className="flex">
            <span className="font-bold text-reno-accent mr-2">2.</span>
            <div>
              <p className="font-medium text-reno-800">Material Selection</p>
              <p className="text-reno-600">Choose premium tiles, fixtures, vanities, and finishes that complement Atlanta home styles.</p>
            </div>
          </li>
          <li className="flex">
            <span className="font-bold text-reno-accent mr-2">3.</span>
            <div>
              <p className="font-medium text-reno-800">Atlanta Code-Compliant Demolition & Waterproofing</p>
              <p className="text-reno-600">We carefully remove old elements and ensure proper waterproofing to Atlanta standards.</p>
            </div>
          </li>
          <li className="flex">
            <span className="font-bold text-reno-accent mr-2">4.</span>
            <div>
              <p className="font-medium text-reno-800">Expert Installation</p>
              <p className="text-reno-600">Our skilled Atlanta craftsmen install all new components with precision.</p>
            </div>
          </li>
          <li className="flex">
            <span className="font-bold text-reno-accent mr-2">5.</span>
            <div>
              <p className="font-medium text-reno-800">Final Touches & Atlanta Code Inspection</p>
              <p className="text-reno-600">We complete all details and ensure everything meets Atlanta building standards.</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BathroomFeatures;
