"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Book Store App",
    desc: "This is a MERN stack bookstoring app styled with Tailwind CSS. Users can perform CRUD operations on books. Backend is hosted on Render and frontend on Netlify, utilizing React Icons library for icons.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://gleeful-swan-2b4bbb.netlify.app/",
    git: "https://github.com/akshayofficial4/bookstorefront",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "T-shirt Renderer",
    desc: "This is a T-shirt customization website built with Vite and React.js. Users can customize colors, add logos, and utilize an AI feature to generate custom designs based on prompts. Designs can be downloaded upon completion.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://celadon-kataifi-6922a2.netlify.app",
    git: "https://github.com/akshayofficial4/threejs_viteapp",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "TODO App",
    desc: "It is a TODO APP which is build using React js and styled using CSS. It uses react icons library for icons. Here we can create , update , delete Todos.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: " https://beautiful-caramel-175b90.netlify.app",
    git: "https://github.com/akshayofficial4/toDo-app",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: " Weathercaster ",
    desc: "is a weather forecasting app build using React js and styled using Tailwind css. This app shows the current weather of the cities , states etc. For fetching the weather data used an API called open weather APi",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://amazing-strudel-d77dfc.netlify.app",
    git: "https://github.com/akshayofficial4/weathercaster",
  },

  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: " Advice App ",
    desc: "It is a Advice Generating Application which is build using React js and styled using CSS generates diffrent advices and prompts by the help of an API called Advice Slip JSON API",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://silly-raindrop-a3f4c7.netlify.app",
    git: "https://github.com/akshayofficial4/advice-app-react",
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300",
    title: " Personal website",
    desc: "This is my personal portfolio website which i build first using NEXT JS and styled using Tailwind CSS . It is fully responsive  and it has NEXT JS cool features like Lazy loading Images and build in route system.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/akshayofficial4/portfolio",
    git: "https://github.com/akshayofficial4/portfolio",
  },


];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-86%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-5xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-3xl lg:text-5xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-60 h-56 md:w-76 md:h-64 lg:w-[400px] lg:h-[250px] xl:w-[500px] xl:h-[320px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-60 md:w-80 lg:w-[500px] lg:text-lg xl:w-[600px] gap-4 m-auto ">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-center">
                  <Link href={item.link} className="flex justify-end" target="blank">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded border-t-emerald-800" >See Demo</button>
                  </Link>

                  <Link href={item.git} className="flex justify-start" target="blank">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded" >Git</button>
                  </Link>

                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl">Do you have a project?</h1>
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
                MERN Stack -&- React js developer
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
      </div>
    </motion.div>
  );
};

export default PortfolioPage;