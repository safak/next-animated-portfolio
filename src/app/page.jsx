"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col px-4 gap-16 overflow-scroll sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row">
        {/* image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Elevating Digital Solutions, Shaping the Future of Technology
          </h1>
          {/* descriptions */}
          <p className="text-xl">
            Welcome to my professional portfolio. With over a decade of
            experience in IT management, web development, and creative media, I
            am dedicated to delivering innovative solutions that drive growth
            and efficiency. Explore my work to see how I combine technical
            expertise with creative problem-solving to achieve exceptional
            results.
          </p>
          {/* button */}
          <div className="flex w-full gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
