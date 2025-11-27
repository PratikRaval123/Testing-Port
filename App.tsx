import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GraphicsDesign from './components/GraphicsDesign';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import BlogModal from './components/BlogModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import { BlogPost } from './types';

function App() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    // Check local storage or system preference on mount
    const storedTheme = localStorage.getItem('theme');
    if (
      storedTheme === 'dark' ||
      (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="bg-primary min-h-screen text-stone-600 dark:text-stone-300 overflow-x-hidden selection:bg-accent selection:text-white transition-colors duration-300 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GraphicsDesign />
        <Testimonials />
        <Blog onReadMore={setSelectedBlog} />
        <Contact />
      </main>

      <Footer />
      <AIChatbot />
      
      <BlogModal 
        post={selectedBlog} 
        onClose={() => setSelectedBlog(null)} 
      />
    </div>
  );
}

export default App;