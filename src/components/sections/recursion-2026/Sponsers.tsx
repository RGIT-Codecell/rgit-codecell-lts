const Sponsors = () => {
    // Array of sponsors to keep the JSX clean
    const sponsorImages = [
        { src: "/recursion/sponsor1.png", alt: "Sponsor 1" },
        { src: "/recursion/sponsor3.png", alt: "Sponsor 3" },
        { src: "/recursion/sponsor4.png", alt: "Sponsor 4" },
        // Add more here easily
    ];

    return (
        <section className="w-full py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-center text-sm md:text-base font-bold tracking-[0.2em] text-gray-500 uppercase mb-12">
                    Our Trusted Partners and Sponsors
                </h2>

                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 items-center justify-items-center">
                    {sponsorImages.map((sponsor, index) => (
                        <div key={index} className="flex items-center justify-center w-full max-w-[200px]">
                            <img 
                                src={sponsor.src} 
                                alt={sponsor.alt} 
                                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sponsors;