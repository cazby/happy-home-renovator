
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, HardHat, FileText, Wrench, Users, User, Globe, TrendingUp, Book } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Careers = () => {
  const careerPositions = [
    {
      id: 'project-manager',
      title: 'Project Manager',
      icon: <Briefcase className="h-6 w-6 text-reno-accent" />,
      description: [
        'Oversees the entire construction project, ensuring it runs smoothly and stays on schedule.',
        'Coordinates with subcontractors, suppliers, and clients.',
        'Manages the project's budget and scope.'
      ]
    },
    {
      id: 'construction-superintendent',
      title: 'Construction Superintendent',
      icon: <HardHat className="h-6 w-6 text-reno-accent" />,
      description: [
        'Manages day-to-day operations at the construction site.',
        'Ensures safety protocols are followed and workers are productive.',
        'Coordinates with the project manager and other team members.'
      ]
    },
    {
      id: 'estimator',
      title: 'Estimator',
      icon: <FileText className="h-6 w-6 text-reno-accent" />,
      description: [
        'Analyzes blueprints and project specifications to provide cost estimates for materials, labor, and equipment.',
        'Prepares bids and proposals for new projects.'
      ]
    },
    {
      id: 'field-engineer',
      title: 'Field Engineer',
      icon: <Wrench className="h-6 w-6 text-reno-accent" />,
      description: [
        'Works on-site to provide technical support and ensure that construction activities comply with design specifications.',
        'Solves engineering issues that arise during construction.'
      ]
    },
    {
      id: 'safety-manager',
      title: 'Safety Manager',
      icon: <HardHat className="h-6 w-6 text-reno-accent" />,
      description: [
        'Ensures that all safety protocols and OSHA regulations are followed on-site.',
        'Conducts safety audits and training for workers.',
        'Manages accidents and incidents on the job site.'
      ]
    },
    {
      id: 'foreman',
      title: 'Foreman',
      icon: <User className="h-6 w-6 text-reno-accent" />,
      description: [
        'Supervises specific work crews or trades on the construction site.',
        'Ensures that workers follow safety guidelines and construction plans.',
        'Provides instruction and support to laborers and skilled tradespeople.'
      ]
    },
    {
      id: 'skilled-laborers',
      title: 'Skilled Laborers/Tradespeople',
      icon: <Users className="h-6 w-6 text-reno-accent" />,
      description: [
        'Includes carpenters, electricians, plumbers, masons, and other specialized tradespeople.',
        'These workers perform the physical labor and tasks according to project needs.'
      ]
    },
    {
      id: 'construction-administrator',
      title: 'Construction Administrator',
      icon: <FileText className="h-6 w-6 text-reno-accent" />,
      description: [
        'Handles paperwork, permits, contracts, and other administrative tasks.',
        'Manages project schedules, invoicing, and client communication.'
      ]
    },
    {
      id: 'procurement-manager',
      title: 'Procurement Manager',
      icon: <Globe className="h-6 w-6 text-reno-accent" />,
      description: [
        'Sources and purchases materials, tools, and equipment for construction projects.',
        'Negotiates with suppliers to get the best pricing and delivery schedules.'
      ]
    },
    {
      id: 'design-architecture',
      title: 'Design and Architecture Team',
      icon: <Wrench className="h-6 w-6 text-reno-accent" />,
      description: [
        'Works with the general contractor to ensure the design and architecture are in alignment with the project's goals and budget.',
        'May work as part of an external design firm or in-house team.'
      ]
    },
    {
      id: 'accounting-finance',
      title: 'Accounting and Finance Staff',
      icon: <FileText className="h-6 w-6 text-reno-accent" />,
      description: [
        'Manages project budgets, invoices, and financial reporting.',
        'Works to ensure that the company maintains profitability while meeting client financial expectations.'
      ]
    },
    {
      id: 'quality-control',
      title: 'Quality Control Inspector',
      icon: <User className="h-6 w-6 text-reno-accent" />,
      description: [
        'Ensures that all construction work meets industry standards and building codes.',
        'Inspects finished work to ensure it is up to par before moving on to the next phase.'
      ]
    },
    {
      id: 'contract-administrator',
      title: 'Contract Administrator',
      icon: <FileText className="h-6 w-6 text-reno-accent" />,
      description: [
        'Reviews contracts, manages the legal aspects of the project, and ensures that all terms and conditions are followed.',
        'Resolves disputes between parties and ensures compliance with contract terms.'
      ]
    },
    {
      id: 'customer-service',
      title: 'Customer Service/Client Liaison',
      icon: <User className="h-6 w-6 text-reno-accent" />,
      description: [
        'Acts as the main point of contact for clients.',
        'Handles concerns, updates, and client satisfaction during the construction process.'
      ]
    },
    {
      id: 'sustainability-consultant',
      title: 'Sustainability/Green Building Consultant',
      icon: <Globe className="h-6 w-6 text-reno-accent" />,
      description: [
        'Ensures that the project follows environmentally sustainable practices.',
        'Works with the design and construction teams to achieve certifications like LEED (Leadership in Energy and Environmental Design).'
      ]
    },
  ];

  return (
    <PageLayout>
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-reno-800 mb-4">Join Our Team</h1>
          <p className="text-xl text-reno-600">
            Discover exciting career opportunities with 1 Week Remodel. We're looking for talented individuals to help us transform houses into dream homes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-reno-accent" />
            <h2 className="text-2xl font-bold text-reno-800">Career Opportunities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerPositions.map((position) => (
              <Card key={position.id} className="border-2 hover:border-reno-accent transition-colors">
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
            ))}
          </div>
        </div>

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
      </div>
    </PageLayout>
  );
};

export default Careers;
