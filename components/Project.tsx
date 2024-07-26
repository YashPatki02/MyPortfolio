import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

type ProjectProps = {
    title: string;
    dates: string;
    description: string;
    image?: string;
    video?: string;
    links: {
        type: string;
        href: string;
    }[];
    technologies: string[];
};

const Project = ({
    title,
    dates,
    description,
    image,
    video,
    links,
    technologies,
}: ProjectProps) => {
    return (
        <Card
            className={
                "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
            }
        >
            <Link
                href={(links && links[0].href) || "#"}
                //   className={cn("block cursor-pointer", className)}
            >
                {video && (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
                    />
                )}
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        className="h-40 w-full overflow-hidden object-cover object-top"
                    />
                )}
            </Link>
            <CardHeader className="px-2">
                <div className="space-y-1">
                    <CardTitle className="mt-1 text-base">{title}</CardTitle>
                    <time className="font-sans text-xs">{dates}</time>
                    <p className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        {description}
                    </p>
                </div>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col px-2">
                {technologies && technologies.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                        {technologies?.map((tech) => (
                            <Badge
                                className="px-1 py-0 text-[10px]"
                                variant="secondary"
                                key={tech}
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="px-2 pb-2">
                {links && links.length > 0 && (
                    <div className="flex flex-row flex-wrap items-start gap-1">
                        {links?.map((link, idx) => (
                            <Link href={link?.href} key={idx} target="_blank">
                                <Badge
                                    key={idx}
                                    className="flex gap-2 px-2 py-1 text-[10px]"
                                >
                                    {link.type}
                                </Badge>
                            </Link>
                            // <Button
                            //     variant="secondary"
                            //     key={idx}
                            //     onClick={() => window.open(link.href, "_blank")}
                            // >
                            //     {link.type}
                            // </Button>
                        ))}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};

export default Project;
