import React from 'react'
import { TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'
import { AiFillGithub } from 'react-icons/ai'
import { useGlobalContext } from '../Context/ThemeContext'
const Footer = () => {
  const { theme, setTheme } = useGlobalContext();

  return (
    <>
    <div className='bg-[#784b2b] flex justify-center items-center flex-col '> 
    <p className='text-lg font-semibold text-white my-4'>Created and Designed by Abinson Suresh </p>

    <div className='flex gap-3 my-1 pb-4'>
          <div className='w-8 h-8 rounded-full border-secondary shadow-2xl shadow-black  flex items-center justify-center'>
            <div>
              <a href="https://www.linkedin.com/in/abinsonsuresh/" target="_blank"> <TiSocialLinkedin size={35} color='#0072b1' /></a>
            </div>

          </div>
          <div className='w-8 h-8 rounded-full border-secondary shadow-2xl shadow-black  flex items-center justify-center'>
            <div>
              <a href="https://github.com/Abinsonsuresh/" target="_blank"> <AiFillGithub size={35} color={theme === 'dark' ? 'white' : 'black'} /></a>
            </div>
          </div>

          <div className='w-8 h-8 rounded-full border-secondary shadow-2xl shadow-black  flex items-center justify-center'>
            <div>
              <a href="https://twitter.com/abinsonsuresh/" target="_blank"> <TiSocialTwitter size={35} color='#1D9BF0' /> </a>
            </div>

          </div>
        </div>
    </div>
    </>
  )
}

export default Footer