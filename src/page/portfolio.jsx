import React from 'react'
import Project from '../components/Projects'

const portfolio = () => {
    return (
        <div>
            <div className='h-screen bg-[#f5f8fc] flex items-center justify-center'>
                <div className='w-full text-center'>
                    <p className='text-blue-600 p-1 m-auto rounded-full bg-blue-100 w-2/12 gap-4 flex items-center flex-row  justify-center text-sm'> 🏆 Our Success Stories </p>
                    <h1 className='text-6xl py-2 font-bold leading-tight'>
                        Portfolio &   <span className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] py-2 bg-clip-text text-transparent">
                            Case Studies
                        </span>
                    </h1>
                    <p className='text-xl w-8/12 leading-snug m-auto text-gray-500 py-3'>
                        Discover how we've helped businesses transform with AI, automation, and creative technology solutions.
                    </p>
                    <div className='w-2/12 m-auto mt-3 flex justify-center'>
                        <button className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:opacity-90 transition">
                            Start Your Success Story
                        </button>
                    </div>
                </div>
            </div>
            <Project />
        </div>
    )
}

export default portfolio
