import { faArrowRight, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const articles = [
    {
        category: "AI Customer Support Chatbot",
        title: "AI Customer Support Chatbot",
        desc: "Reduced customer response time by 80% with intelligent chatbot integration",
        readTime: "80% faster response time",
        tag: ['Chat GPT', 'API Integration', 'Customer Service'],
        image:
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=806&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // example AI image
    },
    {
        category: "Workflow Automation",
        title: "E-commerce Workflow Automation",
        desc: "Automated order processing and inventory management for online store",
        readTime: "20 hours saved per week",
        tag: ['Zapier', 'Shopify', 'CRM Integration'],
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // people at work
    },
    {
        category: "Machine Learning",
        title: "Sales Analytics Dashboard",
        desc: "Real-time sales dashboard with predictive analytics and insights",
        readTime: "45% increase in sales insights",
        tag: ['Python', 'Dashboard', 'Analytics'],
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // modern interior
    },
    {
        category: "3D Modeling",
        title: "3D Product Configurator",
        desc: "Interactive 3D product visualization for furniture e-commerce",
        readTime: "60% increase in conversions",
        tag: ['3D Modeling', 'WebGL', 'React'],
        image:
            "https://images.unsplash.com/photo-1658806312303-6815563cd9d8?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // modern interior
    },
    {
        category: "UI/UX Design",
        title: "Mobile Banking App UI/UX",
        desc: "Complete redesign of mobile banking application interface",
        readTime: "90% user satisfaction",
        tag: ['Mobile Design', 'Figma', 'User Testing'],
        image:
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // modern interior
    },
    {
        category: "Voice AI",
        title: "Voice Assistant Integration",
        desc: "Custom voice assistant for smart home automation.",
        readTime: "95% accuracy rate",
        tag: ['Voice AI', 'IoT', 'Smart Home'],
        image:
            "https://images.unsplash.com/photo-1678977252570-58db7acbbeea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // modern interior
    },
];

export default function Project() {
    return (
        <section className="py-12 ">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
                {articles.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg overflow-hidden  articalContainer shadow-sm hover:shadow-md transition">
                        <div className='overflow-hidden h-46 relative'>
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <span className="text-xs absolute top-4 bg-gray-200 text-gray-700 left-2 px-2 py-1 rounded-full inline-block">
                                {item.category}
                            </span>
                        </div>
                        <div className="p-4 space-y-2">

                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>

                            <div className="text-sm text-gray-500 pt-2">
                                <div className='flex gap-3 text-sm'>
                                    {item.tag.map((tage) => {
                                        return <>
                                            <p className='border-2 text-gray-800 p-1 rounded-xl'>{tage}</p>
                                        </>
                                    })}
                                </div>
                                <div className='flex items-center justify-between mt-3'>
                                    <p className='text-green-600 font-semibold'> <span className='text-yellow-300'>
                                        <FontAwesomeIcon icon={faStar} /></span> &nbsp;&nbsp; {item.readTime}</p>
                                    <p className='cursor-pointer hover:bg-gray-100 p-2 rounded-md'>
                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
