// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
    {
        name: "Alex Johnson",
        role: "AI Solutions Architect",
        roleColor: "text-blue-600",
        description:
            "Specializes in machine learning, natural language processing, and custom AI application development.",
        imgUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sarah Chen",
        role: "Creative Director",
        roleColor: "text-green-600",
        description:
            "Expert in UI/UX design, 3D modeling, and creating stunning visual experiences that engage users.",
        imgUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Mike Rodriguez",
        role: "Automation Engineer",
        roleColor: "text-purple-600",
        description:
            "Workflow automation specialist with expertise in Python, API integrations, and process optimization.",
        imgUrl: "https://randomuser.me/api/portraits/men/41.jpg",
    },
];

export default function TeamSection() {
    return (
        <section className="bg-white py-12">
            <div className="text-center mb-10">
                <h2 className="lg:text-3xl text-2xl font-bold">Meet Our Team</h2>
                <p className="text-gray-600 lg:text-lg sm:text-md text-sm mt-2">Passionate experts dedicated to your success</p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg h-96 flex items-center shadow-lg text-center">
                        <div>
                            <img
                                src={member.imgUrl}
                                alt={member.name}
                                className="w-24 h-24 mx-auto rounded-full object-cover"
                            />
                            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                            <p className={`${member.roleColor} font-medium py-2`}>{member.role}</p>
                            <p className="text-gray-600 mt-3 ">{member.description}</p>
                            <div className="flex justify-center gap-4 mt-6 text-blue-800 text-xl">
                                <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
