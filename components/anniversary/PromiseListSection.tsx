"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const promises = [
    "I promise to always listen to your stories, even the ones I've heard before.",
    "I promise to be your biggest cheerleader in every victory and your safe haven in every storm.",
    "I promise to make you coffee (or buy it) exactly how you like it.",
    "I promise to never stop trying to make you laugh.",
    "I promise to love you, today, tomorrow, and every day after that.",
];

export default function PromiseListSection() {
    return (
        <section className="pt-32 pb-24 bg-[#Fdf6f6] relative flex justify-center z-20">
            {/* Paper/Scroll Container */}
            <div className="w-full max-w-2xl px-8 relative">

                {/* Paper Texture Background */}
                <div className="absolute inset-0 bg-[#fff] mx-4 shadow-2xl skew-y-1 transform origin-top-left -z-10 rounded-sm border-l-4 border-l-rose-100/50" />

                <div className="pt-16 pb-8 px-8 md:px-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="w-12 h-12 mx-auto mb-6 text-rose-500">
                            <Heart className="w-full h-full fill-current" />
                        </div>
                        <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-2">The Vows</h2>
                        <div className="h-1 w-20 bg-rose-300 mx-auto rounded-full" />
                    </motion.div>

                    <div className="space-y-12">
                        {promises.map((promise, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <motion.div
                                    initial={{ scale: 0, color: "#e5e7eb" }} // gray-200
                                    whileInView={{ scale: 1, color: "#f43f5e" }} // rose-500
                                    viewport={{ margin: "-50px" }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-4"
                                >
                                    <Heart className="w-6 h-6 fill-current" />
                                </motion.div>
                                <motion.p
                                    initial={{ opacity: 0.3, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{ duration: 0.8 }}
                                    className="font-caveat text-2xl md:text-3xl text-gray-700 leading-relaxed"
                                >
                                    "{promise}"
                                </motion.p>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-16 pt-8 border-t border-gray-200"
                    >
                        <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                            <p className="font-playfair text-xl text-gray-500 italic">
                                Signed, yours forever.
                            </p>
                            <div className="mt-8 font-caveat text-4xl text-rose-800 rotate-[-5deg]">
                                Kevin
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

