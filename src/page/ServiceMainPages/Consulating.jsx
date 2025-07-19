import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUserFriends } from "@fortawesome/free-solid-svg-icons";

const Consulating = () => {
    return (
        <div>
            <div className='h-screen bg-gradient-to-r  to-[#007bff10] from-[#00ffd03b] flex items-center justify-center'>
                <div className='w-full text-center'><br /><br /> <br />
                    <p className=" bg-gradient-to-r m-auto from-[#007bfff7] to-[#00ffd0ec] text-white font-semibold w-20 h-20 rounded-xl flex items-center justify-center shadow-md hover:opacity-90 transition">
                        <FontAwesomeIcon icon={faUserFriends} size='2x' />
                    </p> <br />
                    <p className='text-blue-600 p-1 m-auto rounded-full bg-blue-100 xl:w-2/12 lg:w-3/12 sm:w-5/12 w-10/12  gap-4 flex items-center flex-row  justify-center text-sm'> 💼 Consulting & Coaching</p>
                    <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl py-2 font-bold leading-tight'>
                        Expert     <span className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] py-1 bg-clip-text text-transparent">
                            Business Coaching
                        </span>
                    </h1>
                    <p className='lg:text-xl sm:text-md text-sm  lg:w-8/12 sm:w-9/12 w-11/12 leading-snug m-auto text-gray-500 py-3'>
                        Get expert guidance on platform setup, business strategy, and growth optimization for freelance and business success.


                    </p>
                    <div className='xl:w-2/12 lg:w-3/12 sm:w-6/12 w-10/12 m-auto mt-3 flex justify-center'>
                        <button className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition">
                            Start Coaching
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-center w-11/12 m-auto'>
                <h1 className='lg:text-4xl text-3xl text-gray-600 font-bold mt-12'>Consulting & Coaching Services </h1>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 text-start gap-4 mt-4 ">
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#007bfff7] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Fiverr/Upwork Setup</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Optimize your freelance profiles for maximum success

                                </p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#007bfff7] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Business Strategy
                                </h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '> Strategic planning for sustainable growth</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#007bfff7] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Growth Coaching
                                </h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>One-on-one coaching for business expansion

                                </p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#007bfff7] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Platform Optimization
                                </h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Maximize your presence on freelance platforms</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#007bfff7] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Revenue Scaling</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Strategies to increase your income streams</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#007bfff7] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Marketing Guidance</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Effective marketing strategies for your services
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
                <br /> <br />
            </div>
        </div>
    )
}

export default Consulating
