import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import TypewriterEffect from '../ui/TypewriterEffect';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-primary">
          <TypewriterEffect words={['./projects.tsx']} loop={false} />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;