import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Cinzel_Decorative } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const porticoRough = localFont({
  src: "./fonts/ZuumeRough.otf",
  variable: "--font-portico",
});

const porticoRoughUrban = localFont({
  src: "./fonts/PorticoUrbanRough.otf",
  variable: "--font-portico-urban",
});

export const metadata: Metadata = {
  title: "RGIT Codecell",
  description:
    "Codecell was established in 2019 by a group of budding programmers who envisioned a platform where everyone could join together with like minded people and grow. Despite being a committee that is fairly new compared to many others, we have established a community of over 150 students and conducted our college's first Hackathon in our first year.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${porticoRough.variable} ${porticoRoughUrban.variable} ${geistMono.variable} ${cinzelDecorative.variable} relative antialiased dark`}
      >
        <Navbar />
        {children}
        <Footer />
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </body>
    </html>
  );
}
