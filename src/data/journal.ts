export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    id: 'art-of-tactile-home',
    slug: 'the-tactile-home',
    title: 'The Tactile Home: Living with Raw Linens, Travertine, and Untreated Woods',
    date: 'February 2026',
    readTime: '6 min read',
    category: 'Materiality & Craft',
    excerpt: 'Why synthetic perfection leaves us restless, and how unvarnished natural textures calm the nervous system through sensory grounding.',
    image: '/images/hero.jpg',
    author: {
      name: 'Ananya Varma',
      role: 'Principal & Creative Director'
    },
    content: [
      'In an era dominated by smooth, frictionless digital glass screens, our physical sanctuaries must serve as sensory counterweights. When everything in the world feels untouchable, synthetic, and ephemeral, human beings instinctively crave weight, texture, and natural resistance.',
      'At Verdé & Form, we design homes through the fingers as much as through the eyes. We ask: What does the door handle feel like when you return home after dusk? How does the floor beneath your bare feet respond on a humid monsoon morning? What happens when a shaft of 4 PM sunlight grazes the open pores of a Roman travertine mantelpiece?',
      'Untreated materials possess what Japanese philosophy terms "shibui"—a subtle, unobtrusive beauty that reveals itself only over prolonged familiarity. Unlike polyurethane coatings that artificially seal wood beneath an impermeable plastic film, natural hard-wax oils allow the grain of European oak to breathe. When you touch it, you are touching wood, not synthetic lacquer.',
      'Likewise, unbleached Belgian linen hangs with an organic weight that no synthetic polyester can emulate. Its slubs and gentle folds scatter direct sunlight into a soft, cathedral-like glow. The home becomes not a showpiece to be guarded against scuffs, but an intimate living canvas that grows richer with every passing year.'
    ]
  },
  {
    id: 'designing-natural-light-courtyards',
    slug: 'designing-with-natural-light',
    title: 'Designing with Natural Light: How Courtyard Architecture Moderates Tropical Climates',
    date: 'January 2026',
    readTime: '8 min read',
    category: 'Spatial Architecture',
    excerpt: 'An inquiry into how internal skywells, deep overhangs, and water courtyards create cool, serene microclimates in contemporary Indian homes.',
    image: '/images/courtyard.jpg',
    author: {
      name: 'Karan Mehra',
      role: 'Associate Director of Architecture'
    },
    content: [
      'For centuries, vernacular architecture across the Indian subcontinent understood a fundamental truth: sunlight is both a divine blessing and a thermal adversary. The traditional courtyard house—whether the Havelis of Rajasthan, the Nalukettu of Kerala, or the Thotti Mane of Karnataka—did not treat the outside world as something to be sealed off behind air-conditioned glass curtains.',
      'Instead, they carved out a microclimate at the very heart of the dwelling. When hot air rises during midday, an open central courtyard creates a natural low-pressure chimney effect, drawing cooler air through shaded perimeter verandas and water channels.',
      'In our contemporary residential projects, such as The Willow Residence and The Courtyard House, we re-interpret these passive thermodynamic principles with modern engineering. By pairing double-glazed operable clerestory vents with shallow reflecting pools, we reduce the need for daytime mechanical air conditioning by upwards of 35%.',
      'More than energy efficiency, however, is the psychological comfort. To look across your dining table and see rain cascading into an internal garden while sitting in acoustic calm is one of the deepest luxuries modern architecture can grant.'
    ]
  },
  {
    id: 'wabi-sabi-modern-indian-homes',
    slug: 'wabi-sabi-modern-residences',
    title: 'The Art of Wabi-Sabi in Modern Residences: Embracing Imperfection and Patina',
    date: 'December 2025',
    readTime: '5 min read',
    category: 'Design Philosophy',
    excerpt: 'Rejecting sterile showroom perfection in favor of materials that celebrate the passage of time, touch, and historical vernacular.',
    image: '/images/casa-terra.jpg',
    author: {
      name: 'Devin D’Souza',
      role: 'Lead Interior Architect'
    },
    content: [
      'The modern luxury interior industry has long been obsessed with the illusion of permanent youth: high-gloss lacquers that must never be scratched, pristine white carpets that forbid red wine, and metallic coatings that must never tarnish. But living in such an environment is inherently stressful; the home owner becomes an anxious museum curator of their own life.',
      'Wabi-sabi offers an liberating alternative: finding beauty in that which is imperfect, impermanent, and incomplete. When we source hand-quarried laterite stone for Casa Terra in Goa, we celebrate its uneven fissures and mineral variations. It is an architecture that welcomes the monsoon rains, allowing moss and lichen to gently trace the lower plinth.',
      'Similarly, when we specify unlacquered solid brass hardware, we know that within eighteen months, the oils from family hands will darken the edges into deep, burnished bronze. This is not damage—it is evidence of a life being lived, of laughter in the kitchen, of doors opened to welcome old friends.',
      'A home designed with Verdé & Form is not finished on the day of the photo shoot. In many ways, that is merely the beginning of its true character.'
    ]
  }
];
