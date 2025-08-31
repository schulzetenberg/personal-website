'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { InstagramData, InstagramImage } from '@/types/instagram';

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
      <div className="flex flex-wrap mt-4 mb-1">
        <div className="relative flex-grow max-w-full flex-1 px-4">
          <p className="text-center">
            <span className="text-2xl mb-5 block">Loading Instagram feed...</span>
          </p>
        </div>
      </div>
    );
  }

  if (error || !instagramData || instagramData.images.length === 0) {
    return (
      <div className="flex flex-wrap mt-4 mb-1">
        <div className="relative flex-grow max-w-full flex-1 px-4">
          <p className="text-center">
            <a
              className="font-light text-3xl md:text-4xl mb-8 block hover:text-pink-600 transition-all duration-300 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent group"
              href="https://instagram.com/schulzetenberg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-3">
                INSTA
                <i className="fab fa-instagram text-pink-500 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
                GRAM
              </span>
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap mt-4 mb-1">
        <div className="relative flex-grow max-w-full flex-1 px-4">
          <p className="text-center">
            <a
              className="font-light text-3xl md:text-4xl mb-8 block hover:text-pink-600 transition-all duration-300 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent group"
              href="https://instagram.com/schulzetenberg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-3">
                INSTA
                <i className="fab fa-instagram text-pink-500 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
                GRAM
              </span>
            </a>
          </p>
        </div>
      </div>

      <div className="container max-w-screen-lg mx-auto px-4 pb-12">
        <div className="flex flex-wrap row-centered mx-3 mb-5 instafeed">
          {instagramData.images.map((image: InstagramImage) => (
            <div key={image.imgUrl} className="w-1/4 md:w-1/6 px-2 my-3">
              <a href={image.postUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  className="h-auto rounded transition-all duration-300 ease-in-out hover:shadow-mat-lg shadow-mat hover:saturate-150 w-full"
                  src={image.imgUrl}
                  alt={`Instagram post: ${image.caption}`}
                  title={image.caption}
                  width={200}
                  height={200}
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
