import React from 'react'
import {motion} from 'framer-motion'

export default function HeroMobile() {
  return (
    <>
    
    <motion.div className='hero-container-mobile flex justify-center items-center flex-col space-y-4 pt-[150px]'>
        <div className='text-center'>
            <h1 className='text-White text-7xl font-headers'>TRC</h1>
        </div>
        <h1 className='text-Silver text-center text-lg font-headers'>The Robotics Club Amritapuri</h1>
        <button className='bg-green-300 text-Black text-xs p-1 font-headers w-28'>Connect</button>
    </motion.div>
    </>
  )
}
