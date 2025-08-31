export const env = {
  INSTAGRAM_API_URL: process.env.INSTAGRAM_API_URL || 'https://data.schulzetenberg.com/api',
  INSTAGRAM_API_TOKEN: process.env.INSTAGRAM_API_TOKEN || '62d180d0bf93044fa913bbeb96c108dc',
  GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NODE_ENV: process.env.NODE_ENV || 'development',
} as const;
