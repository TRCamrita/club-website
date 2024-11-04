import React from 'react'
import Map from './Map'
import Location from '../assets/images/Socialmedia/location.svg'
import Phone from '../assets/images/Socialmedia/phone.svg'
import MapComponent from '../Components /Map'

export default function Contact() {
  return (
    <>
    <div className='w-full px-10 mt-10 flex items-center'>
        <div className='w-1/3 flex flex-col'>
        <h1 className='text-White font-primary-bold text-3xl'>Reach Out</h1>
        <p className='text-Silver font-secondary text-xl mt-8'>We would like to hear from you! Whether you have questions or need support or want to learn more about our services, Our team is here to help</p>
        </div>

        <div className='w-1/3 flex flex-col justify-center pl-20'>
            <img src={Phone} alt="Phone" height={30} width={30} />
            <h1 className='text-xl font-secondary text-White mt-2'>Our Address </h1>
            <p className='text-md font-secondary text-white mt-2'> PO, Amritapuri, Vallikavu, Clappana, Kerala 690525</p>
        </div>

        <div className='w-1/3 flex flex-col justify-center pl-20'>
            <img src={Location} alt="Location" height={30} width={30} />
            <h1 className='text-xl font-secondary text-White mt-2'>Our Contact Info</h1>
            <p className='text-md font-secondary text-white mt-2'> +91 9848987148</p>
            <p className='text-md font-secondary text-White'>walkerastro41@gmail.com</p>
        </div>
    </div>

    <div className='w-full flex px-10 justify-center items-center mt-10'>
      <MapComponent/>
    </div>
    </>
  )
}
