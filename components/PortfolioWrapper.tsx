"use client";

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Stats from './Stats';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import GraphicsDesign from './GraphicsDesign';
import Testimonials from './Testimonials';
import Blog from './Blog';
import BlogModal from './BlogModal';
import Contact from './Contact';
import Footer from './Footer';
import AIChatbot from './AIChatbot';
import { BlogPost } from '@/lib/types';

export default function PortfolioWrapper() {
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
    <>
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
    </>
  );
}