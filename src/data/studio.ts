export interface StudioLocation {
  city: string;
  name: string;
  address: string;
  district: string;
  phone: string;
  email: string;
  hours: string;
}

export const studioLocations: StudioLocation[] = [
  {
    city: 'Hyderabad',
    name: 'Jubilee Hills Atelier & Material Archive',
    address: 'Plot 412, Road No. 36, Jubilee Hills',
    district: 'Hyderabad, Telangana 500033',
    phone: '+91 (40) 2980 4421',
    email: 'hyderabad@verdeform.com',
    hours: 'Mon – Fri: 10:00 AM – 6:30 PM (By Appointment)'
  },
  {
    city: 'Mumbai',
    name: 'Kala Ghoda Design Studio',
    address: '34 Forbes Street, Heritage Precinct, Kala Ghoda, Fort',
    district: 'Mumbai, Maharashtra 400001',
    phone: '+91 (22) 2284 9102',
    email: 'mumbai@verdeform.com',
    hours: 'Mon – Fri: 10:00 AM – 7:00 PM (By Appointment)'
  },
  {
    city: 'Goa',
    name: 'Assagao Design Lounge & Pavilion',
    address: 'Badem Road, Near Assagao Church',
    district: 'Assagao, North Goa 403507',
    phone: '+91 (832) 227 6590',
    email: 'goa@verdeform.com',
    hours: 'Tue – Sat: 10:30 AM – 5:30 PM (By Appointment)'
  }
];

export const processSteps = [
  {
    number: '01',
    title: 'Inquiry & Visioning',
    tag: 'Phase One',
    timeline: 'Weeks 1 – 3',
    summary: 'Listening to your lifestyle rituals, conducting structural and daylight audits of the site, and establishing the project manifesto.',
    details: [
      'Lifestyle & ritual discovery interview',
      'Solar orientation, breeze study & climate analysis',
      'Structural feasibility & spatial zoning audit',
      'Budget allocation & timeline framework'
    ]
  },
  {
    number: '02',
    title: 'Spatial Concept & Tactile Palette',
    tag: 'Phase Two',
    timeline: 'Weeks 4 – 8',
    summary: 'Sculpting volumetric layouts and curating the physical material board—natural stones, timber grains, plasters, and architectural light wells.',
    details: [
      '2D architectural space planning & circulation studies',
      'Physical material palette sample curation',
      'Reflected ceiling & architectural lighting strategy',
      'Photorealistic 3D spatial concept visualizations'
    ]
  },
  {
    number: '03',
    title: 'Materiality & Technical Documentation',
    tag: 'Phase Three',
    timeline: 'Weeks 9 – 16',
    summary: 'Translating design intent into precise millwork fabrication drawings, MEP coordinates, and comprehensive material procurement schedules.',
    details: [
      'Complete architectural working drawing package',
      'Custom joinery & millwork shop details (1:10 & 1:5 scale)',
      'Plumbing, HVAC, and discreet smart-lighting engineering',
      'Tender documentation & artisan contractor procurement'
    ]
  },
  {
    number: '04',
    title: 'Artisanal Execution & Turnkey Reveal',
    tag: 'Phase Four',
    timeline: 'Weeks 17 – Completion',
    summary: 'Hands-on site supervision, bespoke furniture prototyping, white-glove installation, and curating art, ceramics, and florals for the final handover.',
    details: [
      'Rigorous milestone site quality supervision',
      'Bespoke furniture prototyping & artisan approvals',
      'White-glove uncrating & custom placement styling',
      'Turnkey handover with private client welcome evening'
    ]
  }
];
