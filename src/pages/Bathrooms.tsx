
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Bathrooms = () => {
  const benefits = [
    "Increased home value and market appeal in Atlanta's competitive real estate market",
    "Improved functionality and storage capacity for Atlanta homes",
    "Enhanced energy efficiency with modern fixtures that meet Atlanta's building codes",
    "Luxury features that create a spa-like experience perfect for Atlanta's lifestyle",
    "Better space utilization in small Atlanta bathrooms",
    "Updated style that complements Atlanta's home aesthetic trends"
  ];

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

  const atlantaAreas = [
    "Buckhead", "Midtown", "Decatur", "Sandy Springs", "Marietta", 
    "Alpharetta", "Roswell", "Dunwoody", "Brookhaven", "Vinings"
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Atlanta Bathroom Remodeling | Expert Bathroom Renovations | 1 Week Remodel</title>
        <meta name="description" content="Atlanta's premier bathroom remodeling service. Transform your bathroom with our expert Atlanta renovation team in just one week. Serving all Atlanta neighborhoods." />
        <meta name="keywords" content="bathroom remodeling Atlanta, Atlanta bathroom renovation, bathroom remodel Atlanta GA, luxury bathroom Atlanta, Atlanta bathroom contractors" />
      </Helmet>

      {/* Hero Section */}
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-reno-800 mb-6">Atlanta's Premier Bathroom Remodeling Experts</h2>
              
              <p className="text-reno-600 mb-6 text-lg">
                The bathroom is your personal retreat—a place to refresh, rejuvenate, and prepare for Atlanta's busy days. 
                Our bathroom remodels combine beautiful design with practical functionality to create spaces that 
                feel luxurious while meeting the unique needs of Atlanta homeowners.
              </p>
              
              <p className="text-reno-600 mb-8 text-lg">
                From complete bathroom transformations to targeted updates, we handle every aspect of your Atlanta renovation, 
                including custom showers, premium fixtures, vanities, lighting, tile work, and those special touches 
                that elevate your bathroom from ordinary to extraordinary.
              </p>

              <h3 className="text-2xl font-bold text-reno-800 mb-4">Benefits of Bathroom Renovations in Atlanta</h3>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-reno-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-reno-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link to="/quote">
                <Button className="bg-reno-accent hover:bg-reno-accent/90 text-white px-8 py-6 text-lg">
                  Create Your Dream Atlanta Bathroom
                </Button>
              </Link>
            </div>

            {/* Right Column - Features */}
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
          </div>
        </div>
      </section>

      {/* Bathroom Types */}
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

      {/* Atlanta Areas We Serve */}
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

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-reno-800 mb-10">Atlanta Client Success Story</h2>
          
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-sm">
            <p className="text-xl text-reno-600 italic mb-6">
              "Our outdated bathroom in our Buckhead home was transformed into a beautiful spa-like retreat. The team was professional, attentive to detail, and finished the project on schedule. The custom tile work and glass shower enclosure exceeded our expectations!"
            </p>
            <div>
              <p className="font-bold text-reno-800">Robert & Emily Chen</p>
              <p className="text-reno-500">Master Bathroom Renovation in Buckhead, Atlanta</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </PageLayout>
  );
};

export default Bathrooms;
