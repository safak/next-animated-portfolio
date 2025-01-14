"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "motion/react";
import ProjectItem from "./projectItem";
import { items } from "./constants";

import HorizontalScrollCarousel from "./horizontalScrollCarousel";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]">
        <div className="w-screen h-[calc(100vh-6rem)] flex justify-center items-center text-8xl text-center">
          My Work
        </div>

        <HorizontalScrollCarousel />
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
