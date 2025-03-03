import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const allProjects = [
    {
      title: 'AI-Powered MES Talk Bot',
      description: 'Developed the frontend for an AI-driven MES Talk Bot using React, Redux, Axios, and D3.js to deliver real-time industrial insights.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      tags: ['React', 'Redux', 'D3.js', 'Django', 'PyTorch', 'Neo4j'],
      githubUrl: 'https://github.com/Bharath-007',
      liveUrl: 'https://example.com',
      category: 'web',
    },
    {
      title: 'Web Application for Industry X.0',
      description: 'Led the development of a new Industry 4.0 web application with enhanced features, creating a Scalable Micro frontend architecture.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      tags: ['React.js', 'Material-UI', 'Redux', 'Micro Frontend'],
      githubUrl: 'https://github.com/Bharath-007',
      liveUrl: 'https://example.com',
      category: 'web',
    },
    {
      title: 'Windows Application for Industry 4.0',
      description: 'Enhanced and optimized the existing codebase for a React Native Windows CMMS application designed for industrial tablets.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
      tags: ['React Native', 'Windows', 'Redux', 'Offline Capabilities'],
      githubUrl: 'https://github.com/Bharath-007',
      liveUrl: 'https://example.com',
      category: 'desktop',
    },
    {
      title: 'Tauri Desktop Application',
      description: 'Migrated a project to a more scalable stack using Vite, React.js, Tauri, TypeScript, and Redux Toolkit with enhanced offline functionality.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      tags: ['React.js', 'Tauri', 'TypeScript', 'Redux Toolkit', 'Rust'],
      githubUrl: 'https://github.com/Bharath-007',
      liveUrl: 'https://example.com',
      category: 'desktop',
    },
    {
      title: 'Inventory Management Web Application',
      description: 'Spearheaded the development of a micro frontend-based inventory management web application tailored for shop floor operations.',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      tags: ['React.js', 'Material-UI', 'Redux', 'Spring Boot', 'MySQL'],
      githubUrl: 'https://github.com/Bharath-007',
      liveUrl: 'https://example.com',
      category: 'web',
    },
    {
      title: 'Custom UI Template Library',
      description: 'Independently developed a scalable, responsive UI component library using Vite, Material-UI, and TypeScript (TSX) to streamline project development.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      tags: ['Vite', 'Material-UI', 'TypeScript', 'Component Library'],
      githubUrl: 'https://github.com/Bharath-007',
      liveUrl: 'https://example.com',
      category: 'library',
    },
  ];

  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = allProjects.filter((project) => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Applications' },
    { id: 'desktop', name: 'Desktop Applications' },
    { id: 'library', name: 'Libraries & Tools' },
  ];

  return (
    <main className="pt-24 pb-16">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-heading text-center"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary max-w-3xl mx-auto text-center mb-12"
          >
            Explore my portfolio of projects showcasing my skills in frontend development,
            Industry 4.0 applications, and responsive design.
          </motion.p>

          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      filter === category.id
                        ? 'bg-accent text-background'
                        : 'bg-surface text-text-secondary hover:bg-gray-800'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full md:w-auto"
              >
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-surface border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </motion.div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-xl text-text-secondary">
                    No projects found matching your criteria.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Projects;