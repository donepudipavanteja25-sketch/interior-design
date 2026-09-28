export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Interior Design' | 'Renovation';
  year: string;
  area: string;
  leadArchitect: string;
  description: string;
  architecturalPhilosophy: string;
  materials: string[];
  features: string[];
  image: string;
  secondaryImage?: string;
  aspectClass?: string;
  clientStory: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 'modern-villa',
    number: '01',
    title: 'Modern Villa',
    subtitle: 'A contemporary luxury residence sculpted with cantilevered concrete and infinity horizons.',
    location: 'Hyderabad, Telangana',
    category: 'Residential',
    year: '2024',
    area: '8,500 sq.ft',
    leadArchitect: 'Vriksha Architectural Team',
    description: 'A striking contemporary villa combining expansive structural glazing, cantilevered concrete overhangs, and climate-responsive natural daylighting. Built using high-precision MS Box shuttering, the villa integrates rainwater harvesting, greywater recycling, and lush landscaped buffer zones for optimal thermal comfort.',
    architecturalPhilosophy: 'Sustainable engineering meeting architectural poetry. Large overhangs shield the interiors from harsh Hyderabad summer heat while floor-to-ceiling glass captures prevailing cross-breezes and sweeping skyline views.',
    materials: [
      'Engineered MS Box Shuttering Concrete',
      'Structural Double-Glazed Low-E Glass',
      'Italian Statuario Marble Surfaces',
      'Thermal-Treated Weather-Resistant Teak',
      'Permeable Stone Paving & Rainwater Trenches'
    ],
    features: [
      'Cantilevered concrete living pavilion with infinity edge pool',
      'Complete rainwater harvesting & greywater bio-filtration',
      'Bioclimatic daylight orientation reducing artificial lighting',
      'Integrated smart automation & concealed architectural lighting'
    ],
    image: '/images/hero_hillside_infinity_villa.jpg',
    secondaryImage: '/images/hero_modern_villa.jpg',
    aspectClass: 'span-col-2 span-row-2',
    clientStory: {
      quote: 'Vriksha delivered our dream home exactly as we envisioned. The design, quality and attention to detail were exceptional.',
      author: 'Ramesh Kumar',
      role: 'Home Owner, Modern Villa'
    }
  },
  {
    id: 'corporate-office',
    number: '02',
    title: 'Corporate Office',
    subtitle: 'High-performance commercial headquarters designed for collaborative productivity.',
    location: 'Hitec City, Hyderabad',
    category: 'Commercial',
    year: '2024',
    area: '34,000 sq.ft',
    leadArchitect: 'Vriksha Commercial Infrastructure Division',
    description: 'An iconic corporate headquarters featuring an advanced steel exoskeleton and a high-performance blue glass curtain wall. Designed around open, flexible office planning, the building incorporates a rooftop solar photovoltaic array, acoustic double glazing, and LEED-oriented energy systems.',
    architecturalPhilosophy: 'Productivity driven by bioclimatic intelligence. Maximizing natural light penetration through high-performance fenestration while minimizing solar heat gain through optimized building orientation and automated shading.',
    materials: [
      'Structural High-Strength Steel Exoskeleton',
      'Blue Performance Acoustic Curtain Wall',
      'Precast Concrete & PVC Shuttering Slabs',
      'Low-VOC Acoustic Ceiling & Wall Panels',
      'High-Efficiency Rooftop Photovoltaic Modules'
    ],
    features: [
      'Flexible open-span collaborative workspaces and breakout lounges',
      'Rooftop solar photovoltaic array providing 35% building power',
      'Acoustic glazing delivering 42dB noise attenuation',
      'Integrated BMS controlling HVAC, lighting and indoor air quality'
    ],
    image: '/images/project_corporate_office.jpg',
    secondaryImage: '/images/hero_commercial_foundation.jpg',
    aspectClass: 'span-col-1 span-row-2',
    clientStory: {
      quote: 'The team was professional, creative and delivered our office project on time. Highly recommended!',
      author: 'Priya S',
      role: 'Business Owner, Corporate Office'
    }
  },
  {
    id: 'luxury-apartment',
    number: '03',
    title: 'Luxury Apartment',
    subtitle: 'A high-rise penthouse sanctuary with panoramic glass and bespoke craftsmanship.',
    location: 'Jubilee Hills, Hyderabad',
    category: 'Interior Design',
    year: '2024',
    area: '5,400 sq.ft',
    leadArchitect: 'Vriksha Interior Design Studio',
    description: 'A luxurious duplex penthouse showcasing panoramic floor-to-ceiling glass, serene muted blue and ivory tones, book-matched Italian marble, and bespoke millwork. Every piece of furniture and architectural lighting fixture was custom designed to deliver understated elegance and acoustic calm.',
    architecturalPhilosophy: 'Atmosphere shaped by tactile luxury and restraint. The spatial narrative balances expansive panoramic views of Hyderabad with warm, intimate zones for contemplation, reading, and entertaining.',
    materials: [
      'Book-Matched Calacatta Gold Marble',
      'Acoustic Engineered Oak Timber Flooring',
      'Handcrafted Fluted Wall Paneling',
      'Muted Sea-Blue Architectural Textiles',
      'Custom Architectural Brass Hardware'
    ],
    features: [
      'Panoramic 360-degree city views with motorized sheer drapery',
      'Bespoke architectural cabinetry and hidden walk-in master suite',
      'Acoustic wall isolation ensuring quiet urban retreat',
      'Multi-scene architectural lighting with brass accent fixtures'
    ],
    image: '/images/project_penthouse_luxury.jpg',
    secondaryImage: '/images/service_interior_design.jpg',
    aspectClass: 'span-col-1 span-row-1',
    clientStory: {
      quote: 'Our home interiors turned out beautiful. Their design sense and execution are top-notch.',
      author: 'Anil Verma',
      role: 'Apartment Owner, Luxury Apartment'
    }
  }
];
