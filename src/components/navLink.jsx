"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded px-2 py-1 ${
        pathName === link.url &&
        "bg-accent-secondary-bg text-accent-text hover:text-accent-text "
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
