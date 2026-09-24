export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  projectTitle: string;
  location: string;
  year: string;
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
    quote: 'Verdé & Form didn’t just design our house—they changed how our entire family lives. The balance of raw concrete and warm teak creates an enduring quietness that makes returning home the most treasured part of our day.',
    clientName: 'Vikram & Priya Reddy',
    projectTitle: 'The Willow Residence',
    location: 'Hyderabad',
    year: '2025'
  },
  {
    id: 'test-2',
    quote: 'Their deep understanding of climate, vernacular laterite stone, and natural ventilation turned what could have been a standard holiday villa into a sacred tropical pavilion. Every guest who walks in is struck by the serenity.',
    clientName: 'Rohit & Natasha Mehta',
    projectTitle: 'Casa Terra',
    location: 'Assagao, Goa',
    year: '2024'
  },
  {
    id: 'test-3',
    quote: 'In a bustling city like Mumbai, having a home anchored in fluted travertine and muted sage tones is the greatest luxury imaginable. The craftsmanship in their custom millwork is unmatched.',
    clientName: 'Aaditya Singhania',
    projectTitle: 'Stone & Sage',
    location: 'Marine Drive, Mumbai',
    year: '2025'
  }
];

export const pressMentions: PressMention[] = [
  {
    publication: 'Architectural Digest',
    acclaim: 'Top 50 Architecture & Interior Studios',
    quote: 'Verdé & Form defines modern tropical minimalism—creating spaces where raw stone and sunlight converse in effortless luxury.',
    issue: 'Annual Design Issue'
  },
  {
    publication: 'Elle Décor',
    acclaim: 'Best Residential Transformation',
    quote: 'A masterclass in restraint. Their interiors whisper instead of shouting, celebrating the quiet poetry of natural materials.',
    issue: 'Design Vanguard'
  },
  {
    publication: 'Dezeen Awards',
    acclaim: 'Residential Interior of the Year Shortlist',
    quote: 'An introspective sanctuary demonstrating how vernacular South Asian architecture can inform contemporary luxury living.',
    issue: 'International Jury'
  },
  {
    publication: 'Wallpaper*',
    acclaim: 'Architectural Atelier to Watch',
    quote: 'Tactile, earthy, and uncompromisingly sophisticated. Verdé & Form crafts interiors with genuine permanence.',
    issue: 'Design Directory'
  }
];
