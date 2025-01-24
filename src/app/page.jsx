"use client";

import Image from "next/image";

import AnimatedPageWrapper from "@/components/animatedPageWrapper";
import Hero from "@/components/hero";

const Homepage = () => {
  return (
    <AnimatedPageWrapper>
      <div className="h-full flex flex-col lg:flex-row app-container">
        {/* IMAGE CONTAINER  */}
        <div className="home-section relative object-contain">
          {/* <Image src="/hero.png" alt="hero" fill className="object-contain" /> */}
          {/* <Image
            src="/hand-coding-animate.svg"
            alt="hero"
            fill
            className="object-contain"
          /> */}
          <Hero />
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
            <button className="p-4 rounded-lg ring-1 ring-accent-bg bg-accent-bg hover:bg-accent-hover hover:ring-2 hover:ring-accent-hover text-accent-text">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-accent-bg text-primary-text hover:ring-accent-bg hover:ring-2">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default Homepage;
