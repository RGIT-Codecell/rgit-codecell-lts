import founders, { FounderCardProps } from "@/lib/founders";

function FounderCard({ image, name, college, description, reverse = false }: FounderCardProps) {
    return (
        <div className={`flex flex-col md:flex-row items-center gap-8 w-full py-12 ${reverse ? "md:flex-row-reverse" : ""}`}>
            {/* Founder Image */}
            <div className="flex justify-center">
                <img width={300} src={image} alt={name} className="object-cover rounded-lg shadow-lg" />
            </div>

            {/* Founder Details */}
            <div className="flex-1">
                <p className="text-neutral-400 text-lg md:text-xl font-light mb-4">{description}</p>
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-lg text-neutral-500">{college}</p>
            </div>
        </div>
    );
}

export default function Founders() {

    return (
        <section className="px-12 flex flex-col items-center justify-center min-h-screen pt-32">
            <h1 className="text-4xl font-black mb-12">FOUNDERS SHOWCASE</h1>
            <div className="w-full max-w-5xl">
                {founders.map((founder, index) => (
                    <FounderCard key={index} {...founder} />
                ))}
            </div>
        </section>
    );
}
