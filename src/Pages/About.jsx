import React from 'react'
import maveli from '../assets/mavelionwater.png'
import water from '../assets/waterr.png'
import bgflr from '../assets/bgflr1.png'
import flwr from '../assets/flwr.png'

import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax';



const About = () => {
  return (
    <>
     <Parallax strength={200}>
     <div className='flex justify-center'>
      <h2 className='font-bold text-3xl'>About</h2>
      </div>
    <div className='h-[110vh] md:h-screen relative flex justify-start md:justify-end mx-4 my-8 items-center flex-col md:flex-row'>
    <img className='absolute bottom-0 w-full ' src={water} alt="" />
    <img className='absolute top-20 left-100 md:left-60 w-96 opacity-30' src={flwr} alt="" />


        <motion.div  initial={{ opacity: 0, x: -100 }} whileInView={{ x: 0, opacity: 1 }} transition={{  duration: 1 }} className='absolute bottom-0 left-0 '>
        <img className='w-44 md:w-96 z-50' src={maveli} alt="" />
        </motion.div>

        <motion.div   initial={{ opacity: 0, y: 100 }} whileInView={{ y: 0, opacity: 1 }}  className='flex  flex-col w-full max-w-[520px] my-2  '>
        <h2 className='font-bold text-3xl'>Mahabali</h2>
        <h2 className='font-bold text-xl'>Beloved King of Kerala</h2>
        <div className='my-4'>
        <p className='mb-3'>I am Mahabali, a legendary figure in Indian mythology and folklore. My story is celebrated primarily in the beautiful southern state of Kerala, where I am revered as both a demon king and a symbol of benevolence. Allow me to share with you the intriguing narrative of my life and legacy.
        My legacy is a testament to the enduring values of righteousness, humility, and the spirit of giving. My story is an integral part of Kerala's cultural identity, and Onam remains one of the most significant festivals in the region. My character exemplifies the idea that goodness can be found even in unexpected places and that virtue transcends appearances, making me an iconic figure in Indian mythology and folklore.
        </p>
        <p className='font-mono'>Key skills: Wisdom and Leadership, Benevolence, Devotion , Humility, Courage, Legacy of Unity, Spirit of Giving, Symbol of Sacrifice, Cultural Symbol</p>
        </div>
        </motion.div>




    </div>
    </Parallax>
    </>
  )
}

export default About