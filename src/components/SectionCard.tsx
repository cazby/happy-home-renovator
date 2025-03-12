
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SectionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  imageSrc,
  link,
  className,
}) => {
  return (
    <div className={cn(
      "section-card bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300",
      className
    )}>
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6">
        <Link to={link} className="hover:text-reno-accent transition-colors">
          <h3 className="text-xl font-bold text-reno-800 mb-2">{title}</h3>
        </Link>
        <p className="text-reno-600 mb-4">{description}</p>
        <Link to={link}>
          <Button className="w-full bg-reno-accent hover:bg-reno-accent/90">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SectionCard;
