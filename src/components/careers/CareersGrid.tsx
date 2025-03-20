
import React from 'react';
import { TrendingUp } from 'lucide-react';
import CareerCard from './CareerCard';
import { CareerPosition } from '@/data/careerPositions';

interface CareersGridProps {
  positions: CareerPosition[];
}

const CareersGrid: React.FC<CareersGridProps> = ({ positions }) => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-6 w-6 text-reno-accent" />
        <h2 className="text-2xl font-bold text-reno-800">Career Opportunities</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {positions.map((position) => (
          <CareerCard key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
};

export default CareersGrid;
