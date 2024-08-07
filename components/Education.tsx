import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "../components/ui/badge";

type EducationProps = {
    title: string;
    degree: string;
    description: string[];
    dates: string;
    location: string;
    image: string;
    clubs: {
        title: string;
        description: string[];
        image?: string;
    }[];
};

const Education = ({
    title,
    degree,
    description,
    dates,
    location,
    image,
    clubs,
}: EducationProps) => {
    return (
        <li className="relative ml-10 py-4 decoration-none">
            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                <Avatar className="border size-12 m-auto">
                    <AvatarImage
                        src={image}
                        alt={title}
                        className="object-contain"
                    />
                    <AvatarFallback>{title[0]}</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1">
                {dates && location && (
                    <time className="text-xs text-muted-foreground">
                        {dates}
                        {"   "} | {"   "} {location}
                    </time>
                )}
                <h2 className="font-semibold leading-none">{title}</h2>
                {degree && (
                    <span className="prose dark:prose-invert text-sm text-muted-foreground">
                        {degree}
                    </span>
                )}
                {description && (
                    <ul className="list-disc list-inside prose dark:prose-invert text-sm ">
                        {description.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                        ))}
                    </ul>
                )}
            </div>
            {clubs && clubs.length > 0 && (
                <div className="mt-2 flex flex-row flex-wrap items-start gap-2 hover:cursor-pointer">
                    {clubs?.map((club, idx) => (
                        <HoverCard key={idx}>
                            <HoverCardTrigger>
                                <Badge>{club.title}</Badge>
                            </HoverCardTrigger>
                            <HoverCardContent
                                align="center"
                                side="top"
                                className="w-100 "
                            >
                                <div className="flex justify-start space-x-4">
                                    <Avatar>
                                        <AvatarImage
                                            src={club.image}
                                            alt={club.title}
                                            className="object-contain"
                                        />
                                        <AvatarFallback>
                                            {club.title[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-semibold">
                                            {club.title}
                                        </h4>
                                        <ul className="list-disc list-inside prose dark:prose-invert text-sm">
                                            {club.description.map(
                                                (desc, idx) => (
                                                    <li key={idx}>{desc}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            )}
        </li>
    );
};

export default Education;
