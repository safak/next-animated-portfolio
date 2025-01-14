"use client";

import { motion } from "motion/react";

const ScrollIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className=" h-12 w-12"
      initial={{ y: 0, opacity: 0.3 }}
      animate={{ y: "10px", opacity: 1 }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </motion.svg>
  );
};

export default ScrollIcon;
