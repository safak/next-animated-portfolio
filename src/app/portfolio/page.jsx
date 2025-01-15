"use client";

import { motion } from "motion/react";

import HorizontalScrollCarousel from "./horizontalScrollCarousel";
import HireMeAnimation from "./hireMeAnimation";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-[500vh]">
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center text-6xl md:text-8xl text-center">
            My Work
          </div>
        </div>

        <HorizontalScrollCarousel />

        <div className="h-screen w-screen flex flex-col gap-16 justify-center items-center text-center px-2">
          <h1 className="text-4xl md:text-6xl lg:text-8xl flex flex-wrap">
            Do you have a project?
          </h1>

          <HireMeAnimation />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
