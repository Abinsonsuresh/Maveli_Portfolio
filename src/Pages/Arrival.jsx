import React from 'react'

const Arrival = () => {
  return (
   <>
   <div className='flex justify-center my-8 '>
        <h3 className='font-bold text-6xl'>Next Arrival</h3>     
   </div>

   <div className='flex flex-col md:flex-row justify-center items-center h-full md:h-screen gap-8 my-8'>
   <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40 flex justify-center items-center flex-col'>
            <p className='md:text-7xl text-3xl font-bold'>90</p>
            <p className='md:text-2xl text-2xl font-bold'>Days</p>
        </div>


        <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40  flex justify-center items-center flex-col'>
            <p className='md:text-7xl text-3xl font-bold'>90</p>
            <p className='md:text-2xl text-2xl font-bold'>Months</p>
        </div>



        <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40  flex justify-center items-center flex-col'>
            <p className='md:text-7xl text-3xl font-bold'>90</p>
            <p className='md:text-2xl text-2xl font-bold'>Hours</p>
        </div>



        <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40  flex justify-center items-center flex-col'>
            <p className='md:text-7xl text-3xl font-bold'>90</p>
            <p className='md:text-2xl text-2xl font-bold'>Minuites</p>
        </div>


        <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40 flex justify-center items-center flex-col'>
            <p className='md:text-7xl text-3xl font-bold'>90</p>
            <p className='md:text-2xl text-2xl font-bold'>Seconds</p>
        </div>
   </div>
   
   </>
  )
}

export default Arrival