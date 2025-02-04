"use client";

import { motion, AnimatePresence } from "motion/react";
import NavBar from "./navBar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-gradient-from via-gradient-mid to-gradient-to text-primary-text relative"
      >
        <motion.div
          className="h-screen w-screen fixed bg-primary-text rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed top-0 bottom-0 right-0 left-0 m-auto text-accent-text text-8xl w-fit h-fit z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.replace("/", "")}
        </motion.div>

        <motion.div
          className="h-screen w-screen fixed bg-primary-text rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <NavBar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
        <div className="absolute z-0 w-0 lg:w-full h-36 top-0 left-0 min-w-30 md:hidden lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            zoomAndPan="magnify"
            viewBox="0 0 4500 2000"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
            className="absolute z-0"
          >
            <defs>
              <radialGradient
                id="lightGradient"
                cx="50%"
                cy="20%"
                r="50%"
                fx="50%"
                fy="20%"
              >
                <stop
                  offset="0%"
                  style={{
                    stopColor: "rgba(var(--secondary-bg), 0.6)",
                    stopOpacity: 0.8,
                  }}
                />
                <stop
                  offset="25%"
                  style={{
                    stopColor: "rgba(var(--secondary-bg), 0.4)",
                    stopOpacity: 0.6,
                  }}
                />
                <stop
                  offset="50%"
                  style={{
                    stopColor: "rgba(var(--secondary-bg), 0.3)",
                    stopOpacity: 0.4,
                  }}
                />
                <stop
                  offset="75%"
                  style={{
                    stopColor: "rgba(var(--secondary-bg), 0.2)",
                    stopOpacity: 0.2,
                  }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "rgba(var(--secondary-bg), 0)",
                    stopOpacity: 0,
                  }}
                />
              </radialGradient>
            </defs>
            <rect
              fill="url(#lightGradient)"
              width="100%"
              height="100%"
              className="z-0"
            />
          </svg>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
