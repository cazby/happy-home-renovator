
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet';

const ItelValuation = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Itel Valuation Systems | 1 Week Remodel</title>
        <meta name="description" content="Learn how Itel valuation systems help ensure you get the right value for your home repairs and renovations." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-reno-800 mb-6">Itel Valuation Systems</h1>
          
          <div className="mb-8">
            <img 
              src="/lovable-uploads/3f452b6c-3a04-4986-98cb-fdc8e41e407c.png" 
              alt="Itel Professional Services" 
              className="w-full h-auto rounded-lg shadow-md mb-6"
            />
            
            <p className="text-reno-600 text-lg mb-4">
              As a certified Itel Professional Services Contractor, we provide accurate and fair valuations for all your home repair and renovation needs.
            </p>
          </div>
          
          <div className="space-y-6 text-reno-600">
            <h2 className="text-2xl font-bold text-reno-800">Getting the Right Value for Your Home Repairs</h2>
            
            <p>
              Itel is the industry leader for cost valuation in home repairs and renovations. Their advanced system ensures that homeowners receive accurate estimates for insurance claims and renovation projects.
            </p>
            
            <h3 className="text-xl font-semibold text-reno-800">How Itel Valuation Works</h3>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Detailed assessment of your property damage or renovation needs</li>
              <li>Industry-standard pricing calculations based on current market rates</li>
              <li>Comprehensive documentation that insurance companies recognize and accept</li>
              <li>Fair valuation that ensures you receive appropriate compensation</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-reno-800">Our Partnership with Itel</h3>
            
            <p>
              As an Itel Professional Services Contractor, we have been trained and certified to use their valuation systems. This partnership allows us to:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate estimates that insurance companies are more likely to approve</li>
              <li>Streamline the claims process, reducing delays in your renovation project</li>
              <li>Ensure you receive fair compensation for necessary repairs</li>
              <li>Deliver transparent pricing throughout your project</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
              <h3 className="text-xl font-semibold text-reno-800 mb-3">Get a Professional Valuation</h3>
              <p className="mb-4">
                Whether you're planning a renovation or dealing with property damage, our team can provide an accurate valuation using Itel's industry-leading system.
              </p>
              <a 
                href="/quote" 
                className="inline-block bg-reno-accent hover:bg-reno-accent/90 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Request a Free Valuation
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ItelValuation;
