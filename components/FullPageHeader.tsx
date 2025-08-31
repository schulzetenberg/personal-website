import Image from 'next/image';
import { SocialLinks } from './SocialLinks';

export const FullPageHeader = () => {
  return (
    <header>
      <nav className="z-10 absolute top-0 left-0 right-0 flex flex-wrap items-center content-between py-3 px-4">
        <div className="flex flex-row mx-auto order-2 lg:order-3">
          <SocialLinks className="text-white" />
        </div>
      </nav>

      <div className="view">
        <div className="full-bg-img">
          <div className="mask blue-light flex-center animate-entrance">
            <div className="container mx-auto px-4 text-white text-center">
              <Image
                id="headshot"
                className="inline mb-5 rounded-full object-cover profile-image"
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
                }}
              />
              <h1 className="pb-2 text-4xl md:text-5xl font-light">
                <div>I am Jacob Schulzetenberg</div>
              </h1>
              <h2 className="text-xl md:text-2xl font-light text-blue-100">
                <div>
                  A software engineer with an interest in <br />
                  web development, analytics, and finance
                </div>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
