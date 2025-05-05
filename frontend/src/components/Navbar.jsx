import React, {useState, useEffect} from 'react'; // Import useEffect
import { NavLink, useNavigate } from 'react-router-dom';
import {assets} from '../assets/assets';
// Removed unused useTheme import

const Navbar = () => {
    const navigate = useNavigate();

    // Removed unused showMenu state
    const [token, setToken] = useState(true); // Assuming 'token' represents login state
    const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

    // Effect to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            // Set isScrolled to true if page is scrolled more than 10px, false otherwise
            setIsScrolled(window.scrollY > 10);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    // Helper function for NavLink classes to keep it DRY
    const getNavLinkClass = ({ isActive }) =>
        `group relative text-gray-600 hover:text-[#D55E5D] transition-colors duration-300 ease-in-out py-2 ${
            isActive ? 'text-[#D55E5D] font-semibold' : 'font-medium'
        }`;

    // Helper function for the underline hr element
    const getUnderlineClass = () =>
        `absolute bottom-0 left-0 w-full h-0.5 bg-[#D55E5D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left`;


  return (
    // Use w-screen for full width, sticky positioning, and updated scrolled background
    <div className={`px-4 sm:px-8 md:px-12 lg:px-16 py-3 sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F6F0E3] shadow-md border-b border-gray-200' : 'bg-transparent' // Changed scrolled background, kept shadow and border
    }`}>
        {/* Inner container uses max-w-screen-xl and mx-auto to center content */}
        <div className='flex items-center justify-between w-full max-w-screen-xl mx-auto'>
            {/* Logo */}
            <img
                className='w-32 md:w-40 cursor-pointer' // Slightly smaller logo
                src={assets.logo}
                alt="Alchemist Logo"
                onClick={() => navigate('/')}
            />

            {/* Desktop Navigation - Increased gap, centered items */}
            <nav className='hidden md:flex items-center gap-8 lg:gap-12'>
                <NavLink to='/' className={getNavLinkClass}>
                    HOME
                    <hr className={getUnderlineClass()} />
                </NavLink>
                <NavLink to='/teachers' className={getNavLinkClass}>
                    ALL TEACHERS
                    <hr className={getUnderlineClass()} />
                </NavLink>
                <NavLink to='/contact' className={getNavLinkClass}>
                    CONTACT
                    <hr className={getUnderlineClass()} />
                </NavLink>
                <NavLink to='/about' className={getNavLinkClass}>
                    ABOUT
                    <hr className={getUnderlineClass()} />
                </NavLink>
                {/* Removed duplicate NavLink elements */}
            </nav>

            {/* User Actions / Login */}
            <div className='flex items-center gap-4'> {/* Added gap for potential mobile menu icon */}
                {token ? (
                    <div className='relative group'>
                        {/* Profile Trigger - Added subtle hover effect */}
                        <button className='flex items-center gap-2 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D55E5D]'>
                            <img className='w-9 h-9 rounded-full object-cover border-2 border-transparent group-hover:border-gray-200 transition-colors' src={assets.profile_pic} alt="profile" />
                            <img className='w-3 h-3 transition-transform duration-200 group-hover:rotate-180' src={assets.dropdown_icon} alt="dropdown" />
                        </button>
                        {/* Dropdown Menu - Improved styling and visibility transition */}
                        <div className='absolute top-full right-0 mt-2 w-52 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out transform translate-y-1 group-hover:translate-y-0'>
                            <div className='py-1'>
                                <button onClick={() => navigate('my-profile')} className='flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors'>
                                    {/* Optional: Add an icon */}
                                    Profile
                                </button>
                                <button onClick={() => navigate('my-appointments')} className='flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors'>
                                    {/* Optional: Add an icon */}
                                    Appointments
                                </button>
                                <hr className="my-1 border-gray-200" />
                                <button onClick={() => { setToken(false); navigate('/'); }} className='flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors'>
                                    {/* Optional: Add an icon */}
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className='px-6 py-2.5 bg-[#D55E5D] rounded-full text-white text-sm font-semibold cursor-pointer hover:bg-[#c1504f] transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D55E5D]'
                    >
                        Create Account
                    </button>
                )}
                {/* Mobile Menu Toggle Button Placeholder */}
                 {/* <button className="md:hidden p-2 rounded-md text-gray-500 hover:text-[#D55E5D] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D55E5D]">
                     <span className="sr-only">Open main menu</span>
                     {/* Add Menu Icon (e.g., Hamburger) here */}
                 {/* </button> */}
            </div>
        </div>
        {/* Mobile Menu (conditionally rendered based on state) */}
        {/* {showMenu && (
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    // Mobile NavLinks here
                </div>
            </div>
        )} */}
    </div>
  )
}

export default Navbar