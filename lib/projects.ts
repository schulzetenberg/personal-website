import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 3,
    title: 'Aldi Gold',
    url: 'https://aldigold.com',
    description:
      'An independent Aldi product review platform where shoppers can quickly search products or scan barcodes to get trusted, community-driven feedback before buying.',
    icon: 'fa-solid fa-cart-shopping',
    technologies: ['Next.js (React)', 'TypeScript', 'Tailwind CSS', 'tRPC', 'Drizzle ORM + PostgreSQL', 'Clerk Auth'],
    features: ['Fast product lookup with barcode scanning', 'Community ratings and recent shopper reviews'],
  },
  {
    id: 1,
    title: 'MN Date Night',
    url: 'https://mndatenight.com',
    description:
      'A comprehensive date planning platform. Discover curated date ideas, local attractions, and seasonal activities to create memorable experiences together. Features location-based recommendations and detailed guides for the perfect Minnesota date.',
    icon: 'fa-solid fa-heart',
    // image: '/mndatenight.png',
    technologies: ['Next.js (React)', 'TypeScript', 'Tailwind CSS', 'PostgreSQL (Supabase)', 'Serverless (Cloudflare)'],
    features: ['Modern responsive design', 'Server side rendered', 'SEO optimized'],
  },
  {
    id: 2,
    title: 'Spotify Sync',
    url: 'https://spotifysync.com',
    description:
      'A music synchronization platform that enhances your Spotify experience. Seamlessly sync playlists, discover new music, de-duplicate and archive tracks, and create the perfect soundtrack.',
    icon: 'fa fa-music',
    backgroundColor: 'bg-gradient-to-br from-green-500 to-green-600',
    titleColor: 'bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent',
    technologies: [
      'Next.js (React)',
      'Tailwind CSS',
      'Spotify API',
      'PostgreSQL (Supabase)',
      'Serverless (Cloudflare)',
    ],
    features: ['Modern responsive design'],
  },
];
