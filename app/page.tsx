import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <div className="w-[100%] flex items-center justify-between">
                    <Link href="/helloworold">Heloo</Link>
                </div>
                <section>
                    <h1>About Me</h1>
                    <p>
                        Write a brief introduction about yourself and your CS
                        background.
                    </p>
                </section>

                <section>
                    <h1>Experience</h1>
                    <ul>
                        <li>
                            <h2>Company Name</h2>
                            <p>Job Title</p>
                            <p>Date Range</p>
                            <p>
                                Description of your responsibilities and
                                achievements.
                            </p>
                        </li>
                        {/* Add more experience items as needed */}
                    </ul>
                </section>

                <section>
                    <h1>Education</h1>
                    <ul>
                        <li>
                            <h2>University Name</h2>
                            <p>Degree</p>
                            <p>Date Range</p>
                            <p>
                                Description of your studies and any notable
                                projects.
                            </p>
                        </li>
                        {/* Add more education items as needed */}
                    </ul>
                </section>

                <section>
                    <h1>Projects</h1>
                    <ul>
                        <li>
                            <h2>Project Name</h2>
                            <p>Description of the project and your role.</p>
                            <p>
                                Technologies used: List the technologies used in
                                the project.
                            </p>
                        </li>
                        {/* Add more project items as needed */}
                    </ul>
                </section>

                <section>
                    <h1>Resume</h1>
                    <p>Include a link to your resume for download.</p>
                </section>

                <section>
                    <h1>Links</h1>
                    <ul>
                        <li>
                            <Link href="https://github.com/your-username">
                                Github
                            </Link>
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </section>
            </div>
        </main>
    );
}
