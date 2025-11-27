import React from 'react';
import { SKILLS } from '@/lib/constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-secondary/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-300 dark:border-slate-700 pb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-700 hover:border-accent hover:text-accent transition-colors cursor-default shadow-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;