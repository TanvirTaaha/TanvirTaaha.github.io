import { Project } from '@/types';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-8 px-4 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-[var(--accent)] text-xs uppercase tracking-wider mb-1">My Portfolio</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">Featured Projects</h2>
        </div>

        <div className="space-y-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-all duration-200 group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Thumbnail Image - Left Side */}
                <div className="relative w-full md:w-48 h-48 bg-[var(--bg-secondary)] flex-shrink-0 flex items-center justify-center p-4 overflow-hidden">
                  {project.imageUrl && project.imageUrl.trim() !== '' ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <svg className="w-16 h-16 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                </div>

                {/* Content - Right Side */}
                <div className="flex-1 p-4">
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-row items-center gap-4 mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded text-xs border border-[var(--border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1.5 bg-[var(--accent)] text-white rounded hover:bg-[var(--accent-hover)] transition-all duration-200 text-xs font-medium"
                        >
                          GitHub
                        </a>
                      )}
                      {project.pdfUrl && (
                        <a
                          href={project.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1.5 bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] rounded hover:bg-[var(--hover-bg)] hover:border-[var(--accent)] transition-all duration-200 text-xs font-medium"
                        >
                          PDF
                        </a>
                      )}
                      {project.presentationPdfUrl && (
                        <a
                          href={project.presentationPdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1.5 bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] rounded hover:bg-[var(--hover-bg)] hover:border-[var(--accent)] transition-all duration-200 text-xs font-medium"
                        >
                          Presentation
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

