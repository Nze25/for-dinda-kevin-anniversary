"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";

export function PlaylistSection() {
    return (
        <section className="py-24 relative overflow-hidden z-20">
            {/* Background Decoration - handled by global styles or previous sections, 
                 but we add a subtle glow here just in case */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/20 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-white/50 backdrop-blur-sm rounded-full mb-4 shadow-sm">
                        <Music className="w-6 h-6 text-rose-500" />
                    </div>
                    <h2 className="font-playfair text-4xl md:text-5xl text-rose-900 mb-2">
                        Our Soundtrack
                    </h2>
                    <p className="font-caveat text-2xl text-rose-400">
                        Songs that sound like you
                    </p>
                </motion.div>

                {/* Glass Player Container */}
                <div className="relative w-full max-w-lg">
                    {/* Animated Music Note Decoration */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-8 -right-8 text-rose-300 pointer-events-none z-0"
                    >
                        <Music className="w-16 h-16 opacity-30" />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10 bg-white/30 backdrop-blur-xl border border-white/40 p-4 md:p-6 rounded-3xl shadow-[0_0_40px_-10px_rgba(244,114,182,0.4)]"
                    >
                        <iframe
                            style={{ borderRadius: "16px" }}
                            src="https://open.spotify.com/embed/playlist/3v9aBl25OmGMzlqXNR08vR?si=u6-VCWitSRWQmTifTMHyJQ&pi=0ZClIlrpRPev4"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title="Spotify Playlist"
                        ></iframe>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
