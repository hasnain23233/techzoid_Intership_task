import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faRobot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const GenerativeAI = () => {
    const navigate = useNavigate()

    const handleChnage = () => {
        navigate('/contact')
    }
    return (
        <div>
            <div className='h-screen bg-[#eefaff] flex items-center justify-center'>
                <div className='w-full text-center'><br /><br /> <br />
                    <p className=" bg-gradient-to-r from-[#0055ff] to-[#0072FF] m-auto  text-white font-semibold w-20 h-20 rounded-xl flex items-center justify-center shadow-md hover:opacity-90 transition">
                        <FontAwesomeIcon icon={faRobot} size='2x' />
                    </p> <br />
                    <p className='text-blue-600 p-1 m-auto rounded-full bg-blue-100 xl:w-2/12 lg:w-3/12 sm:w-5/12 w-10/12  gap-4 flex items-center flex-row  justify-center text-sm'> 🤖 AI & Generative AI Solutions </p>
                    <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl py-2 font-bold leading-tight'>
                        Custom AI &   <span className="bg-gradient-to-r from-[#0055ff] to-[#0072FF] py-1 bg-clip-text text-transparent">
                            Chatbot <br /> Development
                        </span>
                    </h1>
                    <p className='lg:text-xl sm:text-md text-sm  lg:w-7/12 sm:w-9/12 w-11/12  leading-snug m-auto text-gray-500 py-3'>
                        Streamline your operations with intelligent automation that connects your tools, processes, and data seamlessly.
                    </p>
                    <div className='lg:w-2/12 sm:w-6/12 w-10/12 m-auto mt-3 flex justify-center'>
                        <button onClick={handleChnage} className="bg-gradient-to-r from-[#0055ff] to-[#0072FF] text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition">
                            Start Your AI Project
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-center w-11/12 m-auto'>
                <h1 className='lg:text-4xl text-3xl text-gray-600 font-bold mt-12'>Our AI Services</h1>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 text-start gap-4 mt-14 ">
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#0055ff] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Custom Chatbot Development</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '> Intelligent conversational AI for customer support and engagement</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#0055ff] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>LLM Integration & Fine-tuning</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '> Seamless integration of large language models into your applications</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#0055ff] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Prompt Engineering</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Optimized prompts for maximum AI performance and accuracy</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#0055ff] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>AI Content Generation</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Automated content creation for marketing and communications</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#0055ff] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>Conversational AI</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Advanced AI systems for natural human-like interactions</p>
                            </p>
                        </div>
                    </div>
                    <div className='border py-5 cursor-pointer  px-6 hover:shadow-md rounded-lg'>
                        <div className='flex gap-3 items-center  '>

                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#0055ff] text-3xl" />
                            <div className=' w-10/12'>
                                <h1 className='font-semibold text-xl leading-loose'>AI Training & Optimization</h1>
                            </div>
                        </div>
                        <div className='mt-2  py-3'>
                            <p className='flex items-center gap-2'>
                                <p className='text-gray-700 '>Custom training and fine-tuning for your specific use cases</p>
                            </p>
                        </div>
                    </div>
                </div>
                <br /> <br />
            </div>
        </div>
    )
}

export default GenerativeAI
