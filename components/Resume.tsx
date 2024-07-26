"use client";
import { useState } from "react";
import Resume1 from "../public/Resume1.jpg";
import Resume2 from "../public/Resume2.jpg";
import Resume3 from "../public/Resume3.jpg";
import Resume4 from "../public/Resume4.jpg";
import Resume5 from "../public/Resume5.jpg";
import Image from "next/image";
import { DATA } from "../lib/data";
import Education from "./Education";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Experience from "./Experience";
import Project from "./Project";
import Link from "next/link";
import { motion } from "framer-motion";
import BlurFade from "./magicui/blur-fade";

const Resume = () => {
    const [selected, setSelected] = useState(1);

    return (
        <div className="flex flex-row items-start justify-center">
            <div className="flex flex-col w-1/2 items-center justify-center m-10 z-10 max-sm:hidden">
                <BlurFade delay={0.1 + selected * 0.15}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        initial={{ scale: 1 }}
                        animate={{ scale: selected === 1 ? 1.02 : 1 }}
                    >
                        <Image
                            className={`border rounded-sm ${
                                selected === 1 && "border-cyan-600 z-100"
                            }`}
                            src={Resume1}
                            alt="Resume Header"
                            onClick={() => setSelected(1)}
                        />
                    </motion.div>
                </BlurFade>
                <BlurFade delay={0.1 + selected * 0.15}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        initial={{ scale: 1 }}
                        animate={{ scale: selected === 2 ? 1.02 : 1 }}
                    >
                        <Image
                            className={`border rounded-sm ${
                                selected === 2 && "border-cyan-600 z-100"
                            }`}
                            src={Resume2}
                            alt="Resume Education"
                            onClick={() => setSelected(2)}
                        />
                    </motion.div>
                </BlurFade>
                <BlurFade delay={0.1 + selected * 0.15}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        initial={{ scale: 1 }}
                        animate={{ scale: selected === 3 ? 1.02 : 1 }}
                    >
                        <Image
                            className={`border rounded-sm ${
                                selected === 3 && "border-cyan-600 z-100"
                            }`}
                            src={Resume3}
                            alt="Resume Experiences"
                            onClick={() => setSelected(3)}
                        />
                    </motion.div>
                </BlurFade>
                <BlurFade delay={0.1 + selected * 0.15}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        initial={{ scale: 1 }}
                        animate={{ scale: selected === 4 ? 1.02 : 1 }}
                    >
                        <Image
                            className={`border rounded-sm ${
                                selected === 4 && "border-cyan-600 z-100"
                            }`}
                            src={Resume4}
                            alt="Resume Projects"
                            onClick={() => setSelected(4)}
                        />
                    </motion.div>
                </BlurFade>
                <BlurFade delay={0.1 + selected * 0.15}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        initial={{ scale: 1 }}
                        animate={{ scale: selected === 5 ? 1.02 : 1 }}
                    >
                        <Image
                            className={`border rounded-sm ${
                                selected === 5 && "border-cyan-600 z-100"
                            }`}
                            src={Resume5}
                            alt="Resume Skills"
                            onClick={() => setSelected(5)}
                        />
                    </motion.div>
                </BlurFade>
            </div>

            <div className="flex w-1/2 items-start justify-center z-10">
                {selected == 1 && (
                    <div className="mb-4 ml-4 mt-16 mr-8 border-l pl-10 border-cyan-600">
                        <div className="flex flex-row items-center justify-start gap-2">
                            <BlurFade delay={0.1}>
                                <div>
                                    <h1 className="mt-4 text-2xl font-semibold">
                                        Hi, I'm {DATA.name} 👋
                                    </h1>
                                    <h2 className="text-muted-foreground">
                                        Full-Stack Developer | Frontend
                                        Developer
                                    </h2>
                                </div>
                            </BlurFade>
                            <BlurFade delay={0.15}>
                                <Avatar className="border size-20">
                                    <AvatarImage
                                        src={DATA.avatarUrl}
                                        alt="Yash Patki"
                                        className="object-cover"
                                    />
                                    <AvatarFallback>
                                        {DATA.initials}
                                    </AvatarFallback>
                                </Avatar>
                            </BlurFade>
                        </div>

                        <BlurFade delay={0.2}>
                            <p className="mt-4 text-sm">{DATA.description}</p>
                            <p className="mt-4 text-sm">{DATA.summary}</p>
                        </BlurFade>

                        <div className="mt-6 flex flex-row gap-2 items-center ">
                            {Object.values(DATA.contact.social).map(
                                (social, idx) => (
                                    <BlurFade delay={0.25 + idx * 0.05}>
                                        <Button
                                            key={idx}
                                            variant="secondary"
                                            className="flex items-center"
                                            onClick={() => {
                                                window.open(
                                                    social.url,
                                                    "_blank"
                                                );
                                            }}
                                        >
                                            <social.icon className="w-4 h-4 mr-2" />
                                            {social.name}
                                        </Button>
                                    </BlurFade>
                                )
                            )}
                        </div>
                    </div>
                )}
                {selected == 2 && (
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
                        <BlurFade delay={0.2}>
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
                )}
                {selected == 3 && (
                    <ul className="mb-4 ml-4 mt-16 mr-8 divide-y divide-dashed border-l border-sky-600">
                        {DATA.work.map((work, idx) => (
                            <BlurFade delay={0.1 + idx * 0.05} key={idx}>
                                <Experience key={idx} {...work} />
                            </BlurFade>
                        ))}
                    </ul>
                )}
                {selected == 4 && (
                    <div className="mb-4 ml-4 mt-10 mr-8">
                        <BlurFade delay={0.1}>
                            <h2 className="text-xl font-semibold">
                                My Projects
                            </h2>
                            <p className="text-muted-foreground">
                                I like to build things! Here are some of my
                                favorites.
                            </p>
                        </BlurFade>

                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                            {DATA.projects.map((project, idx) => (
                                <BlurFade
                                    delay={0.15 + idx * 0.05}
                                    key={idx}
                                    inView
                                >
                                    <Project key={idx} {...project} />
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                )}
                {selected == 5 && (
                    <div className="mb-4 ml-4 mt-16 mr-8">
                        <BlurFade delay={0.1}>
                            <h2 className="text-xl font-semibold">
                                Skills & Technologies
                            </h2>
                            <p className="text-muted-foreground">
                                I've worked with a variety of tools and
                                technologies. Here are some of my favorites.
                            </p>
                        </BlurFade>
                        <BlurFade delay={0.2}>
                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                            {DATA.skills.map(({ name, level }, idx) => (
                                        <Badge key={idx} variant="outline">
                                            <span className="mr-auto">
                                                {name}
                                            </span>
                                            <span className="text-muted-foreground">
                                                {level}
                                            </span>
                                        </Badge>
                            ))}
                        </div>
                        </BlurFade>
                        <BlurFade delay={0.3}>
                            <h2 className="mt-12 text-xl font-semibold">
                                Certifications
                            </h2>
                        </BlurFade>

                        <ul className="mb-4 ml-4 mt-6 mr-8 divide-y divide-dashed border-l border-sky-600">
                            {DATA.certicates.map((cert, idx) => (
                                <BlurFade delay={0.3 + idx * 0.05} key={idx}>
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
                )}
            </div>
        </div>
    );
};

export default Resume;
