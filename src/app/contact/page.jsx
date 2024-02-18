"use client"

import {motion} from "framer-motion"

const Contactpage = () => {
  return (
    <motion.div
    className="h-full"
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >
      Contact
     </motion.div>
  )
}

export default Contactpage