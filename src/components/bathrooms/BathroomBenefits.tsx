
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BathroomBenefits = () => {
  const benefits = [
    "Increased home value and market appeal in Atlanta's competitive real estate market",
    "Improved functionality and storage capacity for Atlanta homes",
    "Enhanced energy efficiency with modern fixtures that meet Atlanta's building codes",
    "Luxury features that create a spa-like experience perfect for Atlanta's lifestyle",
    "Better space utilization in small Atlanta bathrooms",
    "Updated style that complements Atlanta's home aesthetic trends"
  ];

  return (
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
  );
};

export default BathroomBenefits;
