import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'MN Date Night',
    url: 'https://mndatenight.com',
    description:
      'A comprehensive date planning platform. Discover curated date ideas, local attractions, and seasonal activities to create memorable experiences together. Features location-based recommendations and detailed guides for the perfect Minnesota date.',
    // image: '/mndatenight.png',
    technologies: ['Next.js (React)', 'Tailwind CSS', 'PostgreSQL (Supabase)', 'Serverless (Cloudflare)'],
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
