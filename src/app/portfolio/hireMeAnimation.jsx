"use client";

import { motion } from "motion/react";

import Link from "next/link";

const HireMeAnimation = () => {
  return (
    <Link href={"/contact"} className="relative cursor-pointer">
      <div className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-gradient-to text-primary-text rounded-full flex items-center justify-center">
        Hire Me
      </div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 300 300"
        stroke="currentColor"
        className="w-64 h-64 md:w-96 md:h-96"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <text fill="#000">
          <textPath
            xlinkHref="#circlePath"
            className="text-2xl"
            startOffset="15%"
          >
            Full-Stack Developer
          </textPath>
        </text>
      </motion.svg>
    </Link>
  );
};

export default HireMeAnimation;
