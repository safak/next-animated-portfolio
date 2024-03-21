"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({link}) => {

    const pathname=usePathname();

  return (
    <Link className={`rounded p-1 ${pathname===link.url ? "bg-black text-white" : ""}`} href={link.url}>{link.title}</Link>
  )
}

export default NavLink
