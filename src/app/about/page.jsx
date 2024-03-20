"use client";
import Brain from "@/components/brain";
import { delay, motion, useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once: true})
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}

      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text Container */}

        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/*Biography Container*/}

          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              I'm Akshay, a self-taught MERN Stack developer passionate about
              crafting responsive, interactive web apps. With extensive practice
              and independent study, I've mastered React JS for dynamic UIs,
              Node and Express for server-side, and MongoDB for backend. Eager
              to contribute my skills and creativity to a professional team
            </p>
            <div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>

          {/*Skills Container*/}

          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/*skills title*/}
            <motion.h1
              initial={{ x: "-600px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/*skill list*/}

            <motion.div
              initial={{ x: "-600px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Next JS
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                React JS
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Node JS
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Express JS
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Mongo DB
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Tailwind CSS
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Javascript
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                HTML 5
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                CSS 3
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Redux
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JQuery
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Next JS
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                GIT
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Bootstrap
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Vite
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                C, c++
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Vercel
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Firebase
              </div>
            </motion.div>

            {/*skill scroll SVG*/}

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/*Experience Container*/}

          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={educationRef}
          >
            {/*education title*/}

            <h1 className="font-bold text-2xl ">EDUCATION</h1>

            {/*Experience List*/}

            <motion.div className="">
              {/*Experience List Item*/}

              <div className="flex justify-between h-48">
                {/*Left*/}

                <motion.div
                  className="w-1/3"
                  initial={{ x: "-600px" }}
                  animate={isEducationRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  {/*Education Title*/}

                  <div className="font-bold ">
                    Master of Computer Application
                  </div>

                  {/*Education colleage*/}

                  <div className="">IGNOU ( currently pursuing )</div>
                </motion.div>

                {/*Center*/}

                <div className="w-1/6 flex justify-center">
                  {/*Line*/}

                  <div className=" w-1 h-full bg-gray-600 rounded relative ">
                    {/*Line Circle*/}

                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/*Right*/}

                <div className="w-1/3"></div>
              </div>

              {/*Experience List Item*/}

              <div className="flex justify-between h-48">
                {/*Left*/}

                <div className="w-1/3"></div>

                {/*Center*/}

                <div className="w-1/6 flex justify-center">
                  {/*Line*/}

                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/*Line Circle*/}

                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/*Right*/}
                <motion.div
                  className="w-1/3"
                  initial={{ x: "-600px" }}
                  animate={isEducationRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  {/*Education Title*/}

                  <div className="font-bold">
                    Bachelor of Computer Application
                  </div>

                  {/*Education colleage*/}

                  <div className="">MES COLLEGE, ALUVA, KERALA</div>
                  <div className="">(2023)</div>
                </motion.div>
              </div>

              {/*Experience List Item*/}

              <div className="flex justify-between h-48">
                {/*Left*/}

                <motion.div
                  className="w-1/3"
                  initial={{ x: "-600px" }}
                  animate={isEducationRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  {/*Education Title*/}

                  <div className="font-bold">HIGHER SECONDARY</div>

                  {/*Education colleage*/}

                  <div className="">SNV SKT HSS, ERNAKULAM, KERALA</div>
                  <div className="">(2023)</div>
                </motion.div>

                {/*Center*/}

                <div className="w-1/6 flex justify-center">
                  {/*Line*/}

                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/*Line Circle*/}

                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/*Right*/}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SVG Container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
