import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from './Navbar';
import Lana from '../assets/images/lanadelrey.webp';
import Travis from '../assets/images/travis.webp';
import Charlie from '../assets/images/Charlie.webp';
import Lamar from '../assets/images/lamar.jpg';
import Ach1 from '../assets/images/ach01.png'
import Ach2 from '../assets/images/ach02.png'
import Ach3 from '../assets/images/ach03.png'
import Ach4 from '../assets/images/ach04.png'


export default function Achievements() {
  const achievements = [
    { id: 1, title: "Robocon Runner ups", img: Ach1,desc:"Achieved the prestigious runner-up position in Robocon, one of the most competitive and renowned robotics competitions. This success highlights our team's technical expertise and ability to deliver innovative solutions in robotics." },
    { id: 2, title: "Hexapod Project Funding", img: Ach2,desc:"Secured funding for the development of an advanced Hexapod robot, showcasing our innovative project proposal and commitment to advancing robotics research and technology." },
    { id: 3, title: "Embrace Challenges", img: Ach3 ,desc:"loremfmnjgdbhfjhgwefywergjgewjrgejwgrjewgrjewgrjwegrewjrghwejrgejwhgr ehjwgrehjwgr jhewgrj ehgerwjhewgjsdvcndsvhfjhdgvfjwehgrjwehgrejqwevhjqwgefvhqwvehqwgvhgqfvwhq gvehgqwefvhwegrfvheqwgvnbqwevnbqwevnbqwevnbqwe"},
    { id: 4, title: "Battle Bots in Vidyut", img: Ach4 ,desc:"We successfully hosted an exciting Battle Bots competition during the Vidyut National-Level Multifest, drawing enthusiastic participation from numerous teams. The event inspired participants and audiences alike, fostering a deeper passion for robotics and competitive engineering."},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Handle arrow key navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && currentIndex < achievements.length - 1) {
      setCurrentIndex((prev) => prev + 1); // Move to the next achievement
    } else if (e.key === "ArrowUp" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1); // Move to the previous achievement
    }
  };

  // Automatically focus the container when the component mounts
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

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
        tabIndex={0} // Make the container focusable
        onKeyDown={handleKeyDown} // Listen for key events
        ref={containerRef} // Reference for setting focus
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
              className="scrollbar-hide absolute flex space-x-10 px-72 items-center overflow-hidden"
            >
              <div className="flex flex-col space-y-6 w-1/3 justify-center items-center">
                <h1 className="scrollbar-hide font-headers text-5xl text-white font-bold overflow-hidden">
                  {achievements[currentIndex].title}
                </h1>
                <p className="text-lg font-primary text-white font-bold">
                  {achievements[currentIndex].desc}
                </p>
              </div>
              <img
                src={achievements[currentIndex].img}
                alt={achievements[currentIndex].title}
                width={900}
                height={900}
                className="mt-8 w-2/3 overflow-hidden scrollbar-hide"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
