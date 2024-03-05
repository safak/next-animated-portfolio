"use client";

import NavLink from "./navLink";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {Links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center"
        >
          <span className=" text-white  mr-1">carl</span>
          <span className="w-12 h-8 bg-white text-black flex justify-center items-center">
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL ICONS */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="/">
          <Image src="/github.png" alt="github icon" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image
            src="/dribbble.png"
            alt="dribbble icon"
            width={24}
            height={24}
          />
        </Link>{" "}
        <Link href="/">
          <Image
            src="/linkedin.png"
            alt="linkedin icon"
            width={24}
            height={24}
          />
        </Link>{" "}
        <Link href="/">
          <Image
            src="/instagram.png"
            alt="instagram icon"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}

      <div className="md:hidden">
        {/* HAMBURGER MENU */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>{" "}
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {Links.map((link) => (
              <Link href={link.url} key={link.title} className="">
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
