import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

interface TypewriterEffectProps {
  words: string[];
  loop?: boolean;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
  words, 
  loop = true,
  className = ''
}) => {
  const [text] = useTypewriter({
    words,
    loop,
    delaySpeed: 2000,
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  return (
    <span className={className}>
      {text}
      <span className="text-primary animate-blink">|</span>
    </span>
  );
};

export default TypewriterEffect;