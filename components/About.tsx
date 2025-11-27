import React from 'react';
import { User, Code, Globe, GraduationCap, Languages } from 'lucide-react';
import { ABOUT_TEXT } from '@/lib/constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Bio & Stats */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
              Web developer & engineer building <span className="text-accent">end-to-end</span> solutions.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {ABOUT_TEXT}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white dark:bg-primary p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-accent" /> Location
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Surat, Gujarat, India</p>
               </div>
               <div className="bg-white dark:bg-primary p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                    <Languages className="w-4 h-4 text-accent" /> Languages
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">English, Hindi, Gujarati</p>
               </div>
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="bg-white dark:bg-primary p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-accent" />
              Education
            </h3>
            
            <div className="space-y-8 relative pl-2">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

              <div className="relative flex gap-4">
                <div className="w-6 h-6 rounded-full bg-secondary border-2 border-accent shrink-0 z-10"></div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-accent text-sm mb-1">2020 - 2022</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm">Shree Uttar Gujarat BBA & BCA College</p>
                </div>
              </div>

              <div className="relative flex gap-4">
                <div className="w-6 h-6 rounded-full bg-secondary border-2 border-slate-400 dark:border-slate-600 shrink-0 z-10"></div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium">HSC</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">2018 - 2019</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm">Shree Sadguru Vidhyalay</p>
                </div>
              </div>

              <div className="relative flex gap-4">
                <div className="w-6 h-6 rounded-full bg-secondary border-2 border-slate-400 dark:border-slate-600 shrink-0 z-10"></div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium">SSC</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">2016 - 2017</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm">Shree Sadguru Vidhyalay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;