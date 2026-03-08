import React, { useEffect, useState } from 'react'

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
        <div
            className="cursor-glow hidden lg:block"
            style={{
                transform: `translate3d(calc(${pos.x}px - 50%), calc(${pos.y}px - 50%), 0)`,
                opacity
            }}
        />
    );
}

export default CursorGlow
