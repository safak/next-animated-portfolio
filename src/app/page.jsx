"use client"
import {motion} from "framer-motion"

import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="h-full flex flex-col px-4 gap-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">

    {/*image container*/}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
    <Image src="/padisco.png" alt="hero" fill className="object-contain" />
    </div>
    {/*end of image container*/}

    {/*text container*/}
    <div className="mt-9 h-1/2  lg:w-1/2 lg:h-full flex flex-col gap-5 items-center justify-center m-auto md:mt-0 text-center lg:text-left">
    
    {/*TITLE*/}
    <h1 className="text-2xl font-bold md:text-4xl">Creating Fashion Experience, Designing Tomorrow</h1>

    {/*DESCRIPTION*/}
    <p className="text-white text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tempore suscipit esse eveniet eos onsectetur adipisicing elit. Eum .</p>

    {/*buttons*/}
    <div className="lg:w-full flex gap-4">
    <button className="text-sm p-2 lg:p-4 rounded-lg ring-1 ring-black bg-white text-black">View Our Work</button>
    <button className="text-sm p-2 lg:p-4 rounded-lg ring-1 text-white bg-blue-700">Contact Us</button>

    </div>
    </div>

    {/*end of text container*/}
      
    </div>
    </motion.div>
  )
}

export default HomePage
