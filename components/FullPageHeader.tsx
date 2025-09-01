import Image from 'next/image';
import { SocialLinks } from './SocialLinks';

export const FullPageHeader = () => {
  return (
    <header>
      <nav className="z-10 absolute top-0 left-0 right-0 flex flex-wrap items-center content-between py-3 px-4">
        <div className="flex flex-row mx-auto order-2 lg:order-3">
          <SocialLinks className="text-white drop-shadow-lg" />
        </div>
      </nav>

      <div className="view">
        <div className="full-bg-img">
          <div className="mask mask-ink flex-center">
            <div className="container mx-auto px-4 text-white text-center animate-entrance">
              <div className="relative inline-block mb-8">
                <Image
                  id="headshot"
                  className="inline rounded-full object-cover profile-image"
                  src="/profile-cartoon-crop.jpg"
                  alt="Jacob Schulzetenberg headshot"
                  width={250}
                  height={250}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  style={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '125px',
                    filter: 'drop-shadow(0 6px 20px rgba(2, 6, 23, 0.35))',
                  }}
                />
              </div>

              <h1 className="pb-6">
                <div className="mb-4 text-3xl md:text-4xl font-light text-indigo-100">Hello, I&apos;m</div>
                <div className="text-5xl md:text-6xl heading-display text-white font-extrabold tracking-wide">
                  Jacob <span className="ml-3"></span> Schulzetenberg
                </div>
              </h1>

              <h2 className="text-base md:text-lg subhead-text text-indigo-50 max-w-2xl mx-auto leading-relaxed">
                <span className="inline-block rounded-lg px-4 py-2">
                  A full-stack software engineer with a passion for web development, analytics, and finance
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
