import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-background-alt transition-colors"
      aria-label={`Switch to ${theme === 'green' ? 'amber' : 'green'} theme`}
    >
      <motion.div
        animate={{ rotate: theme === 'green' ? 0 : 180 }}
        transition={{ duration: 0.5 }}
        className="text-primary"
      >
        {theme === 'green' ? (
          <Sun size={20} className="text-primary" />
        ) : (
          <Moon size={20} className="text-secondary" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;