import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of landing pages, applications, and clones I've developed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-secondary/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-accent/50 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col">
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent text-white font-bold rounded-full hover:bg-white hover:text-accent transition-colors flex items-center gap-2">
                      View Live <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white dark:bg-primary text-xs font-medium text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-slate-900 dark:hover:text-white font-medium transition-colors"
          >
            See more on GitHub <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;