
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Floors = () => {
  const benefits = [
    "Enhanced aesthetic appeal and home value",
    "Improved durability and longevity",
    "Better insulation and energy efficiency",
    "Easier maintenance and cleaning",
    "Improved indoor air quality with proper materials",
    "Consistent look throughout your home"
  ];

  const flooringTypes = [
    {
      type: "Hardwood",
      description: "Timeless beauty and durability that adds warmth and value to any home.",
      features: ["Natural beauty and unique grain patterns", "Extremely durable and long-lasting", "Can be refinished multiple times"]
    },
    {
      type: "Luxury Vinyl",
      description: "Water-resistant, durable, and available in designs that mimic wood and stone.",
      features: ["100% waterproof options available", "Comfortable underfoot and warmer than tile", "Easy installation and maintenance"]
    },
    {
      type: "Tile",
      description: "Perfect for bathrooms, kitchens, and high-traffic areas requiring moisture resistance.",
      features: ["Exceptional durability and water resistance", "Wide variety of styles, colors, and patterns", "Easy to clean and maintain"]
    },
    {
      type: "Engineered Wood",
      description: "Real wood veneer with enhanced stability and moisture resistance.",
      features: ["More stable in changing humidity", "Compatible with radiant heating systems", "Available in wide planks and exotic species"]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="/lovable-uploads/f8fd0770-99de-4149-9af1-9a325d527e60.png" 
          alt="New Flooring" 
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">New Flooring Installation</h1>
            <p className="text-xl text-white max-w-2xl">
              Transform your home with premium flooring options installed by skilled professionals.
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
              <h2 className="text-3xl font-bold text-reno-800 mb-6">The Foundation of Beautiful Design</h2>
              
              <p className="text-reno-600 mb-6 text-lg">
                Flooring sets the tone for your entire home—it's the surface you walk on every day and the foundation 
                for all your interior design choices. Our expert flooring installation services ensure you get 
                the perfect combination of beauty, durability, and value.
              </p>
              
              <p className="text-reno-600 mb-8 text-lg">
                From hardwood and engineered wood to luxury vinyl, tile, and more, we help you select the ideal 
                flooring material for each room, then install it with meticulous attention to detail for a flawless finish 
                that will last for years to come.
              </p>

              <h3 className="text-2xl font-bold text-reno-800 mb-4">Benefits of New Flooring</h3>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-reno-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-reno-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-reno-accent hover:bg-reno-accent/90 text-white px-8 py-6 text-lg">
                Explore Flooring Options
              </Button>
            </div>

            {/* Right Column - Flooring Types */}
            <div>
              <h3 className="text-2xl font-bold text-reno-800 mb-6">Popular Flooring Options</h3>
              
              <div className="space-y-6">
                {flooringTypes.map((flooring, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-reno-800 mb-2">{flooring.type}</h4>
                    <p className="text-reno-600 mb-3">{flooring.description}</p>
                    <ul className="space-y-1">
                      {flooring.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                          <span className="text-reno-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-reno-800 mb-10 text-center">Our Flooring Installation Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-reno-accent text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold text-reno-800 mb-3 pt-2">Consultation & Measurement</h3>
              <p className="text-reno-600">
                We discuss your needs, preferences, and budget, then take precise measurements of your space.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-reno-accent text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold text-reno-800 mb-3 pt-2">Material Selection</h3>
              <p className="text-reno-600">
                We help you choose the perfect flooring material, color, and style for each room.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-reno-accent text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold text-reno-800 mb-3 pt-2">Preparation & Installation</h3>
              <p className="text-reno-600">
                We properly prepare the subfloor and install your new flooring with expert precision.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-reno-accent text-white rounded-full flex items-center justify-center font-bold">4</div>
              <h3 className="text-xl font-bold text-reno-800 mb-3 pt-2">Finishing & Inspection</h3>
              <p className="text-reno-600">
                We complete all finishing touches and thoroughly inspect the installation for perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room-Specific Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-reno-800 mb-10 text-center">Room-Specific Flooring Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-reno-800 mb-3">Kitchen Flooring</h3>
              <p className="text-reno-600 mb-4">
                Kitchens require flooring that can withstand moisture, spills, and heavy foot traffic while complementing your cabinetry and countertops.
              </p>
              <p className="text-reno-600 font-medium">Recommended options:</p>
              <ul className="text-reno-600 space-y-1 mt-2">
                <li className="flex items-start">
                  <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>Porcelain or ceramic tile</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>Luxury vinyl plank or tile</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>Engineered hardwood</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-reno-800 mb-3">Living Room Flooring</h3>
              <p className="text-reno-600 mb-4">
                Living rooms call for comfortable, beautiful flooring that creates a warm, inviting atmosphere for family and guests.
              </p>
              <p className="text-reno-600 font-medium">Recommended options:</p>
              <ul className="text-reno-600 space-y-1 mt-2">
                <li className="flex items-start">
                  <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>Solid hardwood flooring</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>High-quality carpet</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>Luxury vinyl with wood-look design</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-reno-800 mb-3">Bathroom Flooring</h3>
              <p className="text-reno-600 mb-4">
                Bathrooms need water-resistant, durable flooring that's safe when wet and easy to maintain.
              </p>
              <p className="text-reno-600 font-medium">Recommended options:</p>
              <ul className="text-reno-600 space-y-1 mt-2">
                <li className="flex items-start">
                  <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>Porcelain tile with textured finish</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>Waterproof luxury vinyl tile</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>Natural stone with proper sealing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-reno-800 mb-3">Basement Flooring</h3>
              <p className="text-reno-600 mb-4">
                Basements require special consideration for potential moisture issues while creating comfortable, usable space.
              </p>
              <p className="text-reno-600 font-medium">Recommended options:</p>
              <ul className="text-reno-600 space-y-1 mt-2">
                <li className="flex items-start">
                  <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>Waterproof luxury vinyl plank</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>Engineered hardwood with moisture barrier</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-reno-accent-alt mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>Carpet tiles with waterproof backing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-reno-800 mb-10">Client Success Story</h2>
          
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-sm">
            <p className="text-xl text-reno-600 italic mb-6">
              "We couldn't be happier with our new hardwood floors! The team helped us select the perfect species and finish, and the installation was flawless. They completed the entire first floor in just three days with minimal disruption."
            </p>
            <div>
              <p className="font-bold text-reno-800">Mark & Lisa Johnson</p>
              <p className="text-reno-500">Hardwood Flooring Installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-reno-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Beautiful New Floors?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a free consultation and estimate for your flooring project.
          </p>
          <Button className="bg-reno-accent-alt hover:bg-reno-accent-alt/90 text-white text-lg px-8 py-6">
            Get Your Free Flooring Consultation
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Floors;
