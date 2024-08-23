"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="">
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
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
                  <div>Senior Javascript</div>
                  {/* job desc */}
                  <div>My current employment</div>
                  {/* job date */}
                  <div>2024 - Present</div>
                  {/* job company */}
                  <div>Apple</div>
                </div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div>
                    {/* circle */}
                    <div></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* svg container */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
