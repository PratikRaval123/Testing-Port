import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { OWNER_TITLE, OWNER_TAGLINE } from '@/lib/constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Gradient Blob - Warm Tones */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-amber-400/20 dark:bg-amber-600/10 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-72 h-72 bg-stone-300/30 dark:bg-stone-700/20 rounded-full blur-3xl opacity-40 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <h2 className="text-accent font-semibold mb-4 tracking-wider uppercase text-sm border-b-2 border-accent inline-block pb-1">Pratik Raval</h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-stone-900 dark:text-white mb-6 leading-tight">
              Crafting Digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-700 to-stone-500 dark:from-stone-200 dark:to-stone-400 italic font-serif">Solutions.</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {OWNER_TITLE} building fast, scalable products and <span className="text-accent font-medium">Devam Graphics</span> founder creating visual identities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#projects" className="group px-8 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-bold rounded-none transition-all hover:bg-accent dark:hover:bg-accent hover:text-white flex items-center gap-2 shadow-lg shadow-stone-500/10">
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#graphics" className="px-8 py-3 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-white font-medium rounded-none hover:bg-stone-100 dark:hover:bg-stone-800 transition-all">
                Devam Graphics
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
              <a href="https://github.com" target="_blank" className="text-stone-500 hover:text-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-stone-500 hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:pratikcraval@gmail.com" className="text-stone-500 hover:text-accent transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-lg relative animate-fade-in">
             <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 border-4 border-white dark:border-stone-800 group">
                <img 
                  src="./profile.png" 
                  alt="Pratik Raval" 
                  className="object-cover object-top w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
             {/* Decor elements */}
             <div className="absolute -bottom-6 -left-6 bg-white dark:bg-stone-800 p-4 shadow-lg border-l-4 border-accent hidden sm:block animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex flex-col">
                   <span className="text-2xl font-bold text-stone-900 dark:text-white">4+ Years</span>
                   <span className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400">Experience</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;