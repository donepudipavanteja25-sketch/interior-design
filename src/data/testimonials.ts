export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole?: string;
  projectTitle: string;
  location: string;
  year: string;
  image?: string;
}

export interface PressMention {
  publication: string;
  acclaim: string;
  quote: string;
  issue: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Vriksha delivered our dream home exactly as we envisioned. The design, quality and attention to detail were exceptional.',
    clientName: 'Ramesh Kumar',
    clientRole: 'Home Owner',
    projectTitle: 'Modern Villa',
    location: 'Hyderabad',
    year: '2024',
    image: '/images/hero_hillside_infinity_villa.jpg'
  },
  {
    id: 'test-2',
    quote: 'The team was professional, creative and delivered our office project on time. Highly recommended!',
    clientName: 'Priya S',
    clientRole: 'Business Owner',
    projectTitle: 'Corporate Office',
    location: 'Hyderabad',
    year: '2024',
    image: '/images/project_corporate_office.jpg'
  },
  {
    id: 'test-3',
    quote: 'Our home interiors turned out beautiful. Their design sense and execution are top-notch.',
    clientName: 'Anil Verma',
    clientRole: 'Apartment Owner',
    projectTitle: 'Luxury Apartment',
    location: 'Hyderabad',
    year: '2024',
    image: '/images/project_penthouse_luxury.jpg'
  }
];

export const pressMentions: PressMention[] = [
  {
    publication: 'Construction World',
    acclaim: 'Excellence in Sustainable Building & Shuttering',
    quote: 'Vriksha sets the benchmark in Hyderabad with precision MS Box & PVC formwork and climate-responsive engineering.',
    issue: 'Infrastructure Review'
  },
  {
    publication: 'Architectural Heritage',
    acclaim: 'Top Turnkey Residential & Commercial Studio',
    quote: 'A rare contractor-designer practice combining structural mastery with bespoke interior luxury under one accountable team.',
    issue: 'Annual Design Issue'
  },
  {
    publication: 'Telangana Real Estate & Architecture',
    acclaim: 'Best Contemporary Villa Construction',
    quote: 'End-to-end reliability from soil testing and shuttering to custom millwork and handover.',
    issue: 'Excellence Awards'
  },
  {
    publication: 'Green Building Council Digest',
    acclaim: 'Pioneer in Sustainable Base Build',
    quote: 'Championing passive solar planning, material efficiency, and low-waste execution across Telangana.',
    issue: 'Sustainability Spotlight'
  }
];
