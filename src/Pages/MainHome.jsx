import React from 'react'
import maveli from '../assets/maveli.png'
import cloud from '../assets/cloud.png'
import bgflr from '../assets/bgflr1.png'
import { AnimatePresence, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';

const MainHome = () => {
  return (
    <>
      {/* h-[100%] w-[100%] */}
      <AnimatePresence >
        <div className='flex relative justify-between flex-col md:flex-row items-center h-[90vh]  border-b-2 border-black w-screen'>
          <div className='flex items-center md:items-start justify-center p-8 md:p-8 flex-col'>
            <img className='absolute top-0 left-10 w-80  opacity-50' src={bgflr} alt="" />
            <img className='absolute bottom-0 right-0 w-96 hidden md:block  opacity-50' src={bgflr} alt="" />

            <div>

              <img className='absolute md:top-0 top-20 left-40 md:left-0 md:w-[12rem] w-64 ' src={cloud} alt="" />
              <img className='absolute top-0 left-0 md:top-16 md:left-96 md:w-72 w-48' src={cloud} alt="" />
              {/* <motion.div animate={{ x: 100 }} /> */}

              <img className='absolute top-0 right-0  md:top-0 md:right-0 md:w-72 w-48' src={cloud} alt="" />


            </div>
            <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ x: 0, opacity: 1 }} className='z-0'>
              <h2 className='text-5xl font-bold'>Hi ! There,</h2>
              <h2 className='text-6xl font-bold my-4'>I'm Mahabali</h2>
              <div className='text-2xl font-semibold '>
                
              <Typewriter
                options={{
                  strings: ['The Benevolent Asura King Who Defied the Gods'],
                  autoStart: true,
                  loop: true,
                  delay: 45,
                }}
              />
              </div>
              {/* <p className='text-xl font-semibold '>The Benevolent Asura King Who Defied the Gods</p> */}
            </motion.div>
          </div>
          <div className='flex absolute bottom-0 right-0 items-end justify-end  z-0'>
            <img className=' w-full h-[22rem] md:w-[60rem] md:h-auto' src={maveli} alt="" />
          </div>
        </div>

      </AnimatePresence>
    </>
  )
}

export default MainHome