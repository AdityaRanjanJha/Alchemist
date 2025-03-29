import './index.css'
import './App.css'
import DarkModeToggle from './components/DarkModeToggle'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Teachers from './pages/Teachers'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyAppointments from './MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        <Route path='/teaches/:speciality' element={<Teachers/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/betwe 
        contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<Element/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path= '/appointment/:tecId' element={<Appointment/>}/>
      </Routes>

       <DarkModeToggle/>

    </div>
  )
}

export default App
