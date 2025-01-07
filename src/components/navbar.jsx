"use client";

import { useState } from "react";
import Link from "next/link";

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
      {/* Logo  */}
      <div>
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

      {/* Menu button */}
      <div>
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
