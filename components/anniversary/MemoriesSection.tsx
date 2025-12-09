"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const memories = [
    { id: 1, src: "https://picsum.photos/id/1015/400/500", alt: "Laughing together", rotation: -3, zIndex: 1 },
    { id: 2, src: "https://picsum.photos/id/1016/400/300", alt: "Sunset view", rotation: 2, zIndex: 2 },
    { id: 3, src: "https://picsum.photos/id/1018/400/500", alt: "Coffee date", rotation: -1, zIndex: 3 },
    { id: 4, src: "https://picsum.photos/id/1019/400/400", alt: "Silly faces", rotation: 4, zIndex: 1 },
    { id: 5, src: "https://picsum.photos/id/1025/400/500", alt: "Trip memory", rotation: -2, zIndex: 2 },
    { id: 6, src: "https://picsum.photos/id/1020/400/300", alt: "Holding hands", rotation: 3, zIndex: 1 },
];

export default function MemoriesSection() {
    return (
        <section className="py-24 bg-[#fffdfd] overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-center font-caveat text-5xl md:text-6xl text-rose-800 mb-16"
                >
                    The Gallery of Us
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 p-8 max-w-6xl mx-auto">
                    {memories.map((memory) => (
                        <div key={memory.id} className="relative group perspective-1000 flex justify-center">
                            <motion.div
                                initial={{ transform: `rotate(${memory.rotation}deg)` }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 0,
                                    zIndex: 50,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="relative cursor-pointer"
                                style={{
                                    zIndex: memory.zIndex
                                }}
                            >
                                <Card className="p-3 pb-8 shadow-lg border-gray-100 rounded-sm bg-white hover:shadow-xl transition-shadow">
                                    <CardContent className="p-0">
                                        <div className="relative w-64 md:w-72 h-80 overflow-hidden bg-gray-100">
                                            <Image
                                                src={memory.src}
                                                alt={memory.alt}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-gray-400 font-caveat text-xl">
                    Hover to remember
                </div>
            </div>
        </section>
    );
}
