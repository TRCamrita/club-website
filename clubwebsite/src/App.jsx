import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import Home from './Components /Home'
import About from './Components /About'
import Achievements from './Components /Achievements'
import 'leaflet/dist/leaflet.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/achievements' element={<Achievements/>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App
