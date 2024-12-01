import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Navbar from './Navbar'
import Lana from '../assets/images/lanadelrey.webp'
import Travis from '../assets/images/travis.webp'
import Charlie from '../assets/images/Charlie.webp'
import Lamar from '../assets/images/lamar.jpg'


export default function Achievements() {
    const achievements = [
        { id: 1, title: "Doctor Driving", img: Lana },
        { id: 2, title: "Reach Beyond Your Limits", img:Travis  },
        { id: 3, title: "Embrace Challenges", img: Charlie },
        { id: 4, title: "Inspire Others", img: Lamar },
      ];


      const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const delta = e.deltaY;

    if (delta > 0 && currentIndex < achievements.length - 1) {
      // Scroll down
      setCurrentIndex((prev) => prev + 1);
    } else if (delta < 0 && currentIndex > 0) {
      // Scroll up
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 200 : -200, // Horizontal movement
      y: direction > 0 ? 200 : -200, // Vertical movement
    }),
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -200 : 200, // Horizontal movement opposite to entry
      y: direction > 0 ? -200 : 200, // Vertical movement opposite to entry
    }),
  };
    return (
        <>
           <div
      className="animated-background bg-black min-h-screen scrollbar-hide overflow-hidden"
      onWheel={handleScroll}
    >
      <Navbar />
      <div className="h-screen flex scrollbar-hide items-center justify-center overflow-hidden">
        <AnimatePresence custom={currentIndex}>
          <motion.div
            key={achievements[currentIndex].id}
            custom={currentIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
            className=" scrollbar-hide absolute flex space-x-10 px-72 items-center overflow-hidden"
          >
            <div className='flex flex-col space-y-6 w-1/3 justify-center items-center'>
            <h1 className=" scrollbar-hide font-headers text-5xl text-white font-bold overflow-hidden">
              {achievements[currentIndex].title}
            </h1>
            <p className='text-lg  font-primary text-White font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, necessitatibus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <img
              src={achievements[currentIndex].img}
              alt={achievements[currentIndex].title}
              width={900}
              height={900}
              className="mt-8 w-2/3  overflow-hidden scrollbar-hide"
            />
          </motion.div>
        </AnimatePresence>
      </div>


    
    </div>
        </>
  )
}
