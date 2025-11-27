import React from 'react';
import { PenTool, Layers, Image as ImageIcon } from 'lucide-react';

const GraphicsDesign: React.FC = () => {
  return (
    <section id="graphics" className="py-20 bg-secondary/30 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase">Creative Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4 mt-2 font-serif">
            Devam Graphics
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-lg">
            Where code meets creativity. Delivering impactful visual identities, branding, and design solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-primary p-8 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 hover:border-accent/30 transition-all text-center group">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                    <PenTool className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">Logo Design</h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm">Crafting unique and memorable logos that define your brand identity.</p>
            </div>
            <div className="bg-white dark:bg-primary p-8 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 hover:border-accent/30 transition-all text-center group">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                    <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">Brand Identity</h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm">Complete branding solutions including color palettes, typography, and guidelines.</p>
            </div>
            <div className="bg-white dark:bg-primary p-8 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 hover:border-accent/30 transition-all text-center group">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                    <ImageIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">Social Media</h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm">Engaging posts, banners, and stories designed to grow your online presence.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicsDesign;