import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Drone from '../assets/images/drone.jpg';
import Humanoid from '../assets/images/humanoid.jpg';
import Hexapod from '../assets/images/hexapod.jpg';
import Rarrow from '../assets/images/rightarrow.svg';
import Larrow from '../assets/images/leftarrow.svg';

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      image: Hexapod,
      title: "Hexapod Robot",
      description: "A hexapod robot is a mechanical vehicle .",
    },
    {
      image: Drone,
      title: "Drone Technology",
      description: "Advanced drones designed for versatile applications.",
    },
    {
      image: Humanoid,
      title: "Humanoid Robot",
      description: "A robot designed to imitate human movements and tasks.",
    },
    {
      image: Drone,
      title: "Surveillance Drone",
      description: "A drone specifically for security and surveillance purposes.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
  ];

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className=" h-[500px]  text-White flex py-10 mx-72 bg-transparent overflow-hidden">
      {/* Left Arrow */}
      <h1
        className="text-White w-1/6 text-center text-3xl hover:cursor-pointer mt-40 ml-4"
        onClick={handlePrev}
      >
        <img src={Larrow} alt="" width={40} height={40} />
      </h1>

      {/* Text Section */}
      <div className="text-holder w-1/6 justify-center flex flex-col items-center mr-10">
        <h2 className="text-4xl font-headers">Our Projects</h2>
        
        <button
          className="p-4 mt-8 font-headers bg-green-700 text-White rounded-3xl"
          onClick={() => navigate("/achievements")}
        >
          Explore all Projects
        </button>
      </div>

      {/* Slider Section */}
      <div className="relative w-3/6 ml-16">
        <motion.div
          className="flex space-x-4"
          key={currentIndex}
          custom={direction}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
        >
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-green-800/30 w-1/2  flex flex-col shadow-lg"
            >
              <img
                src={project.image}
                className="w-full h-40 object-cover"
                alt={project.title}
              />
              <h1 className="text-xl font-primary font-bold p-4">
                {project.title}
              </h1>
              <p className="text-gray-400 pt-2 font-primary font-bold ml-4 pl-2">
                {project.description}
              </p>
              <button className="mx-4 mb-4 rounded-lg mt-4 text-black font-primary p-2 bg-green-500">
                Learn more
              </button>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Arrow */}
      <h1
        className="text-White text-3xl w-1/6 text-center hover:cursor-pointer mt-44 pl-36"
        onClick={handleNext}
      >
        <img src={Rarrow} alt="Right Arrow" width={40} height={40} />
      </h1>
    </div>
  );
}
