
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface HeroSectionProps {
  sections: {
    title: string;
    description: string;
    imageSrc: string;
    link: string;
  }[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ sections }) => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);
    
    return () => clearInterval(intervalId);
  }, [api]);
  
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on('select', onSelect);
    
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section className="relative text-white">
      <Carousel 
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {sections.map((section, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="hero-slide relative w-full h-[500px] md:h-[600px]" style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${section.imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Home, Elevate Your Life</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                      Professional home renovations tailored to your needs, style, and budget.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link to="/quote">
                        <Button className="bg-reno-accent hover:bg-reno-accent/90 text-white text-lg px-8 py-6">
                          Get a Free Quote
                        </Button>
                      </Link>
                      <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                        View Our Projects
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {sections.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? "bg-white scale-110" : "bg-white/50"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;
