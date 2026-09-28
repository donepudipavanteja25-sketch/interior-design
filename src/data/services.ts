export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  scope: string[];
  deliverables: string[];
  idealFor: string;
  timeline: string;
  image?: string;
}

export const servicesData: Service[] = [
  {
    id: 'residential-construction',
    number: '01',
    title: 'Residential Construction',
    tagline: 'Custom architectural villas and enduring residences built for generations.',
    description: 'We build high-performance custom homes and contemporary villas that combine structural integrity, bioclimatic design, and turnkey craftsmanship. From soil feasibility and foundation to structural glazing and final finishes, our engineering team manages every milestone with strict accountability.',
    scope: [
      'Custom Architectural Villas & Independent Residences',
      'Structural Engineering, Soil Feasibility & Foundation Work',
      'Bioclimatic Orientation & Energy-Efficient Planning',
      'High-Grade Glazing, Fenestration & Waterproofing Systems',
      'Turnkey Civil, Structural, Plumbing & Electrical Execution'
    ],
    deliverables: [
      'Comprehensive structural blueprints and architectural drawings',
      'Certified material test reports (cement, steel, concrete cubes)',
      'Milestone-based progress schedules with digital site reports',
      'Comprehensive structural warranty and as-built documentation'
    ],
    idealFor: 'Families and investors planning custom villas, independent luxury homes, and premium residential properties in Hyderabad.',
    timeline: '8 – 16 Months',
    image: '/images/service_residential.jpg'
  },
  {
    id: 'commercial-construction',
    number: '02',
    title: 'Commercial Construction',
    tagline: 'Modern corporate headquarters, retail facilities and high-traffic commercial spaces.',
    description: 'Delivering robust, scalable commercial buildings engineered for productivity, energy efficiency, and long-term durability. We specialize in structural steel, high-performance curtain walls, MEP systems, and LEED / IGBC-compliant green building practices.',
    scope: [
      'Corporate Headquarters, Retail Complexes & Office Towers',
      'Structural Steel Frameworks & Advanced Curtain Wall Facades',
      'Comprehensive MEP, HVAC & Certified Fire Safety Coordination',
      'Green Building Compliance (LEED & IGBC Standards)',
      'Flexible Open-Span Spatial Planning & Acoustic Treatments'
    ],
    deliverables: [
      'Structural design calculations & municipal approval drawings',
      'MEP integration master plans and fire safety NOC files',
      'Quality assurance audit dossiers and safety compliance logs',
      'Complete occupancy certification assistance and facility handover'
    ],
    idealFor: 'Enterprises, developers, and institutional clients seeking high-spec commercial spaces and office facilities.',
    timeline: '12 – 24 Months',
    image: '/images/service_commercial_facade.jpg'
  },
  {
    id: 'interior-design',
    number: '03',
    title: 'Interior Design',
    tagline: 'Bespoke living environments shaped by tactile materiality and acoustic serenity.',
    description: 'From concept to turnkey delivery, we curate luxurious, highly functional interiors. We design custom architectural millwork, bespoke cabinetry, layered architectural lighting, and select premium materials that resonate with your personal rituals.',
    scope: [
      'Complete Interior Space Planning & Micro-Zoning',
      'Custom Architectural Cabinetry, Wardrobes & Kitchen Millwork',
      'Layered Architectural Lighting Design & Scene Automation',
      'Premium Material Curation (Natural Stone, Timbers, Plasters)',
      'Acoustic Planning, Bespoke Furniture & Soft Furnishing Curation'
    ],
    deliverables: [
      'High-fidelity 3D photorealistic visualization package',
      'Detailed millwork fabrication shop drawings (1:20 & 1:5 scale)',
      'Itemized Bill of Quantities (BoQ) with brand specifications',
      'Full white-glove site installation and styling supervision'
    ],
    idealFor: 'Homeowners, penthouses, luxury apartments, and corporate offices desiring bespoke, turn-key interior atmospheres.',
    timeline: '8 – 16 Weeks',
    image: '/images/service_interior_design.jpg'
  },
  {
    id: 'renovation-remodeling',
    number: '04',
    title: 'Renovation & Remodeling',
    tagline: 'Transforming existing structures into modern, energy-efficient spaces.',
    description: 'We revitalize aging homes, commercial units, and villas with structural reinforcement, upgraded MEP infrastructure, facade modernization, and open-plan transformations—executed with strict dust, noise, and safety controls.',
    scope: [
      'Load-Bearing Wall Alterations & Structural Reinforcement',
      'Floor-Plan Reconfigurations & Modern Open-Plan Layouts',
      'Complete Facade Modernization & Exterior Weatherproofing',
      'Comprehensive MEP Upgrades (Plumbing, Electrical, HVAC)',
      'Active Dust Containment, Debris Removal & Site Safety Protocols'
    ],
    deliverables: [
      'Structural condition audit and feasibility assessment',
      'As-built vs. Proposed architectural modification layouts',
      'Phase-wise demolition and reconstruction timetable',
      'Refurbished structural warranty and post-renovation documentation'
    ],
    idealFor: 'Owners of existing villas, penthouses, and commercial spaces seeking modern aesthetics and structural upgrades.',
    timeline: '6 – 18 Weeks',
    image: '/images/service_renovation.jpg'
  }
];
