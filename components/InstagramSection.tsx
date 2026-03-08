'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { InstagramData, InstagramImage } from '@/types/instagram';
import { motion } from 'framer-motion';

export const InstagramSection = () => {
  const [instagramData, setInstagramData] = useState<InstagramData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await fetch('/api/instagram');
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram data');
        }
        const data: InstagramData = await response.json();
        setInstagramData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramData();
  }, []);

  if (loading) {
    return (
      <section className="relative bg-transparent py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[var(--color-primary)] font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-3">
            <i className="fa-solid fa-spinner fa-spin text-[var(--color-accent)]"></i> Fetching Feed...
          </p>
        </div>
      </section>
    );
  }

  if (error || !instagramData || instagramData.images.length === 0) {
    return (
      <section className="relative bg-transparent py-20 pattern-dots">
        <div className="container mx-auto px-4 text-center">
          <a
            className="inline-block group"
            href="https://instagram.com/schulzetenberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="memphis-card px-8 py-6 flex items-center gap-4 bg-white"
              whileHover={{ scale: 1.05 }}
            >
              <i className="fab fa-instagram text-4xl text-[var(--color-pink)]" />
              <span className="text-2xl font-bold heading-display text-[var(--color-black)] tracking-widest uppercase">
                INSTAGRAM
              </span>
            </motion.div>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-transparent py-24 pattern-grid">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-[var(--color-cyan)] p-4 memphis-border memphis-shadow-pink transform -rotate-2 inline-block">
              <h2 className="text-5xl md:text-7xl font-bold heading-display text-[var(--color-black)] flex items-center gap-4 uppercase tracking-tighter">
                <i className="fab fa-instagram text-[var(--color-pink)] drop-shadow-[2px_2px_0_#000]" />
                Life & Lens
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8 md:mt-0"
          >
            <a
              className="memphis-button yellow"
              href="https://instagram.com/schulzetenberg"
              target="_blank"
              rel="noopener noreferrer"
            >
              @schulzetenberg
            </a>
          </motion.div>
        </div>

        <motion.div
          className="bg-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {instagramData.images.slice(0, 8).map((image: InstagramImage, index: number) => {
              // Explicit string literals for Tailwind JIT scanning
              const rotations = ['rotate-2', '-rotate-2', 'rotate-3', '-rotate-3', 'rotate-1', '-rotate-1'];
              const rotationClass = rotations[index % rotations.length];

              return (
                <motion.div
                  key={image.imgUrl}
                  className={`relative bg-white p-3 pb-12 border-4 border-[var(--color-black)] memphis-shadow group transform ${rotationClass} hover:rotate-0 transition-transform duration-300 z-10 hover:z-20`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: index * 0.05 }}
                >
                  <div className="relative aspect-square border-2 border-[var(--color-black)] overflow-hidden w-full bg-[var(--color-pink)]">
                    <Image
                      className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      src={image.imgUrl}
                      alt={`Instagram post`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
