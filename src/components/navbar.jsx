import React from 'react'
import Logo from '../assets/logo.svg'
import {
    Link
} from 'react-router-dom'

const navbar = () => {
    return (
        <header className='bg-white bg-white/30 fixed backdrop-blur-md z-10 w-full'>
            <div className='flex w-11/12 m-auto justify-between px-4 py-2 gap-3 font-semibold items-center'>
                <div className='flex items-center gap-2 w-2/12'>
                    <img src={Logo} alt="" className='w-3/12' />
                    <h1 className='font-bold text-lg'>Marvellcreativeco</h1>
                </div>
                <ul className='flex gap-9 w-5/12'>
                    <li className='hover:text-blue-500 text-gray-700'><Link to="/">Home</Link></li>
                    <li className='hover:text-blue-500 text-gray-700'><Link to="/about">About</Link></li>
                    <li className='hover:text-blue-500 text-gray-700'><Link to="/service">Service</Link></li>
                    <li className='hover:text-blue-500 text-gray-700'><Link to="/process">Process</Link></li>
                    <li className='hover:text-blue-500 text-gray-700'><Link to="/portfolio">Portfolio</Link></li>
                    <li className='hover:text-blue-500 text-gray-700'><Link to="/blog">Blog</Link></li>
                    <li className='hover:text-blue-500 text-gray-700'><Link to="/contact">Contact</Link></li>
                </ul>
                <div className='w-2/12 flex justify-end'>
                    <button class="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition">Get Started</button>
                </div>
            </div>
        </header>
    )
}

export default navbar
