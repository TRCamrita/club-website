import React, { useState, useEffect } from 'react'
import Logo from '../assets/images/logo.png'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Navbar() {

  // defining a state variable to store the scroll position 
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    };
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrolltoAbout = () => {

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }




  return (
    <>
      <div className={`sticky-navbar-container fixed top-0 w-full text-White font-headers p-6 rounded-2xl  h-auto  z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black bg-opacity-70 shadow-lg'
        : 'bg-transparent'}`}>

        <div className='inner-navbar-container flex justify-between items-center mx-auto'>
          <div className='logo-container hover:scale-110 transition-transform duration-300 ease-in-out flex justify-center items-center'>
            <img src={Logo} alt="Logo" width={100} height={100} />
          </div>
          <div className='menu-items-container'>
            <ul className='flex justify-between space-x-16 font-tertiary text-lg items-center'>
              <li><a href="#" onClick={()=>navigate("/")} className='hover:text-green-300 transition-colors duration-300'>Home</a></li>
              <li><a onClick={handleScrolltoAbout} className='hover:text-green-300 transition-colors duration-300 cursor-pointer'>About</a></li>
              <li><a href="#" onClick={()=>{navigate('/members')}} className='hover:text-green-300 transition-colors duration-300'>Members</a></li>
              <li><a href="#" onClick={()=>navigate("/achievements")} className='hover:text-green-300 transition-colors duration-300'>Achievements</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
