import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <>
    <motion.div
     className='hero-container flex justify-center items-center flex-col space-y-6 w-full pt-[4rem] h-screen'
     initial={{opacity:0,x:-100}}
     animate={{opacity:1,x:0}}
     transition={{duration:1,ease:'easeInOut'}}
     >
      <div className='z-10 text-center'>
      <h1 className='text-White text-9xl font-primary font-bold'>TRC</h1>
      </div>
        
        <h1 className='text-Silver text-7xl font-primary font-bold'>The Robotics Club Amritapuri</h1>
        <button className='bg-green-300 text-Black p-4 font-headers w-44 '>Connect</button>
    </motion.div>
    
    </>
  )
}
