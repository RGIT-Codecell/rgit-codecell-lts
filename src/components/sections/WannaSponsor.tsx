"use client";
 
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import { Button } from "../ui/button";
import { BROCHURE_URL } from "@/data/current";

export default function WannaSponsor() {

    function handleDownloadBrochure() {
        window.open(BROCHURE_URL, "_blank");
        window.focus();
    }

    return (
        <AuroraBackground className="p-12">
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <h2 className="text-foreground text-5xl font-bold text-center">
                    Partner With Us
                </h2>
                <p className="text-foreground/60 text-xl font-extralight py-4 text-center">
                    Join us as a sponsor to empower aspiring programmers, fuel innovation, and make a lasting impact on the tech community.
                    <br />
                    <a href="mailto:rgitcodecell@gmail.com" className="font-semibold mt-2 hover:text-gray-300">rgitcodecell@gmail.com</a>
                </p>

                
                <Button onClick={handleDownloadBrochure}>Checkout our Brochure</Button>
            </motion.div>
        </AuroraBackground>
    )
}