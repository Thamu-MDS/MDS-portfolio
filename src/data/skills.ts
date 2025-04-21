import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Redux' },
      { name: 'TailwindCSS' },
      { name: 'Next.js' },
      { name: 'Framer Motion' }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'Firebase' },
      { name: 'RESTful APIs' },
      { name: 'GraphQL' }
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Docker' },
      { name: 'Webpack' },
      { name: 'Figma' },
      { name: 'Jest' }
    ]
  }
];