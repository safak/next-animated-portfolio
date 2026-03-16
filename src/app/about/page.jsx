"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Brain from "@/components/brain";
import { useRef } from "react";
const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
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
      <div className="h-full overflow-y-scroll lg:flex" ref={containerRef}>
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:px-0 w-full md:w-2/3 xl:w-1/2">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">I'm Amir, a web developer.</h1>
            <p className="text-lg">
              {/*My experience of web developing is over 4 years. I usually make Responsive Web Site for clients. I also help making or update your Wordpress, OpenCart and Shopify site too. Please feel free to contact me :)*/}
              ウェブ開発の経験は4年以上です。私は通常、クライアントのためにレスポンシブWebサイトを作成します。また、Wordpress、OpenCart、Shopifyサイトの制作や更新もお手伝いします。お気軽にご連絡ください。
            </p>
            <span className="italic">
              {/*What's the difference between Spider-Man and Peter Parker? Spider-Man gets the girl.*/}
              {/* All your answers will be questioned.*/}
              It began as a wish, became an adventure, and ended as the ultimate
              road trip.
            </span>
            <div className="self-end">
              <svg
                width="256"
                height="97"
                viewBox="0 0 256 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.6421 81.789C51.7284 82.6522 52.7927 84.1715 53.7054 84.1962C55.8565 84.2543 57.7081 83.937 59.628 82.8971C65.98 79.4564 71.2862 73.9041 76.2685 68.7784C82.5371 62.3294 88.1852 55.1662 92.2213 47.0942C96.1522 39.2323 97.9343 30.8021 99.8633 22.2958C100.623 18.9462 101.136 15.5667 101.831 12.2083C101.956 11.6054 102.194 9.96411 102.194 11.5205C102.194 17.3413 100.471 23.1471 99.08 28.7533C97.201 36.3243 95.3271 43.9845 94.5139 51.7558C93.9886 56.7752 93.8211 61.8446 93.6732 66.887C93.5958 69.5277 93.3796 72.318 93.7497 74.9494C94.3642 79.3194 100.123 78.8932 103.188 77.4903C109.174 74.7498 114.186 69.7242 119.503 65.9318C125.696 61.5148 132.057 57.3837 138.647 53.5899"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M65.7416 48.4315C65.834 49.1707 68.4222 48.7754 68.8558 48.7754C75.7496 48.7754 82.3963 48.3808 89.2409 47.4763C101.847 45.8102 114.478 44.3088 127.088 42.6618C132.536 41.9501 137.845 41.4159 143.117 39.8342"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M83.2801 62.5311C79.5224 59.2359 77.9586 54.7422 77.3575 49.8262C76.1708 40.1203 80.8772 32.0259 87.2157 25.0087C94.1311 17.3529 103.159 11.273 112.454 6.89709C120.833 2.95217 131.288 -0.271866 140.519 2.56024C146.522 4.40221 144.696 8.06678 140.595 11.0238C134.86 15.1602 128.173 18.0414 121.624 20.5763C111.107 24.6475 100.201 27.8822 89.2791 30.6638C68.4304 35.9734 47.2214 38.8197 25.9076 41.4582C18.9616 42.318 11.9541 43.0793 5.06392 44.343C4.19629 44.5022 3.32618 44.6706 2.48474 44.9353C1.26119 45.3202 1.50908 45.5256 2.52295 45.8905C4.10323 46.4594 6.6003 46.8505 8.08252 47.0942C14.5933 48.1644 21.1707 48.9331 27.7225 49.6924C47.8427 52.0243 67.9895 53.4578 88.2283 54.2204C93.8288 54.4314 104.345 54.7373 110.18 55.0037C115.601 55.2511 121.996 55.1149 127.336 56.6085C129.896 57.3244 127.477 58.6557 126.458 59.2259C122.639 61.3616 118.428 62.8461 114.345 64.3651C104.065 68.189 91.8878 70.9601 83.1463 77.9106C80.5496 79.9754 77.0073 83.9784 80.2233 87.4059C85.2225 92.7337 96.2488 93.6217 102.634 94.341C131.352 97.5762 161.006 94.8273 189.504 90.883C211.354 87.8588 232.836 83.3938 254.194 78.0062"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
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
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML5
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS3
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                jQuery
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                OpenCart
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WordPress
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Elementor
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Shopify
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                DLE
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                DNS Setting
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Web Hosting
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Responsive Web Development
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js -express
              </div>
            </motion.div>
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
          <div
            className="flex flex-col gap-12 justify-center pb-40"
            ref={experienceRef}
          >
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPIRIENCE LIST*/}
            <motion.div
              className=""
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
            >
              {/* EXPIRIENCE ITEM*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    junior front-end developer
                  </div>
                  <div className="p-3 text-sm italic">
                    My main work was creating web-sites.
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    January 2018 - March 2019
                  </div>
                  <div className="bg-white w-fit rounded p-1 text-sm font-semibold">
                    Reklamator
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPIRIENCE ITEM 2*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Web Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    Used Javascript, CSS and HTML to develop app-solutions.
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    May 2019 – March 2022
                  </div>
                  <div className="bg-white w-fit rounded p-1 text-sm font-semibold">
                    Web Nibbana
                  </div>
                </div>
              </div>
              {/* EXPIRIENCE ITEM 3*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Full Stack Web Developer
                  </div>
                  <div className="p-3 text-sm italic">Creating value</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    May 2022 - May 2023
                  </div>
                  <div className="bg-white w-fit rounded p-1 text-sm font-semibold">
                    UpWork
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPIRIENCE ITEM 4*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Full Stack Web Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    Figma, Wordpress, HTML, SCSS, Bootstrap,Gsap
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    May 2023 –
                  </div>
                  <div className="bg-white w-fit rounded p-1 text-sm font-semibold">
                    ゼンリン東海
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
