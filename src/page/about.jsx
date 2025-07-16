import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faFlag, faEye } from '@fortawesome/free-solid-svg-icons'

const about = () => {
    return (
        <div>
            <div className='h-screen bg-[#f5f8fc] flex items-center justify-center'>
                <div className='w-full text-center'>
                    <p className='text-blue-600 p-1 m-auto rounded-full bg-blue-100 w-2/12 flex items-center flex-row gap-3 justify-center text-sm'><FontAwesomeIcon icon={faUserAlt} />  About Marvellcreativeco</p>
                    <h1 className='text-6xl py-2 font-bold leading-tight'>
                        Innovating the Future with  <br />  <span className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] py-2 bg-clip-text text-transparent">
                            AI & Creativity
                        </span>
                    </h1>
                    <p className='text-xl w-7/12 leading-snug m-auto text-gray-500 py-3'>
                        We're a team of passionate technologists, designers, and innovators dedicated to transforming businesses through cutting-edge AI solutions and creative <br /> technology.
                    </p>
                    <div className='w-2/12 m-auto mt-3 flex justify-center'>
                        <button className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition">
                            Work With Us
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 m-auto gap-3 w-11/12 mt-12'>
                <div className='m-auto  px-7 py-7 shadow-xl cursor-pointer w-full ServiceContainer'>
                    <p class="bg-gradient-to-r targetIcon  from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition"><FontAwesomeIcon icon={faFlag} className='text-2xl' /></p>
                    <h1 className='text-2xl font-semibold py-3'>Our Mission</h1>
                    <p className='text-gray-700 text-lg'>To democratize AI and automation technology, making it accessible to businesses of all sizes. We believe every organization deserves the power of intelligent automation to streamline operations, enhance customer experiences, and drive growth.</p>
                </div>
                <div className='m-auto  px-7 py-7 shadow-xl cursor-pointer w-full ServiceContainer'>
                    <p class="bg-gradient-to-r targetIcon from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition"><FontAwesomeIcon icon={faEye} className='text-2xl' /></p>
                    <h1 className='text-2xl font-semibold py-3'>Our Vision</h1>
                    <p className='text-gray-700 text-lg'>To be the leading force in AI-powered business transformation, where creativity meets technology. We envision a future where intelligent automation and creative solutions work together to solve complex challenges and unlock new possibilities.

                    </p>
                </div>
            </div>
            <div className='h-screen bg-[#f5f8fc] mt-12'></div>
        </div>
    )
}

export default about
