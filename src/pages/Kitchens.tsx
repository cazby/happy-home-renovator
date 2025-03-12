
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Kitchens = () => {
  const benefits = [
    "Improved functionality and workflow for easier meal preparation",
    "Increased storage capacity with custom cabinet solutions",
    "Energy-efficient appliances that reduce utility costs",
    "Modern fixtures and finishes that elevate your home's aesthetic",
    "Better lighting that enhances both mood and task performance",
    "Higher home value and strong return on investment"
  ];

  const styles = [
    {
      name: "Modern",
      description: "Clean lines, minimalist design, and sleek finishes for a contemporary look."
    },
    {
      name: "Traditional",
      description: "Classic design elements with rich details and warm, inviting aesthetics."
    },
    {
      name: "Farmhouse",
      description: "Rustic elements combined with practical features for a cozy, homey feel."
    },
    {
      name: "Transitional",
      description: "The perfect blend of contemporary and traditional for timeless appeal."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="/lovable-uploads/b256c961-b6d2-457c-8389-a479c5ae5d5c.png" 
          alt="Kitchen Renovation" 
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kitchen Renovations</h1>
            <p className="text-xl text-white max-w-2xl">
              Transform the heart of your home into a beautiful, functional space where cooking becomes a pleasure.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-reno-800 mb-6">The Heart of Your Home, Reimagined</h2>
              
              <p className="text-reno-600 mb-6 text-lg">
                The kitchen is more than just a place to prepare meals—it's where family gathers, conversations flow, and memories are made. 
                Our expert kitchen renovations combine beautiful design with practical functionality to create a space that works for your lifestyle.
              </p>
              
              <p className="text-reno-600 mb-8 text-lg">
                From complete kitchen overhauls to targeted updates, we handle every aspect of your renovation, 
                including cabinetry, countertops, appliances, flooring, lighting, and those special finishing touches 
                that make your kitchen uniquely yours.
              </p>

              <h3 className="text-2xl font-bold text-reno-800 mb-4">Benefits of Kitchen Renovations</h3>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-reno-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-reno-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-reno-accent hover:bg-reno-accent/90 text-white px-8 py-6 text-lg">
                Start Your Kitchen Transformation
              </Button>
            </div>

            {/* Right Column - Styles */}
            <div>
              <h3 className="text-2xl font-bold text-reno-800 mb-6">Popular Kitchen Styles</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {styles.map((style, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-reno-800 mb-2">{style.name}</h4>
                    <p className="text-reno-600">{style.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-reno-accent/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-reno-800 mb-2">Our Kitchen Renovation Process</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="font-bold text-reno-accent mr-2">1.</span>
                    <div>
                      <p className="font-medium text-reno-800">Design Consultation</p>
                      <p className="text-reno-600">We explore your vision, needs, and budget to create the perfect plan.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-reno-accent mr-2">2.</span>
                    <div>
                      <p className="font-medium text-reno-800">Material Selection</p>
                      <p className="text-reno-600">Choose from premium cabinetry, countertops, fixtures, and finishes.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-reno-accent mr-2">3.</span>
                    <div>
                      <p className="font-medium text-reno-800">Demolition & Preparation</p>
                      <p className="text-reno-600">We carefully remove old elements and prepare the space.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-reno-accent mr-2">4.</span>
                    <div>
                      <p className="font-medium text-reno-800">Installation</p>
                      <p className="text-reno-600">Our skilled craftsmen install all new components with precision.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-reno-accent mr-2">5.</span>
                    <div>
                      <p className="font-medium text-reno-800">Final Touches & Inspection</p>
                      <p className="text-reno-600">We complete all details and ensure everything is perfect.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-reno-800 mb-10 text-center">Premium Kitchen Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-reno-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-reno-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-reno-800 mb-2">Custom Cabinetry</h3>
              <p className="text-reno-600">
                Tailored storage solutions that maximize space and complement your kitchen's design.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-reno-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-reno-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-reno-800 mb-2">Premium Countertops</h3>
              <p className="text-reno-600">
                Durable, beautiful surfaces from quartz and granite to marble and butcher block.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-reno-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-reno-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-reno-800 mb-2">Designer Lighting</h3>
              <p className="text-reno-600">
                Layered lighting solutions that enhance both functionality and ambiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-reno-800 mb-10">Client Success Story</h2>
          
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 md:p-10 rounded-lg shadow-sm">
            <p className="text-xl text-reno-600 italic mb-6">
              "Our kitchen was outdated and inefficient. The team designed a beautiful, modern kitchen that's now the favorite gathering spot in our home. The quality of work was exceptional, and they finished on time and within our budget!"
            </p>
            <div>
              <p className="font-bold text-reno-800">Jennifer & David Wilson</p>
              <p className="text-reno-500">Complete Kitchen Renovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-reno-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Dream Kitchen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a free design consultation and get a detailed estimate for your kitchen renovation.
          </p>
          <Button className="bg-reno-accent-alt hover:bg-reno-accent-alt/90 text-white text-lg px-8 py-6">
            Schedule Your Design Consultation
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Kitchens;
