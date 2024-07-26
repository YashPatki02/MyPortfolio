"use client";
import React from "react";
import { Button } from "./ui/button";
import { Scroll } from "lucide-react";
import Link from "next/link";

const ResumeButton = () => {
    return (
        <Link
            href="https://file.notion.so/f/f/94389053-f81d-48be-9ecc-6c3abc12e7ab/096a59e8-ae42-4402-93ec-af1bb4a80c65/Yash_Patki_-_Resume_2024.pdf?id=09fe24cb-f00c-41c5-836e-a1b08d823567&table=block&spaceId=94389053-f81d-48be-9ecc-6c3abc12e7ab&expirationTimestamp=1722124800000&signature=1h1tGLxJtGEQDrAw8p37HheZ-CI6psNJm_qLRw3w9IM&downloadName=Yash+Patki+-+Resume+2024.pdf"
            target="_blank"
        >
            <Button variant="outline" size="icon">
                <Scroll className="h-5 w-5" />
            </Button>
        </Link>
    );
};

export default ResumeButton;
