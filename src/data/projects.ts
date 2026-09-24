export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  location: string;
  category: 'Residential' | 'Holiday Residence' | 'Apartment' | 'Heritage Renovation';
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
    id: 'willow-residence',
    number: '01',
    title: 'THE WILLOW RESIDENCE',
    subtitle: 'A sanctuary of cast concrete, courtyard reflections, and filtered sunlight.',
    location: 'Hyderabad, India',
    category: 'Residential',
    year: '2025',
    area: '6,400 sq. ft',
    leadArchitect: 'Ananya Varma, Studio Principal',
    description: 'Designed as an antidote to urban density, The Willow Residence unfolds around a central courtyard anchored by a serene reflecting pool. Smooth board-formed concrete walls are balanced by handcrafted teak timber screens that pivot to moderate sunlight and cross-ventilation.',
    architecturalPhilosophy: 'A study in monastic calm. The architecture uses heavy thermal mass to cool the interior microclimate while allowing floor-to-ceiling glass to dissolve boundaries between the living pavilion and lush indigenous flora.',
    materials: [
      'Board-Formed Architectural Concrete',
      'Reclaimed Teak Wood Slats',
      'Honed Roman Travertine',
      'Belgian Raw Linen Drapery',
      'Hand-Spun Jute Floor Coverings'
    ],
    features: [
      'Reflective courtyard shallow pool with natural filtration',
      'Full-height operable teak privacy screens',
      'Sunken fireside conversational pit',
      'Continuous microcement floor finish across indoors and terraces'
    ],
    image: '/images/willow.jpg',
    secondaryImage: '/images/hero.jpg',
    aspectClass: 'span-col-2 span-row-2',
    clientStory: {
      quote: 'Living here feels like taking a deep breath after years of noise. Every morning the way the light filters through the teak slats onto the stone floor creates quiet moments of daily poetry.',
      author: 'Vikram & Priya Reddy',
      role: 'Private Homeowners'
    }
  },
  {
    id: 'casa-terra',
    number: '02',
    title: 'CASA TERRA',
    subtitle: 'Vernacular tropical modernism sculpted from native laterite stone and lime plaster.',
    location: 'Goa, India',
    category: 'Holiday Residence',
    year: '2024',
    area: '4,800 sq. ft',
    leadArchitect: 'Devin D’Souza, Lead Interior Architect',
    description: 'Perched amidst dense canopy in Assagao, Casa Terra explores the tactile relationship between earth and shadow. The residence centers around a sunken living lounge framed by exposed laterite masonry and hand-troweled lime plaster, opening directly to a tropical rain garden.',
    architecturalPhilosophy: 'True luxury lies in harmony with climate. We celebrated local building traditions with deep terracotta eave overhangs, natural cross-draft breezeways, and porous stone surfaces that cool the spaces without constant mechanical conditioning.',
    materials: [
      'Locally Quarried Laterite Stone',
      'Tadelakt Lime Plaster (Earthy Ivory)',
      'Terracotta Hand-Made Roof Tiles',
      'Rosewood Vintage Furniture Accents',
      'Unbleached Heavy Textured Cottons'
    ],
    features: [
      'Sculptural sunken conversation lounge',
      'Seamless pavilion indoor-outdoor threshold',
      'Monsoon courtyards with native broadleaf vegetation',
      'Handcrafted terracotta water spouts'
    ],
    image: '/images/casa-terra.jpg',
    aspectClass: 'span-col-1 span-row-2',
    clientStory: {
      quote: 'Verdé & Form captured the true spirit of Goa. It feels rooted, calm, and exquisitely crafted without a single drop of ostentation.',
      author: 'Rohit & Natasha Mehta',
      role: 'Holiday Residence Commissioners'
    }
  },
  {
    id: 'the-courtyard-house',
    number: '03',
    title: 'THE COURTYARD HOUSE',
    subtitle: 'An introspective sanctuary carved in wire-cut brick and polished Kota stone.',
    location: 'Bengaluru, India',
    category: 'Residential',
    year: '2024',
    area: '5,200 sq. ft',
    leadArchitect: 'Karan Mehra, Associate Director',
    description: 'An introspective urban home that turns inward toward a sun-washed multi-level atrium courtyard. Wire-cut clay bricks form a textured backdrop against soft sage greenery, while cool grey Kota stone slabs guide feet through unhurried living volumes.',
    architecturalPhilosophy: 'Reinterpreting the traditional South Indian Thotti Mane courtyard house for the 21st century. The central skywell acts as a natural air funnel, bathing the communal core with natural illumination all day.',
    materials: [
      'Exposed Wire-Cut Brick Masonry',
      'Grey Leather-Finish Kota Stone',
      'Sustainably Harvested Sal Wood Pillars',
      'Blackened Steel Structural Glass Roof',
      'Natural Wool & Jute Kilims'
    ],
    features: [
      'Biophilic double-height atrium with weeping fig canopy',
      'Mezzanine cantilevered reading gallery',
      'Integrated rainwater harvest reflection cistern',
      'Passive stack ventilation through roof louvers'
    ],
    image: '/images/courtyard.jpg',
    aspectClass: 'span-col-1 span-row-1',
    clientStory: {
      quote: 'Even in the heart of Bengaluru, our house feels like an ancient monastery. The courtyard brings birds, rain, and daylight directly into our everyday routine.',
      author: 'Dr. Srinivas & Malini Rao',
      role: 'Homeowners'
    }
  },
  {
    id: 'stone-and-sage',
    number: '04',
    title: 'STONE & SAGE',
    subtitle: 'A high-rise oceanfront haven balancing fluted travertine and muted botanical tones.',
    location: 'Mumbai, India',
    category: 'Apartment',
    year: '2025',
    area: '3,100 sq. ft',
    leadArchitect: 'Ananya Varma & Tanya Sen',
    description: 'Overlooking the Arabian Sea along Marine Drive, Stone & Sage elevates apartment living into a calm gallery of tactile luxury. Monumental fluted travertine marble panels contrast with muted sage velvets, brushed brass details, and soft curved bouclé lounge seating.',
    architecturalPhilosophy: 'Framing panoramic horizon views while buffering city bustle. We softened geometric urban lines through gentle organic contours, custom fluted stone millwork, and sound-absorbing acoustic linen drapes.',
    materials: [
      'Fluted Roman Travertine Marble',
      'Muted Sage Green Mohair & Velvet',
      'Brushed Champagne Brass Accents',
      'White Oak Herringbone Parquetry',
      'Italian Bouclé Upholstery'
    ],
    features: [
      'Custom floor-to-ceiling fluted stone fireplace facade',
      'Acoustic double-glazed floor-to-ceiling sea panorama',
      'Concealed architectural joinery with push-latch walnut storage',
      'Curated contemporary art collection lighting scheme'
    ],
    image: '/images/stone-sage.jpg',
    aspectClass: 'span-col-2 span-row-1',
    clientStory: {
      quote: 'When you step off the elevator and into the apartment, the entire frenzy of Mumbai simply vanishes. The muted sage and warm travertine feel restorative.',
      author: 'Aaditya & Rhea Singhania',
      role: 'Apartment Owners'
    }
  }
];
