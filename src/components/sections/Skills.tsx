import React from 'react';
import { motion } from 'framer-motion';
import SkillBadge from '../ui/SkillBadge';
import { skillCategories } from '../../data/skills';
import TypewriterEffect from '../ui/TypewriterEffect';
import TerminalWindow from '../ui/TerminalWindow';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-background-alt bg-opacity-30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-primary">
          <TypewriterEffect words={['./skills.tsx']} loop={false} />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <TerminalWindow title={`${category.name.toLowerCase()}.js`}>
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  <code>{`const ${category.name.toLowerCase()} = [`}</code>
                </h3>
                
                <div className="pl-4 mb-4">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="mb-2">
                      <code className="text-text-DEFAULT">
                        {`"${skill.name}"${index < category.skills.length - 1 ? ',' : ''}`}
                      </code>
                    </div>
                  ))}
                </div>
                
                <code>{"];"}</code>
                
                <div className="mt-6 flex flex-wrap">
                  {category.skills.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} index={index} />
                  ))}
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;