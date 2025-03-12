
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SectionCard from '@/components/SectionCard';
import { Button } from '@/components/ui/button';
import { Building, ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

const Index = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  const sections = [
    {
      title: "Home Additions",
      description: "Expand your living space with custom additions that blend seamlessly with your existing home.",
      imageSrc: "/lovable-uploads/7396d142-9342-4f36-bcc3-b70aaae74ebc.png",
      link: "/additions"
    },
    {
      title: "Kitchen Renovations",
      description: "Transform your kitchen into a functional, beautiful space that's perfect for cooking and entertaining.",
      imageSrc: "/lovable-uploads/b256c961-b6d2-457c-8389-a479c5ae5d5c.png",
      link: "/kitchens"
    },
    {
      title: "Bathroom Remodels",
      description: "Create a luxurious retreat with premium fixtures, beautiful tilework, and practical storage solutions.",
      imageSrc: "/lovable-uploads/0d4c3dd7-3970-4f22-bbee-6d58bbffb691.png",
      link: "/bathrooms"
    },
    {
      title: "Flooring Installation",
      description: "Upgrade your floors with high-quality materials that enhance your home's beauty and value.",
      imageSrc: "/lovable-uploads/f8fd0770-99de-4149-9af1-9a325d527e60.png",
      link: "/floors"
    },
    {
      title: "Basement Finishing",
      description: "Convert your unused basement into valuable living space, from entertainment rooms to guest suites.",
      imageSrc: "/lovable-uploads/3f452b6c-3a04-4986-98cb-fdc8e41e407c.png",
      link: "/basements"
    }
  ];

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
    <PageLayout>
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
                        <Button className="bg-reno-accent hover:bg-reno-accent/90 text-white text-lg px-8 py-6">
                          Get a Free Quote
                        </Button>
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-reno-accent/10 rounded-full mb-4">
              <Building className="w-8 h-8 text-reno-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-reno-800 mb-4">Our Renovation Services</h2>
            <p className="text-reno-600 max-w-3xl mx-auto text-lg">
              From full home remodels to room-specific renovations, we bring expertise, quality craftsmanship, and 
              attention to detail to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <SectionCard 
                key={index}
                title={section.title}
                description={section.description}
                imageSrc={section.imageSrc}
                link={section.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-reno-800 mb-4">Why Choose Us</h2>
            <p className="text-reno-600 max-w-3xl mx-auto">
              We bring expertise, quality materials, and meticulous attention to detail to every renovation project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-reno-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-reno-accent">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-reno-800">Experienced Team</h3>
              <p className="text-reno-600">
                Our craftsmen bring decades of experience and passion to every project, ensuring quality results.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-reno-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-reno-accent">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-reno-800">Quality Materials</h3>
              <p className="text-reno-600">
                We use only premium materials that offer durability, beauty, and long-lasting performance.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-reno-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-reno-accent">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-reno-800">On-Time & On-Budget</h3>
              <p className="text-reno-600">
                We complete projects on schedule and within budget, with clear communication throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-reno-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate on your renovation project.
          </p>
          <Button className="bg-white text-reno-accent hover:bg-gray-100 text-lg px-8 py-6 inline-flex items-center gap-2">
            Get Started Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
