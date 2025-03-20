
import React from 'react';
import { Briefcase, HardHat, FileText, Wrench, Users, User, Globe } from 'lucide-react';

export interface CareerPosition {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string[];
}

export const careerPositions: CareerPosition[] = [
  {
    id: 'project-manager',
    title: 'Project Manager',
    icon: <Briefcase className="h-6 w-6 text-reno-accent" />,
    description: [
      'Oversees the entire construction project, ensuring it runs smoothly and stays on schedule.',
      'Coordinates with subcontractors, suppliers, and clients.',
      'Manages the project\'s budget and scope.'
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
      'Works with the general contractor to ensure the design and architecture are in alignment with the project\'s goals and budget.',
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
