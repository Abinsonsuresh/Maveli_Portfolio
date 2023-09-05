import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

import { TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'
import { AiFillGithub } from 'react-icons/ai'
import { useGlobalContext } from '../Context/ThemeContext'
const Contact = () => {
  const { theme, setTheme } = useGlobalContext();

  return (
    <>
      <div className='flex flex-col p-4 justify-center items-center my-12'>
        <p className='text-3xl font-bold my-4'>What's Next?</p>
        <p className={theme === 'dark' ? 'text-5xl md:text-7xl text-center font-bold text-[#81e6d9]  drop-shadow-2xl' : 'text-5xl md:text-7xl font-bold text-primary text-center drop-shadow-2xl'}>Get in Touch</p>


        <div className='max-w-[700px] text-lg text-center'>
        <p>My inbox is always open, whether you have a question, offer or just want to say hi, I’ll try my best to get back to you!</p>
        </div>
      </div>
      <div className='flex flex-col max-w-[700px] mx-auto min-h-[500px] rounded-lg border border-input shadow-2xl px-4 py-16  my-8'>
          <form>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-lg '>
            <input className='bg-primary w-full border border-input rounded-2xl p-2' type="email" placeholder='Enter your Email' />
            <AiOutlineMail className='absolute top-3 right-3'/>
            </div>
          </form>

          <form className='my-4'>
            <label>Enter your Message</label>
            <div className='my-2 w-full relative rounded-2xl shadow-lg '>
            <input className='bg-primary w-full h-44 border border-input rounded-2xl p-2 text-base' type="text" placeholder='' />
            </div>
          </form>

          <button className='px-4 py-2 shadow-xl rounded-xl border border-secondary bg-button text-btnText font-semibold'>Submit</button>



        </div>
    </>
  )
}

export default Contact