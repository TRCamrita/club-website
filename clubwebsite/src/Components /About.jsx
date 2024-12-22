import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-page-container');
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.2; // Adjust trigger point as needed

      if (sectionTop < triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-page-container flex py-12 px-72 h-auto w-full justify-center items-center  text-White font-primary relative">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <motion.div
        className="desc-container flex flex-col items-center bg-inherit space-y-2 w-full text-inherit"
        initial={{ x: -100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-headers" id="about">
          ABOUT
        </h1>
        <p className="text-xl pt-6 leading-normal text-justify summary">
        The Robotics Club at [Your College Name] is a community of passionate engineers and innovators, all driven by a shared love for robotics, automation, and technology. From designing agile hexapods that move like animals to building AGVs that can find their own path, we bring ideas to life. From screw to nut, we engage in all kinds of projects, tackling every detail and pushing our limits along the way. With the guidance of our mentors and the energy of our members, the club has grown into a space where creativity and technical skills come together to make a real impact. Our goal is to bridge the gap between what we learn in the classroom and the real world, helping each member grow by designing and building autonomous systems while fostering critical thinking and creativity. We believe in more than just technical expertise—we focus on personal growth too, encouraging resilience, empathy, and the drive to learn independently. Our outreach programs and community projects aim to use technology to solve real-world problems and make a difference. At The Robotics Club, we dream big, challenge limits, and work together to create a future where innovation has no boundaries. Join us, and let’s shape the future of robotics together.
        </p>
      </motion.div>
    </div>
  );
}
