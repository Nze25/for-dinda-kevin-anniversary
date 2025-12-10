"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ClosingSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    // 1. Fade OUT the global noise/chaos (this is simulated by fading IN our clean radiant layer on top)
    // As user scrolls into this section, opacity goes 0 -> 1
    const radiantOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <section ref={containerRef} className="relative min-h-[150vh] w-full flex items-center justify-center pb-32">

            {/* BACKGROUND: RADIANT GRADIENT */}
            {/* This layer sits on top of everything else in the background stack to hide previous sections' noise */}
            <motion.div
                style={{ opacity: radiantOpacity }}
                className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-indigo-950 via-purple-900 to-black"
            >
                {/* The Radiant Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-pink-100 rounded-full blur-[120px] opacity-10 mix-blend-overlay animate-pulse"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-900/40 to-transparent"></div>

                {/* Bright Core Gradient behind the text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,230,240,0.15)_0%,rgba(120,50,150,0)_70%)] blur-[40px]"></div>
            </motion.div>


            {/* MONOLITH CARD */}
            <div className="relative z-10 px-4 w-full max-w-2xl mt-[20vh]">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Pulsing Border Effect */}
                    <motion.div
                        animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-[60px_20px_60px_20px] border border-white/30 blur-sm"
                    />

                    {/* Glass Card Content */}
                    <motion.div
                        animate={{ scale: [1, 1.005, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} // Subtle Heatbeat
                        className="relative bg-white/5 backdrop-blur-xl border border-white/20 p-8 md:p-16 rounded-[60px_20px_60px_20px] shadow-[0_0_50px_rgba(0,0,0,0.2)] text-center space-y-10"
                    >
                        <div className="space-y-2">
                            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200 leading-tight drop-shadow-sm">
                                Happy 1st Anniversary, honey!
                            </h1>
                        </div>

                        <div className="font-inter text-lg md:text-xl text-gray-200 leading-relaxed space-y-6 font-light">
                            <p>
                                I am so incredibly grateful to have spent this past year with you. It feels like just yesterday we were wearing high school uniforms at <span className="font-semibold text-pink-300">SMAN 1 Surabaya</span>, and now here we are, facing university life together at <span className="font-semibold text-pink-300">University of Airlangga</span>.
                            </p>
                            <p>
                                We’ve been through so much happy moments, tough problems, and even that time we broke up. But finding our way back to each other only proved that we are strong enough to handle anything. No matter what happened in the past, my love for you has always been there, and it only keeps getting bigger.
                            </p>
                        </div>

                        <div className="space-y-8 pt-8 border-t border-white/10">
                            <p className="font-playfair italic text-3xl text-white">
                                I love you forever.
                            </p>

                            <div className="flex justify-center transform -rotate-2">
                                <span className="font-caveat text-4xl md:text-5xl text-pink-200 relative">
                                    From Kevin
                                    {/* Underline */}
                                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-200/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

        </section>
    );
}
