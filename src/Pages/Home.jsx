import React from 'react'
import Navbar from '../Components/Navbar'
import MainHome from './MainHome'
import About from './About'
import Timeline from './Timeline'

// import MainHome from './MainHome'

// import About from './About'
// import Contact from './Contact'
// import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='mx-4 overflow-hidden'>
        <Navbar/>
        <MainHome/>
        <About/>
        <Timeline/>

    </div>
  )
}

export default Home