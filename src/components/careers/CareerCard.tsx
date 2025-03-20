
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CareerPosition } from '@/data/careerPositions';

interface CareerCardProps {
  position: CareerPosition;
}

const CareerCard: React.FC<CareerCardProps> = ({ position }) => {
  return (
    <Card className="border-2 hover:border-reno-accent transition-colors">
      <CardHeader className="flex flex-row items-center gap-4">
        {position.icon}
        <Link to={`/careers/${position.id}`} className="hover:text-reno-accent transition-colors">
          <CardTitle className="text-xl">{position.title}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 list-disc list-inside text-reno-700">
          {position.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CareerCard;
