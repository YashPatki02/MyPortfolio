"use client";
import React from "react";
import { Button } from "./ui/button";
import { Scroll } from "lucide-react";
import Link from "next/link";

const ResumeButton = () => {
    return (
        <Link
            href="https://file.notion.so/f/f/94389053-f81d-48be-9ecc-6c3abc12e7ab/362d223f-3c39-46af-820c-0c6e8db30b5f/Yash_Patki_-_Resume_2024.pdf?id=902cdd9c-3d9f-4979-8c02-3fd21a660a20&table=block&spaceId=94389053-f81d-48be-9ecc-6c3abc12e7ab&expirationTimestamp=1722124800000&signature=oQEHTf9I3oqcCv-dD9fAhm-Vpcio7UclmnHf7UehgxU&downloadName=Yash+Patki+-+Resume+2024.pdf"
            target="_blank"
        >
            <Button variant="outline" size="icon">
                <Scroll className="h-5 w-5" />
            </Button>
        </Link>
    );
};

export default ResumeButton;
