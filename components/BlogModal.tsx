import React, { useEffect } from 'react';
import { X, Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [post]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-3xl bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-slide-up border border-stone-200 dark:border-stone-800">
        
        {/* Header Image */}
        <div className="relative h-64 sm:h-80 shrink-0">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-stone-900/90 to-transparent p-6 sm:p-8">
             <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                        {tag}
                    </span>
                ))}
             </div>
             <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                {post.title}
             </h2>
             <div className="flex items-center gap-6 text-stone-300 text-sm mt-4">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-300">
          <div 
            className="prose prose-stone dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
        
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 flex justify-end">
            <button 
                onClick={onClose}
                className="px-6 py-2 bg-secondary hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-900 dark:text-white font-medium rounded-lg transition-colors"
            >
                Close Article
            </button>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;