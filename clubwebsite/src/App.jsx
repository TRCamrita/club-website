import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import 'leaflet/dist/leaflet.css'
import Home from './Components /Home'
import Members from './Components /Members'


function App() {

  return (
    <BrowserRouter>
      <Routes>

       <Route path='/' element={<Home/>}/>
        <Route path='/members' element={<Members/>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App
