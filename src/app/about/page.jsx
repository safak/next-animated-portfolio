"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { skills, jobs } from "./constants";
import ExperienceItem from "./experienceItem";
import Brain from "./brain";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll(containerRef);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div ref={containerRef} className="h-full overflow-scroll lg:flex ">
        {/* TEXT CONTAINER  */}
        <div className=" p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY  */}
          <div className="about-section">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

            <p className="text-xl">
              I’m a passionate full-stack developer with a knack for solving
              complex problems and creating seamless digital experiences. I’ve
              built everything from dynamic web applications to custom tools
              that help businesses thrive. I love combining clean code,
              thoughtful design, and scalable solutions to turn ideas into
              reality. Beyond coding, I enjoy exploring new tech trends,
              spending time with my family and cats. Whether collaborating with
              teams or tackling solo projects, I’m always driven by curiosity,
              innovation, and a desire to deliver meaningful results.
            </p>

            <BsArrowDownCircle className="text-4xl" />
          </div>

          {/* SKILLS  */}
          <div className="about-section">
            <h1 className="font-bold text-2xl">SKILLS</h1>

            {/* SKILLS LIST  */}
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div key={skill} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>

            {/* SCROLL SVG  */}
            <BsArrowDownCircle className="text-4xl" />
          </div>
          {/* EXPERIENCE  */}

          <div className="about-section pb-48">
            <div className="font-bold text-2xl">EXPERIENCE</div>

            {/* EXPERIENCE LIST  */}
            <div>
              <ExperienceItem job={jobs[0]} side="left" />
              <ExperienceItem job={jobs[1]} side="right" />
              <ExperienceItem job={jobs[2]} side="left" />
            </div>
          </div>
        </div>

        {/* SVG CONTAINER  */}
        <div className="hidden lg:block lg:w-1/3 xl:1/2 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
