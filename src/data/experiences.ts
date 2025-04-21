import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: 'Jan 2022 - Present',
    description: [
      'Lead development of enterprise web applications using React and Node.js',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
      'Mentored junior developers and conducted code reviews',
      'Optimized database queries resulting in 30% performance improvement'
    ]
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    period: 'Mar 2020 - Dec 2021',
    description: [
      'Developed responsive web applications with React and Express',
      'Designed and implemented RESTful APIs for mobile applications',
      'Migrated legacy systems to modern technology stacks',
      'Collaborated with design team to implement UI/UX improvements'
    ]
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'WebCreative Studios',
    period: 'Jun 2018 - Feb 2020',
    description: [
      'Built responsive user interfaces using React and CSS frameworks',
      'Implemented state management with Redux for complex applications',
      'Optimized application performance and loading times',
      'Contributed to internal component libraries and documentation'
    ]
  }
];