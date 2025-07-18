import React from 'react'
import Home from '../assets/home.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Services from '../components/serviceList'
import TestimonialSlider from '../components/slider'
import Read from '../components/Read'

const home = () => {
    return (
        <div>
            <div className='lg:h-screen overflow-hidden h-[800px]  flex items-center justify-between bg-[#f4f9ff]'>
                <div className="w-11/12 m-auto flex lg:flex-row flex-col gap-2">
                    <div className="lg:w-6/12 w-full mt-8">
                        <p className='text-blue-400 p-2 rounded-full bg-blue-100 lg:w-5/12 sm:w-10/12 w-11/12 text-sm'>🚀 AI-Powered Business Solutions</p>
                        <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl text-gray-700 py-2  font-bold'>Innovation in Every <br />  <span className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] bg-clip-text text-transparent">
                            Pixel & Process
                        </span></h1>
                        <p className='text-gray-700 lg:text-xl sm:text-md text-sm leading-loose mt-2'>From custom AI chatbots to workflow automation, 3D modeling to data intelligence - we deliver cutting-edge solutions that drive growth and efficiency.</p>
                        <div className='flex lg:flex-row flex-col mt-3 gap-3'>
                            <button className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-2 px-4 rounded-lg  hover:opacity-90 transition">Book Free Consultions</button>
                            <button className="hover:bg-gradient-to-r from-[#007BFF] to-[#00FFD1] border hover:text-white text-gray-700 font-semibold py-2 px-4 rounded-lg  hover:opacity-90 transition">Book Free Consultions</button>
                        </div>
                        <div className='mt-5 flex text-sm gap-3'>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Free Consultation</p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Custom Solutions</p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Proven Results
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full mt-8">
                        <img src={Home} alt="" className='rounded-md lg:w-11/12 sm:8/12 m-auto' />
                    </div>
                </div>
            </div>
            <div>
                <div className='pt-4 text-center'>
                    <h1 className='lg:text-3xl text-2xl mt-4 font-bold text-gray-800'>Our Core Services</h1>
                    <p className='text-gray-700 leading-loose lg:text-lg sm:text-md text-sm'>Comprehensive AI and creative technology solutions tailored to your business needs</p>
                    <p className='bg-green-200 h-1 w-1/12 mt-4 rounded-md m-auto'></p>
                    <div>
                        <Services />
                    </div>
                </div>
            </div>
            <div className='bg-[#f4f9ff] mt-12'>
                <div className='text-center py-12'>
                    <h1 className='lg:text-3xl text-2xl mt-4 font-bold text-gray-800'>Our Proven Process</h1>
                    <p className='text-gray-700 leading-loose lg:text-md text-sm'>From discovery to deployment, we follow a structured approach to ensure success</p>
                    <p className='bg-green-200 h-1 w-1/12 mt-4 rounded-md m-auto'></p>
                    <div className='mt-6 grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-11/12 m-auto'>
                        <div className='m-auto mt-3'>
                            <p class="m-auto bg-gradient-to-r from-cyan-400 to-blue-500  text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">1</p>
                            <h1 className='font-semibold'>Discovery</h1>
                            <p className='text-gray-700 text-sm'>We analyze your business needs and identify automation opportunities</p>
                        </div>
                        <div className='m-auto mt-3'>
                            <p class=" m-auto bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">02</p>
                            <h1 className='font-semibold'>Design</h1>
                            <p className='text-gray-700 text-sm'>Create detailed blueprints and prototypes for your solution</p>
                        </div>
                        <div className='m-auto mt-3'>
                            <p class=" m-auto bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">03</p>
                            <h1 className='font-semibold'>Development</h1>
                            <p className='text-gray-700 text-sm'>Build and integrate your custom AI and automation systems</p>
                        </div>
                        <div className='m-auto mt-3'>
                            <p class=" m-auto bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">04</p>
                            <h1 className='font-semibold'>Deployment</h1>
                            <p className='text-gray-700 text-sm'>Launch your solution with comprehensive testing and optimization</p>
                        </div>
                        <div className='m-auto mt-3'>
                            <p class=" m-auto bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">05</p>
                            <h1 className='font-semibold '>Support</h1>
                            <p className='text-gray-700 text-sm'>Ongoing maintenance, updates, and performance monitoring</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-12'>
                <div className='text-center py-12'>
                    <h1 className='lg:text-3xl text-2xl mt-4 font-bold text-gray-800'>What Our Clients Say</h1>
                    <p className='text-gray-700 leading-loose lg:text-md text-sm'>Trusted by businesses worldwide for exceptional results</p>
                    <p className='bg-green-200 h-1 w-1/12 mt-4 rounded-md m-auto'></p>
                    <div className='mt-6 flex gap-4 m-auto'>
                        <TestimonialSlider />
                    </div>
                </div>
            </div>
            <Read />
        </div>
    )
}

export default home
