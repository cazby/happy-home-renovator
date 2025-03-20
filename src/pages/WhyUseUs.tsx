
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Award, Shield, CheckCircle, DollarSign, Home, Heart, Clipboard } from 'lucide-react';
import { Helmet } from 'react-helmet';

const WhyUseUs = () => {
  const reasons = [
    {
      title: "We Get It Done in Just One Week",
      description: "Time is valuable, and we know you don't want your project dragging on for months. Our expertise and streamlined processes allow us to complete your remodel in just one week, saving you time and stress.",
      icon: <Clock className="h-8 w-8 text-reno-accent" />
    },
    {
      title: "15+ Years of Experience",
      description: "With over 15 years in the remodeling and repair business, we have the knowledge and experience to handle any project. From small repairs to complete renovations, we've seen it all.",
      icon: <Award className="h-8 w-8 text-reno-accent" />
    },
    {
      title: "Licensed & Insured for Your Peace of Mind",
      description: "As a fully licensed and insured contractor in Georgia, we provide an added layer of trust and security. You can have peace of mind knowing that we comply with all state regulations.",
      icon: <Shield className="h-8 w-8 text-reno-accent" />
    },
    {
      title: "High-Quality Workmanship",
      description: "Even though we work fast, we never cut corners. Our team is dedicated to delivering high-quality craftsmanship on every project. We ensure every detail is perfect and built to last.",
      icon: <CheckCircle className="h-8 w-8 text-reno-accent" />
    },
    {
      title: "Transparent Pricing & No Surprises",
      description: "We believe in honesty and transparency. From the initial estimate to the final bill, we provide clear, upfront pricing with no hidden fees. What you see is what you get.",
      icon: <DollarSign className="h-8 w-8 text-reno-accent" />
    },
    {
      title: "Minimal Disruption to Your Daily Life",
      description: "We know that having work done on your home can be disruptive. Our goal is to complete your remodel as quickly and efficiently as possible, so you can get back to your normal routine.",
      icon: <Home className="h-8 w-8 text-reno-accent" />
    },
    {
      title: "Customer Satisfaction is Our Top Priority",
      description: "At One-Week Remodel, we put our customers first. Our team works closely with you throughout the entire process to ensure your vision is brought to life.",
      icon: <Heart className="h-8 w-8 text-reno-accent" />
    },
    {
      title: "Expert Project Management",
      description: "We've perfected the process of remodeling in a short time frame, and our experienced project managers ensure everything runs smoothly. From coordinating trades to securing materials.",
      icon: <Clipboard className="h-8 w-8 text-reno-accent" />
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Why Choose One-Week Remodel | Fast Home Renovations in Atlanta</title>
        <meta name="description" content="Learn why One-Week Remodel is Atlanta's preferred home renovation contractor. Fast completion, 15+ years experience, quality craftsmanship, and transparent pricing." />
      </Helmet>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-reno-800 mb-6">Why Choose One-Week Remodel?</h1>
            <p className="text-xl text-reno-600">
              At One-Week Remodel, we understand that home renovations and repairs are a big investment, and you want the job done right—without the hassle and disruption of lengthy timelines. Here's why we stand out from the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-reno-accent/10 rounded-full flex-shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-reno-800 mb-2">{reason.title}</h3>
                    <p className="text-reno-600">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-reno-accent text-white p-8 rounded-lg max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Home in Just One Week?</h2>
            <p className="mb-6">
              We promise fast, efficient, and high-quality results that make your renovation experience easy and stress-free.
            </p>
            <Link to="/quote">
              <Button size="lg" className="bg-white text-reno-accent hover:bg-white/90">
                Get Your Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WhyUseUs;
