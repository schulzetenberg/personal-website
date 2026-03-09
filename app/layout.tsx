import type { Metadata } from 'next';
import { Oswald, DM_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@/components/Analytics';

const display = Oswald({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});

const mono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://schulzetenberg.com'),
  title: {
    default: 'Jacob Schulzetenberg - Software Engineer',
    template: '%s | Jacob Schulzetenberg',
  },
  description:
    'Software engineer with expertise in web development, analytics, and finance. Explore my projects and connect with me.',
  keywords: [
    'Jacob Schulzetenberg',
    'Software Engineer',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'Analytics',
    'Finance',
  ],
  authors: [{ name: 'Jacob Schulzetenberg', url: 'https://schulzetenberg.com' }],
  creator: 'Jacob Schulzetenberg',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://schulzetenberg.com',
    title: 'Jacob Schulzetenberg - Software Engineer',
    description: 'Software engineer with expertise in web development, analytics, and finance.',
    siteName: 'Jacob Schulzetenberg',
    images: [
      {
        url: '/profile-cartoon-crop.jpg',
        width: 1200,
        height: 630,
        alt: 'Jacob Schulzetenberg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Schulzetenberg - Software Engineer',
    description: 'Software engineer with expertise in web development, analytics, and finance.',
    images: ['/profile-cartoon-crop.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${mono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${mono.className} antialiased min-h-screen relative overflow-x-hidden selection:bg-[#FF4500] selection:text-white`}
      >
        {/* Noise overlay for texture */}
        <div className="bg-noise" />

        {/* Main Content Container relative to sit on top of fixed bg */}
        <div className="relative z-10 w-full">{children}</div>

        <Analytics />
      </body>
    </html>
  );
}
