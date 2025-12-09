"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative h-dvh w-full overflow-hidden flex flex-col items-center justify-center bg-transparent">
            {/* Background Floating Orbs */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 tracking-tight"
                >
                    Happy <span className="text-pink-500">Anniversary,</span>
                    <br />
                    <span className="text-purple-600">Dinda</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="mt-6 text-xl md:text-2xl text-gray-600 font-light"
                >
                    365 Days of Us
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 z-10"
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
