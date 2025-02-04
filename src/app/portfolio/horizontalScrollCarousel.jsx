"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { items } from "./constants";
import ProjectItem from "./projectItem";

const HorizontalScrollCarousel = () => {
  const projectsContainer = useRef();
  const { scrollYProgress } = useScroll({ target: projectsContainer });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section
      ref={projectsContainer}
      className="relative h-[300vh] bg-neutral-900"
    >
      <div className="h-screen sticky top-0 bg-gradient-to  flex  items-center overflow-hidden ">
        <motion.div
          style={{ x }}
          className="flex gap-10 touch-pan-x pl-8"
          drag="x"
          dragConstraints={{ left: -500, right: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {items.map((item, index) => (
            <ProjectItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
