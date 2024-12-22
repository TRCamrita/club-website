import { BrowserRouter,Routes,Route, } from 'react-router-dom'
import React,{lazy,Suspense} from 'react'
import 'leaflet/dist/leaflet.css'
import Home from './Components /Home'
// import Members from './Components /Members'
import Achievements from './Components /Achievements'
import Compo from './Components /Compo'
import Loader from './Components /Loader'

const Members = lazy(() => import('./Components /Members'));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<Loader/>}>
          <Home />
        </Suspense>
        } />
        <Route
          path='/members'
          element={
            <Suspense fallback={<Loader/>}>
              <Members />
            </Suspense>
          }
        />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/compo' element={<Compo />} />
        <Route path='/loader' element={<Loader />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
