import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "../components/ui/badge";
import Link from "next/link";

type ExperienceProps = {
    company: string;
    href: string;
    title: string;
    description: string;
    location: string;
    logoUrl: string;
    start: string;
    end: string;
};

const Experience = ({
    company,
    href,
    title,
    description,
    location,
    logoUrl,
    start,
    end,
}: ExperienceProps) => {
    return (
        <li className="relative ml-10 py-4 decoration-none">
            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                <Link href={href}>
                    <Avatar className="border size-12 m-auto">
                        <AvatarImage
                            src={logoUrl}
                            alt={company}
                            className="object-contain"
                        />
                        <AvatarFallback>{company[0]}</AvatarFallback>
                    </Avatar>
                </Link>
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1">
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <h2 className="font-semibold leading-none">
                            {company}
                        </h2>
                        {title && (
                            <span className="prose dark:prose-invert text-sm text-muted-foreground">
                                {title}
                            </span>
                        )}
                    </div>
                    <div>
                        {start && end && location && (
                            <time className="text-xs text-muted-foreground">
                                {start} - {end} &bull; {location}
                            </time>
                        )}
                    </div>
                </div>
                {description && (
                    <p className="prose dark:prose-invert text-sm ">
                        {description}
                    </p>
                )}
            </div>
        </li>
    );
};

export default Experience;
