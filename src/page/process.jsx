import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faCheckCircle, faBolt, faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";


const process = () => {
    return (
        <div>
            <div className='h-screen bg-[#f5f8fc] flex items-center justify-center'>
                <div className='w-full text-center'>
                    <p className='text-blue-600 p-1 m-auto rounded-full bg-blue-100 lg:w-2/12 sm:w-8/12 w-11/12 gap-4 flex items-center flex-row  justify-center text-sm'> 🔄 Our Proven Process </p>
                    <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl py-2 font-bold leading-tight'>
                        From Idea to    <span className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] py-2 bg-clip-text text-transparent">
                            Implementation
                        </span>
                    </h1>
                    <p className='lg:text-xl sm:text-md text-sm  lg:w-7/12 sm:w-9/12 w-11/12 leading-snug m-auto text-gray-500 py-3'>
                        Our structured 5-step approach ensures successful delivery of your AI and automation projects.
                    </p>
                    <div className='lg:w-2/12 sm:w-6/12 w-10/12 m-auto mt-3 flex justify-center'>
                        <button className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:opacity-90 transition">
                            Start Your Project
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-11/12 m-auto mt-12 pb-12'>
                <div className='grid lg:grid-cols-2 grid-cols-1 items-center justify-between'>
                    <div className='border py-5 cursor-pointer px-6 hover:shadow-lg rounded-lg'>
                        <div className='flex gap-2 items-center justify-between '>
                            <p className=" bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">01</p>
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Discovery</h1>
                                <p className='text-gray-700 text-sm'>We analyze your business needs and identify automation opportunities</p>
                            </div>
                        </div>
                        <div className='mt-5 grid grid-cols-2 gap-3  py-3'>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Requirements analysis</p>
                            </p>
                            <p className='flex items-center gap-2 '>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Technology assessment</p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Goal setting</p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Timeline planning</p>
                            </p>
                        </div>
                    </div>
                    <div className='lg:block hidden'>
                        <p className=" bg-gradient-to-r m-auto from-[#007bff37] to-[#00ffd02d] text-blue-600 font-semibold w-28 h-28 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">
                            <FontAwesomeIcon icon={faUserFriends} size='3x' />
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-6 lg:flex-row-reverse flex-col'>
                    <div className='border py-5 cursor-pointer lg:w-6/12 sm:w-10/12 w-full px-6 hover:shadow-lg rounded-lg'>
                        <div className='flex gap-2 items-center justify-between '>
                            <p className=" bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">02</p>
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Design</h1>
                                <p className='text-gray-700 text-sm'>Create detailed blueprints and prototypes for your solution</p>
                            </div>
                        </div>
                        <div className='mt-5 grid grid-cols-2 gap-3  py-3'>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> System architecture</p>
                            </p>
                            <p className='flex items-center gap-2 '>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Workflow mapping
                                </p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> UI/UX design</p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Prototype development</p>
                            </p>
                        </div>
                    </div>
                    <div className='w-6/12 lg:block hidden'>
                        <p className=" bg-gradient-to-r m-auto from-[#007bff37] to-[#00ffd02d] text-blue-600 font-semibold w-28 h-28 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">
                            <FontAwesomeIcon icon={faCheckCircle} size='3x' />
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-6'>
                    <div className='border py-5 cursor-pointer lg:w-6/12 sm:w-10/12 w-full px-6 hover:shadow-lg rounded-lg'>
                        <div className='flex gap-2 items-center justify-between '>
                            <p className=" bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">03</p>
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Development</h1>
                                <p className='text-gray-700 text-sm'>Build and integrate your custom AI and automation systems</p>
                            </div>
                        </div>
                        <div className='mt-5 grid grid-cols-2 gap-3  py-3'>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Agile development</p>
                            </p>
                            <p className='flex items-center gap-2 '>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Regular updates
                                </p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Quality assurance</p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Integration testing</p>
                            </p>
                        </div>
                    </div>
                    <div className='w-6/12 lg:block hidden'>
                        <p className=" bg-gradient-to-r m-auto from-[#007bff37] to-[#00ffd02d] text-blue-600 font-semibold w-28 h-28 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">
                            <FontAwesomeIcon icon={faBolt} size='3x' />
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-6 lg:flex-row-reverse flex-col'>
                    <div className='border py-5 cursor-pointer lg:w-6/12 sm:w-10/12 w-full px-6 hover:shadow-lg rounded-lg'>
                        <div className='flex gap-2 items-center justify-between '>
                            <p className=" bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">04</p>
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Deployment</h1>
                                <p className='text-gray-700 text-sm'>Launch your solution with comprehensive testing and optimization</p>
                            </div>
                        </div>
                        <div className='mt-5 grid grid-cols-2 gap-3  py-3'>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '>Production deployment</p>
                            </p>
                            <p className='flex items-center gap-2 '>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Performance optimization
                                </p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '>User training
                                </p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '>Go-live support</p>
                            </p>
                        </div>
                    </div>
                    <div className='w-6/12 lg:block hidden'>
                        <p className=" bg-gradient-to-r m-auto from-[#007bff37] to-[#00ffd02d] text-blue-600 font-semibold w-28 h-28 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">
                            <FontAwesomeIcon icon={faArrowRight} size='3x' />
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-6'>
                    <div className='border py-5 cursor-pointer lg:w-6/12 sm:w-10/12 w-full px-6 hover:shadow-lg rounded-lg'>
                        <div className='flex gap-2 items-center justify-between '>
                            <p className=" bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">05</p>
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Support</h1>
                                <p className='text-gray-700 text-sm'>Ongoing maintenance, updates, and performance monitoring</p>
                            </div>
                        </div>
                        <div className='mt-5 grid grid-cols-2 gap-3  py-3'>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '>24/7 monitoring</p>
                            </p>
                            <p className='flex items-center gap-2 '>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '> Regular updates

                                </p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '>Performance optimization

                                </p>
                            </p>
                            <p className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                                <p className='text-gray-700 '>Technical support</p>
                            </p>
                        </div>
                    </div>
                    <div className='w-6/12 lg:block hidden'>
                        <p className=" bg-gradient-to-r m-auto from-[#007bff37] to-[#00ffd02d] text-blue-600 font-semibold w-28 h-28 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition">
                            <FontAwesomeIcon icon={faClock} size='3x' />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default process
