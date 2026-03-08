'use client';

import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--color-bg)] text-white pt-24 pb-8 border-t-8 border-[var(--color-black)] pattern-dots">
      <div className="container mx-auto px-4 z-10 relative">
        {/* Massive Footer CTA */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2
            className="text-6xl md:text-[8rem] lg:text-[12rem] font-bold mb-8 heading-display leading-none tracking-tighter uppercase text-[var(--color-white)]"
            style={{ textShadow: '6px 6px 0px var(--color-pink), 12px 12px 0px var(--color-cyan)' }}
          >
            Let&apos;s <br className="md:hidden" />
            Talk
          </h2>

          <div className="mb-16 scale-150 transform transition-transform hover:scale-[1.6]">
            <SocialLinks size="large" className="text-white hover:text-[var(--color-yellow)]" />
          </div>
        </div>

        {/* Memphis Footer Details */}
        <div className="border-t-4 border-[var(--color-black)] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white font-sans font-bold uppercase tracking-widest text-sm bg-black/50 p-2 memphis-border">
            © {currentYear} Jacob Schulzetenberg
          </div>

          <div className="text-[var(--color-black)] font-sans font-bold uppercase tracking-widest text-sm bg-[var(--color-yellow)] px-4 py-2 memphis-border memphis-shadow-pink transform rotate-2">
            Thanks for visiting
          </div>
        </div>
      </div>
    </footer>
  );
};
