
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>About Us | One-Week Remodel</title>
        <meta name="description" content="Learn about One-Week Remodel, a licensed and insured contracting company in Georgia specializing in fast, high-quality home renovations." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-reno-800 mb-6">About Us: One-Week Remodel</h1>
          
          <div className="prose prose-lg max-w-none text-reno-700">
            <p className="text-xl mb-8">
              Welcome to One-Week Remodel, your go-to licensed and insured contracting company in Georgia! 
              We specialize in transforming your spaces quickly, efficiently, and with top-tier craftsmanship – all in just one week. 
              Whether it's a kitchen, bathroom, or any other home improvement project, we're here to make it happen, 
              so you can get back to enjoying your home sooner rather than later.
            </p>
            
            <h2 className="text-2xl font-bold text-reno-800 mt-8 mb-4">Who We Are</h2>
            <p>
              With over 15 years of experience in the repair and remodeling industry, we've built a reputation for 
              delivering high-quality results without the long wait times. We understand that your time is valuable, 
              and our goal is to complete your remodel in just one week while ensuring the work is done right the first time. 
              From the initial consultation to the final touches, we handle every step with precision and care.
            </p>
            <p>
              As a fully licensed and insured contractor, you can trust that your project will be in good hands. 
              We adhere to Georgia's regulations and guidelines, ensuring that all work is completed to code and 
              to the highest standards of safety and professionalism.
            </p>
            
            <h2 className="text-2xl font-bold text-reno-800 mt-8 mb-4">Our Mission</h2>
            <p>
              At One-Week Remodel, we believe that home improvements shouldn't disrupt your daily life for months on end. 
              That's why we've perfected the art of getting it done quickly — without compromising on quality. 
              Whether you need repairs, renovations, or complete remodels, we make sure your vision becomes a 
              reality within a week.
            </p>
            <p>
              Our mission is simple: Fast, flawless remodels, done on time.
            </p>
            
            <h2 className="text-2xl font-bold text-reno-800 mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Experienced Professionals:</strong> With over 15 years of experience in the industry, we know how to tackle every challenge that comes our way.</li>
              <li><strong>Speed & Efficiency:</strong> We specialize in completing full remodels in just one week — so you can get back to enjoying your space faster.</li>
              <li><strong>Licensed & Insured:</strong> As a fully licensed and insured contractor in Georgia, we prioritize your safety and peace of mind.</li>
              <li><strong>Customer Satisfaction:</strong> We're committed to delivering results that not only meet but exceed your expectations. Your satisfaction is our top priority.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-reno-800 mt-8 mb-4">Get Started Today!</h2>
            <p>
              Ready to transform your home in just one week? Contact One-Week Remodel today for a consultation, 
              and let's discuss how we can make your home improvement dreams come true — on time, on budget, 
              and with outstanding results!
            </p>
            <p>
              Thank you for considering us for your next remodel. We look forward to working with you!
            </p>
            
            <div className="mt-10 flex justify-center">
              <Link to="/quote">
                <Button 
                  className="bg-reno-accent hover:bg-reno-accent/90 text-white text-lg px-8 py-6 h-auto"
                  size="lg"
                >
                  Get a Free Quote <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
