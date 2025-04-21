import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (position >= sectionTop && position < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background bg-opacity-90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.a 
          href="#"
          className="text-primary flex items-center gap-2 text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Code size={24} /> <span className="hidden sm:inline">MDS Thamu</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center bg-background-alt rounded-lg overflow-hidden border border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`tab ${activeSection === item.id ? 'active' : ''}`}
              >
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </div>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMobileMenu}
            className="text-primary focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-alt bg-opacity-95 backdrop-blur-md"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`py-2 px-4 rounded ${
                    activeSection === item.id ? 'text-primary border-l-2 border-primary pl-3' : 'text-text-DEFAULT'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;