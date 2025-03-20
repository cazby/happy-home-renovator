
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import { careerPositions } from '@/data/careerPositions';

const CareerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const position = careerPositions.find(pos => pos.id === id);

  if (!position) {
    return (
      <PageLayout>
        <div className="container py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/careers">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Careers
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-reno-800 mb-4">Position Not Found</h1>
            <p>The career position you're looking for doesn't exist.</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/careers">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Careers
            </Button>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            {position.icon}
            <h1 className="text-3xl font-bold text-reno-800">{position.title}</h1>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-reno-700 mb-3">Job Description</h2>
              <p className="text-reno-600">{position.fullDescription}</p>
            </div>

            {position.responsibilities && position.responsibilities.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-reno-700 mb-3">Key Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2 text-reno-600">
                  {position.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6">
              <Button className="bg-reno-accent hover:bg-reno-accent/90 text-white">
                Apply for this Position
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CareerDetail;
