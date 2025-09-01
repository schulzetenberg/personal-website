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
              className="object-cover object-top"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Project Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 heading-display">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition-colors duration-300 quirk-underline"
                >
                  <span className="text-gradient pr-2">{project.title}</span>
                </a>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">{project.description}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>{feature}</span>
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
      <div className="container max-w-6xl mx-auto px-4 pb-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 heading-display text-gradient">
            Things I&apos;ve Built
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection of projects that showcase my passion for creating
            <span className="font-semibold text-indigo-600"> meaningful digital experiences</span>
          </p>
        </div>
      </div>

      <div className="container max-w-screen-lg mx-auto px-4 pb-4">
        <div className="flex flex-wrap justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
