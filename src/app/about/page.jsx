"use client";

import Brain from "@/components/Brain";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* bio container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* bio title */}
            <h1 className="font-bold text-2xl">Biography</h1>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea illum
              quos voluptatum itaque natus animi beatae minus alias, omnis
              voluptatibus, id et. Repellendus commodi sequi maxime aperiam
              libero nemo deserunt!
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              culpa.
            </span>
            <div></div>
          </div>
          {/* skills container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* skill title */}
            <h1 className="font-bold text-2xl">Skills</h1>
            {/* skill list */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded text-sm p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascropt
              </div>
              <div className="rounded text-sm p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascropt
              </div>
              <div className="rounded text-sm p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascropt
              </div>
              <div className="rounded text-sm p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascropt
              </div>
              <div className="rounded text-sm p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascropt
              </div>
              <div className="rounded text-sm p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascropt
              </div>
            </div>
          </div>
          {/* experience container */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            <h1 className="font-bold text-2xl">Experience</h1>
            {/* exp list */}
            <div>
              {/* exp list item */}
              <div className="flex justify-between h-48 ">
                {/* left */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior Javascript
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic ">
                    My current employment
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
              {/* exp list item */}
              <div className="flex justify-between h-48 ">
                {/* left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior Javascript
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic ">
                    My current employment
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
              </div>
              {/* exp list item */}
              <div className="flex justify-between h-48 ">
                {/* left */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior Javascript
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic ">
                    My current employment
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* svg container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
