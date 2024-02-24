"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      href={link.url}
      className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
