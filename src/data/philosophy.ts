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
    title: 'Passive Design',
    lead: 'Orientation, shading and daylight planning that reduce heat gain and dependence on artificial lighting.',
    description: 'We align residential and commercial envelopes to catch Hyderabad breeze corridors while utilizing cantilevered eaves and vertical louvers to block peak afternoon thermal spikes, cutting operational HVAC costs naturally.'
  },
  {
    number: '02',
    title: 'Water Responsibility',
    lead: 'Rainwater harvesting, low-flow fixtures and practical provisions for greywater reuse where the project allows.',
    description: 'Every project incorporates calculated recharge pits, percolation trenches, high-efficiency sanitary fixtures, and dedicated plumbing dual-lines to maximize localized water resilience across seasons.'
  },
  {
    number: '03',
    title: 'Material Efficiency',
    lead: 'Accurate quantity planning, reusable shuttering and lower-waste procurement throughout the construction cycle.',
    description: 'Our proprietary MS Box and PVC shuttering systems eliminate timber logging waste and formwork warping, generating cleaner structural concrete lines while drastically lowering site debris.'
  },
  {
    number: '04',
    title: 'Healthier Spaces',
    lead: 'Cross ventilation, low-VOC finishes and material choices that support comfortable indoor environments.',
    description: 'We curate zero-VOC paints, formaldehyde-free certified plywood, natural lime plasters, and acoustic fenestration that preserve indoor air quality and mental serenity for occupants.'
  }
];

export const materialsData: MaterialItem[] = [
  {
    id: 'shuttering-systems',
    name: 'Precision Formwork (MS Box & PVC)',
    origin: 'Vriksha Engineering Yard, Hyderabad',
    category: 'High-Tolerance Structural Formwork',
    sensoryQuality: 'Laser-straight edges, silky smooth concrete surfaces',
    description: 'Modular steel box panels and high-density waterproof PVC shuttering boards that replace single-use timber formwork. Provides flawless dimensional accuracy and a mirror-like concrete finish.',
    application: 'Slabs, retaining walls, cantilever beams, structural columns, and monolithic casting.',
    image: '/images/shuttering_ms_box.jpg',
    patinaNote: 'Reusable across 100+ casting cycles without dimensional deviation or surface degradation.'
  },
  {
    id: 'acoustic-glass',
    name: 'High-Performance Low-E Acoustic Glass',
    origin: 'Saint-Gobain / Asahi Glass Facilities',
    category: 'Solar Control & Sound Attenuation',
    sensoryQuality: 'Ultra-clear panoramic views, silent interior comfort',
    description: 'Double-glazed structural hermetic units with microscopic metallic coatings that reflect thermal infrared radiation while allowing 78% natural visible daylight penetration.',
    application: 'Curtain walls, floor-to-ceiling villa glazing, panoramic corner windows, and skylights.',
    image: '/images/materials_details.jpg',
    patinaNote: 'Permanently vacuum-sealed with argon gas to maintain lifelong thermal insulation.'
  },
  {
    id: 'blended-cements',
    name: 'Engineered High-Grade Concrete & Slag',
    origin: 'UltraTech & Birla Certified Plants',
    category: 'Low-Carbon Structural Concrete',
    sensoryQuality: 'Monolithic strength, high compressive density',
    description: 'High-grade Portland Pozzolana Cement (PPC) and Slag blended mixes designed for optimum hydration kinetics, minimal heat of hydration, and superior crack resistance.',
    application: 'Deep pile foundations, grade beams, shear walls, and water retaining underground sumps.',
    image: '/images/hero_commercial_foundation.jpg',
    patinaNote: 'Continues gaining compressive strength over years with minimal carbonation porosity.'
  },
  {
    id: 'travertine-stone',
    name: 'Natural Travertine & Deccan Granite',
    origin: 'Tivoli & South Indian Quarries',
    category: 'Enduring Natural Masonry',
    sensoryQuality: 'Cool, tactile, earthy stone texture',
    description: 'Locally and internationally curated natural stone calibrated for flooring, feature portals, and exterior cladding. Natural thermal inertia keeps surfaces cool during tropical summers.',
    application: 'Living room floors, pool decks, cantilevered stair treads, and sculptural bathroom walls.',
    image: '/images/material-travertine.jpg',
    patinaNote: 'Gains a soft, rich luster with foot traffic and natural ambient sunlight.'
  }
];
