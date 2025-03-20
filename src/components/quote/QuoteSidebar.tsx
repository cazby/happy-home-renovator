
import React from 'react';

interface QuoteSidebarProps {
  imageUrl: string;
}

const QuoteSidebar: React.FC<QuoteSidebarProps> = ({ imageUrl }) => {
  return (
    <div>
      <img 
        src={imageUrl} 
        alt="Home renovation" 
        className="rounded-lg shadow-md w-full h-auto object-cover"
      />
      <div className="mt-6 bg-reno-50 p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold text-reno-800 mb-2">Why Choose 1 Week Remodel?</h3>
        <ul className="space-y-2 text-reno-600">
          <li>✓ Completed in just 1 week</li>
          <li>✓ Professional, experienced team</li>
          <li>✓ Quality materials and craftsmanship</li>
          <li>✓ Transparent pricing, no hidden fees</li>
          <li>✓ Satisfaction guaranteed</li>
        </ul>
      </div>
    </div>
  );
};

export default QuoteSidebar;
