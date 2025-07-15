import React from 'react'
import Home from './page/home'
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

const FullwebsitePages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default FullwebsitePages
