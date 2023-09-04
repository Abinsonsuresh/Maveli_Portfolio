import React from 'react'
import img1 from '../assets/Gallery/1.jpg'
import img2 from '../assets/Gallery/2.jpg'
import img3 from '../assets/Gallery/3.jpg'
import img4 from '../assets/Gallery/4.jpg'

import { motion } from 'framer-motion'


const Gallery = () => {
  return (
    <>
   <div className='flex justify-center h-full'>
        <h3 className='font-bold text-6xl'>Gallery</h3>     
   </div>
    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ x: 0, opacity: 1 }} transition={{  duration: 1 }}  className='flex flex-wrap justify-center items-center gap-5 h-full my-12 min-h-[100vh] '>
        <img src={img4} className='w-40 rounded-lg hover:scale-105' alt="" />
        <img src={img1} className='w-40 rounded-lg hover:scale-105' alt="" />
        <img src={img2} className='w-40 rounded-lg hover:scale-105' alt="" />
        <img src={img3} className='w-40 rounded-lg hover:scale-105' alt="" />


        <img src={img4} className='w-40' alt="" />
        <img src={img1} className='w-40' alt="" />
        <img src={img2} className='w-40' alt="" />
        <img src={img3} className='w-40' alt="" />


 


    </motion.div>
    </>
  )
}

export default Gallery