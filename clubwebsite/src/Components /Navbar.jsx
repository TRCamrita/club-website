import React from 'react'
import logo from '../assets/images/logo-bg-rem.png'

export default function Navbar() {
  return (
    <div className='w-full h-[100] bg-gray-900 flex navbar text-white px-10   justify-between items-center'>
      {/* logocontainer goes here */}
      <div className='logo-container'>
      <img src={logo} alt="Club-logo"  height={90} width={90}/>
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
        
    </div>
  )
}
