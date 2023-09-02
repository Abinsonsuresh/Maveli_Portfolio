import React from 'react'
import Navbar from '../Components/Navbar'
import MainHome from './MainHome'
import About from './About'

// import MainHome from './MainHome'

// import About from './About'
// import Contact from './Contact'
// import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='mx-4'>
        <Navbar/>
        <MainHome/>
        <About/>
    </div>
  )
}

export default Home