import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Send } from "lucide-react";
import { Link } from "react-router-dom";
import ThreeScene from "../components/ThreeScene";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillsSection";
import profileImg from "../img/1738488924098.jpeg";

const Home: React.FC = () => {
  const featuredProjects = [
    {
      title: "AI-Powered MES Talk Bot",
      description:
        "An AI-driven MES Talk Bot using React, Redux, Axios, and D3.js to deliver real-time industrial insights.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      tags: ["React", "Redux", "D3.js", "Django"],
      githubUrl: "https://github.com/Bharath-007",
      liveUrl: "https://example.com",
    },
    {
      title: "Web Application for Industry X.0",
      description:
        "Industry 4.0 web application with Micro frontend architecture, using React.js, Material-UI, and Redux.",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      tags: ["React.js", "Material-UI", "Redux", "Micro Frontend"],
      githubUrl: "https://github.com/Bharath-007",
      liveUrl: "https://example.com",
    },
    {
      title: "Windows Application for Industry 4.0",
      description:
        "Migrated React Native Windows app to Vite, React.js, Tauri, TypeScript, and Redux Toolkit with enhanced offline capabilities.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      tags: ["React.js", "Tauri", "TypeScript", "Redux Toolkit"],
      githubUrl: "https://github.com/Bharath-007",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <ThreeScene />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Bharath Ilangovan
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-text-secondary mb-6"
            >
              Associate Software Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-text-secondary mb-8 max-w-2xl"
            >
              Front-End Developer with 2+ years of React.js experience, skilled
              in creating responsive, dynamic user interfaces. Passionate about
              solving complex challenges and continuously upskilling in new
              technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="btn btn-primary flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={16} />
              </Link>
              <a
                href="/BharathResume.pdf"
                className="btn btn-outline flex items-center gap-2"
                download
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <img
                src={profileImg}
                // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Profile"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="section-heading">About Me</h2>
              <p className="text-lg text-text-secondary mb-6">
                I'm a passionate frontend developer with expertise in creating
                immersive web experiences. With a strong foundation in modern
                JavaScript frameworks and React.js, I bring creative designs to
                life with clean, efficient code.
              </p>
              <p className="text-lg text-text-secondary mb-8">
                Currently working as an Associate Software Engineer at Cantier
                Systems, I specialize in developing applications for Industry
                4.0, creating micro frontend architectures, and building
                responsive user interfaces that prioritize user experience and
                performance.
              </p>
              <Link
                to="/about"
                className="btn btn-outline flex flex-row items-center gap-1 w-fit"
              >
                More About Me
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">Featured Projects</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              expertise in frontend development, Industry 4.0 applications, and
              interactive design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="btn btn-primary flex items-center gap-2 mx-auto w-fit"
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-8"
          >
            Have a project in mind or looking for a skilled developer to join
            your team? I'm currently available for freelance work and open to
            new opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="btn btn-primary flex items-center gap-2 mx-auto w-fit"
            >
              <Send size={16} />
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
