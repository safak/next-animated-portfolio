"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  const text = "Nelson Katwal,";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row-reverse justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image src="/heroOne.png" alt="" fill className="object-contain " />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* titlle */}
          <div className="w-full">
            <span className="text-xl md:text-2xl font-normal">
              Frontend Developer
            </span>
            <h1 className="text-4xl md:text-6xl font-bold">Hello I&apos;m</h1>
            <h1 className="text-4xl md:text-6xl font-bold">
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </div>
          {/* description */}
          <p className="md:text-xl text-justify">
            a React wizard crafting sleek, lightning-fast web experiences. Dive
            into my work and see what cutting-edge front-end development looks
            like. Ready to build something amazing together? Let&apos;s talk.
          </p>
          <div className="  gap-4 ">
            <Link href="/portfolio" className="">
              <button class="btn">View My Work</button>
            </Link>
            <Link href="/contact" className="p-4 ">
              <button class="btn">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
