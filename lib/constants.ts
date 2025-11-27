import { Experience, Project, Skill, GraphicProject, Stat, Testimonial, BlogPost } from './types';

export const PORTFOLIO_OWNER = "Pratik Raval";
export const OWNER_TITLE = "Full Stack Developer";
export const OWNER_TAGLINE = "Building scalable digital products with modern web technologies.";

export const ABOUT_TEXT = `
I am a Full Stack Developer based in Surat, India, with a passion for building end-to-end web solutions. 
I specialize in both frontend and backend development, bridging the gap between elegant user interfaces and robust server-side logic.
With experience in React.js, Next.js, and Node.js, I turn complex requirements into seamless digital experiences.

In addition to coding, I run "Devam Graphics," where I channel my creative side into graphic design, branding, and visual storytelling.
`;

export const SKILLS: Skill[] = [
  { name: 'React.js', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Redux', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'SCSS', category: 'Frontend' },
  { name: 'Material UI', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'HTML/CSS', category: 'Frontend' },
  { name: 'Photoshop', category: 'Tools' },
  { name: 'Illustrator', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'Opash Software',
    role: 'Jr. Software Engineer',
    period: '2022 - Present',
    description: [
      'Leading development of complex web applications using React.js and Next.js.',
      'Collaborating with cross-functional teams to deliver high-quality software solutions.',
      'Implemented responsive designs and optimized performance for client projects like Esanad and Methaq Insurance.'
    ]
  },
  {
    id: '2',
    company: 'Devam Graphics',
    role: 'Founder & Graphic Designer',
    period: 'Part-time',
    description: [
      'Founded a freelance graphic design venture specializing in branding and marketing materials.',
      'Designed logos, social media posts, and brochures for local businesses.',
      'Managed client requirements and delivered creative visual solutions.'
    ]
  },
  {
    id: '3',
    company: 'Opash Software',
    role: 'Frontend Developer Intern',
    period: 'Jan 2022 - Jun 2022',
    description: [
      'Built responsive and dynamic web applications using React.js, Next.js, and Tailwind CSS.',
      'Collaborated with the development team to implement clean UI components.',
      'Gained foundational knowledge in backend development using Node.js, Express.js, and MongoDB.'
    ]
  },
  {
    id: '4',
    company: 'IT Futurz',
    role: 'Frontend Developer Intern',
    period: '2022',
    description: [
      'Contributed to the "Grrowth Circle" platform using React.js, HTML, CSS, and JavaScript.',
      'Focused on empowering individuals with income-generating opportunities through community features.',
      'Strengthened core web development skills in a fast-paced environment.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Esanad Insurance',
    description: 'A comprehensive insurance platform for the Dubai region allowing users to create car, health, and travel insurance policies.',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://www.esanad.com'
  },
  {
    id: '2',
    title: 'ACCYB',
    description: 'Landing page for the Caribbean Cybersecurity Agency, the leading authority on cybersecurity in the French territories.',
    technologies: ['React', 'TailwindCSS', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://www.accyb.org'
  },
  {
    id: '3',
    title: 'Methaq Insurance',
    description: 'Corporate website for Methaq, specializing in advanced lighting and IoT technologies.',
    technologies: ['Next.js', 'React', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://methaq-web.vercel.app/en'
  },
  {
    id: '4',
    title: 'App in the Air',
    description: 'Landing page design for a trip insurance application protecting fliers against delays and emergencies.',
    technologies: ['Next.js', 'TailwindCSS'],
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://airfinal.vercel.app'
  },
  {
    id: '5',
    title: 'Task Rabbit Clone',
    description: 'A marketplace platform clone allowing users to research, hire, and rate local service providers.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://task-rabbit-ivory.vercel.app'
  },
  {
    id: '6',
    title: 'Honey Book Clone',
    description: 'Business management software landing page designed to help small businesses book clients and manage projects.',
    technologies: ['React', 'TailwindCSS'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://honeybook-sigma.vercel.app'
  }
];

export const GRAPHIC_PROJECTS: GraphicProject[] = [
  {
    id: 'g1',
    title: 'Brand Identity',
    category: 'Logo Design',
    imageUrl: 'https://images.unsplash.com/photo-1626785774583-6338e5bd7dd4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g2',
    title: 'Social Media Kit',
    category: 'Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g3',
    title: 'Corporate Brochure',
    category: 'Print Media',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    title: 'Product Packaging',
    category: 'Packaging',
    imageUrl: 'https://images.unsplash.com/photo-1541462608143-0afed16110f8?auto=format&fit=crop&q=80&w=800'
  }
];

export const STATS: Stat[] = [
  { label: 'Years Experience', value: '04+', description: 'Specializing in Full Stack & Design' },
  { label: 'Projects Completed', value: '25+', description: 'From landing pages to complex apps' },
  { label: 'Happy Clients', value: '15+', description: 'Across India and Dubai' },
  { label: 'Coffee Cups', value: '500+', description: 'Fueling creativity daily' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Product Manager',
    company: 'Esanad',
    content: "Pratik transformed our insurance platform. His attention to detail in both the UI and the backend logic made the user experience seamless. Highly recommended!",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 't2',
    name: 'Rajesh Kumar',
    role: 'Director',
    company: 'Methaq',
    content: "Working with Pratik was a pleasure. He understood our corporate identity perfectly and delivered a website that truly represents our innovative approach to lighting solutions.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 't3',
    name: 'Emily Chen',
    role: 'Founder',
    company: 'StartUp Hub',
    content: "Devam Graphics gave our brand a new life. Pratik has a unique eye for design that complements his technical skills perfectly. The logo he designed is exactly what we needed.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Optimizing Next.js for Performance',
    excerpt: 'Learn the top strategies to make your Next.js applications fly, from image optimization to server-side rendering secrets.',
    date: 'Oct 15, 2023',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Performance', 'React'],
    content: `
      <p>Performance is key in modern web development. When building with Next.js, there are several low-hanging fruits that can drastically improve your Core Web Vitals.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">1. Use the Image Component</h3>
      <p>The <code>next/image</code> component automatically optimizes images on demand. It serves images in modern formats like WebP and AVIF to browsers that support them.</p>

      <h3 class="text-xl font-bold mt-4 mb-2">2. Dynamic Imports</h3>
      <p>Split your code! Use <code>next/dynamic</code> to lazily load components that aren't immediately visible. This reduces the initial bundle size.</p>

      <h3 class="text-xl font-bold mt-4 mb-2">3. ISR (Incremental Static Regeneration)</h3>
      <p>With ISR, you can retain the benefits of static generation while scaling to millions of pages. It allows you to update static pages after you’ve built your site.</p>
      
      <p class="mt-4">By implementing these strategies, I've seen client websites load 40% faster on average.</p>
    `
  },
  {
    id: 'b2',
    title: 'The Principles of Minimalist Design',
    excerpt: 'How whitespace and typography can elevate your user interface. A guide for developers who want to design better.',
    date: 'Sep 22, 2023',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&q=80&w=800',
    tags: ['Design', 'UI/UX', 'Devam Graphics'],
    content: `
      <p>Minimalism isn't just about using less; it's about making space for what matters. As developers, we often clutter interfaces with too many controls.</p>

      <h3 class="text-xl font-bold mt-4 mb-2">Typography is King</h3>
      <p>In minimalist design, the font carries the weight of the structure. Choosing the right pairing—like a strong serif for headers and a clean sans-serif for body text—creates hierarchy without borders.</p>

      <h3 class="text-xl font-bold mt-4 mb-2">Whitespace is Active</h3>
      <p>Don't fear the empty space. Whitespace guides the eye and gives the user's brain a break. It separates content groups more elegantly than lines.</p>
    `
  },
  {
    id: 'b3',
    title: 'Why I Use MongoDB for Scalable Apps',
    excerpt: 'Relational vs Non-relational databases. Why the MERN stack remains my go-to choice for rapid startup development.',
    date: 'Aug 10, 2023',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    tags: ['MongoDB', 'Backend', 'Database'],
    content: `
      <p>Flexibility is crucial when developing for startups. Requirements change daily. This is where MongoDB shines compared to traditional SQL databases.</p>

      <h3 class="text-xl font-bold mt-4 mb-2">Schema Flexibility</h3>
      <p>With MongoDB, you don't need to run complex migrations every time you add a field. The document structure can evolve with your application code.</p>

      <h3 class="text-xl font-bold mt-4 mb-2">JSON Everywhere</h3>
      <p>In the MERN stack (MongoDB, Express, React, Node), data flows as JSON from the database to the frontend. No ORM translation layers slowing things down or adding complexity.</p>
    `
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PORTFOLIO_OWNER}'s personal portfolio website.
Your role is to answer questions about Pratik's professional background, skills, and projects.
Pratik is a Full Stack Developer and also runs a part-time Graphic Design business called "Devam Graphics".

Use the following context to answer questions:

Name: ${PORTFOLIO_OWNER}
Title: ${OWNER_TITLE}
About: ${ABOUT_TEXT}
Contact: pratikcraval@gmail.com, +91 9016150454
Skills: ${SKILLS.map(s => s.name).join(', ')}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}
Stats: ${STATS.map(s => `${s.label}: ${s.value}`).join(', ')}
Graphic Design: Runs Devam Graphics, specializing in logos, branding, and marketing materials.

If a user asks about something not in this list, politely decline or steer the conversation back to professional topics.
Keep answers concise and engaging.
`;