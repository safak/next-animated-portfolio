"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
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
  const bottomVairants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
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
  return (
    <div className="h-full protfoilo-container flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {/* links */}
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex  xl:w-1/3 xl:justify-center">
        <Link href="/">
          <div class="name-button">
            <div class="box">N</div>
            <div class="box">E</div>
            <div class="box">L</div>
            <div class="box">S</div>
            <div class="box">O</div>
            <div class="box">N</div>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3 items-end justify-end">
        <ul class="wrapper">
          <li class="icon facebook">
            <span class="tooltip">Facebook</span>
            <Link
              href="https://www.facebook.com/nelson.kc.1048/"
              target="_blank"
            >
              <svg
                viewBox="0 0 320 512"
                height="1.2em"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </Link>
          </li>
          <li class="icon linkedin">
            <span class="tooltip">LinkedIn</span>
            <Link
              href="https://www.linkedin.com/in/nelson-katwal-027abc/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                id="linkedin"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 20h-4v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991V20H7V7h4v1.462s1.255-2.202 4.083-2.202C17.912 6.26 20 7.986 20 11.558V20zM2.442 4.921A2.451 2.451 0 0 1 0 2.46 2.451 2.451 0 0 1 2.442 0a2.451 2.451 0 0 1 2.441 2.46 2.45 2.45 0 0 1-2.441 2.461zM0 20h5V7H0v13z"
                ></path>
              </svg>
            </Link>
          </li>
          <li class="icon github">
            <span class="tooltip">GitHub</span>
            <Link target="_blank" href="https://github.com/ChetreNelson">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                id="github"
                fill="currentColor"
              >
                <path
                  fill-rule="currenColor"
                  d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
                ></path>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative "
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVairants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black
         text-white  flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link,index) => (
              <motion.div key={index} variants={listItemVariants}>
                <Link href={link.url} key={link.title}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
