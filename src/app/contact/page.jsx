"use client";
import React from "react";
import { motion } from "framer-motion";
const text = "Say Hello To Padisco SH";
const contactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex gap-6 flex-col lg:flex-row px-4 sm:px-12 lg:px-20 xl:px-48">
        {/*HELLO CONTAINER*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                className=""
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            👞
          </div>
        </div>

        {/*FORM CONTAINER*/}
        <form className="h-[430px] lg:h-full lg:w-1/2 bg-gradient-to-b from-yellow-300 to-black rounded-xl text-xl flex flex-col gap-8 justify-center p-24 sm:p-36 mt-3">
          <span>Dear Ps Customers</span>
          <textarea
            rows={2}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>Our email address is</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>Regards</span>
          <button className="bg-blue-700 rounded font-semibold text-white p-4">
            Send📩
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default contactPage;
