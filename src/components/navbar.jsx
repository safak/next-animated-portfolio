"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "motion/react";

const list = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "white",
  },
};

const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "white",
  },
};

const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

const listVariants = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between app-container text-xl relative">
      <div className="hidden md:flex md:w-1/3 md:flex-shrink z-20">
        {list.map((item, index) => (
          <NavLink key={index} link={item} />
        ))}
      </div>
      {/* Logo  */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm font-semibold bg-black rounded-md p-1 flex items-center justify-center"
        >
          <span className="text-white mr-1">Anel</span>
          <span className="bg-white text-black h-8 px-1 flex items-center justify-center rounded">
            Danza
          </span>
        </Link>
      </div>

      <div className="hidden md:flex space-x-4 w-1/3 justify-end">
        <Link href="https://github.com/aneldanza" target="_blank">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/anel-danza/" target="_blank">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
      </div>

      {/* Responsive Menu  */}
      <div className="md:hidden">
        {/* Menu button */}
        <button
          className="flex flex-col h-8 justify-between z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            variants={topVariants}
            animate={isOpen ? "opened" : "closed"}
            className="h-1 w-10 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={isOpen ? "opened" : "closed"}
            className="h-1 w-10 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={isOpen ? "opened" : "closed"}
            className="h-1 w-10 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* Menu */}

        {isOpen && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 right-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center space-y-8 text-4xl z-40"
          >
            {list.map((item, index) => (
              <motion.div variants={listItemVariants} key={index}>
                <Link href={item.url}>{item.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
