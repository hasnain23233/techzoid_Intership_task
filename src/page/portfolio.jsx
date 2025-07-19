import React from 'react'
import Project from '../components/Projects'

const portfolio = () => {
    return (
        <div>
            <div className='h-screen bg-[#f5f8fc] flex items-center justify-center'>
                <div className='w-full text-center'>
                    <p className='text-blue-600 p-1 m-auto rounded-full bg-blue-100 lg:w-2/12 sm:w-8/12 w-11/12  gap-4 flex items-center flex-row  justify-center text-sm'> 🏆 Our Success Stories </p>
                    <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl py-2 font-bold leading-tight'>
                        Portfolio &   <span className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] py-2 bg-clip-text text-transparent">
                            Case Studies
                        </span>
                    </h1>
                    <p className='lg:text-xl sm:text-md text-sm  lg:w-7/12 sm:w-9/12 w-11/12  leading-snug m-auto text-gray-500 py-3'>
                        Discover how we've helped businesses transform with AI, automation, and creative technology solutions.
                    </p>
                    <div className='lg:w-2/12 sm:w-6/12 w-10/12 m-auto mt-3 flex justify-center'>
                        <button className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:opacity-90 transition">
                            Start Your Success Story
                        </button>
                    </div>
                </div>
            </div>
            <Project />
            <div className="bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">

                    <div>
                        <h2 className="text-5xl font-bold text-purple-600">500+</h2>
                        <p className="text-gray-700 text-lg mt-2">Projects Completed</p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold text-blue-600">95%</h2>
                        <p className="text-gray-700 text-lg mt-2">Client Satisfaction</p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold text-green-600">200+</h2>
                        <p className="text-gray-700 text-lg mt-2">Happy Clients</p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold text-orange-600">5 Years</h2>
                        <p className="text-gray-700 text-lg mt-2">Experience</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default portfolio
