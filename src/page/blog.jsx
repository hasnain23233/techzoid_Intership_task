import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from '../assets/home.jpeg'
import RecentArticles from '../components/recandArticale';

const blog = () => {
    return (
        <div>
            <div className='h-screen bg-[#f5f8fc] flex items-center justify-center'>
                <div className='w-full text-center'>
                    <p className='text-blue-600 p-1 m-auto rounded-full bg-blue-100 w-2/12 gap-4 flex items-center flex-row  justify-center text-sm'> 📚 Insights & Knowledge </p>
                    <h1 className='text-6xl py-2 font-bold leading-tight'>
                        Latest   <span className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] py-2 bg-clip-text text-transparent">
                            Insights & Trends
                        </span>
                    </h1>
                    <p className='text-xl w-7/12 leading-snug m-auto text-gray-500 py-3'>
                        Stay updated with the latest developments in AI, automation, and creative technology. Expert insights to help you navigate the digital transformation.


                    </p>
                    <div className='w-2/12 m-auto mt-3 flex justify-center'>
                        <button className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:opacity-90 transition">
                            Start Your Project
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-start  w-8/12 m-auto mt-12'>
                <p className='text-green-600 p-1 font-bold rounded-full bg-green-100 w-2/12 gap-4 flex items-center flex-row  justify-center text-sm'> Featured Article</p>
                <div className='flex justify-between gap-6 mt-2 items-center shadow-2xl rounded-lg'>
                    <div className='w-6/12'>
                        <img src={Image} alt="" className='w-full h-full rounded-l-lg' />
                    </div>
                    <div className='w-6/12'>
                        <p className='text-white p-1 font-semibold rounded-full bg-gray-800 w-5/12 gap-4 flex items-center flex-row  justify-center text-sm'> AI & Automation</p>
                        <h1 className='text-3xl mt-2 font-semibold'>
                            The Future of AI in Business <br /> Automation
                        </h1>
                        <p className='text-gray-600 mt-3'>
                            Discover how AI is revolutionizing business processes and what it means for your organization's future.
                        </p>

                        <div className='text-sm text-gray-600 mt-6 flex items-start gap-5'>
                            <p>
                                <FontAwesomeIcon icon={faCalendarAlt} /> &nbsp;&nbsp; 2024-01-15
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faClock} /> &nbsp;&nbsp; 5 min read
                            </p>
                        </div>
                        <div className=' m-auto mt-4 flex '>
                            <button className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition">
                                Read Full Artical <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-12'>
                <RecentArticles />
                <div className='bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-center py-10'>
                    <h1 className='text-4xl text-white font-semibold'>Stay Updated with AI & Tech Trends</h1>
                    <p className='text-white text-lg leading-loose py-6'>
                        Get weekly insights, tips, and industry updates delivered to your inbox.
                    </p>
                    <button class="hover:bg-gradient-to-r from-[#007BFF] to-[#00FFD1] hover:text-white text-gray-700 font-semibold py-2 px-4 rounded-lg bg-white  hover:opacity-90 transition">Subcribe Now</button>
                </div>
            </div>
        </div>
    )
}

export default blog
