"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch((error) => {
                    console.log("Autoplay prevented:", error);
                    setIsPlaying(false);
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1, type: "spring" }}
            className="fixed bottom-6 right-6 z-50"
        >
            <div className="bg-white/30 backdrop-blur-md border border-white/40 shadow-xl rounded-full px-4 py-2 flex items-center gap-3">
                <div className="bg-pink-100 p-2 rounded-full">
                    <Music className={`w-4 h-4 text-pink-600 ${isPlaying ? "animate-spin-slow" : ""}`} />
                </div>

                <div className="flex flex-col mr-2">
                    <span className="text-xs font-semibold text-gray-800">Our Song</span>
                    <span className="text-[10px] text-gray-600">Romantic Vibez</span>
                </div>

                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 flex items-center justify-center bg-purple-600 rounded-full hover:bg-purple-700 transition-colors text-white shadow-md"
                >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                <audio
                    ref={audioRef}
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    loop
                />
            </div>
        </motion.div>
    );
}
