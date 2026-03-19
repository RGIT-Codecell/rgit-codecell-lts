"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
            setOpacity(1);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <motion.div
            className="hidden lg:block pointer-events-none fixed top-0 left-0 z-50 mix-blend-screen"
            animate={{
                x: pos.x,
                y: pos.y,
                opacity: opacity,
                scale: [1, 1.05, 0.98, 1.05, 1], 
            }}
            transition={{
                x: { type: "spring", stiffness: 200, damping: 20, mass: 0.2 },
                y: { type: "spring", stiffness: 200, damping: 20, mass: 0.2 },
                scale: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
            }}
            style={{
                translateX: "-50%",
                translateY: "-50%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(229,184,11,0.06) 20%, rgba(139,0,0,0.02) 50%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(40px)",
                willChange: "transform",
            }}
        />
    );
}

export default CursorGlow;
