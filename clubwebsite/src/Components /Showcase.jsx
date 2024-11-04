import React from 'react'
import Award1 from '../assets/images/sampleaward1.jpg'
import Award2 from '../assets/images/sampleaward2.jpg'

export default function Showcase() {
  return (
    <>
    <div className='pt-24 flex showcase-box flex-col px-80 justify-center w-full items-center'>
        <img className='w-full h-[500px] border border-ElectricGreen rounded-lg' src={Award1} alt="" />
        <h1 className='font-tertiary text-ElectricGreen text-3xl mt-8 '>First Place at XYZ Robotics Competetion</h1>
        <p className='mt-2 font-secondary text-2xl text-White font-bold'>Date: March 2024</p>
        <p className='mt-2 font-secondary text-xl text-Silver  px-24 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores aut amet quaerat in quasi! Repellendus saepe voluptatem placeat ratione porro quia. Eaque fugit facere quasi, accusantium pariatur debitis odio eligendi nisi! Facere recusandae est sit cupiditate error? Ipsa omnis harum qui laboriosam in pariatur dignissimos quos reiciendis? Molestiae, natus enim cumque pariatur animi dolor id fuga reprehenderit, assumenda nobis at eveniet corrupti porro quam accusamus facere aut expedita, voluptate ullam. Sint minus provident, nostrum totam natus repellendus praesentium a, accusamus tenetur, adipisci voluptatem ducimus quas ullam fugiat rerum? Veniam veritatis sapiente illum voluptatum hic quis, quia dolorem sed dignissimos?</p>

        <img className='w-full h-[500px] border border-ElectricGreen rounded-lg mt-24' src={Award2} alt="" />

        <h1 className='font-tertiary text-ElectricGreen text-3xl mt-8 '>First Place at XYZ Robotics Competetion</h1>
        <p className='mt-2 font-secondary text-2xl text-White font-bold'>Date: March 2024</p>
        <p className='mt-2 font-secondary text-xl text-Silver  px-24 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores aut amet quaerat in quasi! Repellendus saepe voluptatem placeat ratione porro quia. Eaque fugit facere quasi, accusantium pariatur debitis odio eligendi nisi! Facere recusandae est sit cupiditate error? Ipsa omnis harum qui laboriosam in pariatur dignissimos quos reiciendis? Molestiae, natus enim cumque pariatur animi dolor id fuga reprehenderit, assumenda nobis at eveniet corrupti porro quam accusamus facere aut expedita, voluptate ullam. Sint minus provident, nostrum totam natus repellendus praesentium a, accusamus tenetur, adipisci voluptatem ducimus quas ullam fugiat rerum? Veniam veritatis sapiente illum voluptatum hic quis, quia dolorem sed dignissimos?</p>
    </div>
    </>
  )
}
