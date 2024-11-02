import React from 'react'
import Model from './Model'
import { Canvas } from '@react-three/fiber'

export default function Hero() {
    return (
        <div className='bg-DarkBlue flex items-center overflow-hidden'>
            <div className='container mx-auto px-6 flex py-16'>
                <div className='flex flex-col w-3/5'>
                    <span className='w-20 h-2 bg-ElectricGreen mb-12'></span>
                    <h1 className='font-primary mt-2 text-4xl flex flex-col leading-relaxed text-White'>
                        Welcome to
                        <span className='text-ElectricGreen text-7xl uppercase mt-2'>
                            The Robotics Club
                        </span>
                    </h1>
                    <p className='text-2xl pt-4 text-Silver font-secondary leading-relaxed'>
                        "Engineering the Future, One Bot at a Time 🤖 | Where Innovation Meets Imagination | Join Us in Building Tomorrow’s Tech Today!"
                    </p>

                    <div className='flex mt-8'>
                        <a href="#" className='uppercase py-2 px-4 rounded-lg bg-ElectricGreen border-2 border-transparent text-Black text-md mr-4 font-primary-bold'> Connect</a>
                    </div>
                </div>

                <div className='w-2/5 flex items-center justify-center'>
                    <Canvas style={{ height: '400px' }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <Model />
                    </Canvas>
                </div>
            </div>
        </div>
    )
}
