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
            /* Fallback content when image is not available */
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <i className="fa fa-heart icon-jumbo opacity-80" />
                <h4 className="text-xl font-light">{project.title}</h4>
                <p className="text-sm opacity-90 mt-2">Web Application</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-purple-800/40 to-transparent" />
        </div>

        {/* Project Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-light mb-3 text-gray-800">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {project.title}
                  <i className="fa fa-external-link text-sm ml-2 opacity-70" />
                </a>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">{project.description}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-800 mb-3 uppercase tracking-wide">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full border border-blue-200 tech-tag transition-all duration-200 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-800 mb-3 uppercase tracking-wide">Key Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 feature-list">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600 relative pl-6">
                  <span className="absolute left-0 text-green-500 font-bold">✓</span>
                  {feature}
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
    <section className="projects-section" style={{ background: '#f8f9fa' }}>
      <div className="flex flex-wrap mt-4 mb-1">
        <div className="relative flex-grow max-w-full flex-1 px-4">
          <h2 className="text-center text-3xl mb-5 font-light">Recent Projects</h2>
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
