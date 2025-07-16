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
            <div className='h-screen flex items-center justify-between bg-[#f4f9ff]'>
                <div className="w-11/12 m-auto flex gap-2">
                    <div className="w-6/12 mt-8">
                        <p className='text-blue-400 p-2 rounded-full bg-blue-100 w-5/12 text-sm'>🚀 AI-Powered Business Solutions</p>
                        <h1 className='text-6xl text-gray-700 py-2  font-bold'>Innovation in Every <br />  <span className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] bg-clip-text text-transparent">
                            Pixel & Process
                        </span></h1>
                        <p className='text-gray-700 text-xl leading-loose mt-2'>From custom AI chatbots to workflow automation, 3D modeling to data intelligence - we deliver cutting-edge solutions that drive growth and efficiency.</p>
                        <div className='flex mt-3 gap-3'>
                            <button className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-2 px-4 rounded-lg  hover:opacity-90 transition">Book Free Consultions</button>
                            <button className="hover:bg-gradient-to-r from-[#007BFF] to-[#00FFD1] hover:text-white text-gray-700 font-semibold py-2 px-4 rounded-lg  hover:opacity-90 transition">Book Free Consultions</button>
                        </div>
                        <div className='mt-5 flex gap-3'>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Free Consultation</p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Free Consultation</p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Free Consultation</p>
                            </p>
                        </div>
                    </div>
                    <div className="w-6/12 mt-8">
                        <img src={Home} alt="" className='rounded-md w-11/12 m-auto' />
                    </div>
                </div>
            </div>
            <div className='text-center h-screen flex items-center text-gray-700 py-5'>
                <div>
                    <div className='pt-4'>
                        <h1 className='text-4xl mt-4 font-bold'>About Us</h1>
                        <p className='bg-green-200 h-1 w-1/12 mt-4 rounded-md m-auto'></p>
                    </div>
                    <p className='w-8/12 py-3 leading-loose m-auto mt-3'>
                        From custom AI chatbots to workflow automation, 3D modeling to data intelligence - we deliver cutting-edge solutions that drive growth and efficiency. From custom AI chatbots to workflow automation, 3D modeling to data intelligence - we deliver cutting-edge solutions that drive growth and efficiency. From custom AI chatbots to workflow automation, 3D modeling to data intelligence - we deliver cutting-edge solutions that drive growth and efficiency. From custom AI chatbots to workflow automation, 3D modeling to data intelligence - we deliver cutting-edge solutions that drive growth and efficiency.
                    </p>
                    <div className='w-2/12 m-auto mt-3 flex justify-center'>
                        <button class="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition">View More</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='pt-4 text-center'>
                    <h1 className='text-4xl mt-4 font-bold text-gray-800'>Our Core Services</h1>
                    <p className='text-gray-700 leading-loose text-lg'>Comprehensive AI and creative technology solutions tailored to your business needs</p>
                    <p className='bg-green-200 h-1 w-1/12 mt-4 rounded-md m-auto'></p>
                    <div>
                        <Services />
                    </div>
                </div>
            </div>
            <div className='bg-[#f4f9ff] mt-12'>
                <div className='text-center py-12'>
                    <h1 className='text-3xl mt-4 font-bold text-gray-800'>Our Proven Process</h1>
                    <p className='text-gray-700 leading-loose'>From discovery to deployment, we follow a structured approach to ensure success</p>
                    <p className='bg-green-200 h-1 w-1/12 mt-4 rounded-md m-auto'></p>
                    <div className='mt-6 flex gap-4 w-11/12 m-auto'>
                        <div className='m-auto w-3/12 mt-3'>
                            <p class="m-auto bg-gradient-to-r from-cyan-400 to-blue-500  text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">1</p>
                            <h1 className='font-semibold'>Discovery</h1>
                            <p className='text-gray-700 text-sm'>We analyze your business needs and identify automation opportunities</p>
                        </div>
                        <div className='m-auto w-3/12 mt-3'>
                            <p class=" m-auto bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">02</p>
                            <h1 className='font-semibold'>Design</h1>
                            <p className='text-gray-700 text-sm'>Create detailed blueprints and prototypes for your solution</p>
                        </div>
                        <div className='m-auto w-3/12 mt-3'>
                            <p class=" m-auto bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">03</p>
                            <h1 className='font-semibold'>Development</h1>
                            <p className='text-gray-700 text-sm'>Build and integrate your custom AI and automation systems</p>
                        </div>
                        <div className='m-auto w-3/12 mt-3'>
                            <p class=" m-auto bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">04</p>
                            <h1 className='font-semibold'>Deployment</h1>
                            <p className='text-gray-700 text-sm'>Launch your solution with comprehensive testing and optimization</p>
                        </div>
                        <div className='m-auto w-3/12 mt-3'>
                            <p class=" m-auto bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">05</p>
                            <h1 className='font-semibold '>Support</h1>
                            <p className='text-gray-700 text-sm'>Ongoing maintenance, updates, and performance monitoring</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-12'>
                <div className='text-center py-12'>
                    <h1 className='text-3xl mt-4 font-bold text-gray-800'>What Our Clients Say</h1>
                    <p className='text-gray-700 leading-loose'>Trusted by businesses worldwide for exceptional results</p>
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
