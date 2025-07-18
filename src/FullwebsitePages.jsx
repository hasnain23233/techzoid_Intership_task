import React from 'react'
import Home from './page/home'
import About from './page/about';
import Process from './page/process';
import Portfolio from './page/portfolio';
import Blog from './page/blog';
import Contact from './page/contact';
import {
    Routes,
    Route,
} from "react-router-dom";
import Service from './page/service';
//service pages importing 
import GenerativeAI from './page/ServiceMainPages/GenerativeAI';
import WorkflowAutomation from './page/ServiceMainPages/WorkflowAutomation';
import MachineLerning from './page/ServiceMainPages/MachineLerning';
import Voice from './page/ServiceMainPages/Voice';
import Service3D from './page/ServiceMainPages/3DService';
import UX_FrontendDevelopmentService from './page/ServiceMainPages/UX_FrontendDevelopmentService';
import PythonCustomeAutomation from './page/ServiceMainPages/PythonCustomeAutomation';
import Consulating from './page/ServiceMainPages/Consulating';


const FullwebsitePages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/process' element={<Process />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />

                {/* //services page routing */}
                <Route path='/service/ai-generative-ai' element={<GenerativeAI />} />
                <Route path='/services/workflow-automation' element={<WorkflowAutomation />} />
                <Route path='/services/machine-learning' element={<MachineLerning />} />
                <Route path='/services/voice-speech-ai' element={<Voice />} />
                <Route path='/services/3d-modeling-ar-vr' element={<Service3D />} />
                <Route path='/services/ui-ux-development' element={<UX_FrontendDevelopmentService />} />
                <Route path='/services/python-automation' element={<PythonCustomeAutomation />} />
                <Route path='/services/consulting-coaching' element={<Consulating />} />



            </Routes>
        </div>
    )
}

export default FullwebsitePages
