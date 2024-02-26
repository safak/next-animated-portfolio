"use client"

import { easeInOut, motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const items = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'travel advisory app',
    desc: 'Built and deployed a feature-rich Travel Advisor application using React Native Expo, integrating various technologies for an enhanced user experience.',
    img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    tags: [
      'React Native',
      'JavaScript',
      'map integration',
      'Data fetching ApI',
    ],
    category: 'mobile app',
    github: 'https://github.com/ermiyasassegu/travel_advisory_app',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'hotel booking app',
    desc: 'Developed and deployed a comprehensive Traveler app for booking various residing places, utilizing the MERN (MongoDB, Express.js, React, Node.js) stack. State management is implemented seamlessly with Redux Toolkit.',
    img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    tags: ['React Js', 'MongoDb', 'Node Js', 'Express Js', 'Redux'],
    category: 'web app',
    github:
      'https://github.com/ermiyasassegu/MERN-full-stack-hotel-booking-app',
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'Todo Web App',
    desc: ' A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.',
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Js', 'Local Storage', 'AWS Auth', 'Node JS'],
    category: 'web app',
    github: 'https://github.com/ermiyasassegu/Todo-Web-App',
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Laundry App',
    desc: 'Built as a cross-platform mobile application using React Native, this laundry app facilitates seamless pick-up and drop-off services. The app employs Firebase for both email authentication and as the database, utilizing Firestore for efficient data management.',
    img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    tags: ['Javascript', 'React Native', 'Firebase', 'Firestore'],
    category: 'mobile app',
    github: 'https://github.com/ermiyasassegu/Laundry_app_react_native',
  },
]

const Portfoliopage = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-[600vh]' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
          My Projects
        </div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className='flex flex-col gap-16 text-white'>
                  <h1 className='text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl'>
                    {item.title}
                  </h1>
                  <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                    <Image src={item.img} alt='' fill />
                  </div>
                  <p className='w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]'>
                    {item.desc}
                  </p>
                  <Link href={item.github} className='flex justify-end'>
                    <button className='p-2 text-sm  md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-2 rounded-full'>
                      Check On GitHub
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='h-screen w-screen flex flex-col gap-16 items-center justify-center text-center'>
        <h1 className='text-4xl md:text-6xl xl:text-8xl'>
          Do you have a Project?
        </h1>
        <div className='relative'>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox='0 0 300 300'
            className='w-64 h-64 md:w-[500px] md:h-[500px]'
          >
            <defs>
              <path
                id='circlePath'
                d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '
              />
            </defs>
            <text fill='#000'>
              <textPath xlinkHref='#circlePath' className='text-xl'>
                Mobile Developer & Frontend Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href='/contact'
            className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Portfoliopage