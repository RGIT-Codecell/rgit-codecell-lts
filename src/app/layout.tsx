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
  title: {
    default: "RGIT Codecell | Coding Committee of Rajiv Gandhi Institute of Technology",
    template: "%s | RGIT Codecell",
  },
  description:
    "RGIT Codecell is the official coding committee of Rajiv Gandhi Institute of Technology, Mumbai. Established in 2019, we are a 150+ member community hosting hackathons, workshops, and coding events to empower student developers.",
  keywords: [
    "RGIT Codecell",
    "Codecell",
    "RGIT",
    "Rajiv Gandhi Institute of Technology",
    "coding committee",
    "hackathon",
    "programming",
    "Mumbai",
    "student developers",
    "tech community",
    "Recursion",
  ],
  authors: [{ name: "RGIT Codecell" }],
  creator: "RGIT Codecell",
  metadataBase: new URL("https://rgitcodecell.tech"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rgitcodecell.tech",
    siteName: "RGIT Codecell",
    title: "RGIT Codecell | Coding Committee of Rajiv Gandhi Institute of Technology",
    description:
      "RGIT Codecell is the official coding committee of Rajiv Gandhi Institute of Technology, Mumbai. Join our 150+ member community of student developers.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "RGIT Codecell",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RGIT Codecell | Coding Committee of RGIT Mumbai",
    description:
      "Official coding committee of Rajiv Gandhi Institute of Technology, Mumbai. Hackathons, workshops, and a thriving student developer community.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
