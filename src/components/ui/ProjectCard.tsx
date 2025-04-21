import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';
import TerminalWindow from './TerminalWindow';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="project-card mb-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.2,
        duration: 0.5
      }}
    >
      <TerminalWindow title={`project_${index + 1}.js`}>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
          
          {project.image && (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-md my-3 opacity-80 hover:opacity-100 transition-opacity"
            />
          )}
          
          <p className="text-text-DEFAULT">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="text-xs px-2 py-1 bg-background-alt rounded-md text-primary border border-primary-dim"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4 mt-3">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:underline"
            >
              <code className="mr-2">$ open demo</code>
              <ExternalLink size={16} />
            </a>
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:underline"
            >
              <code className="mr-2">$ view repo</code>
              <Github size={16} />
            </a>
          </div>
        </div>
      </TerminalWindow>
    </motion.div>
  );
};

export default ProjectCard;