import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'; // Add this line
import Doctors from './pages/Doctors'; // Add this line
import Login from './pages/Login'; // Add this line
import About from './pages/About'; // Add this line
import Contact from './pages/Contact'; // Add this line
import MyProfile from './pages/MyProfile'; // Add this line
import Appointment from './pages/Appointment'; // Add this line
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
     <Navbar/>
     
     <Routes>
      <Route path= '/' element= {<Home/>} />
      <Route path= '/doctors' element= {<Doctors/>} />
      <Route path= '/doctors/:speciality' element= {<Doctors/>} />
      <Route path= '/login' element= {<Login/>} /> 
      <Route path= '/about' element= {<About/>} />
      <Route path= '/contact' element= {<Contact/>} />
      <Route path= '/my-profile' element= {<MyProfile/>} />
      <Route path= '/my-appointment' element= {<Appointment/>} /> 
      <Route path= '/appointment/:docId' element= {<Appointment/>} /> 
     </Routes>
     
    <Footer/>
     
    </div>
  )
}

export default App
