import Image from 'next/image';
import { projects } from '@/lib/projects';
import { Project } from '@/types/project';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="w-full lg:w-10/12 px-4 mb-8">
      <div className="card overflow-hidden project-card">
        {/* Project Image */}
        <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 project-image">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            /* Enhanced fallback with more personality */
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center space-y-4">
                <div className="relative">
                  <i className="fa fa-heart text-6xl opacity-90 animate-pulse" />
                  <div className="absolute -top-2 -right-2 text-2xl">✨</div>
                </div>
                <h4 className="text-2xl font-semibold">{project.title}</h4>
                <p className="text-base opacity-90 px-4">Web Application</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-purple-800/40 to-transparent" />
        </div>

        {/* Project Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 hover:text-indigo-600 transition-all duration-300"
                >
                  <span>{project.title}</span>
                  <i className="fa fa-external-link text-lg opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">{project.description}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-2 rounded-full border border-indigo-200 tech-tag hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Highlights
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-start text-gray-600 font-medium bg-emerald-50 rounded-lg p-3 border border-emerald-100 hover:border-emerald-200 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Things I&apos;ve Built <span className="font-medium text-black">⚡</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            A curated collection of projects that showcase my passion for creating
            <span className="font-medium"> meaningful digital experiences</span>
          </p>
        </div>
      </div>

      <div className="container max-w-screen-lg mx-auto px-4 pb-12">
        <div className="flex flex-wrap justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
