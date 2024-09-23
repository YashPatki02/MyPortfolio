import { ToggleMode } from "@/components/ToggleMode";
import Resume from "@/components/Resume";
import ResumeMobile from "@/components/ResumeMobile";
import ResumeButton from "@/components/ResumeButton";
import AnimatedGridPattern from "../components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
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
        </div>
    );
}
