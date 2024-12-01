import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'




export default function Home() {
  return (

    <>
      <div className='home-page-container h-screen'>
        <Navbar />
        <Hero />
        <div className='animated-background bg-Black'><About />
          <Projects />
          <Contact />
        </div>

      </div>
      </>

  )
}
