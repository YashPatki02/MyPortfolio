import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResumeButton from "@/components/ResumeButton";
import { ToggleMode } from "@/components/ToggleMode";
import Link from "next/link";
import Footer from "@/components/Footer";
import { DATA } from "@/lib/data";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
    title: "Yash Patki | Portfolio",
    description: `Yash Patki's personal portfolio website. A place to showcase my work and projects.
        
        I am a recent graduate from the University of California, San Diego with a Bachelor's degree in Computer Science. I am passionate about building web applications and creating user-friendly interfaces. I have experience working with React, Next.js, and TailwindCSS.`,
    keywords: [
        "Yash Patki",
        "Portfolio",
        "Web Developer",
        "Software Engineer",
        "React",
        "Next.js",
        "TailwindCSS",
        "Figma",
        "Python",
        "Flask",
        "Express.js",
    ],
    metadataBase: new URL("https://www.yashpatki.me"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        images: "/me.jpg",
        type: "website",
        locale: "en_US",
        url: "https://www.yashpatki.me",
        title: "Yash Patki | Portfolio",
        siteName: "Yash Patki | Portfolio",
        description: `Yash Patki's personal portfolio website. A place to showcase my work and projects. I am a recent graduate from the University of California, San Diego with a Bachelor's degree in Computer Science. I am passionate about building web applications and creating user-friendly interfaces. I have experience working with React, Next.js, and TailwindCSS.`,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Analytics />
                <SpeedInsights />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <header className="p-3">
                        <nav className="flex flex-row justify-between items-center mx-4 sm:mx-8 pb-2 border-b">
                            <Link href="/">
                                <div className="text-2xl font-400 font-serif">
                                    {DATA.name}.
                                </div>
                            </Link>

                            <ul className="flex flex-row gap-2">
                                <li>
                                    <ResumeButton />
                                </li>
                                <li>
                                    <ToggleMode />
                                </li>
                            </ul>
                        </nav>
                    </header>
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
