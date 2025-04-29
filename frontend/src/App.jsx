import './index.css'
import './App.css'
import DarkModeToggle from './components/DarkModeToggle'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Teachers from './pages/Teachers'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyAppointments from './MyAppointments' // Assuming this exists
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
// Assuming Element is defined or imported elsewhere if used for /my-profile
// import Element from './path/to/Element';

function App() {

  return (
    // Consider removing mx-4 sm:mx-[10%] if Navbar should be full width
    // Or apply padding/margin only to content below Navbar
    <div>
      <Navbar/>
      {/* Apply margin/padding to the content area if needed */}
      <div className='mx-4 sm:mx-[10%]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/teachers' element={<Teachers/>}/>
          {/* The route below seems redundant if /teachers shows all? Or does it filter? */}
          {/* <Route path='/teachers/:speciality' element={<Teachers/>}/> */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          {/* Corrected path for contact */}
          <Route path='/contact' element={<Contact/>}/>
          {/* Ensure Element is defined/imported if this route is active */}
          {/* <Route path='/my-profile' element={<Element/>}/> */}
          <Route path='/my-appointments' element={<MyAppointments/>}/>
          {/* Corrected parameter name to match useParams in Appointment.jsx */}
          <Route path='/appointment/:teacherId' element={<Appointment/>}/>
        </Routes>

        {/* DarkModeToggle might be better placed inside specific pages or layout */}
        <DarkModeToggle/>
      </div>
      {/* Assuming Footer component exists and should be outside the margin container */}
      {/* <Footer /> */}
    </div>
  )
}

export default App