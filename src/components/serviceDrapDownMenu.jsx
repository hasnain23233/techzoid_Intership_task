import React from 'react'
import { Link } from 'react-router-dom'

const serviceDrapDownMenu = ({ isServiceOpen }) => {
    return (
        <div className='w-full '>
            <div
                className={` absolute top-full left-1/4 bg-white shadow-lg rounded-md mt-2 w-6/12  overflow-hidden transition-all duration-300 ease-in-out ${isServiceOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className='grid grid-cols-2 bg-white p-3'>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md">
                        <Link to="/service/ai-generative-ai">
                            <h1 className='text-gray-700 leading-loose font-bold '>AI & Generative AI</h1>
                            <p className='text-sm text-gray-400'>Chatbot , LLMs , Custome AI Apps</p>
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md">
                        <Link to="/services/workflow-automation">
                            <h1 className='text-gray-700 leading-loose font-bold '>AI + Workflow Automation</h1>
                            <p className='text-sm text-gray-400'>Zapier , Make , n8n Integration</p>
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md">
                        <Link to="/services/machine-learning">
                            <h1 className='text-gray-700 leading-loose font-bold '>Machine Learning Data Intelligence</h1>
                            <p className='text-sm text-gray-400'>Predictive Analysis , Dashboards</p>
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md">
                        <Link to="/services/voice-speech-ai">
                            <h1 className='text-gray-700 leading-loose font-bold '>Voice & Speech AI</h1>
                            <p className='text-sm text-gray-400'>Voicebots , IVR , AI Avatars</p>
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md">
                        <Link to="/services/3d-modeling-ar-vr">
                            <h1 className='text-gray-700 leading-loose font-bold '>3D Modeling & AR/VR</h1>
                            <p className='text-sm text-gray-400'>Characters , Product Renders , NFTs</p>
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md">
                        <Link to="/services/ui-ux-development">
                            <h1 className='text-gray-700 leading-loose font-bold '>UI/UX & Frontend Development</h1>
                            <p className='text-sm text-gray-400'>Web/Mobile Design</p>
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md">
                        <Link to="/services/python-automation">
                            <h1 className='text-gray-700 leading-loose font-bold '>Python & Custome Automation</h1>
                            <p className='text-sm text-gray-400'>Web Scraping , APIs , Beckend</p>
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md">
                        <Link to="/services/consulting-coaching">
                            <h1 className='text-gray-700 leading-loose font-bold '>Consulting & Coaching</h1>
                            <p className='text-sm text-gray-400'>Business Strategy , Platform Setup</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default serviceDrapDownMenu
