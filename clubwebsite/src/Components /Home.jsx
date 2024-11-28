import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
// import Projects from './Projects'


export default function Home() {
  return (
    <>
        <div className='home-page-container h-screen'>
            <Navbar/>
             <Hero/>
             <About/>  
            {/* // <Projects/>   */}
        </div>
    </>
  )
}
