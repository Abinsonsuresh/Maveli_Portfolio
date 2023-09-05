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
        <div className='flex relative justify-items-start md:justify-between  flex-col md:flex-row items-center md:h-[110vh] h-[100vh]  border-b-2 border-black w-screen'>
          <div className='flex items-center md:items-start justify-center text-left md:justify-center  p-2 md:p-8 flex-col'>
            <img className='absolute top-28 left-12 md:left-10 w-80  opacity-50' src={bgflr} alt="" />
            <img className='absolute bottom-0 right-10 w-96 hidden md:block  opacity-50' src={bgflr} alt="" />

            <div>
             <motion.div initial={{  x: -100 }} whileInView={{ x: 10 }} transition={{  duration: 1 }}  className='absolute md:top-10 top-36 left-36 md:left-0'>
              <img className=' md:w-[12rem] w-52 ' src={cloud} alt="" />
             </motion.div>
             <motion.div initial={{ x: -100 }} whileInView={{ x: 10 }} transition={{  duration: 2 }} className='absolute top-10 left-0 md:top-16 md:left-96' >
              <img className=' md:w-64 w-48' src={cloud} alt="" />
             </motion.div>

              <motion.div initial={{ x: 100 }} whileInView={{ x: 10}} transition={{  duration: 1}}  className='absolute top-0 right-10  md:top-10 md:right-20'>
              <img className=' md:w-64 w-48' src={cloud} alt="" />
              </motion.div>


            </div>
            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ x: 0, opacity: 1 }} transition={{  duration: 0.7 }}  className='z-10 mt-28 md:mt-0'>
              <h2 className='text-5xl font-bold'>Hi ! There,</h2>
              <h2 className='text-6xl font-bold my-4'>I'm Mahabali</h2>
              <div className=' text-2xl font-bold text-left'>
                
              <Typewriter
                options={{
                  strings: ['The Benevolent Asura King '],
                  autoStart: true,
                  loop: true,
                  delay: 55,
              
                }}
              />
              </div>
              {/* <p className='text-xl font-semibold '>The Benevolent Asura King Who Defied the Gods</p> */}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ x: 0, opacity: 1 }} transition={{  duration: 0.5 }} className='flex absolute bottom-0 right-0 items-end justify-end  z-0 overscroll-contain'>
            <img className=' w-full h-full md:w-[60rem] md:h-auto ' src={maveli} alt="" />
          </motion.div>
        </div>

      </AnimatePresence>
    </>
  )
}

export default MainHome