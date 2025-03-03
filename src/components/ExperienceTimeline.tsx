import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const ExperienceTimeline: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Associate Software Engineer',
      company: 'Cantier Systems',
      period: 'May 2023 - Present',
      description: [
        'Developed the frontend for an AI-driven MES Talk Bot using React, Redux, Axios, and D3.js to deliver real-time industrial insights',
        'Led the development of a new Industry 4.0 web application with enhanced features, creating a Scalable Micro frontend architecture',
        'Enhanced and optimized the existing codebase for a React Native Windows CMMS application designed for industrial tablets',
        'Migrated a project to a more scalable stack using Vite, React.js, Tauri, TypeScript, and Redux Toolkit',
        'Spearheaded the development of a micro frontend-based inventory management web application tailored for shop floor operations',
        'Independently developed a scalable, responsive UI component library using Vite, Material-UI, and TypeScript (TSX)',
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Calibraint Technologies',
      period: 'January 2023 - April 2023',
      description: [
        'Gained hands-on experience in full-stack development',
        'Worked on various projects to enhance technical skills',
        'Collaborated with senior developers to learn best practices',
        'Contributed to the development of web applications',
      ],
    },
  ];

  return (
    <div className="py-12">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Work Experience
      </motion.h3>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative pl-8 border-l-2 border-accent"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
            
            <div className="mb-2">
              <h4 className="text-xl font-bold">{exp.title}</h4>
              <div className="flex items-center gap-4 text-text-secondary">
                <div className="flex items-center gap-1">
                  <Briefcase size={14} />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>
            
            <ul className="mt-4 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;