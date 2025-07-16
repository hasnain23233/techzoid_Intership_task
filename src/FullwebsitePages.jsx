import React from 'react'
import Home from './page/home'
import About from './page/about';
import Process from './page/process';
import Blog from './page/blog';
import Contact from './page/contact';
import {
    Routes,
    Route,
} from "react-router-dom";
import Service from './page/service';

const FullwebsitePages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/process' element={<Process />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />

            </Routes>
        </div>
    )
}

export default FullwebsitePages
