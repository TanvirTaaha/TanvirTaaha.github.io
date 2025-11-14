import Image from 'next/image';
import { ExtracurricularActivity } from '@/types';

interface ExtracurricularActivitiesProps {
  activities: ExtracurricularActivity[];
}

export default function ExtracurricularActivities({ activities }: ExtracurricularActivitiesProps) {
  return (
    <section id="extracurricular" className="py-8 px-4 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-[var(--accent)] text-xs uppercase tracking-wider mb-1">My Activities</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">Extracurricular Activities</h2>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-all duration-200"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Large Thumbnail - Left (or top on mobile) */}
                {activity.imageUrl && (
                  <div className="lg:w-1/3 w-full h-64 lg:h-auto relative bg-[var(--bg-secondary)]">
                    <Image
                      src={activity.imageUrl}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                {/* Details - Right (or bottom on mobile) */}
                <div className={`flex-1 p-4 ${activity.imageUrl ? 'lg:p-6' : 'p-4'}`}>
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-[var(--accent)] text-sm mb-1">{activity.role}</p>
                    <p className="text-xs text-[var(--text-muted)] mb-2">
                      {activity.organization}
                      {activity.location && ` • ${activity.location}`}
                      {activity.period && ` • ${activity.period}`}
                    </p>
                    {activity.technologies && activity.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {activity.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded text-xs border border-[var(--border)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {activity.description && (
                    <div className="text-[var(--text-secondary)] text-sm leading-relaxed mb-2">
                      <p>{activity.description}</p>
                    </div>
                  )}
                  {activity.achievements && activity.achievements.length > 0 && (
                    <div className="text-[var(--text-secondary)] text-sm leading-relaxed space-y-1">
                      {activity.achievements.map((achievement, idx) => (
                        <p key={idx} className="flex items-start gap-2">
                          <span className="text-[var(--accent)] mt-0.5 text-xs">•</span>
                          <span>{achievement}</span>
                        </p>
                      ))}
                    </div>
                  )}
                  {activity.link && (
                    <div className="mt-3">
                      <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1.5 bg-[var(--accent)] text-white rounded hover:bg-[var(--accent-hover)] transition-all duration-200 text-xs font-medium"
                      >
                        Learn More
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

