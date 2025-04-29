import React from 'react'
import { NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex flex-col items-center justify-between text-sm py-4 mb-4 border-b-gray-400'>
        <div className='flex flex-items-center justify-between w-full'>
            <img className='w-44 cursor-pointer' src = {assets.logo} alt= "image not found !"/>
            <ul className='hidden md:flex item-start gap-10 font-medium items-center'>
                <NavLink to='/'>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-[#D55E5D] w-3/4 m-auto'></hr>
                </NavLink>
                <NavLink to='/teachers'>
                    <li className='py-1'>ALL TEACHERS</li>
                    <hr className='border-none outline-none h-0.5 bg-[#D55E5D] w-3/4 m-auto'></hr>
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-[#D55E5D] w-3/4 m-auto'></hr>
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-[#D55E5D] w-3/4 m-auto'></hr>
                </NavLink>
            </ul>
            <button className='px-4 py-0 bg-[#D55E5D] rounded-full text-white font-bold cursor-pointer'>Create Account</button>
        </div>
        <hr className='w-full border-gray-400 mt-4'/>
    </div>
  )
}

export default Navbar