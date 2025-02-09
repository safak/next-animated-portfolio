"use client";
import { Projects } from "@/constants/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full protfoilo-container"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-[600vh] relative" ref={ref}>
        <div className="light-button  w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          <p>My Works</p>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {Projects.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div class="pcontainer">
                  <div data-text="" style={{ "--r": "-15" }} className="glass">
                    {/* <Image src={item.img} alt="" fill className="rounded-md " /> */}
                    <iframe
                    className="object-contain w-full h-full "
                    
                      src={item.link}
                     
                      onLoad={(e) => e.target.contentWindow.focus()}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div style={{ "--r": "5" }} className="glass flex flex-col">
                    <div className="p-4 h-full bg- pt-8 rounded-lg shadow-lg max-w-lg mx-auto">
                      <h1 className="text-center text-2xl font-semibold mb-2">
                        {item.title}
                      </h1>
                      <p className="text-center text-gray-700 mb-4">
                        {item.desc}
                      </p>
                      <h2 className="text-center text-xl font-medium mb-3">
                        Technologies Used
                      </h2>
                      <div className="p-4 flex justify-around space-x-4">
                        {item.technologies?.map((technogolies, index) => (
                          <Image
                            className="hover:bg-white p-2 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                            src={technogolies}
                            alt=""
                            key={index}
                            width={80}
                            height={40}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div data-text="" style={{ "--r": "25" }} className="glass">
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl mt-10">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer-React Developer -
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div> */}
    </motion.div>
  );
};

export default PortfolioPage;
