"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const list = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      <div className="hidden md:flex space-x-4 w-1/3">
        {list.map((item, index) => (
          <Link key={index} href={item.url}>
            {item.title}
          </Link>
        ))}
      </div>
      {/* Logo  */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
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
          <div className="h-1 w-10 bg-black rounded"></div>
          <div className="h-1 w-10 bg-black rounded"></div>
          <div className="h-1 w-10 bg-black rounded"></div>
        </button>

        {/* Menu */}

        {isOpen && (
          <div className="absolute top-0 left-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center space-y-8 text-4xl">
            {list.map((item, index) => (
              <Link key={index} href={item.url}>
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
