import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRobot,
    faMicrophone,
    faCube,
    faUsers,
    faBrain,
    faPalette,
    faCode,
    faNetworkWired,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const services = [
    {
        icon: faRobot,
        title: "AI & Generative AI",
        description: "Custom chatbots, LLM integration, and AI-powered applications",
        link: '/service/ai-generative-ai'
    },
    {
        icon: faMicrophone,
        title: "Voice & Speech AI",
        description: "Voicebots, IVR systems, and AI avatar development",
        link: '/services/voice-speech-ai'
    },
    {
        icon: faCube,
        title: "3D Modeling & AR/VR",
        description: "Character design, product renders, NFTs, and immersive experiences",
        link: '/services/3d-modeling-ar-vr'
    },
    {
        icon: faUsers,
        title: "Consulting & Coaching",
        description: "Fiverr/Upwork setup, business strategy, and growth coaching",
        link: '/services/consulting-coaching'
    },
    {
        icon: faBrain,
        title: "Machine Learning & Data Intelligence",
        description: "Predictive analysis, custom dashboards, and data insights",
        link: '/services/machine-learning'
    },
    {
        icon: faPalette,
        title: "UI/UX & Frontend Development",
        description: "Web and mobile design, dashboard interfaces, user experience",
        link: '/services/ui-ux-development'
    },
    {
        icon: faCode,
        title: "Python & Custom Automation",
        description: "Web scraping, APIs, backend tools, and automation scripts",
        link: '/services/python-automation'
    },
    {
        icon: faNetworkWired,
        title: "AI + Workflow Automation",
        description: "Zapier, Make, n8n integration with CRM and API connections",
        link: '/services/workflow-automation'
    },
];

export default function Services() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 m-auto lg:grid-cols-4 gap-6 p-6">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="bg-white flex  rounded-xl text-start h-56 shadow-md border Container px-3 py-6 transition-all duration-300 ease-in-out transform hover:translate-y-2 cursor-pointer hover:shadow-xl"
                >
                    <div>
                        <div className="text-blue-500 icon">

                            <FontAwesomeIcon icon={service.icon} className="text-2xl mb-4" />
                        </div>
                        <h3 className="font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                        <Link
                            to={service.link}
                            className="text-blue-500 font-semibold text-sm inline-flex items-center hover:text-green-400"
                        >
                            Learn More <span className="ml-1"><FontAwesomeIcon icon={faArrowRight} /></span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
