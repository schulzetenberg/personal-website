# Personal Website

Portfolio site for [schulzetenberg.com](https://schulzetenberg.com), built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and deployed to Cloudflare Workers through OpenNext.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- OpenNext for Cloudflare
- Wrangler for preview and deployment

## What Is In This Repo

- `app/`: App Router pages, metadata, sitemap, robots rules, and the Instagram API route
- `components/`: homepage sections and shared UI
- `lib/`: environment helpers and project data
- `public/`: static assets
- `docs/`: project notes and redesign plans
- `OLD/`: archived code from the previous version of the site

The homepage is assembled from a small set of sections:

- header
- about
- skills
- projects
- Instagram
- footer

## Requirements

- Node.js 20.9 or newer
- npm

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file if you want to override the defaults used in `lib/env.ts`:

   ```bash
   touch .env.local
   ```

3. Add any values you need:

   ```bash
   INSTAGRAM_API_URL=https://data.schulzetenberg.com/api
   INSTAGRAM_API_TOKEN=your-token
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev`: start the local Next.js dev server (Turbopack is the default in Next.js 16)
- `npm run build`: create a production build
- `npm run start`: serve the production build locally
- `npm run lint`: run ESLint
- `npm run lint:fix`: run ESLint with automatic fixes
- `npm run format`: format the repo with Prettier
- `npm run format:check`: check formatting without changing files
- `npm run preview`: build the Cloudflare worker and run the OpenNext preview flow
- `npm run deploy`: build and deploy to Cloudflare Workers
- `npm run cf-typegen`: regenerate `cloudflare-env.d.ts` from Wrangler

## Environment Variables

The site reads its runtime configuration from `lib/env.ts`.

- `INSTAGRAM_API_URL`: base URL for the Instagram data service
- `INSTAGRAM_API_TOKEN`: token sent to the Instagram data service
- `NEXT_PUBLIC_GA_ID`: Google Analytics measurement ID

If these values are not set, the app currently falls back to defaults defined in code. For production, prefer configuring them explicitly through `.env.local` and Cloudflare secrets or vars.

## Deployment

This project is set up for Cloudflare Workers using OpenNext.

Basic flow:

1. Build the worker bundle:

   ```bash
   npm run preview
   ```

2. Deploy it:

   ```bash
   npm run deploy
   ```

The deployment config lives in `wrangler.jsonc` and `open-next.config.ts`.
