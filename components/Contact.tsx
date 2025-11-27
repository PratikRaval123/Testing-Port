"use client";

import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:pratikcraval@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 group hover:text-accent dark:hover:text-white transition-colors">
                <div className="w-12 h-12 bg-white dark:bg-primary rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-800 group-hover:border-accent/50 transition-colors shadow-sm">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">pratikcraval@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+919016150454" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 group hover:text-accent dark:hover:text-white transition-colors">
                <div className="w-12 h-12 bg-white dark:bg-primary rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-800 group-hover:border-accent/50 transition-colors shadow-sm">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium">+91 9016150454</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                <div className="w-12 h-12 bg-white dark:bg-primary rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-sm">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">47 Khodiyar Nagar So, Katargam, Surat</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-primary rounded-full border border-slate-200 dark:border-slate-800 hover:border-accent hover:text-accent transition-all shadow-sm">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-primary rounded-full border border-slate-200 dark:border-slate-800 hover:border-accent hover:text-accent transition-all shadow-sm">
                    <Github className="w-5 h-5" />
                </a>
            </div>
          </div>

          <div className="bg-white dark:bg-primary p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-500 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-slate-50 dark:bg-secondary border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-accent transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-500 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-slate-50 dark:bg-secondary border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-500 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-slate-50 dark:bg-secondary border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-accent transition-colors" placeholder="Project Inquiry" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-500 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-slate-50 dark:bg-secondary border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-accent transition-colors" placeholder="How can I help you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-accentHover transition-all transform hover:-translate-y-1 shadow-lg shadow-accent/20">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;