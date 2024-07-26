import Head from "next/head";
import { ToggleMode } from "@/components/ToggleMode";
import Resume from "@/components/Resume";

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
                <nav className="flex justify-center items-center">
                    <div className="text-lg">Yash Patki.</div>

                    <div className="flex-grow" />
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
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
