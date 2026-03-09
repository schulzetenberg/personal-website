'use client';

import Image from 'next/image';
import { projects } from '@/lib/projects';
import { Project } from '@/types/project';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      className="w-full lg:w-10/12 px-4 mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="neo-card flex flex-col md:flex-row group bg-[#F4F4F0]">
        {/* Project Image Panel */}
        <div className="relative w-full md:w-5/12 h-64 md:h-auto border-b-4 md:border-b-0 md:border-r-4 border-black overflow-hidden bg-black">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="text-center">
                <i className={`${project.icon || 'fa fa-code'} text-7xl text-[#FF4500]`} />
              </div>
            </div>
          )}
          {/* Brutalist overlay on hover */}
          <div className="absolute inset-0 bg-[#FF4500] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        </div>

        {/* Project Content Panel */}
        <div className="w-full md:w-7/12 p-8 flex flex-col bg-white">
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-4 heading-display text-black uppercase">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF4500] transition-colors"
              >
                {project.title}
                <i className="fa-solid fa-arrow-right ml-3 transform -rotate-45" />
              </a>
            </h3>

            <p className="text-black text-lg mb-8 font-medium border-l-4 border-black pl-4">{project.description}</p>
          </div>

          <div className="mt-auto">
            <h4 className="text-black font-mono font-bold uppercase tracking-widest text-sm mb-3">Stack:</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border-2 border-black px-2 py-1 text-xs font-mono font-bold bg-white text-black"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="text-black font-mono font-bold uppercase tracking-widest text-sm mb-3">Notes:</h4>
            <ul className="space-y-1">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start text-black text-sm font-medium">
                  <span className="text-[#FF4500] mr-2 text-lg leading-none">►</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative bg-white border-b-4 border-black overflow-hidden py-16 bg-memphis-stripes"
    >
      <div className="absolute inset-0 bg-white opacity-80 pointer-events-none z-0" />
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-16 border-b-4 border-black pb-8 relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold heading-display text-black uppercase tracking-tighter">
          Selected Works <span className="text-[#FF4500]">{'///'}</span>
        </h2>
      </div>

      <div className="container max-w-screen-lg mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
