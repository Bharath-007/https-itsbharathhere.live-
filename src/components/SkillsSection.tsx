import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
    { name: 'JavaScript', icon: '🟨', color: '#F7DF1E' },
    { name: 'Redux', icon: '🔄', color: '#764ABC' },
    { name: 'HTML5', icon: '🌐', color: '#E34F26' },
    { name: 'CSS3', icon: '🎨', color: '#1572B6' },
    { name: 'Material-UI', icon: '🎭', color: '#0081CB' },
    { name: 'Next.js', icon: '⏭️', color: '#000000' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Express.js', icon: '🚂', color: '#000000' },
    { name: 'Spring Boot', icon: '🍃', color: '#6DB33F' },
    { name: 'Java', icon: '☕', color: '#007396' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'MySQL', icon: '🐬', color: '#4479A1' },
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
    { name: 'Git', icon: '📊', color: '#F05032' },
    { name: 'Tauri', icon: '🦀', color: '#FFC131' },
    { name: 'Vite', icon: '⚡', color: '#646CFF' },
    { name: 'RxJS', icon: '🔄', color: '#B7178C' },
    { name: 'Angular', icon: '🅰️', color: '#DD0031' },
    { name: 'D3.js', icon: '📊', color: '#F9A03C' },
    { name: 'Microservices', icon: '🧩', color: '#1890FF' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading text-center"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-4 bg-background rounded-lg hover:shadow-md hover:shadow-accent/20 transition-all duration-300"
              style={{ borderColor: skill.color }}
            >
              <span className="text-3xl mb-2">{skill.icon}</span>
              <h3 className="font-medium text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;