import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Project2 from '../assets/images/project02.png';
import Project1 from '../assets/images/project01.png';
// import Project3 from '../assets/images/project03.png';
import Rarrow from '../assets/images/rightarrow.svg';
import Larrow from '../assets/images/leftarrow.svg';
import Drone from '../assets/images/drone.jpg'
import Humanoid from '../assets/images/humanoid.jpg'

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      image: Project1,
      title: "Hexapod Robot",
      description: "A hexapod robot is a mechanical vehicle. which is good at walking",
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
      image: Project2,
      title: "Surveillance Drone",
      description: "A drone specifically for security and surveillance purposes.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ];

  return (
    <div className="flex flex-col items-center py-10 mx-72 bg-transparent">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl text-White font-headers">Our Projects</h2>
        <button
          className="p-4 mt-6 font-headers bg-green-700 text-white rounded-xl"
          onClick={() => navigate("/achievements")}
        >
          Explore more
        </button>
      </div>

      {/* Slider Section */}
      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2"
          onClick={handlePrev}
        >
          <img src={Larrow} alt="Left Arrow" width={40} height={40} />
        </button>

        {/* Projects Slider */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-green-950 w-1/4 flex flex-col shadow-lg rounded-md"
            >
              <img
                src={project.image}
                className="w-full h-40 object-cover rounded-t-lg"
                alt={project.title}
              />
              <div className="flex flex-col justify-between h-full p-4">
                <h1 className="text-xl font-headers text-white">
                  {project.title}
                </h1>
                <p className="text-gray-400 text-lg pt-2 font-primary font-bold">
                  {project.description}
                </p>
                <button className="rounded-lg mt-4 text-black font-headers p-2 bg-green-500">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          onClick={handleNext}
        >
          <img src={Rarrow} alt="Right Arrow" width={40} height={40} />
        </button>
      </div>
    </div>
  );
}
