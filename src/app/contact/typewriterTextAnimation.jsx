"use client";

import { motion } from "motion/react";

const TypewriterTextAnimation = ({ text }) => {
  return (
    <div className="bg-gradient-to-r from-accent-bg to-primary-text text-transparent bg-clip-text">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: index * 0.1,
              duration: 2,
              repeat: 1,
            },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default TypewriterTextAnimation;
