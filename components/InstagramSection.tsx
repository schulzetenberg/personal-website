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
      <section className="relative bg-[#F4F4F0] border-b-4 border-black py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-black font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-3">
            <i className="fa-solid fa-spinner fa-spin text-[#FF4500]"></i> Fetching Feed...
          </p>
        </div>
      </section>
    );
  }

  if (error || !instagramData || instagramData.images.length === 0) {
    return (
      <section className="relative bg-[#F4F4F0] border-b-4 border-black py-20">
        <div className="container mx-auto px-4 text-center">
          <a
            className="inline-block group"
            href="https://instagram.com/schulzetenberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="neo-card px-8 py-6 flex items-center gap-4 bg-white"
              whileHover={{ x: -4, y: -4, boxShadow: '12px 12px 0px #0F0F0F' }}
            >
              <i className="fab fa-instagram text-[#FF4500] transform md:translate-y-1" />
              <span className="text-2xl font-bold heading-display text-black tracking-widest uppercase">INSTAGRAM</span>
            </motion.div>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[#F4F4F0] border-b-4 border-black py-24 bg-memphis-waves">
      <div className="absolute inset-0 bg-[#F4F4F0] opacity-80 pointer-events-none" />
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-black pb-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold heading-display text-black flex items-center gap-4 uppercase tracking-tighter">
              <i className="fab fa-instagram text-[#FF4500] transform md:translate-y-1" />
              Instagram
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 md:mt-0"
          >
            <a
              className="neo-button"
              href="https://instagram.com/schulzetenberg"
              target="_blank"
              rel="noopener noreferrer"
            >
              @schulzetenberg
            </a>
          </motion.div>
        </div>

        <motion.div
          className="neo-card bg-white p-4 md:p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {instagramData.images.slice(0, 8).map((image: InstagramImage, index: number) => (
              <motion.div
                key={image.imgUrl}
                className="relative aspect-square border-4 border-black overflow-hidden bg-black"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: index * 0.05 }}
              >
                <div className="block w-full h-full">
                  <Image
                    className="object-cover w-full h-full filter grayscale"
                    src={image.imgUrl}
                    alt={`Instagram post`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
