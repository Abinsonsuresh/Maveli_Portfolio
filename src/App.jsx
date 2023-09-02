import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <>

    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>

    </>
  )
}

export default App
