"use client"


import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import NavLink from "./navLink"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    // menu list

    const menuList = [
        { url: "/", title: "home" },
        { url: "/about", title: "About" },
        { url: "/portfolio", title: "Portfolio" },
        { url: "/contact", title: "Contact" },


    ]

    // set framer motion variants

    const topVariant = {
        closed: {
            rotate: 0

        },

        open: {
            rotate: 45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    }


    const centerVariant = {
        closed: {
            opacity: 1

        },

        open: {
            opacity: 0

        }
    }


    const bottomVariant = {
        closed: {
            rotate: 0

        },

        open: {
            rotate: -45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    }

    const listVariants = {
        closed: {
            x: "100vw"
        },
        open: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    const listItemVariants = {
        closed: {

            x: -10,
            opacity: 0
        },

        open: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px:12 xl:px-40 border border-b-[0.4px] border-black">
            {/*Links for large screens*/}
            <div className="hidden md:flex  gap-4 w-1/3 text-xlg">
                {menuList.map(link => (
                    <NavLink link={link} key={link.title} />
                ))}

            </div>

            {/*end of links for large screens*/}


            {/*  OUR LOGO HERE  FOR MOBILE*/}
            <div className="md:hidden lg:flex w-1/3 xl:justify-center">
                <Link href="/" className="text-sm bg-black w-[50px] h-[50px] p-2 text-white rounded-full  font-semibold flex items-center justify-center">
                    <Image src="/padlogo.png" width={50} height={50} alt="logo" className="rounded-full" />
                </Link>
            </div>
            {/*  end of LOGO HERE */}


            {/*Social media links for large screens*/}
            <div className="hidden md:flex gap-6 w-1/3" >
                <Link href="">
                    <Image src="/dribbble.png" alt="github" width={24} height={24} />
                </Link>

                <Link href="">
                    <Image src="/instagram.png" alt="github" width={24} height={24} />
                </Link>

                <Link href="">
                    <Image src="/pinterest.png" alt="github" width={24} height={24} />
                </Link>

                <Link href="">
                    <Image src="/facebook.png" alt="github" width={24} height={24} />
                </Link>

                <Link href="">
                    <Image src="/linkedin.png" alt="github" width={24} height={24} />
                </Link>
            </div>

            {/*end of social media links*/}


            {/*  OUR  MENU WHICH IS RESPONSIVE*/}
            <div className="md:hidden">

                {/*  CREATE MENU BUTTON FOR MOBILE*/}

                <button className="w-10 h-8 flex flex-col justify-between cursor-pointer z-50 relative" onClick={() => setIsOpen(!isOpen)}>
                    <motion.div variants={topVariant} animate={isOpen ? "open" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    <motion.div variants={centerVariant} animate={isOpen ? "open" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
                    <motion.div variants={bottomVariant} animate={isOpen ? "open" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                </button>
                {/*  END MENU BUTTON*/}

                {/*menu items*/}

                {isOpen &&

                    <motion.div variants={listVariants} initial="closed" animate="open" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 z-40">
                        {menuList.map(link => (
                            <motion.div className="" key={link.title} variants={listItemVariants}>
                                <Link href={link.url} >{link.title}</Link>
                            </motion.div>
                        ))}

                    </motion.div>

                }
                {/*end of menu items*/}




            </div>
        </div>
    )
}

export default Navbar