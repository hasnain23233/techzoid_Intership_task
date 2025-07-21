import { FaYoutube, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import Logo from '../assets/logo.svg'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#0c162d] text-white pt-10 pb-6 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10 border-b border-gray-600 pb-8">
                {/* Left Section */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img src={Logo} alt="Logo" className="w-10 h-10" />
                        <span className="font-bold text-lg">Marvellcreativeco</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                        Transforming businesses with cutting-edge AI solutions, automation, and creative technology services
                    </p>
                    <div className="flex space-x-4 text-xl text-gray-400">
                        <FaGithub className="hover:text-white cursor-pointer" />
                        <FaYoutube className="hover:text-white cursor-pointer" />
                        <FaTwitter className="hover:text-white cursor-pointer" />
                        <FaInstagram className="hover:text-white cursor-pointer" />
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold mb-4">Services</h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                        <li><Link to={'/service/ai-generative-ai'} className="hover:text-white">AI & Generative AI</Link></li>
                        <li><Link to={'/services/workflow-automation'} className="hover:text-white">Workflow Automation</Link></li>
                        <li><Link to={'/services/machine-learning'} className="hover:text-white">Machine Learning</Link></li>
                        <li><Link to={'/services/3d-modeling-ar-vr'} className="hover:text-white">3D Modeling & AR/VR</Link></li>
                        <li><Link to={'/services/ui-ux-development'} className="hover:text-white">UI/UX Development</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link to={'/portfolio'} className="hover:text-white">Portfolio</Link></li>
                        <li><Link to={'/process'} className="hover:text-white">Our Process</Link></li>
                        <li><Link to={'/blog'} className="hover:text-white">Blog</Link></li>
                        <li><Link to={'/contact'} className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-4">Contact Us</h3>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li>marvellcreativeco@gmail.com</li>
                        <li>+63 907 512 0255</li>
                        <li>Get the latest insights on AI and automation trends.</li>
                    </ul>
                    <div className="mt-4 flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="rounded-l-md bg-[#11192e] text-sm text-white px-4 py-2 focus:outline-none border border-gray-500"
                        />
                        <button className="rounded-r-md bg-gradient-to-r from-cyan-400 to-green-400 px-4 text-sm text-white font-semibold">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm">
                <p>2025 Marvellcreativeco. All rights reserved.</p>
                <div className="space-x-4 mt-2 md:mt-0">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
