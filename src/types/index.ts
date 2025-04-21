export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon?: JSX.Element;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface NavItem {
  id: string;
  label: string;
  icon?: JSX.Element;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ThemeContextType {
  theme: 'green' | 'amber';
  toggleTheme: () => void;
}