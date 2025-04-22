import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Send, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import TerminalWindow from '../ui/TerminalWindow';
import TypewriterEffect from '../ui/TypewriterEffect';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_2r83zi5',      
      'template_tqm9tmc',    
      formData,
      'IAgj7Qfs11OycWqgY'       
    ).then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('Email send error:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-background-alt bg-opacity-30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-primary">
          <TypewriterEffect words={['./contact.tsx']} loop={false} />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TerminalWindow title="message.sh">
              <h3 className="text-lg text-primary mb-6">$ send_message --to="mdsthamu@gmail.com"</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-text-bright">
                    <code>{">> "}Name:</code>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-text-bright">
                    <code>{">> "}Email:</code>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-text-bright">
                    <code>{">> "}Message:</code>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="contact-input"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn flex items-center gap-2">
                  <code>$ send</code>
                  <Send size={16} />
                </button>
              </form>
            </TerminalWindow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TerminalWindow title="connect.js">
              <h3 className="text-lg text-primary mb-6">$ find_me_online</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-text-bright mb-2">
                    <code>{"// "}Contact Information</code>
                  </h4>
                  <p className="flex items-center gap-2 mb-2">
                    <Mail size={16} className="text-primary" />
                    <a href="mailto:mdsthamu@gmail.com" className="text-text-DEFAULT hover:text-primary transition-colors">
                      mdsthamu@gmail.com
                    </a>
                  </p>
                </div>
                
                <div>
                  <h4 className="text-text-bright mb-2">
                    <code>{"// "}Social Profiles</code>
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href="https://github.com/mdsT-5454/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-DEFAULT hover:text-primary transition-colors"
                      >
                        <Github size={16} className="text-primary" />
                        github.com/mdsthamu
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.linkedin.com/in/mds-thamu-31031b361" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-DEFAULT hover:text-primary transition-colors"
                      >
                        <Linkedin size={16} className="text-primary" />
                        linkedin.com/in/mdsthamu
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://x.com/techThamu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-DEFAULT hover:text-primary transition-colors"
                      >
                        <Twitter size={16} className="text-primary" />
                        twitter.com/mdsthamu
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-text-bright mb-2">
                    <code>{"// "}Availability</code>
                  </h4>
                  <p className="text-text-DEFAULT">
                    Currently available for freelance projects and full-time opportunities.
                  </p>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
