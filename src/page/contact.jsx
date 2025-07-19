import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faClock,
} from "@fortawesome/free-solid-svg-icons";


const contact = () => {
    return (
        <div>
            <div className='h-screen bg-[#f5f8fc] flex items-center justify-center'>
                <div className='w-full text-center'>
                    <p className='text-blue-600 p-1 m-auto rounded-full bg-blue-100 lg:w-1/12 sm:w-7/12 w-10/12 flex items-center flex-row gap-3 justify-center text-sm'> 💬 Get In Touch</p>
                    <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl py-2 font-bold leading-tight'>
                        Let's Build Something  <br />  <span className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] py-2 bg-clip-text text-transparent">
                            Amazing Together
                        </span>
                    </h1>
                    <p className='lg:text-xl sm:text-md text-sm  lg:w-7/12 sm:w-9/12 w-11/12  leading-snug m-auto text-gray-500 py-3'>
                        Ready to transform your business with AI and automation? We'd love to hear about your project and discuss how we can help you achieve your goals.
                    </p>
                    <div className='lg:w-2/12 sm:w-6/12 w-10/12 m-auto mt-3 flex justify-center'>
                        <button className="bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex gap-3 w-11/12 m-auto mt-12'>
                <div className='lg:w-7/12 sm:w-9/12 w-11/12 px-7 py-3 m-auto shadow-2xl'>
                    <h1 className='lg:text-xl  font-semibold'>Send Us a Message</h1>
                    <p className='mt-2 lg:text-md text-sm text-gray-600'>Fill out the form and we’ll get back to you within 24 hours.</p>
                    <form action="" className='mt-5'>
                        <div className='grid sm:grid-cols-2 gap-4'>
                            <p>
                                <label htmlFor="name" className='font-semibold text-sm text-gray-700'>First Name</label> <br />
                                <input type="text" name='name' id='name' className='border rounded-md w-full  h-10 text-sm font-light px-2 focus:outline-none' placeholder='First Name' required />
                            </p>
                            <p>
                                <label htmlFor="lastName" className='font-semibold text-sm text-gray-700'>last Name</label> <br />
                                <input type="text" name='lastName' id='lastName' className='border rounded-md w-full h-10 text-sm font-light px-2 focus:outline-none' placeholder='Last Name' required />
                            </p>
                        </div>
                        <p className='mt-3'>
                            <label htmlFor="email" className='font-semibold text-sm text-gray-700'>Email</label> <br />
                            <input type="email" name='email' id='email' className='border rounded-md w-full  h-10 text-sm font-light px-2 focus:outline-none' placeholder='Write Your Email' required />
                        </p>
                        <p className='mt-3'>
                            <label htmlFor="Company" className='font-semibold text-sm text-gray-700'>Company Name</label> <br />
                            <input type="email" name='Company' id='Company' className='border rounded-md w-full  h-10 text-sm font-light px-2 focus:outline-none' placeholder='Company' required />
                        </p>
                        <p className='mt-3'>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Service Interested In
                            </label>
                            <select
                                className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                            >
                                <option>Select a service</option>
                                <option>Web Development</option>
                                <option>UI/UX Design</option>
                                <option>Marketing</option>
                            </select>
                        </p>
                        <p className='mt-3'>
                            <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">
                                Project Details
                            </label>
                            <textarea
                                rows="3"
                                className="w-full  border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                                placeholder="Project Details"
                            ></textarea>
                        </p>
                        <button
                            type="submit"
                            className="w-full mt-6 py-2 text-sm px-4 text-white rounded-lg bg-gradient-to-r from-[#007BFF] to-[#00FFD1] shadow-md hover:opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div className='w-5/12 lg:block hidden'>
                    <div className=" w-full p-4 space-y-6">
                        <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center rounded-full">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <h4 className="font-semibold">Email Us</h4>
                                <p className="text-sm text-gray-600">marvellcreativeco@gmail.com</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-4 flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-center rounded-full">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div>
                                <h4 className="font-semibold">Call Us</h4>
                                <p className="text-sm text-gray-600">+63 907 512 0255</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-4 flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center rounded-full">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div>
                                <h4 className="font-semibold">Location</h4>
                                <p className="text-sm text-gray-600">Jutial Gilgit, Gilgit-Baltistan Pakistan</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-4 flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center rounded-full">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div>
                                <h4 className="font-semibold">Business Hours</h4>
                                <p className="text-sm text-gray-600">Mon - Fri: 9AM - 6PM PST</p>
                            </div>
                        </div>

                        <div className="rounded-lg p-6 bg-gradient-to-r from-[#007BFF] to-[#00FFD1] text-white text-start shadow-md">
                            <h3 className="text-lg font-bold mb-1">Ready to Get Started?</h3>
                            <p className="text-sm mb-4">
                                Book a free 30-minute consultation to discuss your project and explore how we can help.
                            </p>
                            <button className="bg-white text-blue-600  px-6 py-1 w-full text-sm rounded hover:bg-gray-100 transition">
                                Book Free Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    )
}

export default contact
