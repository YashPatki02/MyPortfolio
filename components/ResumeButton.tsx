"use client";
import React from "react";
import { Button } from "./ui/button";
import { Scroll } from "lucide-react";
import Link from "next/link";
import {DATA} from "@/lib/data";

const ResumeButton = () => {
    return (
        <Link
            href={DATA.resumeUrl}
            target="_blank"
        >
            <Button variant="outline" size="icon">
                <Scroll className="h-5 w-5" />
            </Button>
        </Link>
    );
};

export default ResumeButton;
