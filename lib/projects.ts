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
    features: ['Modern responsive design', 'Server side rendered', 'SEO optimized', 'Built with AI'],
  },
];
