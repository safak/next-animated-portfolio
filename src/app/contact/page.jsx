"use client";

import { motion } from "motion/react";
import AnimatedPageWrapper from "@/components/animatedPageWrapper";

const text = "Say Hello";

const ContactPage = () => {
  return (
    <AnimatedPageWrapper>
      <div className="h-full flex flex-col lg:flex-row app-container">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex gap-4 items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{
                  opacity: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 3,
                    repeat: Infinity,
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div>😄</div>
        </div>

        <form className="h-1/2 lg:h-full lg:w-1/2"></form>
      </div>
    </AnimatedPageWrapper>
  );
};

export default ContactPage;
