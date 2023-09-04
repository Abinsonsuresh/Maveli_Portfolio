import React from 'react'
import img1 from '../assets/Gallery/1.jpg'
import img2 from '../assets/Gallery/2.jpg'
import img3 from '../assets/Gallery/3.jpg'
import img4 from '../assets/Gallery/4.jpg'



const Gallery = () => {
  return (
    <>
   <div className='flex justify-center h-full'>
        <h3 className='font-bold text-6xl'>Gallery</h3>     
   </div>
    <div className='flex flex-wrap justify-center items-center gap-5 h-full my-12 min-h-[100vh] '>
        <img src={img4} className='w-40 rounded-lg hover:scale-105' alt="" />
        <img src={img1} className='w-40 rounded-lg hover:scale-105' alt="" />
        <img src={img2} className='w-40 rounded-lg hover:scale-105' alt="" />
        <img src={img3} className='w-40 rounded-lg hover:scale-105' alt="" />


        <img src={img4} className='w-40' alt="" />
        <img src={img1} className='w-40' alt="" />
        <img src={img2} className='w-40' alt="" />
        <img src={img3} className='w-40' alt="" />


 


    </div>
    </>
  )
}

export default Gallery