import React from 'react'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'
import Hero from './Hero'
import HeroMobile from './HeroMobile'
import About from './About'
import AboutMobile from './AboutMobile'
import Projects from './Projects'
import Contact from './Contact'




export default function Home() {
  return (

    <>
      <div className='home-page-container h-screen lg:block hidden'>
        <Navbar />
        <Hero />
        <div className='animated-background bg-Black'><About />
          <Projects />
          <Contact />
        </div>

      </div>


      {/* a home component for mobiles  */}
    
      <div className='home-page-container-mobile lg:hidden block'>
          <NavbarMobile/>
          <HeroMobile/>
          <div className='animated-background-mobile bg-Black mt-[285px]'>
              <AboutMobile/>
          </div>
      </div>
      
      
      </>

  )
}
