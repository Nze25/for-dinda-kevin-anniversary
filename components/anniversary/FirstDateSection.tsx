"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function FirstDateSection() {
    return (
        <section className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[#Fdf6f6] -z-20" />

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left: Skewed Polaroid */}
                <motion.div
                    initial={{ rotate: -5, x: -50, opacity: 0 }}
                    whileInView={{ rotate: -3, x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative group mx-auto md:mx-0 max-w-sm"
                >
                    <Card className="transform rotate-[-3deg] transition-transform duration-500 group-hover:rotate-0 border-gray-100 shadow-xl overflow-hidden bg-white rounded-none pb-12">
                        <CardContent className="p-4 pb-0 bg-white">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 border border-gray-100">
                                <Image
                                    src="https://picsum.photos/id/1015/600/800" // Placeholder
                                    alt="Our First Date"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="absolute bottom-0 left-0 right-0 p-4 pb-6 flex justify-center bg-white">
                            <div className="font-caveat text-3xl text-gray-700">
                                The Day It Started
                            </div>
                        </CardFooter>
                    </Card>
                </motion.div>

                {/* Right: Hand-drawn Map Visual */}
                <div className="relative flex flex-col items-center justify-center min-h-[400px]">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-playfair text-4xl md:text-6xl text-rose-900 mb-8 text-center"
                    >
                        The Spark
                    </motion.h2>

                    <div className="relative w-full max-w-md h-64">
                        {/* SVG Map Line */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                            <motion.path
                                d="M 50,200 C 150,150 250,250 350,50"
                                fill="none"
                                stroke="#e11d48"
                                strokeWidth="3"
                                strokeDasharray="10 5"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </svg>

                        {/* Me Point */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="absolute left-[30px] bottom-[40px] flex flex-col items-center"
                        >
                            <MapPin className="text-rose-500 w-8 h-8 mb-2" />
                            <span className="font-caveat text-xl text-gray-600">Me</span>
                        </motion.div>

                        {/* You Point */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 1.8 }}
                            className="absolute right-[30px] top-[10px] flex flex-col items-center"
                        >
                            <MapPin className="text-rose-500 w-8 h-8 mb-2" />
                            <span className="font-caveat text-xl text-gray-600">You</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        >
                            <p className="font-caveat text-2xl text-rose-800 rotate-[-10deg] bg-white/80 p-2 rounded-lg">
                                Where paths crossed
                            </p>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                        className="mt-8 text-center font-inter text-gray-600 max-w-md leading-relaxed"
                    >
                        It wasn't just a date. It was the moment the universe decided our separate lines should become one messy, beautiful drawing.
                    </motion.p>
                </div>

            </div>
        </section>
    );
}
