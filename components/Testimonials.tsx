import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4">Client Stories</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-stone-600 dark:text-stone-400">
            Don't just take my word for it. Here's what others say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-secondary/30 p-8 rounded-2xl relative border border-stone-200 dark:border-stone-800 hover:shadow-xl transition-all duration-300 group">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-stone-200 dark:text-stone-700 group-hover:text-accent/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-xs text-accent font-medium uppercase tracking-wide">{testimonial.company}</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;