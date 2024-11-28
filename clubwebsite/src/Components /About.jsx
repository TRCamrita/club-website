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
    <div className='about-page-container flex py-12 px-60 h-auto w-full justify-center items-center bg-Black text-White font-primary'>
      <motion.div
        className='desc-container flex flex-col items-center bg-inherit space-y-2 w-full text-inherit'
        initial={{ x: -100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className='text-4xl font-bold' id='about'>ABOUT</h1>
        <p className='text-xl pt-6 leading-normal text-center summary'>
          The Robotics Club Amritapuri (TRC) is a vibrant community of tech enthusiasts and innovators passionate about exploring the fascinating world of robotics and automation. Our mission is to nurture creativity, technical expertise, and collaborative problem-solving skills by providing students with hands-on opportunities to design, build, and program robots. From beginner-friendly workshops to advanced research projects, TRC offers a platform for students to learn, experiment, and transform their ideas into reality. The club actively participates in national and international robotics competitions.
          At TRC, we believe in bridging the gap between theoretical knowledge and practical application. Members of the club work on a diverse range of projects, including autonomous vehicles, humanoid robots, and AI-powered systems, integrating fields like artificial intelligence, electronics, and mechanical engineering. Beyond technical skills, TRC fosters a culture of teamwork and leadership, empowering students to thrive in multidisciplinary environments. Whether you are a seasoned robotics expert or a curious beginner, TRC is the perfect space to learn, collaborate, and innovate.
        </p>
      </motion.div>
    </div>
  );
}
