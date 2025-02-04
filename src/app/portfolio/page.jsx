"use client";

import HorizontalScrollCarousel from "./horizontalScrollCarousel";
import HireMeAnimation from "./hireMeAnimation";
import AnimatedPageWrapper from "@/components/animatedPageWrapper";
import StarryBg from "./starryBg";
import ScrollIcon from "../about/scrollIcon";

const PortfolioPage = () => {
  return (
    <AnimatedPageWrapper>
      <div className="h-full">
        {/* <div className="h-[500vh]"> */}
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center text-6xl md:text-8xl text-center">
            My Work
          </div>
          <div className="bottom-16 absolute md:hidden">
            <ScrollIcon />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="w-full h-screen absolute top-1/4 md:top-24 left-0 ">
            <StarryBg />
          </div>
        </div>

        <HorizontalScrollCarousel />

        <div className="h-screen w-screen flex flex-col gap-16 justify-center items-center text-center app-container bg-gradient-to-b from-gradient-to via-gradient-mid to-gradient-from">
          <h1 className="text-4xl md:text-6xl lg:text-8xl flex flex-wrap">
            Do you have a project?
          </h1>

          <HireMeAnimation />
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default PortfolioPage;
