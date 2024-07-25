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

const Resume = () => {
    const [selected, setSelected] = useState(1);

    return (
        <div className="flex flex-row items-start justify-center">
            <div className="flex flex-col w-1/2 items-center justify-center m-10">
                <Image
                    className={`border rounded-sm border-blue-500 hover:border-red-50 ${
                        selected === 1 ? "border-red-500" : "border-blue-500"
                    }`}
                    src={Resume1}
                    alt="Resume Header"
                    onClick={() => setSelected(1)}
                />
                <Image
                    className={`border rounded-sm border-blue-500 hover:border-red-50 ${
                        selected === 2 ? "border-red-500" : "border-blue-500"
                    }`}
                    src={Resume2}
                    alt="Resume Education"
                    onClick={() => setSelected(2)}
                />
                <Image
                    className={`border rounded-sm border-blue-500 hover:border-red-50 ${
                        selected === 3 ? "border-red-500" : "border-blue-500"
                    }`}
                    src={Resume3}
                    alt="Resume Experiences"
                    onClick={() => setSelected(3)}
                />
                <Image
                    className={`border rounded-sm border-blue-500 hover:border-red-50 ${
                        selected === 4 ? "border-red-500" : "border-blue-500"
                    }`}
                    src={Resume4}
                    alt="Resume Projects"
                    onClick={() => setSelected(4)}
                />
                <Image
                    className={`border rounded-sm border-blue-500 hover:border-red-50 ${
                        selected === 5 ? "border-red-500" : "border-blue-500"
                    }`}
                    src={Resume5}
                    alt="Resume Skills"
                    onClick={() => setSelected(5)}
                />
            </div>
            <div className="flex w-1/2 items-start justify-center">
                <div>
                    <h1>{selected}</h1>
                    {selected == 1 && (
                        <div className="mb-4 ml-4 mt-8 mr-8 border-l pl-10">
                            <Avatar className="border size-16">
                                <AvatarImage
                                    src={DATA.avatarUrl}
                                    alt="Yash Patki"
                                    className="object-cover"
                                />
                                <AvatarFallback>{DATA.initials}</AvatarFallback>
                            </Avatar>

                            <h1 className="mt-4 text-2xl font-semibold">
                                Hi, I'm {DATA.name} 👋
                            </h1>
                            <p className="mt-4 text-sm">{DATA.description}</p>
                            <p className="mt-4 text-sm">{DATA.summary}</p>

                            <div className="mt-4 flex flex-row gap-2 flex-wrap">
                                {DATA.skills.map((skill, idx) => (
                                    <Badge variant="outline" key={idx}>
                                        {skill}
                                    </Badge>
                                ))}
                            </div>

                            <div className="mt-4 flex flex-row gap-2 items-center ">
                                {Object.values(DATA.contact.social).map(
                                    (social, idx) => (
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
                                    )
                                )}
                            </div>
                        </div>
                    )}
                    {selected == 2 && (
                        <ul className="mb-4 ml-4 mt-14 mr-8 divide-y divide-dashed border-l">
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
                        </ul>
                    )}
                    {selected == 3 && (
                        <ul className="mb-4 ml-4 mt-16 mr-8 divide-y divide-dashed border-l">
                            {DATA.work.map((work, idx) => (
                                <Experience key={idx} {...work} />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Resume;
