'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const FullPageHeader = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-12 overflow-hidden pattern-dots">
      {/* Background Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--color-cyan)] rounded-full mix-blend-screen opacity-40 blur-2xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-[var(--color-pink)] mix-blend-screen opacity-40 blur-3xl rotate-45" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Typography Block */}
          <div className="lg:col-span-8 order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h1
                className="text-6xl md:text-8xl lg:text-[10rem] font-bold heading-display text-[var(--color-white)] leading-none mb-4 uppercase tracking-tighter"
                style={{ textShadow: '4px 4px 0px var(--color-pink), 8px 8px 0px var(--color-black)' }}
              >
                Jacob
                <br />
                <span
                  className="text-[var(--color-yellow)]"
                  style={{ textShadow: '4px 4px 0px var(--color-cyan), 8px 8px 0px var(--color-black)' }}
                >
                  Schulzetenberg
                </span>
              </h1>
              <div className="bg-[var(--color-pink)] text-[var(--color-black)] px-6 py-2 inline-block mb-8 transform -rotate-2 memphis-border memphis-shadow">
                <h2 className="text-xl md:text-3xl font-sans uppercase tracking-widest font-bold">Software Engineer</h2>
              </div>
              <p className="text-xl md:text-2xl text-[var(--color-white)] font-bold max-w-2xl mb-10 border-l-8 border-[var(--color-green)] pl-6 bg-black/40 p-4 memphis-border backdrop-blur-sm">
                I build digital experiences with high-contrast, bold aesthetics. Just fast, scalable, and unforgettable
                frontend interfaces.
              </p>

              <div className="flex flex-wrap gap-6 mt-4">
                <a href="#projects" className="memphis-button">
                  View Works <i className="fa-solid fa-arrow-right ml-2" />
                </a>
                <a href="mailto:contact@schulzetenberg.com" className="memphis-button cyan">
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image Block */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}
              className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96"
            >
              {/* Memphis floating abstract geometries behind image */}
              <div
                className="absolute -top-12 -left-8 w-32 h-32 bg-[var(--color-yellow)] rounded-full memphis-border memphis-shadow-pink animate-bounce"
                style={{ animationDuration: '3s', zIndex: -1 }}
              />
              <div
                className="absolute -bottom-8 -right-8 w-24 h-24 bg-[var(--color-green)] transform rotate-12 memphis-border memphis-shadow"
                style={{ zIndex: -1 }}
              />

              <div className="absolute inset-0 bg-[var(--color-cyan)] translate-x-4 translate-y-4 memphis-border" />
              <div className="relative w-full h-full bg-white overflow-hidden group memphis-border memphis-shadow">
                <Image
                  src="/profile-cartoon-crop.jpg"
                  alt="Jacob Schulzetenberg Portrait"
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1280px) 320px, 384px"
                  priority
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-transform duration-500 scale-105 group-hover:scale-100"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Removed the brutalist wavy svg */}
    </section>
  );
};
