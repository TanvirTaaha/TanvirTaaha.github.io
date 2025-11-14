import { Education as EducationType, Experience } from '@/types';

interface EducationProps {
  education: EducationType[];
  experience: Experience[];
}

export default function Education({ education, experience }: EducationProps) {
  return (
    <section id="education" className="py-8 px-4 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">My Resume</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Education Column */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">Education</h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition-all duration-200"
                >
                  <h4 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-[var(--text-secondary)] text-sm mb-1">{edu.institution}</p>
                  <p className="text-xs text-[var(--text-muted)]">{edu.location} • {edu.year}</p>
                  {edu.description && (
                    <p className="text-xs text-[var(--text-secondary)] mt-2 pt-2 border-t border-[var(--border)]">
                      {edu.description}
                    </p>
                  )}
                  {edu.thesis && (
                    <div className="mt-3 pt-3 border-t border-[var(--border)]">
                      <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">
                        Undergraduate Thesis
                      </p>
                      <h5 className="text-sm font-semibold text-[var(--text-primary)] mb-2 leading-snug">
                        {edu.thesis.title}
                      </h5>
                      {edu.thesis.description && (
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                          {edu.thesis.description}
                        </p>
                      )}
                      {edu.thesis.technologies && edu.thesis.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {edu.thesis.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded text-xs border border-[var(--border)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      {edu.thesis.supervisor && (
                        <p className="text-xs text-[var(--text-muted)] mt-2 pt-2 border-t border-[var(--border)]">
                          <span className="font-medium text-[var(--text-secondary)]">Supervisor: </span>
                          {edu.thesis.supervisor}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">Job Experience</h3>
            <div className="space-y-3">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition-all duration-200"
                >
                  <h4 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-[var(--accent)] text-sm mb-1">{exp.company}</p>
                  <p className="text-xs text-[var(--text-muted)] mb-2">{exp.location} • {exp.period}</p>
                  {exp.description && exp.description.length > 0 && (
                    <ul className="text-xs text-[var(--text-secondary)] mt-2 pt-2 border-t border-[var(--border)] space-y-1">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[var(--accent)] mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

