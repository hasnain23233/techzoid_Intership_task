import { faArrowRight, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const articles = [
    {
        category: "AI Development",
        title: "Building Effective Chatbots: Best Practices",
        desc: "Learn the key principles for creating chatbots that actually help your customers and improve satisfaction.",
        date: "2024-01-10",
        readTime: "7 min read",
        image:
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=806&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // example AI image
    },
    {
        category: "Automation",
        title: "Workflow Automation: ROI and Implementation",
        desc: "A comprehensive guide to calculating ROI and successfully implementing workflow automation in your business.",
        date: "2024-01-05",
        readTime: "6 min read",
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // people at work
    },
    {
        category: "3D Technology",
        title: "3D Visualization in E-commerce",
        desc: "How 3D product visualization is transforming online shopping experiences and boosting conversion rates.",
        date: "2023-12-28",
        readTime: "4 min read",
        image:
            "https://images.unsplash.com/photo-1658806312303-6815563cd9d8?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // modern interior
    },
    {
        category: "Design",
        title: "UI/UX Trends for 2024",
        desc: "The latest design trends and user experience principles that will dominate the digital landscape this year.",
        date: "2023-12-28",
        readTime: "4 min read",
        image:
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // modern interior
    },
    {
        category: "Voice AI",
        title: "Voice AI: The Next Frontier",
        desc: "Exploring the potential of voice AI technology and its applications in modern business environments.",
        date: "2023-12-28",
        readTime: "4 min read",
        image:
            "https://images.unsplash.com/photo-1678977252570-58db7acbbeea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // modern interior
    },
];

export default function RecentArticles() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Recent Articles</h2>
                <div className="w-16 h-1 mx-auto mt-2 bg-green-400 rounded"></div>
            </div>

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

                            <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
                                <div className="flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    <span>{item.date}</span>
                                    <FontAwesomeIcon icon={faClock} className="ml-3" />
                                    <span>{item.readTime}</span>
                                </div>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
