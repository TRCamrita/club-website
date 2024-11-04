import React from 'react'
import Amrita from '../assets/images/amrita-logo-filtered.png'

export default function Footer() {
  return (
    <div className='bg-DarkBlue border border-ElectricGreen flex mx-48 p-4 mt-32 justify-between items-center mb-10'>
        <img src={Amrita} height={150} width={150} alt="" />
      <h1 className='copyrights font-primary text-md text-White'>&copy; Team - TRC All rights reserved</h1>
    </div>
  )
}
