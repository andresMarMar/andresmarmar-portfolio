interface HeroProps {
  name: string;
  title: string;
  bio: string;
  github: string;
  linkedin: string;
  email: string;
  skills: string[];
}

export const Hero = ({ name, title, bio, github, linkedin, email, skills }: HeroProps) => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-50 mb-6">
          {name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-sky-400 font-medium mb-8">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
          {bio}
        </p>
        
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-slate-800 text-sky-400 text-sm font-semibold rounded-md border border-slate-700/50"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-50 font-medium rounded-lg transition-colors"
          >
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-50 font-medium rounded-lg transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            className="px-6 py-3 bg-sky-400 hover:bg-sky-500 text-slate-900 font-medium rounded-lg transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
};
