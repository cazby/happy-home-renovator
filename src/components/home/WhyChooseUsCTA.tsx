
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, Award, Shield } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const WhyChooseUsCTA = () => {
  const highlights = [
    {
      icon: <Clock className="h-6 w-6 text-reno-accent" />,
      title: "Fast 1-Week Completion",
      description: "Get your project done in just one week, not months!"
    },
    {
      icon: <Award className="h-6 w-6 text-reno-accent" />,
      title: "15+ Years Experience",
      description: "Trust our seasoned professionals with your home"
    },
    {
      icon: <Shield className="h-6 w-6 text-reno-accent" />,
      title: "Licensed & Insured",
      description: "Full peace of mind with our credentialed team"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-reno-800 mb-4">Why Choose One-Week Remodel?</h2>
          <p className="text-lg text-reno-600 max-w-3xl mx-auto">
            We deliver exceptional home renovations with speed, quality, and professionalism that sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {highlights.map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-reno-accent/10 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-reno-800 mb-2">{item.title}</h3>
                  <p className="text-reno-600">{item.description}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-0 pb-6">
                <Link to="/why-use-us">
                  <Button variant="ghost" className="text-reno-accent hover:bg-reno-accent/10">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/why-use-us">
            <Button className="bg-reno-accent hover:bg-reno-accent/90 text-white">
              See All 8 Reasons Why
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsCTA;
