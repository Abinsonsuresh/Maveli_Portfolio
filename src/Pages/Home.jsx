import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import MainHome from './MainHome'
import About from './About'
import Timeline from './Timeline'
import Arrival from './Arrival'
import Gallery from './Gallery'



// import MainHome from './MainHome'

// import About from './About'
// import Contact from './Contact'
// import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <div className='mx-4 overflow-hidden'>
        <Navbar/>
        <MainHome/>
        <About/>
        <Timeline/>
        <Gallery/>

        <Arrival/>



    </div>
        <Footer/>
    </>
  )
}

export default Home