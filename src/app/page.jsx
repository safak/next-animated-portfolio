"use client"
import Image from "next/image";
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <motion.div className="h-full overflow-x-auto" initial = {{ y: "-200vh" }} animate ={{ y: "0vh" }} transition={{ duration: 1 }} >
      <div className ="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* IMAGE CONTAINER */}
          <div className="md:h-2/3 lg:h-full lg:w-1/2 relative h-1/3 mb-14 ">
            <Image src="/hero.png" alt="" fill className="object-contain fill-transparent" />
          </div>
          {/* TEXT CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-5 items-center justify-center">
            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl font-bold pt-16 sm:pt-5 md:pt-5 lg:pt-5">
              Crafting Digital Experiences, Designing Tomorrow.
            </h1>
            {/* DESC */}
            <p className="md:text-xl">
              Welcome to my digital canvas, where innovation and creativity
              converge. With a keen eye for aesthetics and a mastery of code, my
              portfolio showcases a diverse collection of projects that reflect my
              commitment to excellence.
            </p>
            {/* BUTTONS */}
            <div className="w-full flex gap-4 relative">
            <a href="/akshaysunil_fullstack.pdf" download="akshaysunil_fullstack.pdf">
              <button className = "p-4 rounded-lg ring-1 ring-black bg-black text-white">
                Resume
              </button>
            </a>
            <a href="/contact">
              <button className = "p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </a>
            </div>
          </div>
        </div>
    </motion.div>
  );
};

export default Homepage;
