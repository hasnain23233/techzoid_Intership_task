import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faFlag, faEye, faLightbulb, faUsers, faTrophy } from '@fortawesome/free-solid-svg-icons'
import TeamSection from '../components/meetOurTeam'
import Read from '../components/Read'

const about = () => {
    return (
        <div>
            <div className='h-screen bg-[#f5f8fc] flex items-center justify-center'>
                <div className='w-full text-center'>
                    <p className='text-blue-600 p-1 m-auto rounded-full bg-blue-100  lg:w-2/12 sm:w-8/12 w-11/12  flex items-center flex-row gap-3 justify-center text-sm'><FontAwesomeIcon icon={faUserAlt} />  About Marvellcreativeco</p>
                    <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl py-2 font-bold leading-tight'>
                        Innovating the Future with  <br />  <span className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] py-2 bg-clip-text text-transparent">
                            AI & Creativity
                        </span>
                    </h1>
                    <p className='lg:text-xl sm:text-md text-sm  lg:w-7/12 sm:w-9/12 w-11/12 leading-snug m-auto text-gray-500 py-3'>
                        We're a team of passionate technologists, designers, and innovators dedicated to transforming businesses through cutting-edge AI solutions and creative <br /> technology.
                    </p>
                    <div className='lg:w-2/12 sm:w-6/12 w-10/12 m-auto mt-3 flex justify-center'>
                        <button className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition">
                            Work With Us
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 m-auto gap-3 w-11/12 mt-12'>
                <div className='m-auto  px-7 py-7 shadow-xl cursor-pointer w-full ServiceContainer'>
                    <p class="bg-gradient-to-r targetIcon  from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition"><FontAwesomeIcon icon={faFlag} className='text-2xl' /></p>
                    <h1 className='lg:text-2xl sm:text-xl text-lg font-semibold py-3'>Our Mission</h1>
                    <p className='text-gray-700 sm:text-lg text-sm'>To democratize AI and automation technology, making it accessible to businesses of all sizes. We believe every organization deserves the power of intelligent automation to streamline operations, enhance customer experiences, and drive growth.</p>
                </div>
                <div className='m-auto  px-7 py-7 shadow-xl cursor-pointer w-full ServiceContainer'>
                    <p class="bg-gradient-to-r targetIcon from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition"><FontAwesomeIcon icon={faEye} className='text-2xl' /></p>
                    <h1 className='lg:text-2xl sm:text-xl text-lg font-semibold py-3'>Our Vision</h1>
                    <p className='text-gray-700 sm:text-lg text-sm'>To be the leading force in AI-powered business transformation, where creativity meets technology. We envision a future where intelligent automation and creative solutions work together to solve complex challenges and unlock new possibilities.

                    </p>
                </div>
            </div>
            <div className=' py-20 bg-[#f5f8fc] mt-12'>
                <div className='text-center'>
                    <h1 className='lg:text-3xl text-2xl mt-4 font-bold text-gray-800'>Our Core Services</h1>
                    <p className='text-gray-700 leading-loose lg:text-lg sm:text-md text-sm lg:px-0 px-4'>Comprehensive AI and creative technology solutions tailored to your business needs</p>
                    <p className='bg-green-200 h-1 w-1/12 mt-4 rounded-md m-auto'></p>
                </div>
                <div className='mt-12'>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4 lg:px-0">
                        <div>
                            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center">
                                <FontAwesomeIcon icon={faLightbulb} className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Innovation First</h3>
                            <p className="text-gray-600 mt-2">
                                We constantly explore new technologies and creative approaches to solve complex problems and stay ahead of the curve.
                            </p>
                        </div>
                        <div>
                            <div className="w-16 h-16 mx-auto rounded-full bg-green-600 flex items-center justify-center">
                                <FontAwesomeIcon icon={faUsers} className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Client Success</h3>
                            <p className="text-gray-600 mt-2">
                                Your success is our success. We're committed to delivering solutions that drive real, measurable results for your business.
                            </p>
                        </div>
                        <div>
                            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                                <FontAwesomeIcon icon={faTrophy} className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Excellence</h3>
                            <p className="text-gray-600 mt-2">
                                We maintain the highest standards in everything we do, from code quality to customer service and project delivery.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <TeamSection />
            </div>
            <Read />
        </div>
    )
}

export default about
