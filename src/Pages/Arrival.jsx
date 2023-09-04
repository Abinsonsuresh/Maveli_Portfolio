import React from 'react'

const Arrival = () => {
  return (
   <>
   <div className='flex justify-center my-8 h-full'>
        <h3 className='font-bold text-6xl'>Next Arrival</h3>     
   </div>

   <div className='flex flex-col md:flex-row justify-center items-center h-full  gap-8 my-28'>
   <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40 flex justify-center items-center flex-col'>
            <p className='md:text-7xl text-3xl font-bold'>12</p>
            <p className='md:text-2xl text-2xl font-bold'>Months</p>

        </div>


        <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40  flex justify-center items-center flex-col'>
            <p className='md:text-7xl text-3xl font-bold'>5</p>
            <p className='md:text-2xl text-2xl font-bold'>Days</p>

        </div>



        <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40  flex justify-center items-center flex-col'>
            <p className='md:text-7xl text-3xl font-bold'>02</p>
            <p className='md:text-2xl text-2xl font-bold'>Hours</p>
        </div>



        <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40  flex justify-center items-center flex-col'>
            <p className='md:text-7xl text-3xl font-bold'>30</p>
            <p className='md:text-2xl text-2xl font-bold'>Minuites</p>
        </div>


        <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40 flex justify-center items-center flex-col'>
            <p className='md:text-7xl text-3xl font-bold'>10</p>
            <p className='md:text-2xl text-2xl font-bold'>Seconds</p>
        </div>

     
   </div>
   <div className='flex justify-center my-8 '>
        <h3 className='font-bold text-4xl'>Location: Kerala</h3>     
   </div>

   </>
  )
}

export default Arrival