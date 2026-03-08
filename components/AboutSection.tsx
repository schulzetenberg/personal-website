'use client';

import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="relative pattern-zigzag pt-24 pb-20">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid md:grid-cols-12 items-stretch">
            {/* Header / Title Area */}
            <div className="md:col-span-4 bg-[var(--color-pink)] p-8 md:p-12 memphis-border memphis-shadow flex flex-col justify-center relative z-10">
              <h2
                className="text-5xl md:text-6xl heading-display text-[var(--color-white)] mb-4 transform -rotate-3"
                style={{ textShadow: '4px 4px 0px var(--color-black)' }}
              >
                About
                <br />
                Me
              </h2>
              <div className="w-16 h-4 bg-[var(--color-yellow)] mb-6 memphis-border"></div>
              <p
                className="text-[var(--color-yellow)] font-sans font-bold uppercase tracking-widest text-sm"
                style={{ textShadow: '2px 2px 0px var(--color-black)' }}
              >
                System Profile // 001
              </p>
            </div>

            {/* Content Area */}
            <div className="md:col-span-8 p-8 md:p-12 bg-[var(--color-cyan)] memphis-border memphis-shadow flex flex-col justify-center relative mt-8 md:mt-0 md:-ml-8 z-20">
              <div className="space-y-6 mb-12">
                <p className="text-xl md:text-2xl text-[var(--color-black)] leading-snug font-bold">
                  I am a software engineer focused on building high-performance, unapologetic, and intuitive user
                  experiences. My background blends web development, data analytics, and finance, allowing me to
                  approach engineering problems with both creative and analytical rigor.
                </p>
                <div className="bg-white p-6 memphis-border memphis-shadow-pink transform rotate-1">
                  <p className="text-lg text-[var(--color-black)] leading-relaxed font-sans font-bold">
                    I enjoy transforming complex systems into accessible interfaces. Whether it&apos;s crafting a stark
                    dashboard, designing robust APIs, or exploring the boundaries of modern frontend frameworks, I am
                    always seeking ways to build better software without the fluff.
                  </p>
                </div>
              </div>

              {/* Status Bar */}
              <div className="border-4 border-[var(--color-black)] bg-[var(--color-yellow)] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 memphis-shadow-pink mt-4">
                <div className="flex items-center gap-3 text-[var(--color-black)] font-sans font-bold uppercase text-sm">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full bg-[var(--color-green)] opacity-75"></span>
                    <span className="relative inline-flex h-4 w-4 bg-[var(--color-green)] border-2 border-[var(--color-black)]"></span>
                  </span>
                  <span>Status: Building cool shit</span>
                </div>

                <div className="flex items-center gap-6 text-[var(--color-black)] font-sans font-bold uppercase text-sm">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Minneapolis, MN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
