
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Bathrooms = () => {
  const benefits = [
    "Increased home value and market appeal",
    "Improved functionality and storage capacity",
    "Enhanced energy efficiency with modern fixtures",
    "Luxury features that create a spa-like experience",
    "Better space utilization in small bathrooms",
    "Updated style that complements your home's aesthetic"
  ];

  const features = [
    {
      title: "Luxury Showers",
      description: "Custom tile work, multiple shower heads, and frameless glass enclosures."
    },
    {
      title: "Soaking Tubs",
      description: "Freestanding tubs, jetted options, and space-saving designs."
    },
    {
      title: "Smart Storage",
      description: "Custom vanities, recessed cabinets, and innovative storage solutions."
    },
    {
      title: "Premium Fixtures",
      description: "High-quality faucets, showerheads, and hardware in designer finishes."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="/lovable-uploads/0d4c3dd7-3970-4f22-bbee-6d58bbffb691.png" 
          alt="Bathroom Remodel" 
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bathroom Remodels</h1>
            <p className="text-xl text-white max-w-2xl">
              Transform your bathroom into a luxurious personal retreat with custom designs and premium fixtures.
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
              <h2 className="text-3xl font-bold text-reno-800 mb-6">Your Personal Sanctuary, Redesigned</h2>
              
              <p className="text-reno-600 mb-6 text-lg">
                The bathroom is your personal retreat—a place to refresh, rejuvenate, and prepare for the day ahead. 
                Our bathroom remodels combine beautiful design with practical functionality to create a space that 
                feels luxurious while meeting your everyday needs.
              </p>
              
              <p className="text-reno-600 mb-8 text-lg">
                From complete bathroom transformations to targeted updates, we handle every aspect of your renovation, 
                including custom showers, premium fixtures, vanities, lighting, tile work, and those special touches 
                that elevate your bathroom from ordinary to extraordinary.
              </p>

              <h3 className="text-2xl font-bold text-reno-800 mb-4">Benefits of Bathroom Renovations</h3>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-reno-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-reno-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-reno-accent hover:bg-reno-accent/90 text-white px-8 py-6 text-lg">
                Create Your Dream Bathroom
              </Button>
            </div>

            {/* Right Column - Features */}
            <div>
              <h3 className="text-2xl font-bold text-reno-800 mb-6">Luxury Bathroom Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-reno-800 mb-2">{feature.title}</h4>
                    <p className="text-reno-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-reno-accent/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-reno-800 mb-2">Our Bathroom Renovation Process</h3>
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
                      <p className="text-reno-600">Choose premium tiles, fixtures, vanities, and finishes.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-reno-accent mr-2">3.</span>
                    <div>
                      <p className="font-medium text-reno-800">Demolition & Waterproofing</p>
                      <p className="text-reno-600">We carefully remove old elements and ensure proper waterproofing.</p>
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

      {/* Bathroom Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-reno-800 mb-10 text-center">Bathroom Transformation Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-reno-800 mb-3">Master Bathroom Suites</h3>
              <p className="text-reno-600 mb-4">
                Luxurious retreats with dual vanities, spa showers, soaking tubs, and custom storage for the ultimate in comfort and convenience.
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
              <h3 className="text-xl font-bold text-reno-800 mb-3">Guest Bathrooms</h3>
              <p className="text-reno-600 mb-4">
                Stylish, functional spaces that impress visitors while providing all the amenities they need during their stay.
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
              <h3 className="text-xl font-bold text-reno-800 mb-3">Powder Rooms</h3>
              <p className="text-reno-600 mb-4">
                Small but impactful spaces where bold design choices create a memorable impression for guests.
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

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-reno-800 mb-10">Client Success Story</h2>
          
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 md:p-10 rounded-lg shadow-sm">
            <p className="text-xl text-reno-600 italic mb-6">
              "Our outdated bathroom was transformed into a beautiful spa-like retreat. The team was professional, attentive to detail, and finished the project on schedule. The custom tile work and glass shower enclosure exceeded our expectations!"
            </p>
            <div>
              <p className="font-bold text-reno-800">Robert & Emily Chen</p>
              <p className="text-reno-500">Master Bathroom Renovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-reno-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Bathroom Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a free design consultation and get a detailed estimate for your bathroom renovation.
          </p>
          <Button className="bg-reno-accent-alt hover:bg-reno-accent-alt/90 text-white text-lg px-8 py-6">
            Start Your Bathroom Project
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Bathrooms;
