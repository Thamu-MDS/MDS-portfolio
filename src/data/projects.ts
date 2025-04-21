import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product listings, user authentication, cart functionality, and payment processing.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    demoUrl: 'https://ecommerce-demo.netlify.app',
    repoUrl: 'https://github.com/mdsthamu/ecommerce-platform',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality, task categorization, and user collaboration features.',
    technologies: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
    demoUrl: 'https://taskmanager-demo.vercel.app',
    repoUrl: 'https://github.com/mdsthamu/task-manager',
    image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A weather application that provides real-time weather data and forecasts using the OpenWeatherMap API with location search and favorites functionality.',
    technologies: ['React', 'TypeScript', 'OpenWeatherMap API', 'Styled Components'],
    demoUrl: 'https://weather-forecast-demo.netlify.app',
    repoUrl: 'https://github.com/mdsthamu/weather-forecast',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing skills, projects, and experience with a terminal-inspired design and animations.',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    demoUrl: 'https://mdsthamu-portfolio.vercel.app',
    repoUrl: 'https://github.com/mdsthamu/portfolio',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];