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
    name: 'Vriksha Headquarters & Design Center',
    address: 'Road No. 36, Jubilee Hills & Hitec City Corridor',
    district: 'Hyderabad, Telangana 500033',
    phone: '+91 99893 82877',
    email: 'contact@vrikshaconstructions.com',
    hours: 'Monday – Saturday: 9:00 AM – 7:00 PM IST'
  },
  {
    city: 'Hitec City',
    name: 'Commercial & Site Operations Hub',
    address: 'Cyber Hills, Hitec City Phase II',
    district: 'Hyderabad, Telangana 500081',
    phone: '+91 99893 82877',
    email: 'inquiry@vrikshaconstructions.com',
    hours: 'Monday – Saturday: 9:00 AM – 7:00 PM IST'
  }
];

export const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    tag: 'Phase One',
    timeline: '1–2 Weeks',
    summary: 'Understand your needs, spatial requirements, budget parameters and personal vision for the project.',
    details: [
      'Client brief & lifestyle requirements mapping',
      'Topographical survey & on-site feasibility study',
      'Soil testing & structural foundation feasibility',
      'Transparent budget forecasting & timeline schedule'
    ]
  },
  {
    number: '02',
    title: 'Design & Plan',
    tag: 'Phase Two',
    timeline: '3–6 Weeks',
    summary: 'Create tailored designs and detailed plans combining aesthetics, structural engineering and sustainability.',
    details: [
      'Schematic layouts & bioclimatic orientation design',
      'High-fidelity 3D photorealistic architectural visualizations',
      'Comprehensive MEP, plumbing & electrical coordination',
      'Municipal approvals & statutory documentation'
    ]
  },
  {
    number: '03',
    title: 'Build & Execute',
    tag: 'Phase Three',
    timeline: '6–14 Months',
    summary: 'Bring your vision to life with expert execution, durable shuttering systems and daily engineering supervision.',
    details: [
      'Precision MS Box & PVC shuttering structural casting',
      'Rigorous material testing (cement, TMT steel, aggregates)',
      'Uncompromising daily site supervision & safety protocols',
      'Transparent milestone reports & weekly video progress updates'
    ]
  },
  {
    number: '04',
    title: 'Handover',
    tag: 'Phase Four',
    timeline: '2–3 Weeks',
    summary: 'Deliver a high-performing space you will love for years, backed by warranties and complete as-built documentation.',
    details: [
      'Comprehensive multi-point quality audit & snag rectification',
      'Deep professional architectural cleaning & polish',
      'As-built drawings, maintenance manuals & structural warranty',
      'Seamless turnkey possession & post-handover support'
    ]
  }
];
