import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.querySelector(".projects-container");
      const sectionTop = projectsSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.2; // Adjust the trigger point

      if (sectionTop < triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="projects-container flex pt-8 px-72 font-headers text-White text-lg flex-col space-y-20"
        initial={{ opacity: 0, x: 100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* First Project */}
        <motion.div
          className="project01-container flex"
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="min-h-[400px] min-w-[700px] backdrop-blur-lg bg-White p-8 bg-opacity-10 border shadow-lg rounded-lg border-white/20">
            Project01
          </div>
          <div className="min-h-96 min-w-96 p-8"></div>
        </motion.div>

        {/* Second Project */}
        <motion.div
          className="project01-container flex"
          initial={{ x: 100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="min-h-96 min-w-[600px] p-8"></div>
          <div className="min-h-[400px] min-w-[700px] backdrop-blur-lg bg-White p-8 bg-opacity-10 border shadow-lg rounded-lg border-white/20">
            Project02
          </div>
        </motion.div>

        {/* Third Project */}
        <motion.div
          className="project01-container flex"
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="min-h-[400px] min-w-[700px] backdrop-blur-lg bg-White p-8 bg-opacity-10 border shadow-lg rounded-lg border-white/20">
            Project03
          </div>
          <div className="min-h-96 min-w-96 p-8"></div>
        </motion.div>
      </motion.div>
    </>
  );
}
