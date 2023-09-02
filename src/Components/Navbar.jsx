import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt3 } from 'react-icons/hi'
import { useGlobalContext } from '../Context/ThemeContext'


import ThemeChangeBtn from './ThemeChangeBtn';

const Navbar = () => {
  const { theme, setTheme } = useGlobalContext();

  const [shownav, setShownav] = useState(false)

  const SetNav = () => {
    setShownav(!shownav)
  }
  return (
    <>
      <div className=' p-4 rounded-2xl flex justify-between z-50'>
        <div className='flex items-center'>
          {/* <div className='font-extrabold font-mono text-2xl'>Abinson</div> */}
          {/* <img className='w-8' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" /> */}
          {theme === 'dark' ? (<img className='w-24' src={''} alt="" />
          ) : (<img className='w-24' src={''} alt="" />
          )}

        </div>

        <ul className='hidden md:flex space-x-6 font-bold p-6 text-xl items-center z-50'>
          <ThemeChangeBtn />
          <li ><Link to='/'>Home</Link></li>
          <li ><Link to='/About'>About</Link></li>
          <li ><Link to='/Projects'>Projects</Link></li>
          <li ><Link to='/Contact'>Contact</Link></li>
        </ul>



        {/* MENU BAR  */}
        <div className='flex items-center md:hidden '>
          <div className='mr-4'>
            <ThemeChangeBtn />
          </div>
          <div onClick={SetNav}>
            {shownav ? null : <HiMenuAlt3 size={25} />}
          </div>
        </div>
        {/* MENU CONTENTS  */}
        <div className={shownav ? 'md:hidden fixed top-0 right-0 w-[70%] h-full bg-primary flex flex-col ease-in duration-100 z-10' : 'fixed right-[-100%]  h-[70%] flex flex-col items-center justify-between ease-in'}>
          <div onClick={SetNav} className='absolute top-10 right-5 cursor-pointer z-10'>
            {shownav ? <AiOutlineClose size={25} /> : null}
          </div>
          <ul className='space-y-6 font-semibold  text-xl items-center my-16'>
            <li className='p-6 border-b'><Link to='/'>Home</Link></li>
            <li className='p-6 border-b'><Link to='/About'>About</Link></li>
            <li className='p-6 border-b'><Link to='/Projects'>Projects</Link></li>
            <li className='p-6 border-b'><Link to='/Contact'>Contact</Link></li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default Navbar