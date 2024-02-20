"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              At the heart of technology and innovation, I stand as a Computer
              Science student from Simon Fraser University, driven by the thrill
              of problem-solving and the satisfaction of code coming to life.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              I have tried countless times, but I believe that opportunity will
              only present itself in one or two of those attempts.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="328"
                height="90"
                viewBox="0 0 328 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="328" height="90" />
                <path
                  d="M31 25C21.2422 25 13.0539 27.3831 5.00001 33.2222C4.5861 33.5223 0.977258 36.2535 2.66667 36.7778C7.37984 38.2405 12.351 37.9831 17.2222 39.7778C23.5695 42.1162 36.9917 45.2737 31.4445 54.8889C27.5315 61.6714 19.0435 70.9891 11 73"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M46 25C46 36.2963 46 47.5926 46 58.8889C46 60.7361 45.3787 62.0034 46.2222 60C47.4106 57.1777 48.9175 54.9421 50.9445 52.6111C61.8495 40.0703 53.2541 61.8276 60.6667 62C62.67 62.0466 71 63.323 71 60.5C71 58.2258 71.518 54.7262 68.5 54.0556C64.3874 53.1416 65.2482 65 70.5 65C83.5746 65 91.1305 42.9293 92.7778 32.2222C93.8234 25.4257 93 17.9902 93 11.1111C93 8.29599 93.1772 8.42665 92.7778 11.4445C92.0042 17.289 90.0745 22.7275 88.5556 28.3889C86.0064 37.8903 85.4516 47.1288 86 57C86.2809 62.056 93.0016 70 98 70"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M113 57C109.494 57 105.733 56.1333 103.556 59.5555C102.779 60.7759 98.1393 70.2081 101 68.7778C110.525 64.0154 115.67 48.0025 117.5 38.4444C119.754 26.6714 119 14.6028 119 2.66666C119 -1.87944 118.096 11.7154 117.5 16.2222C116.218 25.9122 115.121 35.9912 115 45.7778C114.951 49.7658 112.814 62.2587 115.778 65.2222C121.584 71.028 131.372 66.0523 128.944 57.5555C128.15 54.7756 123.188 54.8713 121 55C119.197 55.106 120 61.0513 120 62.5C120 67.8126 121.645 67.3128 127 68.2222C129.842 68.7048 133.668 69.8889 136.444 69.8889C137.713 69.8889 137.879 66.7716 138.222 66C139.848 62.3423 139 58.0233 139 65.5555C139 78.3318 140.036 66.7893 143.5 62.5555C145.148 60.5415 149.264 57.839 152 58C153.799 58.1058 157.098 67.195 158 69"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M221 9C221 24.8188 217.201 41.5471 210.778 56C209.746 58.3206 208.407 61.5745 206 62.7778C205.475 63.0402 203.111 62.7061 203.111 63.5C203.111 65.1722 210.724 62.7572 211.444 62.5556C214.722 61.6378 220.042 61.287 223.5 62.0556C225.866 62.5814 226.342 64 229.5 64C233.544 64 236.412 58.1756 238 55"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M237 41C237 42.8235 235.618 43 236 43"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M256 58C250.724 58 244.203 59.6339 241.5 64.5C240.416 66.4511 241.116 71.5807 244 69C246.636 66.6411 250.899 64.102 251.944 60.4445C252.21 59.516 253.428 61.3487 255.5 62.5C259.17 64.5389 260.041 64.3068 263 61C263.375 60.5812 264.313 57.7575 264.778 58.2222C265.627 59.0713 265 62.9648 265 64C265 64.7891 264.983 68.5535 265.167 68.2778C267.6 64.6285 271.864 61.1359 275 58C279.863 53.1369 281.593 68.1318 282 72C282.309 74.9361 292.019 67.8143 293.444 67C295.135 66.0339 297 59.9492 297 58C297 49.8745 292.574 58.9172 291.556 62.5556C289.334 70.4894 294.099 70.2989 297.444 75.5556C301.764 82.3427 285.45 89.0174 285.222 88.3333C282.878 81.301 290.662 72.9842 294.778 68.4445C300.761 61.844 306.834 57.9353 315.333 55.5556C318.743 54.601 322.485 55 326 55"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
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
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Stripe
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Kotlin
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C++
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
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
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Web Developer (part-time)
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    May 2023 - Dec 2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    HouseCube
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Import/Export Manager
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I responsilbe for the day-to-day operations as well as the
                    overall success of a trading business.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2023{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Bridgers Trading Ltd.
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Customer Service Representative{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I assisted customers and answers question they may have about our company insurance products and services.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    BDDM Asset Management
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};
export default AboutPage;
