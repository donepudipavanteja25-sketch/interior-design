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
}

export const servicesData: Service[] = [
  {
    id: 'interior-architecture',
    number: '01',
    title: 'Interior Architecture & Spatial Planning',
    tagline: 'Sculpting the bones of your sanctuary before a single piece of furniture arrives.',
    description: 'We re-examine spatial flows, volumetric proportions, structural opportunities, and natural daylight orientation. From moving load-bearing partitions to sculpting bespoke architectural staircases and recessed ceiling light pockets, we craft the core canvas of your home.',
    scope: [
      'Comprehensive 2D Spatial Layouts & Micro-Zoning',
      'Structural Wall Reconfiguration & Civil Coordination',
      'Lighting Architecture & Reflected Ceiling Plans (RCP)',
      'MEP (Mechanical, Electrical, Plumbing) Coordination',
      'Custom Staircases & Architectural Portal Detailing'
    ],
    deliverables: [
      'Full technical architectural drawing set',
      'Civil & structural tender documents',
      'Daylight & solar angle simulation diagrams',
      'On-site milestone coordination audits'
    ],
    idealFor: 'New residential builds, bare-shell villas, and gut renovations requiring structural transformation.',
    timeline: '8 – 16 Weeks'
  },
  {
    id: 'full-scope-interior-design',
    number: '02',
    title: 'Full-Scope Interior Design',
    tagline: 'A harmonious orchestration of materiality, joinery, and custom living environments.',
    description: 'Our signature end-to-end design discipline. We translate your lifestyle into tactile materiality, custom architectural millwork, bespoke bathrooms, gourmet kitchens, and timeless living spaces tailored to your daily rituals.',
    scope: [
      'Bespoke Millwork, Wardrobe & Kitchen Cabinetry Design',
      'Tactile Material Curation (Natural Stone, Timbers, Plasters)',
      'High-Fidelity 3D Photorealistic Renderings',
      'Sanitaryware, Hardware & Fixture Specification',
      'Comprehensive Material Finishes Schedules & BoQs'
    ],
    deliverables: [
      'Physical tactile material & finish presentation box',
      'Millwork fabrication shop drawings (1:20 & 1:5 details)',
      'Complete itemized Bill of Quantities (BoQ)',
      'Procurement oversight & vendor management'
    ],
    idealFor: 'Homeowners seeking a completely cohesive, turn-key designer residence from concept to completion.',
    timeline: '16 – 28 Weeks'
  },
  {
    id: 'bespoke-furniture-curation',
    number: '03',
    title: 'Bespoke Furniture & Lighting Curation',
    tagline: 'Artisanal furniture, vintage collectors pieces, and custom commissioned lighting.',
    description: 'We believe furniture should be heirloom-grade art. We design one-of-a-kind dining tables, sculptured coffee tables, and tailored upholstery with master craftsmen, while sourcing rare vintage European design icons and sculptural lighting fixtures worldwide.',
    scope: [
      'Custom Furniture Design & Prototyping',
      'Exclusive Fabric & Textile Sourcing (Linen, Mohair, Bouclé)',
      'Sculptural Lighting Selection & Dimming Architecture',
      'International Freight, Customs & White-Glove Logistics',
      'Artisanal Rug & Handwoven Carpet Commissioning'
    ],
    deliverables: [
      'Curated Furniture & Lighting FF&E Master Book',
      'Bespoke workshop prototype approvals & wood finish samples',
      'Comprehensive procurement budget matrix',
      'White-glove uncrating, placement, and installation supervision'
    ],
    idealFor: 'Discerning clients wishing to curate unique heirloom furnishings, collector pieces, and tactile textiles.',
    timeline: '10 – 18 Weeks'
  },
  {
    id: 'heritage-renovation',
    number: '04',
    title: 'Heritage Renovation & Adaptive Reuse',
    tagline: 'Honoring historical architecture while instilling modern ease and acoustic serenity.',
    description: 'We have a deep reverence for old homes, ancestral bungalows, and historical structures. We carefully preserve weathered lime washes, hand-carved pillars, and original stonework while quietly integrating concealed smart infrastructure, acoustic double glazing, and modern climate conditioning.',
    scope: [
      'Architectural Historical Documentation & Condition Audits',
      'Vernacular Material Conservation (Lime, Laterite, Teak)',
      'Discrete Smart Home & Hidden HVAC Integration',
      'Moisture Remediation & Traditional Plaster Restoration',
      'Courtyard Microclimate & Passive Cooling Re-activation'
    ],
    deliverables: [
      'Historical preservation strategy report',
      'Restoration specifications for artisan masons and carpenters',
      'Adaptive reuse modernization architectural plans',
      'Before & After archival documentation portfolio'
    ],
    idealFor: 'Historic villas in Goa, ancestral bungalows in Bangalore/Hyderabad, and legacy urban properties.',
    timeline: '20 – 36 Weeks'
  },
  {
    id: 'styling-art-advisory',
    number: '05',
    title: 'Turnkey Styling & Art Advisory',
    tagline: 'The final, poetic layer that transforms architecture into an evocative home.',
    description: 'The difference between a finished space and an alive home is the art, the ceramics, the botanicals, and the personal ephemera. Our styling team hand-selects contemporary Indian and international fine art, ceramic vessels, vintage books, and custom botanical arrangements.',
    scope: [
      'Contemporary Art Curation & Gallery Acquisitions',
      'Studio Ceramic, Stoneware & Sculptural Vessel Selection',
      'Tactile Bedding, Table Linens & Hand-Bound Library Styling',
      'Biophilic Botanical Planting & Terracotta Planter Styling',
      'Final Reveal Staging with Curated Scent & Lighting Moods'
    ],
    deliverables: [
      'Curated Art & Object Acquisition Portfolio with provenance',
      'Final placement map and hanging elevations',
      'Artisanal floral and living botanical curation guide',
      'White-glove Turnkey Welcome Evening reveal'
    ],
    idealFor: 'Completed residences needing the ultimate refined editorial layer of art, objects, and atmosphere.',
    timeline: '4 – 8 Weeks'
  }
];
