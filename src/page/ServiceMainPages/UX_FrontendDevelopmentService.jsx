import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPalette } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const UX_FrontendDevelopmentService = () => {
    const navigate = useNavigate()

    const handleChnage = () => {
        navigate('/contact')
    }
    return (
        <div>
            <div className='h-screen bg-[#fef2f5] from-[#00ffd03b] flex items-center justify-center'>
                <div className='w-full text-center'><br /><br /> <br />
                    <p className=" bg-gradient-to-br from-pink-500 to-rose-400 m-auto  text-white font-semibold w-20 h-20 rounded-xl flex items-center justify-center shadow-md hover:opacity-90 transition">
                        <FontAwesomeIcon icon={faPalette} size='2x' />
                    </p> <br />
                    <p className='text-rose-400 font-semibold p-1 m-auto rounded-full bg-[#821e4916] xl:w-3/12 lg:w-4/12 sm:w-5/12 w-10/12  gap-4 flex items-center flex-row  justify-center text-sm'> 🎨 UI/UX & Frontend Development</p>
                    <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl py-2 font-bold leading-tight'>
                        Beautiful    <span className="bg-gradient-to-br from-pink-500 to-rose-400 py-1 bg-clip-text text-transparent">
                            User Experiences
                        </span>
                    </h1>
                    <p className='lg:text-xl sm:text-md text-sm  lg:w-8/12 sm:w-9/12 w-11/12 leading-snug m-auto text-gray-500 py-3'>
                        Design beautiful, user-centric interfaces that engage users and drive conversions across web and mobile platforms.
                    </p>
                    <div className='xl:w-2/12 lg:w-3/12 sm:w-6/12 w-10/12  m-auto mt-3 flex justify-center'>
                        <button onClick={handleChnage} className="bg-gradient-to-br from-pink-500 to-rose-400 text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition">
                            Design Your Interface
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-center w-11/12 m-auto'>
                <h1 className='lg:text-4xl text-3xl text-gray-600 font-bold mt-12'>Design & Development Services</h1>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 text-start gap-4 mt-14">
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Web Design</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Modern, responsive websites that convert

                                </p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Mobile App Design
                                </h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '> Intuitive mobile experiences for iOS and Android</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Dashboard Interfaces</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Clean, functional admin and analytics dashboards

                                </p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>User Experience Optimization</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Data-driven UX improvements</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Frontend Development</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>High-performance React and modern web apps</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Design Systems</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Consistent design languages and component libraries</p>
                            </p>
                        </div>
                    </div>
                </div>
                <br /> <br />
            </div>
        </div>
    )
}

export default UX_FrontendDevelopmentService
