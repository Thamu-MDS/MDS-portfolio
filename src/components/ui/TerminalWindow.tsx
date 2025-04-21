import React, { ReactNode } from 'react';
import { X, Minus, Square } from 'lucide-react';
import { motion } from 'framer-motion';

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ 
  title, 
  children, 
  className = '' 
}) => {
  return (
    <motion.div 
      className={`terminal-window ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="terminal-header">
        <div className="flex gap-2">
          <button className="w-3 h-3 rounded-full bg-red-500" aria-label="close"></button>
          <button className="w-3 h-3 rounded-full bg-yellow-500" aria-label="minimize"></button>
          <button className="w-3 h-3 rounded-full bg-green-500" aria-label="expand"></button>
        </div>
        <div className="text-sm opacity-80">{title}</div>
        <div className="w-[60px]"></div> {/* Spacer for balance */}
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;