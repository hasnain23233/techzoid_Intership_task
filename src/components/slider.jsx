import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStartup",
        text: `"Marvellcreativeco transformed our customer service with AI chatbot. Response times improved by 80%."`,
    },
    {
        name: "Michael Chen",
        role: "Operations Director",
        text: `"Their workflow automation saved us 20 hours per week. The ROI was incredible."`,
    },
    {
        name: "Emily Rodriguez",
        role: "Marketing Manager",
        text: `"The 3D product renders and AR experience boosted our conversion rates by 45%."`,
    },
    {
        name: "Ali Rehman",
        role: "CTO, DevFirm",
        text: `"Great AR/VR integration. The team was responsive and professional."`,
    },
    {
        name: "Zara Khan",
        role: "Founder, FutureTech",
        text: `"Custom dashboards made our data visualization seamless."`,
    },
];

export default function TestimonialSlider() {
    const scrollRef = useRef();

    const scroll = (direction) => {
        const container = scrollRef.current;
        const cardWidth = container.firstChild.offsetWidth + 16; // +gap
        container.scrollBy({
            left: direction === "right" ? cardWidth : -cardWidth,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 py-10">
            {/* Slider */}
            <div
                ref={scrollRef}
                className="flex overflow-hidden space-x-4 scroll-smooth scrollbar-hide"
                style={{ scrollSnapType: "x mandatory" }}
            >
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="lg:min-w-[calc(100%/3-1rem)] sm:min-w-[calc(100%/2-1rem)] min-w-[calc(100%/1-1rem)] snap-start text-start bg-white p-6 rounded-xl border shadow-md"
                    >
                        <div className="flex text-yellow-400 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                        <p className="text-gray-700 italic mb-4">{item.text}</p>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <div className="absolute right-4 bottom-4 flex space-x-3">
                <button
                    onClick={() => scroll("left")}
                    className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}
