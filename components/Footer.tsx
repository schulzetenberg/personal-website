'use client';

import { motion } from 'framer-motion';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white pt-24 pb-8 border-t-8 border-[var(--color-accent)]">
      <div className="container mx-auto px-4">
        {/* Massive Footer CTA */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2
            className="text-6xl md:text-[8rem] lg:text-[12rem] font-bold mb-8 heading-display leading-none tracking-tighter uppercase"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Let&apos;s <br className="md:hidden" />
            Talk
          </motion.h2>

          <div className="mb-16 transform transition-transform hover:scale-110">
            <SocialLinks size="large" className="text-white hover:text-[var(--color-accent)]" />
          </div>
        </div>

        {/* Brutalist Footer Details */}
        <div className="border-t-4 border-white pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white font-mono font-bold uppercase tracking-widest text-sm">
            © {currentYear} Jacob Schulzetenberg
          </div>

          <div className="text-white font-mono font-bold uppercase tracking-widest text-sm bg-[var(--color-accent)] px-3 py-1 text-black">
            Thanks for visiting
          </div>
        </div>
      </div>
    </footer>
  );
};
