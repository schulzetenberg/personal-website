'use client';

import Script from 'next/script';
import { env } from '@/lib/env';

export const Analytics = () => {
  if (!env.GA_ID || env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${env.GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${env.GA_ID}');
        `}
      </Script>
    </>
  );
};
