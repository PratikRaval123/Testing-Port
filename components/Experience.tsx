import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE } from '@/lib/constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-slate-300 dark:bg-slate-700"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((job, index) => (
              <div key={job.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white dark:border-primary z-10 mt-6 md:mt-0 shadow-sm"></div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 ml-6 md:ml-0">
                   <div className={`bg-white dark:bg-primary p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-accent/50 transition-all shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                     <div className="flex flex-col mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                        <div className="flex items-center justify-between mt-1">
                           <h4 className="text-accent flex items-center gap-2 text-sm font-semibold">
                             <Briefcase className="w-3 h-3" />
                             {job.company}
                           </h4>
                           <span className="text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{job.period}</span>
                        </div>
                     </div>
                     
                     <ul className="space-y-2 mt-4">
                       {job.description.map((desc, i) => (
                         <li key={i} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex items-start">
                           <span className="text-accent mr-2 mt-1.5 min-w-[6px]">•</span>
                           {desc}
                         </li>
                       ))}
                     </ul>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;