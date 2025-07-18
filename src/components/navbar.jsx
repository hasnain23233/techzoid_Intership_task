import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import ServiceDrapDownMenu from './serviceDrapDownMenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [isServiceOpen, setIsServiceOpen] = useState(false);
    const [menuOn, setMenuOn] = useState(false);

    const handleToggleMenu = () => setMenuOn(!menuOn);
    const handleCloseMenu = () => setMenuOn(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOn(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // run once on load

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className='bg-white border-b bg-white/30 fixed backdrop-blur-md z-10 w-full'>
            <div className='flex lg:flex-row flex-col w-11/12 m-auto lg:justify-between px-4 py-2 gap-3 text-sm font-semibold items-center'>

                {/* Logo and Toggle */}
                <div className='flex lg:w-2/12 w-full items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={Logo} alt="" className='xl:w-3/12 lg:w-2/12 w-1/12' />
                        <h1 className='font-bold text-lg'>Marvellcreativeco</h1>
                    </div>
                    <button onClick={handleToggleMenu} className='lg:hidden block'>
                        {!menuOn ? (
                            <FontAwesomeIcon icon={faBars} size='2x' />
                        ) : (
                            <FontAwesomeIcon icon={faTimesCircle} size='2x' />
                        )}
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className={`lg:flex flex-col lg:flex-row items-start lg:px-2 px-4 lg:space-y-0 space-y-7 gap-9 lg:w-5/12 w-full ${menuOn ? 'block' : 'hidden'} lg:flex`}>
                    <li onClick={handleCloseMenu} className='hover:text-blue-500 text-gray-700'><Link to="/">Home</Link></li>
                    <li onClick={handleCloseMenu} className='hover:text-blue-500 text-gray-700'><Link to="/about">About</Link></li>

                    <li
                        className="text-gray-700 hover:text-blue-500 cursor-pointer"
                        onMouseEnter={() => setIsServiceOpen(true)}
                        onMouseLeave={() => setIsServiceOpen(false)}
                    >
                        <div className="flex items-center gap-1">
                            <span>Service</span>
                            <FaChevronDown className={`transition-transform duration-300 ${isServiceOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </div>
                        <ServiceDrapDownMenu isServiceOpen={isServiceOpen} />
                    </li>

                    <li onClick={handleCloseMenu} className='hover:text-blue-500 text-gray-700'><Link to="/process">Process</Link></li>
                    <li onClick={handleCloseMenu} className='hover:text-blue-500 text-gray-700'><Link to="/portfolio">Portfolio</Link></li>
                    <li onClick={handleCloseMenu} className='hover:text-blue-500 text-gray-700'><Link to="/blog">Blog</Link></li>
                    <li onClick={handleCloseMenu} className='hover:text-blue-500 text-gray-700'><Link to="/contact">Contact</Link></li>
                </ul>

                <div className={`lg:w-2/12 sm:w-4/12 w-full flex lg:justify-end justify-start ${menuOn ? 'block' : 'hidden'} lg:flex`}>
                    <button className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition">
                        Get Started
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Navbar;
