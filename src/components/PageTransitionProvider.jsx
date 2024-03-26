"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import Image from "next/image";

const PageTransitionProvider = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname==='/about' ? 
      <Image src="/padlogo.png" alt="logo" width={200} height={200} className="rounded-full h-23 w-23 bg-red-600 z-40"/> : pathname
      }
        className="w-screen h-screen bg-gradient-to-b from-yellow-300 to-black"
      >
        {/* first page animation*/}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/*text pathname*/}

        <motion.div
          className="fixed  m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathname.substring(1)}
        </motion.div>

        {/* second page animation*/}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-96px)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransitionProvider;
