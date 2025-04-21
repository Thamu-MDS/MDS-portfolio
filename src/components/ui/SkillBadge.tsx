import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  return (
    <motion.div
      className="px-3 py-1 rounded-md bg-background-alt border border-primary text-primary inline-block m-1 hover-glow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: '0 0 8px var(--color-primary)' 
      }}
    >
      {skill.name}
    </motion.div>
  );
};

export default SkillBadge;