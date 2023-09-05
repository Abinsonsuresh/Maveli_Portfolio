import React, { useEffect, useRef, useState } from 'react'

const Arrival = () => {

    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [mins, setMins] = useState('00')
    const [sec, setSec] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countDown = new Date('Sep 14, 2024 00:00:00').getTime()
        // console.log(countDown)

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDown - now;
        // console.log(distance)


            const Setdays = Math.floor((distance / (1000 * 60 * 60 * 24)))
            const Sethours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const Setmins = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
            const Setsec = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                // STOP TIMER
                clearInterval(interval.current)
            }
            else {
                setDays(Setdays)
                setHours(Sethours)
                setMins(Setmins)
                setSec(Setsec)
            }

        }, 1000)
    }

    useEffect(()=>{
        startTimer()
        return ()=>{
                clearInterval(interval.current)

        }
    })

    return (
        <>
            <div className='flex justify-center my-8 h-full min-h-[30vh]'>
                <h3 className='font-bold text-6xl'>Next Arrival</h3>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center h-full  gap-8 my-28'>
                {/* <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40 flex justify-center items-center flex-col'>
                    <p className='md:text-7xl text-3xl font-bold'>12</p>
                    <p className='md:text-2xl text-2xl font-bold'>Months</p>

                </div> */}


                <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40  flex justify-center items-center flex-col'>
                    <p className='md:text-7xl text-3xl font-bold'>{days}</p>
                    <p className='md:text-2xl text-2xl font-bold'>Days</p>

                </div>



                <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40  flex justify-center items-center flex-col'>
                    <p className='md:text-7xl text-3xl font-bold'>{hours}</p>
                    <p className='md:text-2xl text-2xl font-bold'>Hours</p>
                </div>



                <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40  flex justify-center items-center flex-col'>
                    <p className='md:text-7xl text-3xl font-bold'>{mins}</p>
                    <p className='md:text-2xl text-2xl font-bold'>Minuites</p>
                </div>


                <div className='border border-secondary rounded-2xl shadow-xl bg-primary p-8 h-40 w-40 flex justify-center items-center flex-col'>
                    <p className='md:text-7xl text-3xl font-bold'>{sec}</p>
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