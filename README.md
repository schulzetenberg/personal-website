# Personal Website - Next.js Version

A modern, high-performance personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS v4** for modern, responsive styling
- **Server Components** by default for better performance
- **SEO Optimized** with comprehensive metadata and structured data
- **Instagram Integration** with automatic content fetching
- **Performance Optimized** with image optimization, caching, and code splitting
- **Accessibility** compliant with WCAG guidelines
- **Responsive Design** that works on all devices

## 📁 Project Structure

```
personal-website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── instagram/     # Instagram feed integration
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Home page
│   ├── robots.txt        # SEO robots file
│   └── sitemap.ts        # Dynamic sitemap
├── components/            # Reusable React components
│   ├── Analytics.tsx     # Google Analytics integration
│   ├── Footer.tsx        # Footer component
│   ├── FullPageHeader.tsx # Hero section
│   ├── InstagramSection.tsx # Instagram feed
│   ├── ProjectsSection.tsx # Projects showcase
│   └── SocialLinks.tsx   # Social media links
├── lib/                  # Utility functions and data
│   ├── env.ts           # Environment configuration
│   └── projects.ts      # Project data
├── types/               # TypeScript type definitions
│   ├── instagram.ts     # Instagram API types
│   └── project.ts       # Project data types
└── public/              # Static assets
    ├── background.jpg   # Hero background image
    ├── profile-cartoon-crop.jpg # Profile image
    └── ...              # Other images and icons
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/schulzetenberg/personal-website.git
   cd personal-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create environment file (optional):

   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Adding Projects

Edit `lib/projects.ts` to add or modify project information:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project',
    url: 'https://yourproject.com',
    description: 'Project description...',
    image: '/project-image.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    features: ['Feature 1', 'Feature 2'],
  },
];
```

### Styling

The project uses Tailwind CSS v4 with custom theme configurations in `app/globals.css`. Modify the `@theme` section to customize colors and other design tokens.

### Instagram Integration

The Instagram section fetches data from an external API. Configure the API endpoint and authentication in:

- `lib/env.ts` - Environment configuration
- `app/api/instagram/route.ts` - API route handler

## 🚀 Deployment

This project is optimized for deployment on various platforms:

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main

### Other Platforms

The project includes a standard Next.js build output that can be deployed to:

- Netlify
- AWS Amplify
- Docker containers
- Any Node.js hosting platform

## 🔧 Performance Features

- **Image Optimization** - Next.js Image component with AVIF/WebP support
- **Code Splitting** - Automatic code splitting for optimal loading
- **Server Components** - Server-side rendering by default
- **Caching** - API responses cached for 1 hour
- **Compression** - Built-in gzip compression
- **Font Optimization** - Google Fonts with `font-display: swap`

## 📊 SEO Features

- **Metadata API** - Comprehensive metadata for all pages
- **Open Graph** - Social media preview optimization
- **Twitter Cards** - Twitter-specific metadata
- **Structured Data** - JSON-LD for better search understanding
- **Sitemap** - Dynamic sitemap generation
- **Robots.txt** - Search engine crawling instructions

## 🔒 Security

- **Content Security Policy** headers
- **HTTP Security Headers** via Next.js
- **Environment Variables** for sensitive configuration
- **No exposed API keys** in client-side code

## 📱 Browser Support

- Chrome 91+
- Firefox 90+
- Safari 14+
- Edge 91+

## 🧪 Testing

The project includes TypeScript for compile-time error checking. Add your testing framework of choice:

```bash
# Jest + React Testing Library
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Playwright for E2E testing
npm install --save-dev @playwright/test
```

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Jacob Schulzetenberg**

- Website: [schulzetenberg.com](https://schulzetenberg.com)
- LinkedIn: [linkedin.com/in/schulzetenberg](https://linkedin.com/in/schulzetenberg)
- GitHub: [github.com/schulzetenberg](https://github.com/schulzetenberg)

---

## Migration from Angular

This is a complete rewrite of the original Angular application, now built with modern web technologies:

### What Changed

- **Framework**: Angular → Next.js 15 with React
- **Styling**: SCSS → Tailwind CSS v4
- **Type Safety**: Enhanced TypeScript configuration
- **Performance**: Server Components and static generation
- **SEO**: Comprehensive metadata and Open Graph support
- **Developer Experience**: Hot reload, better tooling, simplified deployment

### What Stayed the Same

- **Design**: Maintained the original visual design and user experience
- **Content**: All projects, social links, and Instagram integration
- **Functionality**: Same features with improved performance

The old Angular code is preserved in the `OLD/` directory for reference.
