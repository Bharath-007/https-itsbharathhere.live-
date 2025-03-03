import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillsSection from "../components/SkillsSection";
import profileImg from "../img/1738488924098.jpeg";

const About: React.FC = () => {
  const education = [
    {
      degree: "B.E - Computer Science and Engineering",
      institution: "Dr.N.G.P Institute of Technology",
      year: "2019 - 2023",
      details: "CGPA - 8.4",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified SysOps Administrator Associate Certification (SOA-C02)",
      date: "July 2024",
    },
    {
      name: "AWS Certified Solutions Architect Associate Certification (SAA-C03)",
      date: "October 2023",
    },
    {
      name: "Programming using Java - Infytq",
      date: "July 2022",
    },
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
            About Me
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/3"
            >
              <div className="sticky top-24">
                <img
                  // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  src={profileImg}
                  alt="Profile"
                  className="rounded-lg shadow-lg w-full mb-6"
                />
                <div className="flex justify-center">
                  <a
                    href="/BharathResume.pdf"
                    download
                    className="btn btn-primary flex flex-row items-center gap-2"
                  >
                    <Download size={16} />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:w-2/3"
            >
              <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
              <div className="space-y-4 text-lg text-text-secondary">
                <p>
                  Hello! I'm Bharath Ilangovan, a passionate frontend developer
                  based in Coimbatore, India. I enjoy creating beautiful,
                  interactive, and user-friendly websites and applications that
                  deliver exceptional digital experiences.
                </p>
                <p>
                  With over 2 years of experience in React.js, I've developed a
                  strong foundation in creating responsive, dynamic user
                  interfaces. I'm currently working as an Associate Software
                  Engineer at Cantier Systems, where I focus on developing
                  applications for Industry 4.0 and creating micro frontend
                  architectures.
                </p>
                <p>
                  I specialize in modern JavaScript frameworks like React, along
                  with Redux for state management, and Material-UI for creating
                  beautiful user interfaces. My approach combines technical
                  expertise with creative problem-solving to build solutions
                  that are not only visually appealing but also performant and
                  accessible.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  continuously upskilling to stay current with the latest
                  industry trends and best practices.
                </p>
              </div>

              <ExperienceTimeline />

              <div className="py-12">
                <h3 className="text-3xl font-bold mb-8">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="pl-8 border-l-2 border-accent relative"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <p className="text-text-secondary">{edu.institution}</p>
                      <p className="text-sm text-accent">{edu.year}</p>
                      <p className="text-text-secondary mt-1">{edu.details}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="py-12">
                <h3 className="text-3xl font-bold mb-8">Certifications</h3>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="pl-8 border-l-2 border-accent relative"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                      <h4 className="text-xl font-bold">{cert.name}</h4>
                      <p className="text-sm text-accent">{cert.date}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SkillsSection />
    </main>
  );
};

export default About;
