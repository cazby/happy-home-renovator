import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Basements = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-reno-800 mb-6">Basement Finishing</h1>
            <p className="text-xl text-reno-600 mb-8">
              Convert your unused basement into valuable living space, from entertainment rooms to guest suites.
            </p>
          </div>

          <div className="mb-12">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img 
                src="/lovable-uploads/bec75484-8f80-404b-b3f1-4ac2bacac697.png" 
                alt="Basement Finishing" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-reno-800 mb-4">Transform Your Basement</h2>
            <p className="text-reno-600 mb-4">
              Basements offer endless possibilities for additional living space in your home. Our experienced team can help you transform your unfinished basement into a beautiful, functional area that adds value to your property.
            </p>
            <p className="text-reno-600 mb-6">
              Whether you're looking to create a cozy family room, a stylish home office, a guest bedroom, or a personal gym, we have the expertise to bring your vision to life.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-reno-800 mb-4">Our Basement Finishing Services</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-reno-600">
              <li>Complete basement design and planning</li>
              <li>Waterproofing and moisture control</li>
              <li>Framing and drywall installation</li>
              <li>Electrical work and lighting design</li>
              <li>Plumbing installation for bathrooms or wet bars</li>
              <li>Flooring installation</li>
              <li>Custom built-ins and storage solutions</li>
              <li>Painting and finishing touches</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-reno-800 mb-4">Benefits of Basement Finishing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-reno-800 mb-2">Increased Living Space</h3>
                <p className="text-reno-600">
                  Add valuable square footage to your home without the cost of a new addition.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-reno-800 mb-2">Enhanced Home Value</h3>
                <p className="text-reno-600">
                  Finished basements can significantly increase your property's market value.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-reno-800 mb-2">Versatile Functionality</h3>
                <p className="text-reno-600">
                  Create a space that serves multiple purposes based on your family's needs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-reno-800 mb-2">Energy Efficiency</h3>
                <p className="text-reno-600">
                  Proper insulation during basement finishing can improve your home's overall energy efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-reno-accent text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Basement?</h2>
            <p className="mb-6">
              Contact us today for a free consultation and estimate on your basement renovation project.
            </p>
            <Button className="bg-white text-reno-accent hover:bg-white/90 inline-flex items-center gap-2">
              Get Started Today <ArrowRight className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Basements;
