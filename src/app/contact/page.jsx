"use client";

import { motion } from "motion/react";
import { useState } from "react";
import AnimatedPageWrapper from "@/components/animatedPageWrapper";

const text = "Say Hello";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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

        <form className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 flex flex-col gap-8 justify-center text-xl rounded-xl p-24">
          <span>Dear Anel,</span>
          <textarea rows={6} className="input-field resize-none" />
          <span>My email address is:</span>
          <input type="email" className="input-field" />
          <span>Regards</span>
          <button
            type="submit"
            className="bg-purple-200 text-gray-600 font-semibold p-4 rounded"
          >
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              There was an error sending your message!
            </span>
          )}
        </form>
      </div>
    </AnimatedPageWrapper>
  );
};

export default ContactPage;
