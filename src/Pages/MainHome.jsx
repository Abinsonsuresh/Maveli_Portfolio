import React from 'react'
import maveli from '../assets/maveli.png'
import cloud from '../assets/cloud.png'

const MainHome = () => {
  return (
    <>
      {/* h-[100%] w-[100%] */}
      <div className='flex relative justify-between flex-col md:flex-row items-center h-screen  border-b-2 border-black w-screen'>
        <div className='flex items-start justify-center p-0 md:p-8 flex-col'>
          <div>
            <img className='absolute md:top-20 top-20 left-40 md:left-0 md:w-[12rem] w-64 ' src={cloud} alt="" />
            <img className='absolute top-0 left-0 md:top-16 md:left-96 md:w-72 w-48' src={cloud} alt="" />
            <img className='absolute top-0 right-0  md:top-0 md:right-0 md:w-72 w-48' src={cloud} alt="" />
          </div>
          <div className='z-50'>
            <h2 className='text-4xl font-bold'>Hi ! There,</h2>
            <h2 className='text-4xl font-bold my-4'>I'm Maveli</h2>
            <p className='text-2xl font-semibold font-mono'>From underworld</p>
          </div>
        </div>
      <div className='flex items-end justify-end  z-50'>
        <img className='my-8 w-full h-[22rem] md:w-[60rem] md:h-auto' src={maveli}  alt="" />
      </div>
      </div>


    </>
  )
}

export default MainHome