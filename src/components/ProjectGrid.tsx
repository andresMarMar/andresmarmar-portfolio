export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  role?: string;
}

interface ProjectGridProps {
  projects: ProjectItem[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-50 mb-12">Proyectos Destacados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col bg-slate-800 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-50 mb-1">{project.title}</h3>
              {project.role && (
                <div className="text-sm font-semibold text-sky-400 mb-3">{project.role}</div>
              )}
              <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-semibold bg-slate-900 text-sky-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-slate-50 hover:text-sky-400 transition-colors"
                >
                  Ver en producción
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
