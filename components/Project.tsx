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
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { MoveUpRight, SquareArrowOutUpRight } from "lucide-react";

type ProjectProps = {
    title: string;
    dates: string;
    description: string;
    image?: string;
    video?: string;
    badge?: string;
    links: {
        name: string;
        url: string;
    }[];
    technologies: string[];
    featured?: boolean;
};

const Project = ({
    title,
    dates,
    description,
    image,
    video,
    badge,
    links,
    technologies,
    featured,
}: ProjectProps) => {
    return (
        <Card
            className={
                "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full px-2"
            }
        >
            <Link href={(links && links[0].url) || "#"}>
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
                        width={800}
                        height={400}
                        className="h-40 w-full overflow-hidden object-cover object-top"
                    />
                )}
            </Link>
            <CardHeader className="px-2">
                <div className="flex flex-col">
                    <CardTitle className="mt-1 text-base">{title}</CardTitle>

                    <p className="font-sans text-xs mb-2">{dates}</p>

                    <p className="prose mb-2 max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        {description}
                    </p>
                </div>
                {badge && (
                    <AnimatedGradientText>
                        <span
                            className={cn(
                                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-[10px] font-semibold`
                            )}
                        >
                            {badge}
                        </span>
                    </AnimatedGradientText>
                )}
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
                            <Link href={link?.url} key={idx} target="_blank">
                                <Button
                                    variant="outline"
                                    key={idx}
                                    className="flex gap-2 px-2 py-1 text-xs"
                                >
                                    {link.name}
                                    <MoveUpRight size={12} className="ml-1" />
                                </Button>
                            </Link>
                        ))}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};

export default Project;
