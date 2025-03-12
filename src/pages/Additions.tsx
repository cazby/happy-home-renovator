
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Additions = () => {
  const benefits = [
    "Increased living space for growing families",
    "Higher property value and return on investment",
    "Customized spaces tailored to your specific needs",
    "Modern design that seamlessly integrates with existing structure",
    "Energy-efficient construction to reduce utility costs",
    "Improved functionality and flow of your home"
  ];

  const projects = [
    {
      title: "Master Suite Addition",
      description: "A spacious master bedroom with ensuite bathroom and walk-in closet."
    },
    {
      title: "Sunroom Addition",
      description: "A light-filled space that connects your home to the outdoors."
    },
    {
      title: "Second Story Addition",
      description: "Double your living space without expanding your home's footprint."
    },
    {
      title: "Bump-Out Addition",
      description: "Small expansions that add valuable space to existing rooms."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="/lovable-uploads/7396d142-9342-4f36-bcc3-b70aaae74ebc.png" 
          alt="Home Addition" 
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Home Additions</h1>
            <p className="text-xl text-white max-w-2xl">
              Expand your living space with custom additions that perfectly match your home's architecture and your family's needs.
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
              <h2 className="text-3xl font-bold text-reno-800 mb-6">Expand Your Home, Enhance Your Life</h2>
              
              <p className="text-reno-600 mb-6 text-lg">
                Home additions provide the perfect solution when you need more space but love your current location. 
                Whether you're welcoming new family members, need a home office, or want to create your dream kitchen, 
                our expert team can design and build the perfect addition to complement your existing home.
              </p>
              
              <p className="text-reno-600 mb-8 text-lg">
                We handle every aspect of your addition project, from initial design and permitting to final finishing touches, 
                ensuring a smooth process and beautiful results that exceed your expectations.
              </p>

              <h3 className="text-2xl font-bold text-reno-800 mb-4">Benefits of Home Additions</h3>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-reno-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-reno-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-reno-accent hover:bg-reno-accent/90 text-white px-8 py-6 text-lg">
                Schedule a Consultation
              </Button>
            </div>

            {/* Right Column - Projects */}
            <div>
              <h3 className="text-2xl font-bold text-reno-800 mb-6">Popular Addition Projects</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-reno-800 mb-2">{project.title}</h4>
                    <p className="text-reno-600">{project.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-reno-accent/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-reno-800 mb-2">Our Process</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="font-bold text-reno-accent mr-2">1.</span>
                    <div>
                      <p className="font-medium text-reno-800">Initial Consultation</p>
                      <p className="text-reno-600">We discuss your needs, budget, and vision for your new space.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-reno-accent mr-2">2.</span>
                    <div>
                      <p className="font-medium text-reno-800">Design & Planning</p>
                      <p className="text-reno-600">Our designers create detailed plans for your approval.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-reno-accent mr-2">3.</span>
                    <div>
                      <p className="font-medium text-reno-800">Permitting</p>
                      <p className="text-reno-600">We handle all required permits and approvals.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-reno-accent mr-2">4.</span>
                    <div>
                      <p className="font-medium text-reno-800">Construction</p>
                      <p className="text-reno-600">Our skilled craftsmen build your addition with quality and care.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-reno-accent mr-2">5.</span>
                    <div>
                      <p className="font-medium text-reno-800">Final Walkthrough</p>
                      <p className="text-reno-600">We ensure everything meets our high standards and your expectations.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-reno-800 mb-10">What Our Clients Say</h2>
          
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-md">
            <p className="text-xl text-reno-600 italic mb-6">
              "We needed more space for our growing family but didn't want to move. The team designed and built a beautiful second-story addition that blends perfectly with our home's character. The process was smooth, and we couldn't be happier with the results!"
            </p>
            <div>
              <p className="font-bold text-reno-800">Michael & Sarah Thompson</p>
              <p className="text-reno-500">Second Story Addition</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-reno-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Home Addition Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a free consultation and get a detailed estimate for your dream addition.
          </p>
          <Button className="bg-reno-accent-alt hover:bg-reno-accent-alt/90 text-white text-lg px-8 py-6">
            Get Your Free Consultation
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Additions;
