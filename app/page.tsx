import Head from "next/head";
import { ToggleMode } from "@/components/ToggleMode";
import Resume from "@/components/Resume";
import ResumeButton from "@/components/ResumeButton";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Yash Patki | Portfolio</title>
                <meta
                    name="description"
                    content="Yash Patki's personal portfolio website. A place to showcase my work and projects."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="p-3">
                <nav className="flex justify-center items-center mr-4 ml-4 pb-2 border-b">
                    <div className="text-2xl font-400 font-serif">Yash Patki.</div>

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

            <Resume />
        </div>
    );
}
