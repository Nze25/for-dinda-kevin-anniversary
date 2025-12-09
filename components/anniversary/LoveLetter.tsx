"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X } from "lucide-react";

export default function LoveLetter() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-20 px-4 flex justify-center items-center bg-pink-50 min-h-[50vh]">
            <AnimatePresence>
                {!isOpen ? (
                    <motion.div
                        layoutId="envelope"
                        onClick={() => setIsOpen(true)}
                        className="cursor-pointer group flex flex-col items-center gap-4"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative">
                            <div className="w-32 h-20 bg-pink-300 rounded-b-xl shadow-lg relative z-10 flex items-center justify-center">
                                <Mail className="text-white w-10 h-10" />
                            </div>
                            <div className="absolute top-0 w-32 h-16 bg-pink-200 rounded-t-xl z-0 transform origin-bottom transition-transform duration-500 group-hover:rotate-x-180" />
                            <div className="absolute top-2 left-2 right-2 h-12 bg-white shadow-sm z-0 transform transition-transform duration-500 group-hover:-translate-y-6" />
                        </div>
                        <p className="text-purple-600 font-medium">Read My Letter</p>
                    </motion.div>
                ) : (
                    <motion.div
                        layoutId="envelope"
                        className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-2xl w-full relative border border-pink-100"
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(false);
                            }}
                            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                        <h3 className="text-3xl font-playfair font-bold text-purple-800 mb-6 font-serif">
                            My Dearest Dinda,
                        </h3>
                        <div className="prose prose-pink prose-lg max-w-none text-gray-700 font-serif leading-relaxed space-y-4">
                            <p>
                                Happy First Anniversary!
                            </p>
                            <p>
                                I can't believe it's already been a year since we started this journey together. Every day with you feels like a beautiful dream I never want to wake up from.
                            </p>
                            <p>
                                You are my sunshine on cloudy days, my calm in the storm, and the reason I smile at my phone like an idiot. Thank you for being you—kind, funny, and incredibly loving.
                            </p>
                            <p>
                                Here's to many more years of laughter, adventures, and endless love. I love you more than words can say.
                            </p>
                            <p className="mt-8 font-bold text-right text-purple-600">
                                Forever yours,<br />Kevin
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay to close when clicking outside (optional, but good UX) */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/20 z-[-1] backdrop-blur-sm"
                />
            )}
        </section>
    );
}
