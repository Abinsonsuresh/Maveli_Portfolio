import React from 'react'
import maveli from '../assets/maveli.png'
import cloud from '../assets/cloud.png'

const MainHome = () => {
  return (
    <>
    
    <div className='flex items-start  h-[90vh] my-8 border-b-2'>
        <div className='relative h-[100%] w-[100%]'>
          
            <img className='w-[44rem] absolute bottom-0 right-0' src={maveli} alt="" />
          
            <div>
            <img className='w-40 absolute top-10 right-10' src={cloud} alt="" />
            <img className='w-48 absolute top-12 left-10' src={cloud} alt="" />
            <img className='w-40 absolute top-20 left-60' src={cloud} alt="" />
            <img className='w-40 absolute top-30 right-96' src={cloud} alt="" />

            </div>
        </div>
    </div>
    </>
  ) 
}

export default MainHome