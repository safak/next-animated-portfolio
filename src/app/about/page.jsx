"use client"
import React from 'react'
import {motion} from "framer-motion"

const aboutPage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    {/*CONTAINER*/}
 <div className="">
    {/* TEXT CONTAINER*/}
    <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
    {/*  HISTORY CONTAINER*/}
    <div className="">
    <div className="flex flex-col gap-12 justify-center">
    <h1 className='font-bold text-2xl'>Our History</h1>
    <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius nihil cum omnis aut? Aperiam maiores nisi neque voluptates nobis nam. Cupiditate repellat aut laboriosam itaque nemo quibusdam voluptates, quod neque unde quasi, corrupti blanditiis.</p>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore aliquam quibusdam, rem </span>
    
    </div>

    </div>
    {/*  SKILLS CONTAINER*/}

    
    <div className="flex flex-col gap-12 justify-center">
    <h1 className='font-bold text-2xl'>What we do</h1>
    {/*Skill list*/}
    <div className="flex gap-4 flex-wrap">
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Javascript</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Typescript</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Web 3.0</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Python</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Data Science</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">FrontEnd</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Backend</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Linux</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tutor</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Bsc Maths</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Bsc Computer science</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">c and c++</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">System Programming</div>
    </div>



    




    </div>
    
    {/*  EXPERIENCE CONTAINER*/}
    <div className="flex flex-col gap-12 justify-center">
    <h1 className='font-bold text-2xl'>Our Experience</h1>
    {/*experience list*/}
    <div className="">
    
{/*left*/}
<div className="">

<div className="">Senior Web Engineer</div>
<div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea voluptates numquam quisquam perspiciatis?</div>
<div className="">2021-Present</div>
{/*job company*/}
<div className="">Padisco</div>
</div>

{/*center*/}
<div className="">
{/*line*/}
<div className="">
{/*circle*/}
<div className=""></div>
</div>
</div>

<div className="">
    
{/*left*/}
<div className="">

<div className="">Senior Web Engineer</div>
<div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea voluptates numquam quisquam perspiciatis?</div>
<div className="">2021-Present</div>
{/*job company*/}
<div className="">Padisco</div>
</div>

{/*center*/}
<div className="">
{/*line*/}
<div className="">
{/*circle*/}
<div className=""></div>
</div>
</div>

{/*right*/}

<div className=""></div>

    </div>

{/*right*/}

<div className=""></div>

    </div>

    <div className="">
    
    {/*left*/}
    <div className="">
    
    <div className="">Senior Web Engineer</div>
    <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea voluptates numquam quisquam perspiciatis?</div>
    <div className="">2021-Present</div>
    {/*job company*/}
    <div className="">Padisco</div>
    </div>
    
    {/*center*/}
    <div className="">
    {/*line*/}
    <div className="">
    {/*circle*/}
    <div className=""></div>
    </div>
    </div>
    
    {/*right*/}
    
    <div className=""></div>
    
        </div>
    </div>
    </div>
    {/*SVG CONTAINER*/}
<div className=""></div>
 </div>

    {/*END OF CONTAINER*/}  
   </motion.div>
  )
}

export default aboutPage
