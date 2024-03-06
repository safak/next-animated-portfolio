"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import SocialLink from "./SocialLink";
import { LINKS, SOCIAL_LINKS } from "@/constant";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const lastVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {LINKS.map((link) => {
          return <NavLink key={link.title} link={link} />;
        })}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3  xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-purple-500 rounded-md p-1 font-semibold flex justify-center items-center"
        >
          <span className="mr-1 text-white">Mad</span>
          <span className="w-12 h-8 flex justify-center items-center bg-slate-50 text-purple-500 rounded">
            .dev
          </span>
        </Link>
      </div>

      {/* Social */}
      <div className="hidden md:flex gap-4 w-1/3">
        {SOCIAL_LINKS.map((link) => {
          return <SocialLink link={link} />;
        })}
      </div>

      {/* Responsive Menue */}
      <div className="md:hidden">
        {/* Menu Btn */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-10 h-8 flex flex-col justify-between relative z-50"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="rounded w-10 h-1 bg-purple-950 origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="rounded w-10 h-1 bg-purple-950"
          ></motion.div>
          <motion.div
            variants={lastVariants}
            animate={open ? "opened" : "closed"}
            className="rounded w-10 h-1 bg-purple-950 origin-left"
          ></motion.div>
        </button>

        {/* Menu List */}
        {open && (
          <div className="flex flex-col justify-center items-center  absolute z-40 top-0 left-0 w-screen h-screen bg-purple-500 text-white text-4xl">
            {LINKS.map((link) => {
              return (
                <Link key={link.title} href={link.url}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
