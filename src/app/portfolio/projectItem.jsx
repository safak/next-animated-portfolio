"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const ProjectItem = ({ item }) => {
  return (
    <div
      className={`w-screen h-screen flex justify-center items-center bg-gradient-to`}
    >
      <div className="flex flex-col gap-8 text-primary-text">
        <h1 className="text-xl md:text-4xl lg:text-6xl xl:text-8xl font-bold ">
          {item.title}
        </h1>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:gap-8">
          <Link
            href={item.link}
            target="_blank"
            className="relative h-80 md:h-96 lg:h-[500px] xl:h-[600px] project-image-width bg-neutral-100 rounded hover:transition-transform hover:scale-95 hover:shadow-lg hover:shadow-primary-text"
          >
            <Image src={item.img} alt={item.title} fill className="rounded" />
          </Link>

          <div className="project-image-width lg:text-lg flex flex-col gap-8">
            <div className="">{item.desc()}</div>

            <div className="flex flex-wrap gap-4">
              {item.tools.map((tool, index) => (
                <span
                  key={index}
                  className="p-2 text-sm lg:text-base bg-accent-secondary-bg  text-accent-text rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Link href={item.link} target="_blank" className="">
            <motion.button
              className="project-item-button relative "
              whileHover={{ scale: 1.02, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gradient-mid to-accent-bg z-0 project-item-button border-0 rounded shadow-md"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
              >
                Visit Site
              </motion.div>
              <span className="">Visit Site</span>
            </motion.button>
          </Link>
          <Link href={item.repo} target="_blank" className="">
            <motion.button
              className="project-item-button relative "
              whileHover={{ scale: 1.02, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gradient-mid to-accent-bg z-0 project-item-button border-0 rounded shadow-md"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
              >
                GitHub
              </motion.div>
              <span className="">GitHub</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
