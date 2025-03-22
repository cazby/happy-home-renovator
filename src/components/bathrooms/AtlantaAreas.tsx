
import React from 'react';

const AtlantaAreas = () => {
  const atlantaAreas = [
    "Buckhead", "Midtown", "Decatur", "Sandy Springs", "Marietta", 
    "Alpharetta", "Roswell", "Dunwoody", "Brookhaven", "Vinings"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-reno-800 mb-6">Atlanta Areas We Serve</h2>
        <p className="text-lg text-reno-600 max-w-3xl mx-auto mb-8">
          Our bathroom remodeling experts serve homeowners throughout the greater Atlanta metropolitan area:
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {atlantaAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 rounded-full px-4 py-2 text-reno-600">
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtlantaAreas;
