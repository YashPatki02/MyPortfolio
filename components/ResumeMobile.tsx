"use client";
import React from "react";
import Image from "next/image";
import { DATA } from "../lib/data";
import Education from "./Education";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Experience from "./Experience";
import Project from "./Project";
import Link from "next/link";
import BlurFade from "./magicui/blur-fade";
import { ChevronRight } from "lucide-react";

const ResumeMobile = () => {
    return (
        <div className="flex flex-col items-start justify-center">
            <div className="flex flex-col items-start justify-center z-10 m-10">
                <div className="mb-4 ml-4 mt-8 mr-6">
                    <div className="flex flex-row items-center justify-start gap-6">
                        <BlurFade>
                            <div>
                                <h1 className="mt-4 text-2xl font-semibold">
                                    Hi, I&apos;m {DATA.name} 👋
                                </h1>
                                <h2 className="text-muted-foreground">
                                    Full-Stack Developer | Frontend Developer
                                </h2>
                            </div>
                        </BlurFade>
                        <BlurFade delay={0}>
                            <Avatar className="border size-20">
                                <AvatarImage
                                    src={DATA.avatarUrl}
                                    alt="Yash Patki"
                                    className="object-cover"
                                />
                                <AvatarFallback>{DATA.initials}</AvatarFallback>
                            </Avatar>
                        </BlurFade>
                    </div>

                    <BlurFade delay={0.05}>
                        <p className="mt-4 text-sm">{DATA.description}</p>
                        <p className="mt-4 text-sm">{DATA.summary}</p>
                    </BlurFade>

                    <div className="mt-6 flex flex-row gap-2 items-center">
                        {Object.values(DATA.contact.social).map(
                            (social, idx) => (
                                <BlurFade key={idx} delay={0.05 + idx * 0.05}>
                                    <Button
                                        variant="secondary"
                                        className="flex items-center"
                                        onClick={() =>
                                            window.open(social.url, "_blank")
                                        }
                                    >
                                        <social.icon className="w-4 h-4 mr-2" />
                                        {social.name}
                                    </Button>
                                </BlurFade>
                            )
                        )}
                    </div>
                </div>

                <ul className="mb-4 ml-4 mt-14 mr-8 divide-y divide-dashed border-l border-sky-600">
                    <BlurFade delay={0.1}>
                        <Education
                            title="University of California San Diego"
                            degree="B.S. Computer Science-Mathematics, Minor in Business"
                            description={[
                                "Graduated with a 3.72 GPA",
                                "Took CS courses in Algorithms, Data Structures, Machine Learning, Data Science, Software Engineering, and more",
                                "Took Math courses in Linear Algebra, Probability, Statistics, Graph Theory, and more",
                            ]}
                            dates="Sep 2020 - Jun 2024"
                            location="San Diego, CA"
                            image="/ucsd.png"
                            clubs={[
                                {
                                    title: "ACM",
                                    description: [
                                        "Member (2021-2024)",
                                        "Hackathon 3rd Place (2024)",
                                    ],
                                    image: "/acm.png",
                                },
                                {
                                    title: "UCSD Cricket",
                                    description: [
                                        "Member (2021-2024)",
                                        "Captain and President (2022-2023)",
                                        "Vice President (2023-2024)",
                                    ],
                                    image: "/ucsd.png",
                                },
                            ]}
                        />
                    </BlurFade>
                    <BlurFade delay={0.15}>
                        <Education
                            title="Thousand Oaks High School"
                            degree="High School Diploma"
                            description={[
                                "AP Scholar",
                                "Graduated with a 4.6 GPA",
                            ]}
                            dates="Aug 2016 - Jun 2020"
                            location="Thousand Oaks, CA"
                            image="/tohs.png"
                            clubs={[
                                {
                                    title: "The Center for Advanced Studies and Research",
                                    description: [
                                        "AP Seminar (AP Score: 4)",
                                        "AP Research (AP Score: 5)",
                                    ],
                                    image: "/center.jpg",
                                },
                                {
                                    title: "Scholar Athlete",
                                    description: [
                                        "Good Grades as Varsity Athlete (2016-2020)",
                                    ],
                                },
                            ]}
                        />
                    </BlurFade>
                </ul>

                <ul className="mb-4 ml-4 mt-16 mr-8 divide-y divide-dashed border-l border-sky-600">
                    {DATA.work.map((work, idx) => (
                        <BlurFade key={idx} delay={0.2 + idx * 0.05}>
                            <Experience {...work} />
                        </BlurFade>
                    ))}
                </ul>

                <div className="mb-4 ml-4 mt-10 mr-8">
                    <BlurFade delay={0.3}>
                        <h2 className="text-xl font-semibold">My Projects</h2>
                        <p className="text-muted-foreground">
                            I like to build things! Here are some of my
                            favorites.
                        </p>
                    </BlurFade>
                    <Link
                        href="/projects"
                        className="text-muted-foreground text-xs flex flex-row items-center justify-end mt-2"
                    >
                        View All Projects
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>

                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {DATA.projects
                            .filter((project) => project.featured)
                            .map((project: any, idx: number) => (
                                <BlurFade delay={0.1 + idx * 0.05} key={idx}>
                                    <Project key={idx} {...project} />
                                </BlurFade>
                            ))}
                    </div>
                </div>

                <div className="mb-4 ml-4 mt-16 mr-8">
                    <BlurFade delay={0.4}>
                        <h2 className="text-xl font-semibold">
                            Skills & Technologies
                        </h2>
                        <p className="text-muted-foreground">
                            I&apos;ve worked with a variety of tools and
                            technologies. Here are some of my favorites.
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.5}>
                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                            {DATA.skills.map(({ name, level }, idx) => (
                                <Badge key={idx} variant="outline">
                                    <span className="mr-auto">{name}</span>
                                    <span className="text-muted-foreground">
                                        {level}
                                    </span>
                                </Badge>
                            ))}
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.6}>
                        <h2 className="mt-12 text-xl font-semibold">
                            Certifications
                        </h2>
                    </BlurFade>

                    <ul className="mb-4 ml-4 mt-6 mr-8 divide-y divide-dashed border-l border-sky-600">
                        {DATA.certicates.map((cert, idx) => (
                            <BlurFade key={idx} delay={0.6 + idx * 0.05}>
                                <li className="relative ml-10 py-4 decoration-none">
                                    <Link href={cert.href} target="_blank">
                                        <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                                            <Avatar className="border size-12">
                                                <AvatarImage
                                                    src={cert.logoUrl}
                                                    alt={cert.company}
                                                    className="object-contain"
                                                />
                                                <AvatarFallback>
                                                    {cert.company[0]}
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-start gap-1">
                                            <h2 className="leading-none font-semibold">
                                                {cert.company}
                                            </h2>
                                            <p className="text-muted-foreground text-sm">
                                                {cert.title}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            </BlurFade>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResumeMobile;
