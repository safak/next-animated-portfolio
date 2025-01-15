"use client";

import Image from "next/image";
import AnimatedPageWrapper from "@/components/animatedPageWrapper";

const Homepage = () => {
  return (
    <AnimatedPageWrapper>
      <div className="h-full flex flex-col lg:flex-row app-container">
        {/* IMAGE CONTAINER  */}
        <div className="home-section relative">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="home-section flex flex-col gap-8 justify-center lg:items-start items-center">
          {/* TITLE  */}
          <h1 className="text-4xl md:text-6xl font-bold ">
            Hi, I’m Anel Danza – Full-Stack Developer
          </h1>
          {/* DESCRIPTION  */}
          <p className="md:text-xl">
            With a passion for turning ideas into functional, user-friendly
            solutions, I specialize in building robust web applications using
            modern technologies. From designing intuitive user experiences to
            crafting efficient backend systems, I bring a blend of creativity,
            technical expertise, and a commitment to delivering high-quality
            results.
          </p>

          {/* BUTTONS  */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default Homepage;
