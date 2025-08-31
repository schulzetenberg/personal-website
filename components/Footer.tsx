'use client';

import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-footer elegant-color text-center pb-4 pt-32">
      <div className="container mx-auto px-4 pb-5">
        <div className="flex flex-wrap">
          <div className="w-full px-4 text-center">
            <h1 className="h1 text-4xl md:text-5xl color-main font-light mb-8" style={{ transform: 'scaleY(1.25)' }}>
              Get In Touch
            </h1>
          </div>
        </div>
      </div>

      <div className="text-center pb-24">
        <SocialLinks size="medium" className="justify-center gap-8" />
      </div>

      <div className="container mx-auto max-w-full text-center grey-text mt-5 mb-1">
        <small>© Copyright {currentYear} Jacob Schulzetenberg</small>
      </div>
    </footer>
  );
};
