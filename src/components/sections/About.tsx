import React from 'react';
import { motion } from 'framer-motion';
import TerminalWindow from '../ui/TerminalWindow';
import { experiences } from '../../data/experiences';
import TypewriterEffect from '../ui/TypewriterEffect';

const CommandLine: React.FC<{ command: string; output: JSX.Element | string }> = ({ command, output }) => {
  return (
    <div className="mb-6">
      <div className="flex items-start">
        <span className="text-primary mr-2">$</span>
        <span className="text-text-bright">{command}</span>
      </div>
      <div className="mt-2 pl-4 border-l border-primary-dim">{output}</div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-primary">
          <TypewriterEffect words={['./about.tsx']} loop={false} />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TerminalWindow title="about.js">
              <CommandLine
                command="whoami"
                output={
                  <p className="text-text-DEFAULT">
                    I'm MDS Thamu, a full-stack developer with 6+ years of experience building modern web applications. I specialize in React, Node.js, and TypeScript, with a focus on creating performant and user-friendly interfaces.
                  </p>
                }
              />

              <CommandLine
                command="cat mission.txt"
                output={
                  <p className="text-text-DEFAULT">
                    My mission is to bridge the gap between design and functionality, crafting digital experiences that are both beautiful and highly functional. I believe in clean code, continuous learning, and delivering solutions that exceed expectations.
                  </p>
                }
              />

              <CommandLine
                command="ls ./interests"
                output={
                  <div className="flex flex-wrap gap-2">
                    {['Web Development', 'UI/UX Design', 'Open Source', 'Tech Mentoring', 'AI/ML'].map((interest, index) => (
                      <span key={index} className="text-primary bg-background-alt px-2 py-1 rounded-md text-sm">
                        {interest}
                      </span>
                    ))}
                  </div>
                }
              />
            </TerminalWindow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TerminalWindow title="experience.js">
              {experiences.map((experience, index) => (
                <div key={experience.id} className={index < experiences.length - 1 ? "mb-6 pb-6 border-b border-gray-800" : ""}>
                  <h3 className="text-primary font-semibold">{experience.role}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-bright">{experience.company}</span>
                    <span className="text-sm text-gray-400">{experience.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-text-DEFAULT space-y-1 pl-2">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </TerminalWindow>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;