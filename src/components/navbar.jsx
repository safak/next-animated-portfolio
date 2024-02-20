"use client"

import Link from 'next/link';
import { useState } from 'react';
import NavLink from './navLink';
import { motion } from 'framer-motion';

const links = [
    {url: '/', title: 'Home'},
    {url: '/about', title: 'About'},
    {url: '/portfolio', title: 'Protfolio'},
    {url: '/contact', title: 'Contact'},
];


const Navbar = () => {
    const [open, setopen] = useState(false);

    const topVariants = {
        closed:{
            rotate: 0,
        },
        open:{
            rotate: 45,
            backgroundColor: "rgb(255,255,255)"
        }
    }

    const centerVariants = {
        closed:{
            opacity: 1,
        },
        open:{
            opacity: 0,
        }
    }

    const bottomVariants = {
        closed:{
            rotate: 0,
        },
        open:{
            rotate: -45,
            backgroundColor: "rgb(255,255,255)"
        },
    };

    const listVariants = {
        closed:{ 
            x:"100vw",
        },
        opened:{
            x:0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.3,
            },
        },
    };

    const listItemVariants = {
        closed:{
            x:-10,
            opacity:0
        },
        opened:{
            x:0,
            opacity:1,
        } 
    };


    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/* Links */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map((link) => (
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>
            {/* Logo */}
            <div className="md:hidden lg:flex xl:w-1/3  xl:justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center ">
                    <span className="text-white mr-1">Sheldon</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Liang</span>
                </Link>
            </div>
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="https://github.com/quanzhaoliang"> 
                    <img src="/github.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://www.linkedin.com/in/sheldonliangqz/">
                    <img src="/linkedin.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="/"> 
                    <img src="./facebook.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="/">
                    <img src="/instagram.png" alt="" width={24} height={24}/>
                </Link>
            </div>
            <div className="md:hidden">
                {/* Menu Button */}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=>setopen((prev) => !prev)}>
                    <motion.div 
                        variants={topVariants} 
                        animate={open ? "open" : "closed"}
                        className='w-10 h-1 bg-black rounded origin-left'>
                    </motion.div>
                    <motion.div 
                        variants={centerVariants} 
                        animate={open ? "open" : "closed"}
                        className='w-10 h-1 bg-black rounded'>
                    </motion.div>
                    <motion.div 
                        variants={bottomVariants} 
                        animate={open ? "open" : "closed"}
                        className='w-10 h-1 bg-black rounded origin-left'>
                    </motion.div>
                </button>
                 {/* Menu List */}
                 {open && (
                 <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                    {links.map((link) => (
                        <motion.div variants={listItemVariants}>
                            <Link href={link.url} key={link.title}>
                                {link.title}
                            </Link>
                        </motion.div>
                    ))}
                 </motion.div>
                 )}
            </div>
        </div>
    )
}

export default Navbar;