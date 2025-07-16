import React from 'react'
import Home from './page/home'
import About from './page/about';
import {
    Routes,
    Route,
} from "react-router-dom";

const FullwebsitePages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    )
}

export default FullwebsitePages
