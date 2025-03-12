
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-reno-800 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Happy Home Renovator</h3>
            <p className="text-reno-100">
              Transforming houses into dream homes with quality craftsmanship and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-reno-accent-alt transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-reno-accent-alt transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-reno-accent-alt transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/additions" className="hover:text-reno-accent-alt transition-colors">Home Additions</Link></li>
              <li><Link to="/kitchens" className="hover:text-reno-accent-alt transition-colors">Kitchen Renovations</Link></li>
              <li><Link to="/bathrooms" className="hover:text-reno-accent-alt transition-colors">Bathroom Remodels</Link></li>
              <li><Link to="/floors" className="hover:text-reno-accent-alt transition-colors">Flooring Installation</Link></li>
              <li><Link to="/basements" className="hover:text-reno-accent-alt transition-colors">Basement Finishing</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-reno-accent-alt transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-reno-accent-alt transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-reno-accent-alt transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-reno-accent-alt transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-reno-accent-alt transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@happyhomerenovator.com</span>
              </li>
              <li>123 Renovation Street</li>
              <li>Suite 456</li>
              <li>Homeville, HM 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Happy Home Renovator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
