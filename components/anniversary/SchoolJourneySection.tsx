"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, GraduationCap, Heart, Star, BookOpen, Coffee } from "lucide-react";
import Image from "next/image";

// Placeholder images - replace with actual assets later
const HS_IMAGE = "/images/highschool-moments/WhatsApp Image 2025-12-09 at 22.47.48.jpeg";
const UNI_IMAGE = "/images/univ-moments/WhatsApp Image 2025-12-09 at 22.47.48.png";

export function SchoolJourneySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Background Opacity Transitions
    const graphPaperOpacity = useTransform(smoothProgress, [0, 0.45, 0.55], [1, 1, 0]);
    const gradientOpacity = useTransform(smoothProgress, [0.45, 0.55, 1], [0, 1, 1]);

    // Connector Line Fill
    const linePathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} className="relative w-full min-h-[300vh] flex flex-col items-center">
            {/* BACKGROUNDS */}
            <motion.div
                style={{ opacity: graphPaperOpacity }}
                className="fixed inset-0 z-0 bg-[#fdfaf5] pointer-events-none"
            >
                {/* Graph Paper Pattern */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
                </div>
            </motion.div>

            <motion.div
                style={{ opacity: gradientOpacity }}
                className="fixed inset-0 z-0 bg-gradient-to-b from-indigo-950 via-purple-900 to-slate-900 pointer-events-none"
            />

            {/* CENTRAL CONNECTION LINE */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2 z-10 overflow-hidden">
                <svg className="w-full h-full" preserveAspectRatio="none">
                    {/* Dashed Base Line (Visible initially) */}
                    <motion.path
                        d="M 2 0 V 10000"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        className="text-gray-300 opacity-30"
                    />
                    {/* Animated Solid Line */}
                    <motion.path
                        d="M 2 0 V 10000"
                        stroke="url(#gradient-line)"
                        strokeWidth="4"
                        pathLength={linePathLength}
                        className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    />
                    <defs>
                        <linearGradient id="gradient-line" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fca5a5" /> {/* Light Red for HS */}
                            <stop offset="50%" stopColor="#c084fc" /> {/* Purple for Transition */}
                            <stop offset="100%" stopColor="#60a5fa" /> {/* Blue for Uni */}
                        </linearGradient>
                    </defs>
                </svg>
            </div>


            {/* CONTENT: PHASE A - HIGH SCHOOL */}
            <div className="relative z-10 w-full max-w-6xl mx-auto pt-24 pb-32 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

                    {/* Left: Text */}
                    <div className="order-2 md:order-1 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50, rotate: -2 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-caveat text-4xl md:text-6xl text-gray-800 space-y-4"
                        >
                            <h2 className="font-bold relative inline-block">
                                The Beginning...
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-300 opacity-60 rounded-full" />
                            </h2>
                            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-700">
                                Messy lockers, <span className="text-red-500">shy glances</span> in the hallway, and that one math class we barely survived.
                            </p>
                            <div className="flex items-center gap-2 text-xl text-gray-500">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span>Where it all started.</span>
                            </div>
                        </motion.div>

                        {/* Doodles */}
                        <div className="absolute -top-10 -left-10 text-gray-400 opacity-20 pointer-events-none">
                            <Heart className="w-24 h-24 rotate-[-12deg]" />
                        </div>
                    </div>

                    {/* Right: Photo */}
                    <div className="order-1 md:order-2 flex justify-center relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative bg-white p-4 shadow-xl rotate-3 max-w-md"
                        >
                            {/* Tape Effect */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/50 rotate-1 shadow-sm backdrop-blur-[1px]"></div>

                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={HS_IMAGE}
                                    alt="High School Memories"
                                    width={600}
                                    height={450}
                                    className="object-cover"
                                />
                            </div>
                            <div className="mt-4 font-caveat text-2xl text-center text-gray-600">
                                Graduation of '25
                            </div>
                        </motion.div>
                        {/* Sticker Doodle */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            className="absolute -bottom-6 -right-6 bg-yellow-300 text-yellow-900 rounded-full p-4 font-bold rotate-12 shadow-lg font-caveat text-xl"
                        >
                            Young Us!
                        </motion.div>
                    </div>
                </div>
            </div>


            {/* TRANSITION ZONE TEXT */}
            <div className="relative z-10 w-full flex justify-center items-center h-[50vh]">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-white/50"
                >
                    <span className="font-playfair font-italic text-xl text-gray-800">Growing up together...</span>
                </motion.div>
            </div>


            {/* CONTENT: PHASE B - UNIVERSITY */}
            <div className="relative z-10 w-full max-w-6xl mx-auto min-h-screen flex flex-col justify-center py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

                    {/* Left: Glass Card Photo */}
                    <div className="order-1 relative flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            {/* Glowing Orb Behind */}
                            <div className="absolute inset-0 bg-blue-500/30 blur-[60px] rounded-full group-hover:bg-purple-500/30 transition-colors duration-700"></div>

                            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 p-2 rounded-2xl shadow-2xl overflow-hidden max-w-md">
                                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                                    <Image
                                        src={UNI_IMAGE}
                                        alt="University Life"
                                        width={600}
                                        height={450}
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Editorial Text */}
                    <div className="order-2 relative text-white">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3 text-blue-300 mb-2">
                                <GraduationCap className="w-6 h-6" />
                                <span className="uppercase tracking-[0.2em] text-sm font-medium">The New Chapter</span>
                            </div>
                            <h2 className="font-playfair text-5xl md:text-7xl font-bold leading-tight">
                                Finding Our <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Rhythm</span>
                            </h2>
                            <p className="font-inter text-lg text-gray-300 leading-relaxed font-light">
                                Late night study sessions turning into milk dates. Exploring a new campus, new dreams, and a maturing love that feels steady and sure.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                    <BookOpen className="w-6 h-6 text-purple-300 mb-2" />
                                    <span className="text-xs uppercase tracking-wider opacity-70">Focus</span>
                                </div>
                                <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                    <Coffee className="w-6 h-6 text-amber-300 mb-2" />
                                    <span className="text-xs uppercase tracking-wider opacity-70">Fuel</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    );
}
