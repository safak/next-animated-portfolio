"use client";

import HorizontalScrollCarousel from "./horizontalScrollCarousel";
import HireMeAnimation from "./hireMeAnimation";
import AnimatedPageWrapper from "@/components/animatedPageWrapper";

const PortfolioPage = () => {
  return (
    <AnimatedPageWrapper>
      <div className="h-[500vh]">
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center text-6xl md:text-8xl text-center">
            My Work
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
