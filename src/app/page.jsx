"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/portfolio.png" alt="" fill className="object-contain"/>
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold">Welcome!</h1>
          {/* Description */}
          <p className="md:text-xl">
          Hello! I am a Computer Science student at Simon Fraser University with a knack for Android app and full-stack web development. Eager to bring my programming acumen to the professional world, I am on the lookout for an internship opportunity. Take a peek at my portfolio to see the solutions I craft with code.</p>
          {/* Button */}
          <div className="flex w-full gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Projects</button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );  
};

export default Homepage;
