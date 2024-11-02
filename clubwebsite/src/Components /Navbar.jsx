import React from 'react'
import logo from '../assets/images/logo-filtered.png'
import Instagram from '../assets/images/Socialmedia/instagram.svg'
import Facebook from '../assets/images/Socialmedia/facebook.svg'
import Github from '../assets/images/Socialmedia/github.svg'

export default function Navbar() {
  return (
    <div className='w-full h-[110 ] bg-DarkBlue flex navbar text-white px-10   justify-between items-center'>
      {/* logocontainer goes here */}
      <div className='logo-container'>
      <img src={logo} alt="Club-logo"  height={110} width={110}/>
      </div>

      {/* navlinks goes here  */}
      <div className='menu-items-holder'>
        <ul className='flex space-x-6 font-primary text-xl'>
          <li className='nav-item'>
            <a href="#">Home</a>
          </li>
          <li className='nav-item'>
            <a href="#">About</a>
          </li>
          <li className='nav-item'>
            <a href="#">Achivements</a>
          </li>
          <li className='nav-item'>
            <a href="#">Team</a>
          </li>
        </ul>
      </div>

      {/* social media links goes here  */}
      <div className='social-media-items-holder'>
        <ul className='flex space-x-6 font-primary text-xl justify-center items-center'>
          <li className='nav-item'>
            <a href="#"><img src={Instagram} alt="" /></a>
          </li>
          <li className='nav-item'>
            <a href="#"><img src={Facebook} alt="" /></a>
          </li>
          <li className='nav-item'>
            <a href="#"><img src={Github} alt="" /></a>
          </li>
        </ul>
        </div>
        
    </div>
  )
}
