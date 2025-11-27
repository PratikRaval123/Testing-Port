import React from 'react';
import { STATS } from '@/lib/constants';

const Stats: React.FC = () => {
  return (
    <section className="bg-stone-900 dark:bg-black py-12 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-accent/5 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-stone-800">
                {STATS.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center px-4 group hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-accent transition-colors font-sans">
                            {stat.value}
                        </span>
                        <span className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-1">
                            {stat.label}
                        </span>
                        <span className="text-xs text-stone-600 hidden sm:block">
                            {stat.description}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Stats;