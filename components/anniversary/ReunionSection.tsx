"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ReunionSection() {
    return (
        <section className="py-32 relative overflow-hidden z-20">
            {/* Background Transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e8e4e6] via-[#d6cbd3] to-white -z-20" />

            <div className="container mx-auto px-4 relative z-10 text-center">

                <div className="max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ margin: "-100px" }}
                        className="font-playfair text-3xl md:text-5xl text-slate-700 italic mb-6"
                    >
                        "Every story has a pause..."
                    </motion.div>
                </div>

                {/* Kintsugi Visual Metaphor */}
                <div className="relative h-64 w-full max-w-2xl mx-auto mb-16">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        {/* The Break - Muted/Dark Line */}
                        <motion.path
                            d="M 50,150 Q 300,-50 400,100" // Left curve
                            fill="none"
                            stroke="#94a3b8"
                            strokeWidth="3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.path
                            d="M 400,100 Q 500,250 750,50" // Right curve diverging
                            fill="none"
                            stroke="#94a3b8"
                            strokeWidth="3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                        />

                        {/* The Reunion - Gold Line Weaving Together */}
                        <motion.path
                            d="M 50,150 Q 300,-50 400,100 Q 500,250 750,50" // The full path, but repaired
                            fill="none"
                            stroke="#fbbf24" // Gold color for Kintsugi
                            strokeWidth="4"
                            strokeDasharray="1 0"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
                        />

                        {/* Gold particles/glow at the join point */}
                        <motion.circle
                            cx="400"
                            cy="100"
                            r="0"
                            fill="#fbbf24"
                            animate={{
                                r: [0, 8, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                delay: 2.5,
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        />
                    </svg>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3 }}
                    className="max-w-xl mx-auto"
                >
                    <Card className="bg-white/60 backdrop-blur-sm border-white/50 shadow-sm">
                        <CardContent className="p-8">
                            <p className="font-caveat text-3xl text-rose-800 mb-2">
                                ...but ours pressed play again.
                            </p>
                            <p className="font-inter text-gray-600">
                                The time apart didn't break us, it just made the glue stronger. Like Kintsugi, the cracks are now the most beautiful part of our art.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

            </div>
        </section>
    );
}
