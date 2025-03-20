
import React from 'react';
import { Briefcase, HardHat, FileText, Wrench, Users, User, Globe } from 'lucide-react';

export interface CareerPosition {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string[];
  fullDescription?: string;
  responsibilities?: string[];
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
    ],
    fullDescription: 'The Project Manager is responsible for overseeing the entire construction project from start to finish. This role involves managing the project\'s budget, schedule, and scope while coordinating efforts between various stakeholders, including subcontractors, clients, and the internal team. The Project Manager ensures the project stays on track, meets quality standards, and complies with all safety regulations.',
    responsibilities: [
      'Lead and manage construction projects from initiation to completion.',
      'Develop and maintain project schedules, budgets, and resources.',
      'Coordinate with clients, subcontractors, vendors, and internal teams.',
      'Ensure compliance with safety regulations and quality standards.',
      'Track project progress and prepare regular reports for stakeholders.'
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
    ],
    fullDescription: 'The Construction Superintendent oversees the day-to-day activities on the construction site. This role is critical in ensuring that the work is completed on time, within budget, and according to specifications. The superintendent coordinates subcontractors, workers, and materials to maintain a smooth workflow and ensure safety standards are met.',
    responsibilities: [
      'Supervise and manage construction workers and subcontractors.',
      'Ensure that construction activities comply with project plans and specifications.',
      'Enforce safety policies and ensure a safe working environment.',
      'Address on-site issues and provide solutions.',
      'Monitor project timelines and provide updates to the Project Manager.'
    ]
  },
  {
    id: 'estimator',
    title: 'Estimator',
    icon: <FileText className="h-6 w-6 text-reno-accent" />,
    description: [
      'Analyzes blueprints and project specifications to provide cost estimates for materials, labor, and equipment.',
      'Prepares bids and proposals for new projects.'
    ],
    fullDescription: 'The Estimator is responsible for evaluating project specifications, drawings, and other documents to create accurate cost estimates for labor, materials, and equipment. They prepare bids for new projects and work with the Project Manager to ensure projects stay within budget.',
    responsibilities: [
      'Review project blueprints, specifications, and other documents to estimate costs.',
      'Prepare detailed and accurate cost estimates for materials, labor, and equipment.',
      'Develop and submit proposals and bids for potential clients.',
      'Coordinate with vendors and subcontractors to gather pricing information.',
      'Track project costs and monitor budget adherence.'
    ]
  },
  {
    id: 'field-engineer',
    title: 'Field Engineer',
    icon: <Wrench className="h-6 w-6 text-reno-accent" />,
    description: [
      'Works on-site to provide technical support and ensure that construction activities comply with design specifications.',
      'Solves engineering issues that arise during construction.'
    ],
    fullDescription: 'The Field Engineer provides technical support on-site to ensure that construction activities adhere to design specifications and engineering requirements. They solve problems that arise during construction and provide guidance to ensure quality control and efficiency.',
    responsibilities: [
      'Provide technical guidance and support to construction teams.',
      'Ensure compliance with design specifications and engineering standards.',
      'Assist with resolving construction and technical issues on-site.',
      'Coordinate with the Project Manager and Superintendent to monitor progress.',
      'Conduct quality assurance and inspections.'
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
    ],
    fullDescription: 'The Safety Manager ensures that all construction activities comply with safety regulations and industry best practices. They are responsible for identifying potential hazards, conducting safety training, and implementing safety policies to ensure a safe working environment for all personnel on-site.',
    responsibilities: [
      'Develop and implement site-specific safety programs and policies.',
      'Conduct regular safety audits and inspections.',
      'Provide training to workers and subcontractors on safety procedures.',
      'Investigate and report accidents and incidents on-site.',
      'Ensure compliance with OSHA regulations and other safety standards.'
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
    ],
    fullDescription: 'The Foreman supervises specific trade or labor crews on the construction site. They ensure that work is performed according to plans, within budget, and on schedule. Foremen provide guidance to workers, enforce safety protocols, and report on-site issues to the Superintendent.',
    responsibilities: [
      'Supervise and manage workers on the construction site.',
      'Ensure that work is completed according to blueprints and specifications.',
      'Maintain productivity and efficiency on-site.',
      'Enforce safety protocols and monitor workers for compliance.',
      'Communicate issues and progress to the Construction Superintendent.'
    ]
  },
  {
    id: 'skilled-laborers',
    title: 'Skilled Laborers/Tradespeople',
    icon: <Users className="h-6 w-6 text-reno-accent" />,
    description: [
      'Includes carpenters, electricians, plumbers, masons, and other specialized tradespeople.',
      'These workers perform the physical labor and tasks according to project needs.'
    ],
    fullDescription: 'Skilled Laborers and Tradespeople, such as carpenters, electricians, plumbers, and masons, perform specialized tasks on construction sites. They are responsible for executing trade-specific tasks, following safety guidelines, and ensuring high-quality work.',
    responsibilities: [
      'Perform specialized tasks according to the project\'s needs (e.g., framing, electrical work, plumbing).',
      'Ensure work complies with safety standards and building codes.',
      'Maintain tools and equipment in good working condition.',
      'Work efficiently to meet project deadlines and quality standards.',
      'Collaborate with other trades and construction teams on-site.'
    ]
  },
  {
    id: 'construction-administrator',
    title: 'Construction Administrator',
    icon: <FileText className="h-6 w-6 text-reno-accent" />,
    description: [
      'Handles paperwork, permits, contracts, and other administrative tasks.',
      'Manages project schedules, invoicing, and client communication.'
    ],
    fullDescription: 'The Construction Administrator handles the administrative side of construction projects. They are responsible for managing contracts, scheduling, documentation, and communication with clients, vendors, and subcontractors. This role ensures that all project documentation is organized and up to date.',
    responsibilities: [
      'Manage contracts, project schedules, and procurement processes.',
      'Ensure that all project documentation is accurate and organized.',
      'Assist in processing invoices, change orders, and permits.',
      'Communicate with clients and stakeholders about project status.',
      'Provide administrative support to the Project Manager and team.'
    ]
  },
  {
    id: 'procurement-manager',
    title: 'Procurement Manager',
    icon: <Globe className="h-6 w-6 text-reno-accent" />,
    description: [
      'Sources and purchases materials, tools, and equipment for construction projects.',
      'Negotiates with suppliers to get the best pricing and delivery schedules.'
    ],
    fullDescription: 'The Procurement Manager is responsible for sourcing and purchasing materials, tools, and equipment for construction projects. They negotiate with suppliers, manage inventory, and ensure that materials are delivered on time and within budget.',
    responsibilities: [
      'Source and purchase construction materials, tools, and equipment.',
      'Negotiate pricing and terms with suppliers and vendors.',
      'Monitor and maintain inventory levels to ensure the project is adequately stocked.',
      'Track delivery schedules and ensure timely arrival of materials.',
      'Maintain accurate records of procurement transactions.'
    ]
  },
  {
    id: 'design-architecture',
    title: 'Design and Architecture Team',
    icon: <Wrench className="h-6 w-6 text-reno-accent" />,
    description: [
      'Works with the general contractor to ensure the design and architecture are in alignment with the project\'s goals and budget.',
      'May work as part of an external design firm or in-house team.'
    ],
    fullDescription: 'The Design and Architecture Team is responsible for creating the design plans and architectural drawings for construction projects. They collaborate with clients, engineers, and the construction team to develop functional, aesthetically pleasing, and structurally sound designs.',
    responsibilities: [
      'Develop design concepts and architectural drawings for construction projects.',
      'Work closely with clients to ensure design vision and requirements are met.',
      'Collaborate with engineers and construction teams to resolve design issues.',
      'Ensure designs comply with building codes and regulations.',
      'Review and update plans as necessary during the construction process.'
    ]
  },
  {
    id: 'accounting-finance',
    title: 'Accounting and Finance Staff',
    icon: <FileText className="h-6 w-6 text-reno-accent" />,
    description: [
      'Manages project budgets, invoices, and financial reporting.',
      'Works to ensure that the company maintains profitability while meeting client financial expectations.'
    ],
    fullDescription: 'The Accounting and Finance Staff manages the financial aspects of construction projects. They oversee budgets, track expenses, process invoices, and ensure that financial records are accurate and up-to-date.',
    responsibilities: [
      'Manage project budgets and track expenses.',
      'Process invoices and ensure timely payments to subcontractors and suppliers.',
      'Prepare financial reports and forecasts for stakeholders.',
      'Ensure compliance with tax regulations and financial reporting standards.',
      'Monitor cash flow to ensure that projects remain financially viable.'
    ]
  },
  {
    id: 'quality-control',
    title: 'Quality Control Inspector',
    icon: <User className="h-6 w-6 text-reno-accent" />,
    description: [
      'Ensures that all construction work meets industry standards and building codes.',
      'Inspects finished work to ensure it is up to par before moving on to the next phase.'
    ],
    fullDescription: 'The Quality Control Inspector ensures that all work performed on the construction site meets the required standards and specifications. They inspect the construction work, materials, and finished products to ensure quality and compliance with project guidelines.',
    responsibilities: [
      'Inspect construction work to ensure it meets quality standards and project specifications.',
      'Identify and report defects or discrepancies in work quality.',
      'Work with contractors and workers to resolve quality issues.',
      'Conduct final inspections before project handover.',
      'Maintain documentation of inspections and findings.'
    ]
  },
  {
    id: 'contract-administrator',
    title: 'Contract Administrator',
    icon: <FileText className="h-6 w-6 text-reno-accent" />,
    description: [
      'Reviews contracts, manages the legal aspects of the project, and ensures that all terms and conditions are followed.',
      'Resolves disputes between parties and ensures compliance with contract terms.'
    ],
    fullDescription: 'The Contract Administrator is responsible for reviewing, managing, and enforcing all contracts related to construction projects. This role ensures that all terms and conditions are met and resolves any contract disputes that may arise.',
    responsibilities: [
      'Review and negotiate contracts with clients, subcontractors, and vendors.',
      'Ensure compliance with contract terms and conditions throughout the project.',
      'Resolve disputes and manage contract modifications or changes.',
      'Maintain accurate and organized contract documentation.',
      'Work closely with legal and financial teams to ensure contract compliance.'
    ]
  },
  {
    id: 'customer-service',
    title: 'Customer Service/Client Liaison',
    icon: <User className="h-6 w-6 text-reno-accent" />,
    description: [
      'Acts as the main point of contact for clients.',
      'Handles concerns, updates, and client satisfaction during the construction process.'
    ],
    fullDescription: 'The Customer Service/Client Liaison serves as the primary point of contact for clients throughout the construction process. They address client concerns, provide updates, and ensure that the client is satisfied with the project\'s progress and outcome.',
    responsibilities: [
      'Serve as the main point of contact for clients throughout the project.',
      'Provide regular updates on project progress and milestones.',
      'Address and resolve client concerns or issues.',
      'Ensure client satisfaction by delivering high-quality work on schedule.',
      'Collaborate with the project team to ensure client expectations are met.'
    ]
  },
  {
    id: 'sustainability-consultant',
    title: 'Sustainability/Green Building Consultant',
    icon: <Globe className="h-6 w-6 text-reno-accent" />,
    description: [
      'Ensures that the project follows environmentally sustainable practices.',
      'Works with the design and construction teams to achieve certifications like LEED (Leadership in Energy and Environmental Design).'
    ],
    fullDescription: 'The Sustainability/Green Building Consultant ensures that the construction project adheres to environmentally sustainable practices. They work with the design and construction teams to implement green building strategies and achieve certifications like LEED.',
    responsibilities: [
      'Develop and implement sustainable construction practices and strategies.',
      'Ensure that the project meets environmental and energy efficiency standards.',
      'Advise the project team on green building materials and techniques.',
      'Assist with obtaining environmental certifications such as LEED.',
      'Monitor the environmental impact of the project and suggest improvements.'
    ]
  },
];
