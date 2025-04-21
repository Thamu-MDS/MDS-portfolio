import React from 'react';
import { motion } from 'framer-motion';
import TypewriterEffect from '../ui/TypewriterEffect';

const Hero: React.FC = () => {
  const profileImageUrl = "https://media-hosting.imagekit.io/c322a5af2f364275/thamu1.png?Expires=1839835405&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SiC8wKO-4YjB1WddLfqKw-9-s0reDajVpTtQrTFrIQoCr1Vppfw~71weaT~MMoGTj-q0mYuAmoRJ9cbo704tGImnD9LYhwECa7oTJWo8jB0HWxVNlE543q10muZE~vFvZHSNbn33F-gJ3bPXXZSzKeYMMeX3mZ--h9ZnweV9Gsk0w7ZPFm0Asf8tAzSe3hJ3qeexTtoH1iuC7U1JK~AG8dE67m-5fzTKKq7iBwao3QAWFZhBc22PWSrdBP7tyO86XG0SkKLqYuENsBgoJGOTyTba7yzwuvmUhqYWH~wnlopwNwfLSSHGCAxhKUZ6oNUr9UL7gZyonXGnMtJLsn92KA__";

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto w-full"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="mb-4 text-sm md:text-base">
                <code className="text-text-bright">{'>'} Hello World, I am</code>
              </div>
              
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 text-primary glow-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                MDS Thamu
              </motion.h1>
              
              <div className="text-lg md:text-2xl mb-6 font-mono">
                <code>{'>'} <TypewriterEffect 
                  words={[
                    'Full Stack Developer',
                    'React Specialist',
                    'Node.js Enthusiast',
                    'UI/UX Advocate'
                  ]} 
                  className="text-text-bright"
                />
                </code>
              </div>
              
              <motion.p 
                className="text-text-DEFAULT mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Crafting modern web experiences with clean code and intuitive interfaces. 
                Specialized in developing full-stack applications with React, Node.js and modern JavaScript.
              </motion.p>
              
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <a href="#projects" className="btn hover:glow">
                  View Projects
                </a>
                <a href="#contact" className="btn hover:glow">
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="neon-border rounded-full p-1 relative overflow-hidden">
              <img 
                src={profileImageUrl} 
                alt="MDS Thamu" 
                className="rounded-full w-64 h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;