"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Signature from "../../components/atoms/signature";
import Scroll from "@/components/atoms/scroll";
import { Skills } from "@/constants/skills";
import Brain from "@/components/atoms/brain";
import { useRef } from "react";
import Image from "next/image";
const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInVIew = useInView(skillRef, { once: true });
  const experienceRef = useRef();
  const isExperinceRefInView = useInView(experienceRef, { once: true });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* containter */}
      <div className="h-full overflow-y-scroll  lg:flex " ref={containerRef}>
        {/* textcontainer */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64  lg:w-2/3 lg:pr-0 xl:1/2">
          {/* biographhy-contatiner */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-4xl text-purple-700 mb-4 underline">
              My Journey
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              My journey into tech started with a simple moment - browsing a
              book website. I was blown away by its smooth operation. Curiosity
              led me to explore how websites work, and I was hooked. Learning
              about web development became my passion. Now, as an
              <span className="text-blue-600 pl-1 font-semibold">
                Frontend Devloper
              </span>
              , that initial spark still drives me. I&apos;m eager to keep
              learning and growing in this exciting field.
            </p>
            <span className="italic text-lg text-gray-600 block mt-4 border-l-4 border-blue-500 pl-4 py-2">
              &quot;Frontend development: where we turn caffeine into code and
              pixels into magic.&quot;
            </span>

            {/* biography sign svg */}
            <div className="self-end">
              <Signature />
            </div>
            {/* biography scroll svg */}
            <motion.div
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Scroll />
            </motion.div>
            {/* skillContainer */}
            <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isSkillRefInVIew ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                SKILLS
              </motion.h1>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInVIew ? { x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex gap-4 flex-wrap"
              >
                {Skills.map((item, index) => (
                  <div
                    key={index}
                    className="rounded p-2 cursor-pointer flex border border-gray-300 shadow-md hover:shadow-lg"
                  >
                    <Image
                      className="rounded-md bg-white p-2 transition-transform transform hover:scale-105"
                      src={item}
                      width={80}
                      height={40}
                      alt="skills Icons"
                    />
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <Scroll />
              </motion.div>
            </div>
            {/* experineceContaitner */}
            <div
              className="flex flex-col gap-12 justify-center pb-48 "
              ref={experienceRef}
            >
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isExperinceRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                Experience
              </motion.h1>
              {/* explist */}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isExperinceRefInView ? { x: 0 } : {}}
              >
                {/* explistitem */}
                <div className="flex justify-between h-48">
                  {/* left */}
                  <div className="w-1/3 ">
                    {/* jobtitle */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      React Intern
                    </div>
                    {/* jobdiscription */}
                    <div className="p-3 text-sm italic">
                      Engaged in a React internship, actively contributing to
                      real-world projects. Elevating frontend skills with
                      hands-on React.js experience. Ready to make an impact!
                    </div>
                    {/* jobdate */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      2024-Present
                    </div>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      Yoddha Lab
                    </div>
                  </div>
                  {/* centers */}
                  <div className="w-1/6 ">
                    {/* line */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* circle */}
                      <div className="absolute h-5 w-5  rounded-full ring-4 ring-red-400  bg-white -left-2"></div>
                    </div>
                  </div>
                  {/* right */}
                  <div className="w-1/3 "></div>
                </div>
                {/* explistitem */}
                <div className="flex justify-between h-48">
                  {/* left */}
                  <div className="w-1/3 "></div>
                  {/* centers */}
                  <div className="w-1/6 ">
                    {/* line */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* circle */}
                      <div className="absolute h-5 w-5  rounded-full ring-4 ring-red-400  bg-white -left-2"></div>
                    </div>
                  </div>
                  {/* right */}
                  <div className="w-1/3 ">
                    {/* jobtitle */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Computer Science Instructor
                    </div>
                    {/* jobdiscription */}
                    <div className="p-3 text-sm italic">
                      Developed and delivered curriculum for grades 8 to 10,
                      covering C programming and HTML/CSS.
                    </div>
                    {/* jobdate */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      2022-2024
                    </div>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      CSS School
                    </div>
                  </div>
                </div>
                {/* explistitem */}
                <div className="flex justify-between h-48">
                  {/* left */}
                  <div className="w-1/3 ">
                    {/* jobtitle */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Autodidactic React Journey
                    </div>
                    {/* jobdiscription */}
                    <div className="p-3 text-sm italic">
                      Explore my autodidactic journey in React, where I built
                      dynamic web applications and deepened my understanding of
                      modern web development.
                    </div>
                    {/* jobdate */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      2022-Present
                    </div>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      Self
                    </div>
                  </div>
                  {/* centers */}
                  <div className="w-1/6 ">
                    {/* line */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* circle */}
                      <div className="absolute h-5 w-5  rounded-full ring-4 ring-red-400  bg-white -left-2"></div>
                    </div>
                  </div>
                  {/* right */}
                  <div className="w-1/3 "></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
