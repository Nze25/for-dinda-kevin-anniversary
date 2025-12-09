"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Gift, Heart, Plane, Coffee, Ticket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type GiftItem = {
    id: number;
    label: string;
    icon: any;
    description: string;
    color: string;
};

const gifts: GiftItem[] = [
    { id: 1, label: "Dinner Date", icon: Coffee, description: "A romantic dinner at your favorite place.", color: "bg-rose-100" },
    { id: 2, label: "Gateway Trip", icon: Plane, description: "A weekend getaway to somewhere new.", color: "bg-sky-100" },
    { id: 3, label: "Movie Night", icon: Ticket, description: "Unlimited popcorn and a movie marathon.", color: "bg-purple-100" },
    { id: 4, label: "Surprise!", icon: Gift, description: "Something special just for you.", color: "bg-amber-100" },
];

export default function PresentListSection() {
    const [openedGift, setOpenedGift] = useState<number | null>(null);

    const toggleGift = (id: number) => {
        if (openedGift === id) {
            setOpenedGift(null);
        } else {
            setOpenedGift(id);
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-pink-50 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl text-rose-900 mb-4">
                        For You
                    </h2>
                    <p className="font-caveat text-2xl text-rose-400">
                        Little tokens of my love
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {gifts.map((gift) => (
                        <div key={gift.id} className="relative h-64 perspective-1000 group">
                            <motion.div
                                className={`relative w-full h-full cursor-pointer preserve-3d transition-all duration-500`}
                                onClick={() => toggleGift(gift.id)}
                                whileHover={{ scale: 1.02 }}
                                animate={{ rotateY: openedGift === gift.id ? 180 : 0 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Front of Card (Gift Box) */}
                                <Card className="absolute inset-0 backface-hidden rounded-2xl border-white/60 shadow-xl flex flex-col items-center justify-center bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md overflow-hidden">
                                    <CardContent className="flex flex-col items-center justify-center p-6 w-full h-full">
                                        <div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center mb-4 shadow-inner">
                                            <Gift className="w-10 h-10 text-rose-400" />
                                        </div>
                                        <h3 className="font-playfair text-xl text-gray-800 font-bold mb-2">Tap to Open</h3>
                                        <div className="w-16 h-1 bg-rose-200 rounded-full" />

                                        {/* "Ribbon" decoration */}
                                        <div className="absolute top-0 bottom-0 left-1/2 w-8 -translate-x-1/2 bg-rose-500/10 pointer-events-none" />
                                        <div className="absolute left-0 right-0 top-1/2 h-8 -translate-y-1/2 bg-rose-500/10 pointer-events-none" />
                                    </CardContent>
                                </Card>

                                {/* Back of Card (The Gift) */}
                                <Card
                                    className={`absolute inset-0 backface-hidden rounded-2xl ${gift.color} border-white/50 shadow-inner flex flex-col items-center justify-center text-center`}
                                    style={{ transform: "rotateY(180deg)" }}
                                >
                                    <CardContent className="flex flex-col items-center justify-center p-6 w-full h-full">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                                            <gift.icon className="w-8 h-8 text-gray-700" />
                                        </div>
                                        <h3 className="font-caveat text-3xl font-bold text-gray-800 mb-2">{gift.label}</h3>
                                        <p className="font-inter text-sm text-gray-600 leading-relaxed mb-4">
                                            {gift.description}
                                        </p>
                                        <Badge variant="secondary" className="bg-white/50 text-gray-500 hover:bg-white/70">
                                            Valid Always
                                        </Badge>
                                    </CardContent>
                                </Card>

                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400 text-sm font-inter">
                        * Terms and conditions apply: Must be redeemed with a hug.
                    </p>
                </div>
            </div>
        </section>
    );
}
