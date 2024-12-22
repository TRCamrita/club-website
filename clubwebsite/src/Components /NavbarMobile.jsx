import React,{useState} from 'react'
import Logo from '../assets/images/logo.png'
import Github from '../assets/images/Socialmedia/github.svg'
import Hamburger from '../assets/images/hamburger.svg'
import {motion} from 'framer-motion'
import { navbarMenuVariants,navbarMenuItemsVariants } from '../Utils/animations'


export default function NavbarMobile() {

    const [menuOpen,setMenuOpen] = useState(false)

    const toggleMenu=()=>{
        setMenuOpen(!menuOpen);
    }

  return (
    <div className='navbar-mobile flex justify-between h-[70px] px-4 py-4'>
        <div className='logo-container flex justify-center items-center'>
            <img src={Logo} alt="TRC Logo" width={50} height={50} />
        </div>
        <div className='hamburger-menu-container cursor-pointer' onClick={toggleMenu}>
            <img src={Hamburger} alt="Menu" width={26} height={26} />
        </div>

        {/* full screen menu when the hamburger menu button is clicked  */}
        <div 
        className={`fixed top-0 right-0 w-3/5 h-screen backdrop-blur-md shadow-lg rounded-lg 
        flex flex-col items-center text-white font-headers transform transition-transform duration-300 
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        
        >
            <div className='logo-button-holder w-full flex justify-between px-4 py-4'>
                <img src={Logo} width={40} height={40} alt="" />
                <button className='text-4xl' onClick={toggleMenu}>&times;</button>
            </div>

            <motion.ul
             className='flex space-y-6 pt-32 flex-col '
             initial={navbarMenuVariants.hidden}
             animate={menuOpen?navbarMenuVariants.visible:navbarMenuVariants.hidden}
             > 
                <li className=' cursor-pointer hover:border-b-4 hover:border-green-500 w-fit transition-all duration-300 ease-in'
                variants={navbarMenuItemsVariants}
                >Home</li>
                <li className=' cursor-pointer hover:border-b-4 hover:border-green-500 w-fit transition-all duration-300 ease-in' variants={navbarMenuItemsVariants}>About</li>
                <li className=' cursor-pointer hover:border-b-4 hover:border-green-500 w-fit transition-all duration-300 ease-in' variants={navbarMenuItemsVariants}>Achievements</li>
                <li className=' cursor-pointer hover:border-b-4 hover:border-green-500 w-fit transition-all duration-300 ease-in' variants={navbarMenuItemsVariants}>Members</li>
            </motion.ul>

            <div className='footer flex w-full pt-[264px] px-4'>
                <div className='social-media-container flex'>
                    <a href="https://github.com/AdwaithaV"><img src={Github} width={30} height={30} alt="Github" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}
