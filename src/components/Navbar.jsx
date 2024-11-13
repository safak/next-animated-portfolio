"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const links = [
    { URL: "/", title: "Home" },
    { URL: "/about", title: "About" },
    { URL: "/portfolio", title: "Portfolio" },
    { URL: "/contact", title: "Contact" },
];

const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>

        {/* LINKS */}
        <div className=' hidden md:flex gap-4 w-1/3'>
            {links.map(link => (<Link href={link.URL} key={link.title}>{link.title}</Link>))}
        </div>

        {/* LOGO */}
        <div className='md:hidden lg:flex w-1/3 justify-center'>
            <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
                <span className='text-white mr-1'>Armaan</span>
                <span className='w-13 h-8 rounded bg-white text-black flex items-center justify-center'>Mohamed</span>
            </Link>
        </div>

        {/* SOCIAL LINKS */}
        <div className="hidden md:flex gap-4 w-1/3">
            <Link href="https://github.com/The-Armaan-Mohamed">
                <Image src='/github.png' alt='' width={24} height={24}/>
            </Link>
            <Link href="https://github.com/The-Armaan-Mohamed">
                <Image src='/dribbble.png' alt='' width={24} height={24}/>
            </Link>
            <Link href="https://github.com/The-Armaan-Mohamed">
                <Image src='/facebook.png' alt='' width={24} height={24}/>
            </Link>
            <Link href="https://github.com/The-Armaan-Mohamed">
                <Image src='/instagram.png' alt='' width={24} height={24}/>
            </Link>
            <Link href="https://github.com/The-Armaan-Mohamed">
                <Image src='/linkedin.png' alt='' width={24} height={24}/>
            </Link>
            <Link href="https://github.com/The-Armaan-Mohamed">
                <Image src='/pinterest.png' alt='' width={24} height={24}/>
            </Link>
        </div>

        {/* RESPONSIVE MENU */}
        <div className='md:hidden'>
            {/* MENU BUTTON */}
            <button className='w-10 h-8 flex flex-col justify-between z-50 relative' 
            onClick={()=>setOpen((prev) => !prev)}
            >
                <div className='w-10 h-1 bg-white rounded'></div>
                <div className='w-10 h-1 bg-white rounded'></div>
                <div className='w-10 h-1 bg-white rounded'></div>
            </button>

            {/* MENU LIST */}
            {open && (
                <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
                {links.map(link=>(<Link href={link.URL} key={link.title}>{link.title}</Link>))}
            </div>
            )}
        </div>

    </div>
  )
}

export default Navbar