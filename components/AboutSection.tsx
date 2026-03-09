'use client';

import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="relative bg-white border-b-4 border-black bg-memphis-plus">
      <div className="absolute inset-0 bg-white opacity-80 pointer-events-none" />
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          className="neo-card max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid md:grid-cols-12 items-stretch">
            {/* Header / Title Area */}
            <div className="md:col-span-4 bg-[#FF4500] p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-center">
              <h2 className="text-5xl md:text-6xl heading-display text-white mb-4 transform -rotate-2">
                About
                <br />
                Me
              </h2>
              <div className="w-16 h-4 bg-black mb-6"></div>
              <p className="text-black font-mono font-bold uppercase tracking-widest text-sm">System Profile // INIT</p>
            </div>

            {/* Content Area */}
            <div className="md:col-span-8 p-8 md:p-12 bg-[#F4F4F0] flex flex-col justify-center">
              <div className="space-y-6 mb-12">
                <p className="text-xl md:text-2xl text-black leading-snug font-medium">
                  I am a Senior Full-Stack Software Engineer with 12+ years of experience specializing in the
                  JavaScript/TypeScript ecosystem (React, Node.js). I am passionate about building beautiful, accessible
                  UIs and impactful products that improve users&apos; lives.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed font-mono">
                  I have a proven ability to drive success in both dynamic startup and enterprise
                  environments—contributing to initial product launches, complex rebuilds of legacy systems, and finding
                  solutions across the whole tech stack while advocating for clean code and developer experience.
                </p>
              </div>

              {/* Status Bar */}
              <div className="border-4 border-black bg-white p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[4px_4px_0_#0F0F0F]">
                <div className="flex items-center gap-3 text-black font-mono font-bold uppercase text-sm">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full bg-[#FF4500] opacity-75"></span>
                    <span className="relative inline-flex h-4 w-4 bg-[#FF4500] border-2 border-black"></span>
                  </span>
                  <span>Status: Crafting digital experiences</span>
                </div>

                <div className="flex items-center gap-6 text-black font-mono font-bold uppercase text-sm">
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
