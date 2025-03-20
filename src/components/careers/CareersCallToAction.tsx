
import React from 'react';
import { Book } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CareersCallToAction: React.FC = () => {
  return (
    <div className="mt-16 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-reno-800 mb-4 flex items-center justify-center gap-2">
        <Book className="h-6 w-6 text-reno-accent" />
        Ready to Grow With Us?
      </h2>
      <p className="text-reno-700 mb-6">
        Each of these roles plays a crucial part in ensuring the smooth operation of our company and the successful delivery of construction projects. If you're passionate about quality and craftsmanship, we'd love to hear from you.
      </p>
      <Button className="bg-reno-accent hover:bg-reno-accent/90 text-white">
        Apply Now
      </Button>
    </div>
  );
};

export default CareersCallToAction;
