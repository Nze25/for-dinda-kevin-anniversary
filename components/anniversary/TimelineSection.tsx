"use client";

import { motion } from "framer-motion";
import { Heart, Calendar, MapPin } from "lucide-react";

interface TimelineItem {
    date: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
    {
        date: "Day 1",
        title: "The Beginning",
        description: "The day our story started.",
        icon: <Heart className="text-white w-5 h-5" />,
    },
    {
        date: "Month 1",
        title: "First Anniversary",
        description: "Celebrating our first month of togetherness.",
        icon: <Calendar className="text-white w-5 h-5" />,
    },
    {
        date: "Month 6",
        title: "Our First Trip",
        description: "Exploring new places, hand in hand.",
        icon: <MapPin className="text-white w-5 h-5" />,
    },
    {
        date: "Day 365",
        title: "One Year Strong",
        description: "365 days of love, laughter, and memories.",
        icon: <Heart className="text-white w-5 h-5 fill-current" />,
    },
];

export default function TimelineSection() {
    return (
        <section className="py-20 px-4 md:px-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-purple-800">
                Our Journey
            </h2>

            <div className="relative">
                {/* Center Line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-pink-200" />

                <div className="flex flex-col gap-12">
                    {timelineData.map((item, index) => (
                        <TimelineItemCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineItemCard({ item, index }: { item: TimelineItem; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row-reverse md:justify-between w-full`} // Mobile: always row-reverse to put text right of line? No, line is left-4 on mobile.
        // Mobile Layout: Line is at left-4. Items should be to the right of it.
        // Desktop Layout: Line is center. Items alternate.
        >
            {/* Mobile alignment fix override */}
            <div className={`flex w-full md:w-[45%] ${isEven ? "md:justify-end" : "md:justify-start"} pl-10 md:pl-0`}>
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-shadow w-full">
                    <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-medium mb-2">
                        {item.date}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 shadow-md flex items-center justify-center z-10 border-4 border-white">
                {item.icon}
            </div>

            {/* Empty space for alternating layout on desktop */}
            <div className="hidden md:block w-[45%]" />
        </motion.div>
    );
}
