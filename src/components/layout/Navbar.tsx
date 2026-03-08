"use client";

import { useState } from "react";
import { ROUTES } from "@/lib/navRoutes";
import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <nav className="fixed top-0 pt-4 w-full flex items-center justify-between px-6 md:px-12 z-[99] bg-gradient-to-b from-background to-transparent">
                <Image
                    src="/logo.png"
                    alt="RGIT Codecell Logo"
                    width={150}
                    height={150}
                />

                {/* Desktop Nav */}
                <div
                    className={cn(
                        "hidden md:flex items-center space-x-8 py-4 px-6",
                        "bg-gray-800/20 backdrop-filter backdrop-blur-lg rounded-full"
                    )}
                >
                    {ROUTES.map((route) => (
                        <Link
                            key={route.path}
                            href={route.path}
                            className="text-md text-white hover:text-gray-300"
                        >
                            {route.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Social Icons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="https://www.linkedin.com/company/rgit-codecell/" target="_blank">
                        <Linkedin color="white" />
                    </Link>
                    <Link href="https://www.instagram.com/rgitcodecell/" target="_blank">
                        <Instagram color="white" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-[100]"
                    onClick={() => setMobileOpen(true)}
                >
                    <Menu size={32} />
                </button>
            </nav>

            {/* MOBILE OVERLAY MENU */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0, transition: { delay: 0.2, duration: 0.3 } }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-lg overflow-hidden"
                    >
                        {/* Slide content in */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full h-full flex flex-col items-center justify-center space-y-8 text-white"
                        >
                            <button
                                className="absolute top-6 right-6 text-white"
                                onClick={() => setMobileOpen(false)}
                            >
                                <X size={32} />
                            </button>

                            {ROUTES.map((route) => (
                                <Link
                                    key={route.path}
                                    href={route.path}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-2xl font-semibold hover:text-gray-300"
                                >
                                    {route.name}
                                </Link>
                            ))}

                            <div className="flex items-center space-x-6 mt-8">
                                <Link
                                    href="https://www.linkedin.com/company/rgit-codecell/"
                                    target="_blank"
                                >
                                    <Linkedin color="white" size={28} />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/rgitcodecell/"
                                    target="_blank"
                                >
                                    <Instagram color="white" size={28} />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
