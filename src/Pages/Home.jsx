import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import MainHome from './MainHome'
import About from './About'
import Timeline from './Timeline'
import Arrival from './Arrival'
import Gallery from './Gallery'
import Contact from './Contact'



// import MainHome from './MainHome'

// import About from './About'
// import Contact from './Contact'
// import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <div className='mx-4 overflow-hidden scrollbar-hide'>
        {/* <Parallax></Parallax> */}
        <Navbar />
 

        <section id='home'>
          <MainHome />
        </section>
        <section id='About'>
          <About  />
          <Timeline />
        </section>
        <section>

          <Gallery id='Gallery' />
        </section>
        <section id='Contact'>
          <Contact/>
        </section>
          <Arrival />

        <div >
        </div>





      </div>
      <Footer />
    </>
  )
}

export default Home