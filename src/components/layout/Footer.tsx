import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-4 md:mb-0"
        >
          <Code size={18} className="text-primary" />
          <span className="text-text-DEFAULT">MDS Thamu</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm text-text-DEFAULT flex items-center gap-1"
        >
          <span>Built with</span>
          <Heart size={14} className="text-primary fill-primary" />
          <span>using React & Framer Motion © {currentYear}</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 md:mt-0"
        >
          <a href="#" className="text-primary hover:text-text-bright transition-colors">
            Back to top
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;