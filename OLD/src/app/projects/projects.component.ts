import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id: 1,
      title: 'MN Date Night',
      url: 'https://mndatenight.com',
      description:
        'A comprehensive date planning platform. Discover curated date ideas, local attractions, and seasonal activities to create memorable experiences together. Features location-based recommendations and detailed guides for the perfect Minnesota date.',
      // image: '/assets/img/mndatenight.png', // Add screenshot here
      technologies: ['Next.js (React)', 'Tailwind CSS', 'PostgreSQL (Supabase)', 'Serverless (Cloudflare)'],
      features: ['Modern responsive design', 'Server side rendered', 'SEO optimized', 'Built with AI'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  trackByTech(index: number, tech: string): string {
    return tech;
  }

  trackByFeature(index: number, feature: string): string {
    return feature;
  }
}
