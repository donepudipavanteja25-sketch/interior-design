export interface MaterialItem {
  id: string;
  name: string;
  origin: string;
  category: string;
  sensoryQuality: string;
  description: string;
  application: string;
  image: string;
  patinaNote: string;
}

export interface PhilosophyPillar {
  number: string;
  title: string;
  lead: string;
  description: string;
}

export const philosophyPillars: PhilosophyPillar[] = [
  {
    number: '01',
    title: 'Natural Materiality',
    lead: 'We choose raw, unvarnished materials that possess soul, texture, and an inherent ability to age with grace.',
    description: 'Travertine, untreated oak, hand-troweled lime plaster, and pure linen do not deteriorate over time—they gather memory. By omitting superficial synthetics, our spaces deepen in beauty the longer you dwell within them.'
  },
  {
    number: '02',
    title: 'Architectural Proportion',
    lead: 'Calm is not merely an absence of noise; it is the presence of balanced geometry and considered spatial volume.',
    description: 'We prioritize sightlines, generous ceiling planes, natural air circulation, and intuitive movement transitions. When the architectural bones are harmonious, furniture can be sparse and meaningful.'
  },
  {
    number: '03',
    title: 'The Poetry of Light',
    lead: 'Sunlight is our primary building material. We sculpt openings to capture morning softness and afternoon warmth.',
    description: 'Through deep overhangs, clerestory openings, and floor-to-ceiling glass softened by linen drapery, we treat shadow as an equal partner to illumination, crafting atmospheres that shift gently from sunrise to nightfall.'
  },
  {
    number: '04',
    title: 'Intentional Living',
    lead: 'We design against the ephemeral frenzy of fleeting trends, creating sanctuaries that honor everyday human rituals.',
    description: 'From a sunlit corner designed for a slow morning espresso to a sunken living pavilion engineered for unhurried evening conversations, every Verdé & Form interior is anchored in genuine human presence.'
  }
];

export const materialsData: MaterialItem[] = [
  {
    id: 'travertine',
    name: 'Roman Travertine',
    origin: 'Tivoli, Italy & Deccan Valleys',
    category: 'Natural Sedimentary Stone',
    sensoryQuality: 'Cool, softly porous, matte tactile warmth',
    description: 'Honed with open or softly filled cavities, travertine is a timeless sedimentary limestone formed by geothermal springs. Its natural strata carry geological eons, offering an organic architectural anchor for hearths, vanities, and monolithic coffee tables.',
    application: 'Full-height wall cladding, custom sculpted bathroom vanities, cantilevered benches, and monolithic floor tiles.',
    image: '/images/material-travertine.jpg',
    patinaNote: 'Develops a velvety soft sheen and deepens subtly in hue when exposed to gentle indoor ambient light.'
  },
  {
    id: 'oak',
    name: 'Fluted European White Oak',
    origin: 'Sustainably Managed Alpine Forests',
    category: 'Hardwood Joinery',
    sensoryQuality: 'Velvety ribbed grain, warm acoustic resonance',
    description: 'Milled into delicate vertical flutes and finished with a non-toxic natural matte hard-wax oil. The vertical texture casts microscopic linear shadows, softening the acoustic echo of open-plan living rooms while lending tactile warmth.',
    application: 'Architectural wall partitions, credenza facades, library millwork, and concealed pivot doors.',
    image: '/images/material-oak.jpg',
    patinaNote: 'Ages into an amber-tinged honey hue, revealing the organic beauty of medullary rays.'
  },
  {
    id: 'linen',
    name: 'Belgian Raw Flax Linen',
    origin: 'Flanders, Belgium',
    category: 'Pure Botanical Textile',
    sensoryQuality: 'Airy, slubbed organic drape, breathable tactile softness',
    description: 'Woven from unbleached European flax fibers without chemical sizing or artificial softeners. Hanging in generous full-height drapery, raw linen gently filters harsh tropical sunlight into a golden, cinematic ambient glow.',
    application: 'Double-fullness floor-to-ceiling drapery, sofa slipcovers, hand-tufted accent pillows, and fabric wall paneling.',
    image: '/images/visual-break.jpg',
    patinaNote: 'Softens with each seasonal dry wash, developing natural, graceful rumples that evoke effortless relaxed elegance.'
  },
  {
    id: 'lime-plaster',
    name: 'Tadelakt & Hydraulic Lime',
    origin: 'Rajasthan & Assagao Studios',
    category: 'Natural Breathable Render',
    sensoryQuality: 'Chalky matte, mineral-rich, organic clouding',
    description: 'Slaked lime mixed with marble dust and earth pigments, hand-troweled onto masonry walls. Unlike synthetic acrylic paints that trap moisture, hydraulic lime allows walls to breathe naturally while reflecting light with a subtle, cloudy depth.',
    application: 'Continuous curved walls, bathroom wet zones, arched thresholds, and sculpted fireplace surrounds.',
    image: '/images/casa-terra.jpg',
    patinaNote: 'Carbonates over decades, literally turning back into limestone on your walls.'
  },
  {
    id: 'bronze',
    name: 'Hand-Patinated Bronze & Brass',
    origin: 'Artisanal Metal Forges, Alwar',
    category: 'Living Architectural Metals',
    sensoryQuality: 'Weighty, burnished metallic coolness with tactile warmth',
    description: 'Untreated bronze and solid brass hardware hand-finished with natural sulfur waxes. Left free of synthetic lacquers, these architectural fixtures celebrate the touch of the human hand.',
    application: 'Custom door pulls, low-voltage pendant lighting arms, flush cabinet finger grooves, and fireplace surrounds.',
    image: '/images/stone-sage.jpg',
    patinaNote: 'Slowly oxidizes into a rich, deep chocolate umber along touchpoints, telling the physical story of the home.'
  }
];
