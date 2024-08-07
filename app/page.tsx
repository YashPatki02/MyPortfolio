import { ToggleMode } from "@/components/ToggleMode";
import Resume from "@/components/Resume";
import ResumeMobile from "@/components/ResumeMobile"
import ResumeButton from "@/components/ResumeButton";
import AnimatedGridPattern from "../components/magicui/animated-grid-pattern";
import {cn} from "@/lib/utils";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="p-3">
                <nav className="flex justify-center items-center mr-8 ml-8 pb-2 border-b">
                    <div className="text-2xl font-400 font-serif">
                        Yash Patki.
                    </div>

                    <div className="flex-grow" />
                    <ul className="flex space-x-4">
                        <li>
                            <ResumeButton />
                        </li>
                        <li>
                            <ToggleMode />
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="max-md:hidden"> 
                <Resume />
            </div>
            <div className="md:hidden">
                <ResumeMobile />
                </div>

            <AnimatedGridPattern
                numSquares={300}
                maxOpacity={0.05}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
            />
            <footer className="pt-3">
                <div className="mt-4 mb-4 text-center w-full text-sm text-muted-foreground">
                    &copy; 2021 Yash Patki. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
