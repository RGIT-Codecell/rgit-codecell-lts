"use client";

import { galleryImages } from "@/lib/galleryImages";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Gallery() {

    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 400], ["80%", "10%"]);

    const images = galleryImages;
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (selectedIndex !== null) {
            if (e.key === "Escape") setSelectedIndex(null);
            if (e.key === "ArrowLeft") setSelectedIndex((i) => (i! > 0 ? i! - 1 : i));
            if (e.key === "ArrowRight") setSelectedIndex((i) => (i! < images.length - 1 ? i! + 1 : i));
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex]);

    return (
        <section className="px-10 py-24 flex flex-col items-center justify-center min-h-screen">
            <motion.h1
                style={{ opacity: backgroundY }}
                className="fixed text-[18vw] font-extrabold text-white/80 top-16 md:top-0 left-0 w-full z-[-1] text-center pointer-events-none select-none"
            >
                GALLERY
            </motion.h1>
            <div className="mt-[14vh] md:mt-[13vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
                {images.map((url, idx) => (
                    <img
                        key={idx}
                        src={url}
                        alt={`Gallery Image ${idx + 1}`}
                        onClick={() => setSelectedIndex(idx)}
                        className="cursor-pointer object-cover h-64 w-full rounded-lg shadow-md hover:scale-105 transition-transform"
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[999]">
                    <button
                        onClick={() => setSelectedIndex(null)}
                        className="absolute top-6 right-6 text-white text-3xl font-bold"
                    >
                        &times;
                    </button>

                    <button
                        onClick={() =>
                            setSelectedIndex((i) => (i! > 0 ? i! - 1 : i))
                        }
                        className="absolute left-4 text-white text-5xl px-4"
                    >
                        &#8592;
                    </button>

                    <img
                        src={images[selectedIndex]}
                        alt="Full View"
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                    />

                    <button
                        onClick={() =>
                            setSelectedIndex((i) => (i! < images.length - 1 ? i! + 1 : i))
                        }
                        className="absolute right-4 text-white text-5xl px-4"
                    >
                        &#8594;
                    </button>
                </div>
            )}
        </section>
    );
}
