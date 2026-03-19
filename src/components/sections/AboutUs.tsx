import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Code, Lightbulb, Users } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="flex flex-col items-center justify-start min-h-screen py-12" id="about-us">

            {/* SPONSORS */}
            <span className="text-slate-400 font-medium text-xl">OUR TRUSTED PARTNERS & SPONSORS</span>
            <div className="flex flex-wrap items-center justify-center my-12 gap-6 sm:gap-12 px-4">
                <Image
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue-Medium.png"
                  alt="UNSTOP Logo"
                  width={180}
                  height={180}
                  className="w-[120px] sm:w-[180px] h-auto"
                />
                <Image
                  src="/sponsors/itvedant.png"
                  alt="ITVEDANT Logo"
                  width={210}
                  height={210}
                  className="w-[140px] sm:w-[210px] h-auto"
                />
                <Image
                  src="/recursion/veefly.png"
                  alt="VEEFLY Logo"
                  width={200}
                  height={200}
                  className="w-[130px] sm:w-[200px] h-auto"
                />
            </div>

            <aside className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Unlocking new opportunities and kickstarting your journey in tech with us.
                    </h1>
                </div>
                <div>
                    <p className="text-sm md:text-base text-justify">
                        Established in 2019 by passionate programmers, Codecell has grown into a 150+
                        strong community, even launching our college's first Hackathon in year one. We
                        help you dive into coding, connect with peers, and tackle challenges—ensuring
                        you learn, grow, and innovate together.
                    </p>

                    <Button className="mt-4">
                        Learn More
                        <ArrowRight className="ml-2" />
                    </Button>
                </div>
            </aside>

            <aside className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Code size={48} strokeWidth={1.5} className="mb-6" />
                        <h2 className="text-2xl font-bold mb-4">Enhance Skills</h2>
                        <p className="text-sm md:text-base text-gray-300 text-justify">
                            Gain hands-on experience, sharpen your technical expertise, and stay ahead in the ever-evolving world of technology.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Users size={48} strokeWidth={1.5} className="mb-6" />
                        <h2 className="text-2xl font-bold mb-4">Build Connections</h2>
                        <p className="text-sm md:text-base text-gray-300 text-justify">
                            Collaborate with like-minded peers, industry professionals, and mentors to grow your network and explore new opportunities.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Lightbulb size={48} strokeWidth={1.5} className="mb-6" />
                        <h2 className="text-2xl font-bold mb-4">Create Impact</h2>
                        <p className="text-sm md:text-base text-gray-300 text-justify">
                            Work on real-world projects, participate in coding events, and contribute to a thriving tech community that drives innovation.
                        </p>
                    </div>
                </div>
            </aside>

        </section>
    )
}