import React from 'react'
import Logo from '../assets/images/gear.svg'
import  LogoSm from '../assets/images/gear_small.svg'
import   LogoLg from    '../assets/images/gear_lg.svg'

export default function Loader() {
    return (
        <div className='flex flex-col h-screen w-full justify-center items-center'>
            <div className='flex'>
            <img src={LogoSm} className='mr-10' alt="Logo" width={150} height={150} />
            <img src={LogoLg} alt="Logo" width={150} height={150} />
            </div>  
            <img src={Logo} alt="Logo" width={150} height={150} />
        </div>
    )
}
