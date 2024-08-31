"use client";

import Brain from "@/components/Brain";
import ProgressBar from "@/components/ProgressBar";
import { animate, motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {
    once: true,
    margin: "-100px",
  });

  const langRef = useRef();
  const isLangRefInView = useInView(langRef, { once: true, margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {
    once: true,
    margin: "-100px",
  });

  const experiences = [
    {
      title: "Director of Administration / IT Support and Manager",
      place: "MNS Co., Tabriz",
      date: "August 2022 – April 2024",
      desc: [
        "Managed IT operations across all company branches.",
        "Oversaw administrative functions and represented the company in facility management contracts.",
      ],
    },
    {
      title: "IT Manager",
      place: "Tabriz University of Medical Sciences, Tabriz",
      date: "March 2022 – August 2022",
      desc: [
        "Directed IT operations at Imam Reza Hospital, ensuring efficient system management.",
      ],
    },
    {
      title: "Director of Administration / IT Support and Manager / Accountant",
      place: "ShakibaSeresht, Tabriz",
      date: "July 2021 – March 2022",
      desc: [
        "Managed IT support and administrative operations while handling accounting responsibilities.",
      ],
    },
    {
      title: "Director of Administration / IT Support and Manager",
      place: "MNS Co., Tabriz",
      date: "August 2019 – July 2021",
      desc: [
        "Supervised IT infrastructure and administrative tasks across multiple branches.",
      ],
    },
    {
      title: "Photographer / Videographer / Editor",
      place: "Self-owned Photography Studio, Urmia",
      date: "March 2019 – August 2019",
      desc: [
        "Handled photography, videography, and post-production editing services.",
      ],
    },
    {
      title: "Accountant / IT Supporter",
      place: "IRAN AIR FORCE, Tabriz",
      date: "July 2017 – March 2019",
      desc: [
        "Provided IT support and managed accounting duties during mandatory military service.",
      ],
    },
    {
      title: "Director of Administration / IT Support and Manager / CEO",
      place: "ShakibaSeresht, Tabriz / Schiller Advertising Group, Tabriz",
      date: "August 2015 – July 2017",
      desc: [
        "Managed IT support and administrative operations while handling accounting responsibilities.",
        "Served as CEO of Schiller Advertising Group, overseeing operations and strategic direction.",
      ],
    },
    {
      title: "Support/CRM Manager/Supervisor",
      place: "TCI, Tabriz",
      date: "March 2014 – September 2015",
      desc: [
        "Led CRM initiatives and supervised support teams for an Internet Service Provider.",
      ],
    },
    {
      title: "Support and CRM Manager",
      place: "Hamara System, Tabriz",
      date: "May 2013 – March 2014",
      desc: [
        "Managed customer support for ISP services and assembled computer systems.",
      ],
    },
    {
      title: "Salesman and Support",
      place: "PBDPCo, Tabriz",
      date: "May 2011 – April 2013",
      desc: [],
    },
    {
      title: "Support",
      place: "Yaasie, Tabriz",
      date: "October 2010 – December 2010",
      desc: ["Provided software support for Mellat Bank’s POS machines."],
    },
  ];

  const skills = [
    "Computer Networks",
    "PostgreSQL",
    "Accounting",
    "Django",
    "Node.js",
    "Framer Motion",
    "Photography",
    "Tailwind CSS",
    "Team Collaboration",
    "Videography",
    "HMIS",
    "Microsoft Office",
    "Management",
    "Advertising",
    "Next.js",
    "Strategic Planning",
    "CRM",
    "Human Resources (HR)",
    "JavaScript",
    "React.js",
    "Responsibility",

    "Adobe Suite (Photoshop, Illustrator, Premiere, After Effects)",
  ];

  const languages = [
    { name: "Persian (Native)", level: 100 },
    { name: "Azeri (Native)", level: 100 },
    { name: "English", level: 60 },
    { name: "Arabic", level: 20 },
    { name: "Turkish", level: 50 },
  ];

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
              Hi, I’m Meghdad Hoseinzadeh from Tabriz, Iran. With over ten years
              of experience in IT and administration, I have effectively managed
              IT operations, technical support, and accounting across various
              organizations. My career includes key roles at MNS Co and Tabriz
              University of Medical Sciences, where I led IT and administrative
              functions. Additionally, I gained valuable accounting experience
              during my service in the Iranian Air Force and in other positions.
              My background spans web development and computer networks, and is
              complemented by creative media skills, enabling me to address both
              operational and financial challenges effectively.
            </p>
            <span className="italic">
              "I am passionate about leveraging my diverse skill set to drive
              innovation and excellence in every project I undertake. My goal is
              to continuously grow and contribute to impactful solutions that
              advance organizational success."
            </span>
          </div>
          {/* skills container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* skill title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Skills
            </motion.h1>
            {/* skill list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="rounded text-sm p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
          {/* Language container */}
          <div className="flex flex-col gap-12" ref={langRef}>
            {/* Languages Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isLangRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl mb-6"
            >
              Languages
            </motion.h1>

            {/* Languages List with Progress Bars */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isLangRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              {languages.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {item.name}
                    </span>
                    <span className="text-xs text-gray-500">{item.level}%</span>
                  </div>
                  <ProgressBar level={item.level} />
                </div>
              ))}
            </motion.div>
          </div>
          {/* experience container */}
          <div
            className="flex flex-col gap-12 justify-center pb-80"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>
            {/* experience list */}
            <div>
              {experiences.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className="flex justify-between h-72 lg:h-60"
                  >
                    {/* left */}
                    {isEven && (
                      <>
                        <motion.div
                          initial={{ x: "-300px", opacity: 0 }}
                          animate={
                            isExperienceRefInView ? { x: 0, opacity: 1 } : {}
                          }
                          transition={{ delay: 0.3, ease: "easeIn" }}
                          className="w-1/3"
                        >
                          {/* job date */}
                          <motion.div
                            initial={{ x: "-300px", opacity: 0 }}
                            animate={
                              isExperienceRefInView ? { x: 0, opacity: 1 } : {}
                            }
                            transition={{ delay: 0.3, ease: "easeIn" }}
                            className="p-3 text-red-400 text-sm font-semibold"
                          >
                            {item.date}
                          </motion.div>
                          {/* job title */}
                          <motion.div
                            initial={{ x: "-300px", opacity: 0 }}
                            animate={
                              isExperienceRefInView ? { x: 0, opacity: 1 } : {}
                            }
                            transition={{ delay: 0.3, ease: "easeIn" }}
                            className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit"
                          >
                            {item.title}
                          </motion.div>
                          {/* job desc */}
                          <motion.div
                            initial={{ x: "-300px", opacity: 0 }}
                            animate={
                              isExperienceRefInView ? { x: 0, opacity: 1 } : {}
                            }
                            transition={{ delay: 0.3, ease: "easeIn" }}
                            className="p-3 text-sm font-light"
                          >
                            {item.desc.map((descItem, index) => (
                              <li key={index}>{descItem}</li>
                            ))}
                          </motion.div>

                          {/* job company */}
                          <motion.div
                            initial={{ x: "-300px", opacity: 0 }}
                            animate={
                              isExperienceRefInView ? { x: 0, opacity: 1 } : {}
                            }
                            transition={{ delay: 0.3, ease: "easeIn" }}
                            className="p-1 rounded bg-white text-sm font-semibold w-fit"
                          >
                            {item.place}
                          </motion.div>
                        </motion.div>
                        {/* center */}
                        <div className="w-1/6 flex items-center justify-center">
                          {/* line */}
                          <div className="w-1 h-full bg-gray-600 rounded relative">
                            {/* circle */}

                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                          </div>
                        </div>
                        <div className="w-1/3"></div>
                      </>
                    )}
                    {/* right */}
                    {!isEven && (
                      <>
                        <div className="w-1/3"></div>
                        {/* center */}
                        <div className="w-1/6 flex items-center justify-center">
                          {/* line */}
                          <div className="w-1 h-full bg-gray-600 rounded relative">
                            {/* circle */}

                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                          </div>
                        </div>
                        <motion.div
                          initial={{ x: "300px", opacity: 0 }}
                          animate={
                            isExperienceRefInView ? { x: 0, opacity: 1 } : {}
                          }
                          transition={{ delay: 0.3, ease: "easeIn" }}
                          className="w-1/3"
                        >
                          {/* job date */}
                          <motion.div
                            initial={{ x: "300px", opacity: 0 }}
                            animate={
                              isExperienceRefInView ? { x: 0, opacity: 1 } : {}
                            }
                            transition={{ delay: 0.3, ease: "easeIn" }}
                            className="p-3 text-red-400 text-sm font-semibold"
                          >
                            {item.date}
                          </motion.div>
                          {/* job title */}
                          <motion.div
                            initial={{ x: "300px", opacity: 0 }}
                            animate={
                              isExperienceRefInView ? { x: 0, opacity: 1 } : {}
                            }
                            transition={{ delay: 0.3, ease: "easeIn" }}
                            className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg"
                          >
                            {item.title}
                          </motion.div>
                          {/* job desc */}
                          <motion.div
                            initial={{ x: "300px", opacity: 0 }}
                            animate={
                              isExperienceRefInView ? { x: 0, opacity: 1 } : {}
                            }
                            transition={{ delay: 0.3, ease: "easeIn" }}
                            className="p-3 text-sm italic"
                          >
                            {item.desc.map((descItem, index) => (
                              <li key={index}>{descItem}</li>
                            ))}
                          </motion.div>

                          {/* job company */}
                          <motion.div
                            initial={{ x: "300px", opacity: 0 }}
                            animate={
                              isExperienceRefInView ? { x: 0, opacity: 1 } : {}
                            }
                            transition={{ delay: 0.3, ease: "easeIn" }}
                            className="p-1 rounded bg-white text-sm font-semibold w-fit"
                          >
                            {item.place}
                          </motion.div>
                        </motion.div>
                      </>
                    )}
                  </div>
                );
              })}
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
