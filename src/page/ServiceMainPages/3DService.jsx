import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCube } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Service3D = () => {
    const navigate = useNavigate()

    const handleChnage = () => {
        navigate('/contact')
    }
    return (
        <div>
            <div className='h-screen bg-[#00c8ff17]  flex items-center justify-center'>
                <div className='w-full text-center'><br /><br /> <br />
                    <p className=" bg-gradient-to-r from-[#00C6FF] to-[#0072FF] m-auto  text-white font-semibold w-20 h-20 rounded-xl flex items-center justify-center shadow-md hover:opacity-90 transition">
                        <FontAwesomeIcon icon={faCube} size='2x' />
                    </p> <br />
                    <p className='text-blue-600 p-1 m-auto rounded-full bg-blue-100 xl:w-2/12 lg:w-3/12 sm:w-5/12 w-10/12 gap-4 flex items-center flex-row  justify-center text-sm'> 🎨 3D Modeling & AR/VR</p>
                    <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl py-2 font-bold leading-tight'>
                        Immersive   <span className="bg-gradient-to-r from-[#00C6FF] to-[#0072FF] py-1 bg-clip-text text-transparent">
                            3D & AR/VR <br /> Experiences
                        </span>
                    </h1>
                    <p className='lg:text-xl sm:text-md text-sm  leading-snug m-auto text-gray-500 py-3'>
                        Bring your ideas to life with stunning 3D visualizations, character design, and immersive AR/VR experiences.
                    </p>
                    <div className='xl:w-2/12 lg:w-3/12 sm:w-6/12 w-10/12 m-auto mt-3 flex justify-center'>
                        <button onClick={useNavigate} className="bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition">
                            Create 3D Magic
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-center w-11/12 m-auto'>
                <h1 className='lg:text-4xl text-3xl text-gray-600 font-bold mt-12'>3D & AR/VR Services</h1>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 text-start gap-4 mt-14 ">
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#0072FF] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>3D Character Design</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Custom character modeling and animation

                                </p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#0072FF] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Product Rendering
                                </h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '> Photorealistic product visualizations</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#0072FF] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>NFT Creation</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Unique 3D NFT collections and artwork

                                </p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#0072FF] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>AR/VR Development</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Immersive augmented and virtual reality experiences</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#0072FF] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>3D Animation</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Dynamic animations for marketing and entertainment</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#0072FF] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Architectural Visualization</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Stunning 3D renders of buildings and spaces</p>
                            </p>
                        </div>
                    </div>
                </div>
                <br /> <br />
            </div>
        </div>
    )
}

export default Service3D
