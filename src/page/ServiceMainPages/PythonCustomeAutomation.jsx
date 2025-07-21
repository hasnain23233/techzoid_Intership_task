import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCode } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const PythonCustomeAutomation = () => {
    const navigate = useNavigate()

    const handleChnage = () => {
        navigate('/contact')
    }
    return (
        <div>
            <div className='h-screen bg-[#facc1522]  flex items-center justify-center'>
                <div className='w-full text-center'><br /><br /> <br />
                    <p className=" bg-gradient-to-br from-yellow-400 to-orange-500 m-auto  text-white font-semibold w-20 h-20 rounded-xl flex items-center justify-center shadow-md hover:opacity-90 transition">
                        <FontAwesomeIcon icon={faCode} size='2x' />
                    </p> <br />
                    <p className='text-orange-500 font-semibold p-1 m-auto rounded-full bg-[#facc1522] xl:w-2/12 lg:w-3/12 sm:w-5/12 w-10/12  gap-4 flex items-center flex-row  justify-center text-sm'> 🐍 Python & Custom Automation</p>
                    <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl py-2 font-bold leading-tight'>
                        Powerful    <span className="bg-gradient-to-br from-yellow-400 to-orange-500 py-1 bg-clip-text text-transparent">
                            Python Automation
                        </span>
                    </h1>
                    <p className='lg:text-xl sm:text-md text-sm  lg:w-8/12 sm:w-9/12 w-11/12 leading-snug m-auto text-gray-500 py-3'>
                        Automate repetitive tasks and build powerful backend systems with custom Python scripts and API integrations.
                    </p>
                    <div className='xl:w-2/12 lg:w-3/12 sm:w-6/12 w-10/12 m-auto mt-3 flex justify-center'>
                        <button onClick={handleChnage} className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition">
                            Automate Everything
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-center w-11/12 m-auto'>
                <h1 className='lg:text-4xl text-3xl text-gray-600 font-bold mt-12'>Python Automation Services</h1>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 text-start gap-4 mt-14 ">
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Web Scraping</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Extract data from websites automatically

                                </p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>API Development
                                </h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '> Custom APIs for your applications</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Backend Tools</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Powerful backend systems and utilities

                                </p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Data Processing
                                </h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Automated data cleaning and analysis</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Custom Scripts</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Tailored automation scripts for your needs</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Task Scheduling</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Automated recurring tasks and workflows

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

export default PythonCustomeAutomation
