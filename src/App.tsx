import portfolioData from './data/portfolio.json';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import type { ExperienceItem } from './components/ExperienceTimeline';
import { ProjectGrid } from './components/ProjectGrid';
import type { ProjectItem } from './components/ProjectGrid';

function App() {
  const { profile, experience, projects, contact } = portfolioData;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 antialiased">
      <main>
        <Hero 
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
          github={contact.github}
          linkedin={contact.linkedin}
          email={contact.email}
        />
        <ExperienceTimeline experiences={experience as ExperienceItem[]} />
        <ProjectGrid projects={projects as ProjectItem[]} />
      </main>
      
      <footer className="py-8 text-center text-slate-400 border-t border-slate-800">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name}. Construido con React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
