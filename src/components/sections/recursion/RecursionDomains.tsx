"use client";

import Carousel from "@/components/ui/carousel";

export function RecursionDomains() {
    const slideData = [
        {
            title: "Artifical Intelligence and Machine Learning",
            src: "https://images.unsplash.com/photo-1625314887424-9f190599bd56?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Web / App Development",
            src: "https://images.unsplash.com/photo-1607877361964-bf792b65e593?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-20">

            <h1 className="text-6xl text-center font-porticoRough mb-8 tracking-wide">DOMAINS TO WORK WITH</h1>

            <Carousel slides={slideData} />
        </div>
    );
}
