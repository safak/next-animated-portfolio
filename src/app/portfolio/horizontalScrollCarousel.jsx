"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { items } from "./constants";
import ProjectItem from "./projectItem";

const HorizontalScrollCarousel = () => {
  const projecsContainer = useRef();
  const { scrollYProgress } = useScroll({ target: projecsContainer });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section
      ref={projecsContainer}
      className="relative h-[300vh] bg-neutral-900"
    >
      <div className="h-screen sticky top-0 bg-gradient-to-r from-purple-300 to-red-300 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {items.map((item) => (
            <ProjectItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
