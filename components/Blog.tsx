import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';
import { BlogPost } from '@/lib/types';
import Image from 'next/image';

interface BlogProps {
  onReadMore: (post: BlogPost) => void;
}

const Blog: React.FC<BlogProps> = ({ onReadMore }) => {
  return (
    <section id="blog" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-left">
            <span className="text-accent font-semibold tracking-wider text-sm uppercase">Latest Insights</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mt-2">
              From The Blog
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mt-4"></div>
          </div>
          <button className="hidden md:flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-accent transition-colors font-medium">
            View All Posts <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white dark:bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 dark:border-stone-800 flex flex-col h-full group">
              <div className="relative h-48 overflow-hidden shrink-0 cursor-pointer" onClick={() => onReadMore(post)}>
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.slice(0, 1).map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-stone-500 dark:text-stone-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                
                <h3 
                  className="text-xl font-bold text-stone-900 dark:text-white mb-3 hover:text-accent cursor-pointer transition-colors line-clamp-2"
                  onClick={() => onReadMore(post)}
                >
                  {post.title}
                </h3>
                
                <p className="text-stone-600 dark:text-stone-400 text-sm mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                
                <button 
                  onClick={() => onReadMore(post)}
                  className="mt-auto text-accent font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-accent transition-colors font-medium">
                View All Posts <ArrowRight className="w-4 h-4" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;