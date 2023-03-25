import Box from '@/Components/Box'
import Favorites from '@/Components/Favorites'
import Floor from '@/Components/Floor'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import LightBulb from '@/Components/LightBulb'
import { Canvas } from '@react-three/fiber'
import React from 'react'




const Home = () => {



  return (
    <div className='min-h-[100vh] w-full bg-yellow-200 flex flex-col justify-center items-center'>
        <Navbar />
        {/* div for three.js elements  */}
        <div className='h-screen w-full relative '>
        <Canvas shadows className='z-0'
        camera={{
          position: [-6, 7, 7],
        }}>
         <ambientLight color={"white"} intensity={0.2} />
          <LightBulb position={[0, 3, 0]} />
            <Box rotateX={3} rotateY={0.2} />
        </Canvas>
        <Hero  className=''/>
        </div>
        <div className='h-screen w-full  relative'>
        <Canvas className='z-0'
        camera={{
          position: [-6, 7, 7],
        }}>
         <ambientLight color={"white"} intensity={0.2} />
          <LightBulb position={[0, 3, 0]} />
          <Box rotateX={3} rotateY={0.2} />
          <Floor position={[0, -1, 0]} />
        </Canvas>
        <Favorites />
        </div>
   
        
     
    </div>
  )
}

export default Home