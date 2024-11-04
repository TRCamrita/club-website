import React from 'react'
import Person from '../assets/images/person.jpg'

export default function Gallery() {
  return (
    <>
    <div className='flex holder-1 w-full px-10 h-auto'>
      <div className='image-holder w-1/2 flex items-center mt-16'>
        <img className="w-4/5 rounded-3xl" src={Person}  alt="A person image" />
      </div>

      <div className='desc-holder w-1/2 flex mt-20 flex-col'>
            <h1 className='font-primary-bold text-3xl text-White'>Mr. Meher Madhu</h1>
            <p className='desc font-secondary text-xl text-Silver mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, incidunt. Id temporibus saepe obcaecati, deserunt nihil laborum aspernatur voluptatibus debitis illum iste officiis facilis similique expedita reiciendis veniam dolorem ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate earum, quia ea, facere laborum nam est alias cum eos tenetur expedita numquam tempore repudiandae id molestiae ut accusamus consectetur consequuntur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non deserunt necessitatibus quod ullam similique dicta modi soluta possimus architecto, quos reprehenderit et eaque, culpa doloribus a fuga nemo repellat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, dolor incidunt blanditiis recusandae reprehenderit esse debitis praesentium enim omnis, quam deserunt dolorem itaque inventore id magnam suscipit animi, consectetur doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae amet sed quibusdam tempore velit reiciendis! Eligendi officiis quibusdam, ad quis impedit excepturi animi quod ut aspernatur, voluptatum molestias voluptates!
            </p>
      </div>
    </div>

    <div className='w-full flex holder-2 px-10 h-auto'>
        <div className='desc-holder w-1/2 flex mt-20 flex-col'>
        <h1 className='font-primary-bold text-3xl text-White'>Ms. Jayasree</h1>
        <p className='desc font-secondary text-xl text-Silver mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, incidunt. Id temporibus saepe obcaecati, deserunt nihil laborum aspernatur voluptatibus debitis illum iste officiis facilis similique expedita reiciendis veniam dolorem ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate earum, quia ea, facere laborum nam est alias cum eos tenetur expedita numquam tempore repudiandae id molestiae ut accusamus consectetur consequuntur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non deserunt necessitatibus quod ullam similique dicta modi soluta possimus architecto, quos reprehenderit et eaque, culpa doloribus a fuga nemo repellat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, dolor incidunt blanditiis recusandae reprehenderit esse debitis praesentium enim omnis, quam deserunt dolorem itaque inventore id magnam suscipit animi, consectetur doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae amet sed quibusdam tempore velit reiciendis! Eligendi officiis quibusdam, ad quis impedit excepturi animi quod ut aspernatur, voluptatum molestias voluptates!</p>
        </div>
        <div className='image-holder w-1/2 ml-16 flex items-center mt-16'>
        <img className="w-4/5 rounded-3xl" src={Person}  alt="A person image" />
      </div>
    </div>
    </>
  )
}
