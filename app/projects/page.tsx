import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Project from "@/components/Project";
import { DATA } from "@/lib/data";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-start mt-10 mb-20">
            <BlurFade delay={0.05}>
                <h2 className="text-5xl text-center">My Projects.</h2>
                <p className="text-muted-foreground mt-4 text-sm max-w-md text-center">
                    A collection of projects I have worked on. I have a few
                    projects in the works, so stay tuned!
                </p>
            </BlurFade>

            <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 mx-20">
                {DATA.projects.map((project: any, idx: number) => (
                    <BlurFade delay={0.1 + idx * 0.05} key={idx}>
                        <Project key={idx} {...project} />
                    </BlurFade>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
