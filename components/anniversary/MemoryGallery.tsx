"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const memories = [
    { src: "https://picsum.photos/id/1015/400/600", alt: "Memory 1", span: "row-span-2" },
    { src: "https://picsum.photos/id/1016/400/300", alt: "Memory 2", span: "row-span-1" },
    { src: "https://picsum.photos/id/1018/400/300", alt: "Memory 3", span: "row-span-1" },
    { src: "https://picsum.photos/id/1019/400/600", alt: "Memory 4", span: "row-span-2" },
    { src: "https://picsum.photos/id/1025/400/400", alt: "Memory 5", span: "row-span-1" },
    { src: "https://picsum.photos/id/1020/400/300", alt: "Memory 6", span: "row-span-1" },
];

export default function MemoryGallery() {
    return (
        <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-transparent to-white">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-purple-800">
                Captured Moments
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {memories.map((memory, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className={`relative overflow-hidden rounded-2xl ${memory.span}`}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full h-full relative group"
                        >
                            <Image
                                src={memory.src}
                                alt={memory.alt}
                                width={400}
                                height={600} // Aspect ratio approximation, styling handles display
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
