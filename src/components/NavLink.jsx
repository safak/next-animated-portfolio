"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({link}) => {

const pathName = usePathname();

console.log(pathName);

  return (
    <Link className='' href={link.URL}>{link.title}</Link>
  )
}

export default NavLink