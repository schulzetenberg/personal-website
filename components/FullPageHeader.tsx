'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const FullPageHeader = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center border-b-4 border-black pt-20 pb-12 overflow-hidden bg-memphis-dots">
      <div className="absolute inset-0 bg-[#F4F4F0] opacity-80 pointer-events-none" />
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Typography Block */}
          <div className="lg:col-span-8 order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-7xl xl:text-[7rem] font-bold heading-display text-black leading-none mb-4 uppercase tracking-tighter">
                Jacob
                <br />
                <span className="text-[#FF4500]">Schulzetenberg</span>
              </h1>
              <div className="bg-black text-white px-4 py-2 inline-block mb-8 transform -rotate-1 shadow-[4px_4px_0_#FF4500]">
                <h2 className="text-xl md:text-3xl font-mono uppercase tracking-widest font-bold">Software Engineer</h2>
              </div>
              <p className="text-xl md:text-2xl text-black font-medium max-w-2xl mb-10 border-l-4 border-black pl-6">
                I build beautiful, accessible and impactful products.
              </p>

              <div className="flex flex-wrap gap-6 mt-4">
                <a href="#projects" className="neo-button">
                  View Works <i className="fa-solid fa-arrow-right ml-2" />
                </a>
                <a href="mailto:contact@schulzetenberg.com" className="neo-button neo-button-secondary">
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image Block */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0.9, rotate: -5 }}
              animate={{ scale: 1, rotate: 2 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}
              className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96"
            >
              <div className="absolute inset-0 bg-[#FF4500] translate-x-4 translate-y-4 border-4 border-black" />
              <div className="relative w-full h-full border-4 border-black bg-white overflow-hidden group">
                <Image
                  src="/profile-cartoon-crop.jpg"
                  alt="Jacob Schulzetenberg Portrait"
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1280px) 320px, 384px"
                  priority
                  className="object-cover filter grayscale transition-transform duration-500 scale-105 group-hover:scale-100"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative repeating stripe */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImsiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMHgtNDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgNDBMMDAgMEw0MCA0MHoiIGZpbGw9IiMwRjBGMEYiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjaykiLz48L3N2Zz4=')] opacity-20 z-10" />
    </section>
  );
};
