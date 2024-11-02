import React,{useRef} from 'react'
import {Canvas,useFrame} from '@react-three/fiber'
import { Edges } from '@react-three/drei';

export default function Model() {

    const cubeRef = useRef();

  // Rotate the cube on each frame
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });
  return (
    <>
    <mesh ref={cubeRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="lime" wireframe/>
      </mesh>
    </>
  )
}
