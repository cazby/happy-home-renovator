
import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-reno-800 mb-4">Why Choose Us</h2>
          <p className="text-reno-600 max-w-3xl mx-auto">
            We bring expertise, quality materials, and meticulous attention to detail to every renovation project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-reno-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-reno-accent">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-reno-800">Experienced Team</h3>
            <p className="text-reno-600">
              Our craftsmen bring decades of experience and passion to every project, ensuring quality results.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-reno-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-reno-accent">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-reno-800">Quality Materials</h3>
            <p className="text-reno-600">
              We use only premium materials that offer durability, beauty, and long-lasting performance.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-reno-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-reno-accent">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-reno-800">On-Time & On-Budget</h3>
            <p className="text-reno-600">
              We complete projects on schedule and within budget, with clear communication throughout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
