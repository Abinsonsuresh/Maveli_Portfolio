import React from 'react'
import maveli from '../assets/mavelionwater.png'
import water from '../assets/waterr.png'



const About = () => {
  return (
    <>
     <div className='flex justify-center'>
      <h2 className='font-bold text-3xl'>About me</h2>
      </div>
    <div className='h-[110vh] md:h-screen relative flex justify-start mx-4  items-center flex-col md:flex-row'>
      

        <div className='flex justify-center items-center flex-col w-full max-w-[520px] my-2  '>
        <h2 className='font-bold text-3xl'> Mahabali</h2>
        <h2 className='font-bold text-xl'>Beloved King of Kerala</h2>
        <div className='my-4'>
        <p className='mb-3'>I am Mahabali, a legendary figure in Indian mythology and folklore. My story is celebrated primarily in the beautiful southern state of Kerala, where I am revered as both a demon king and a symbol of benevolence. Allow me to share with you the intriguing narrative of my life and legacy.
        My legacy is a testament to the enduring values of righteousness, humility, and the spirit of giving. My story is an integral part of Kerala's cultural identity, and Onam remains one of the most significant festivals in the region. My character exemplifies the idea that goodness can be found even in unexpected places and that virtue transcends appearances, making me an iconic figure in Indian mythology and folklore.
        </p>
        <p className='font-mono'>Key skills: Wisdom and Leadership, Benevolence, Devotion , Humility, Courage, Legacy of Unity, Spirit of Giving, Symbol of Sacrifice, Cultural Symbol</p>
        </div>
        </div>

        <img className='absolute bottom-0 w-full ' src={water} alt="" />
        <div className='absolute bottom-0 right-0 '>
        <img className='w-44 md:w-96 z-50' src={maveli} alt="" />

        </div>


    </div>
    </>
  )
}

export default About