import { Icons } from "@/components/Icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
    name: "Yash Patki",
    initials: "YP",
    url: "https://yashpatki.me",
    location: "Thousand Oaks, CA",
    description:
        "Recent new-grad with a B.S. in Computer Science-Math. Experienced web developer, designer, and AI enthusiast. Actively seeking opportunities to grow as a software engineer.",
    summary:
        "Enjoy building full-stack applications from concept to completion. Passionate about creating intuitive, scalable, and accessible user experiences. Like to challenge myself, work in collaborative environments, and learn new technologies.",
    avatarUrl: "/me.jpg",
    skills: [
        "React",
        "Next.js",
        "Typescript",
        "Express.js",
        "Python",
        "Postgres",
        "AWS",
        "GCP",
        "Java",
        "TailwindCSS",
        "OpenAI",
        "Figma",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
        { href: "/projects", icon: CodeIcon, label: "Projects" },
        { href: "/notes", icon: PencilLine, label: "Notes" },
    ],
    contact: {
        email: "yashom.patki@gmail.com",
        tel: "+123456789",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/YashPatki02",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/yash-patki-b17336164/",
                icon: Icons.linkedin,
                navbar: true,
            },
            email: {
                name: "Email",
                url: "mailto:yashom.patki@gmail.com",
                icon: Icons.email,
                navbar: true,
            },
        },
    },
    work: [
        {
            company: "Headstarter AI",
            href: "https://headstarterai.com",
            location: "Remote",
            title: "Software Engineering Fellow",
            logoUrl: "/headstarter.png",
            start: "Jul 2024",
            end: "Present",
            description:
                "Built 5+ AI apps and APIs using tools like Next.js, OpenAI, Pinecone, StripeAPI, AWS, Firebase, and more. Led project development from design to deployment using MVC design patterns. Coached by industry-leading Software Engineers on Agile, CI/CD, entrepreneurship, and microservice patterns.",
        },
        {
            company: "UCSD CSE Department",
            href: "https://cse.ucsd.edu",
            location: "San Diego, CA",
            title: "CSE Tutor - CSE 190",
            logoUrl: "/ucsd.png",
            start: "Mar 2024",
            end: "Jun 2024",
            description:
                "Facilitated staff meetings, tutor hours, and lectures, assisting 50 students with the open-source IdleLib codebase. Authored parts of the course textbook on utilizing GitHub Copilot and LLMs to enhance code contributions. Provided code reviews on student PRs, ensuring adherence to industry standards and project requirements.",
        },
        {
            company: "SkyIT Services",
            href: "https://skyitservices.com",
            location: "Remote",
            title: "Frontend React Developer Intern",
            logoUrl: "/skyit.png",
            start: "Jan 2023",
            end: "Jul 2023",
            description:
                "Developed React.js components and pages supporting CRUD operations for a Fleet Management application. Enhanced routing and user experience significantly with error feedback on forms and inputs and guided navigation, and translated Figma design prototypes using the AntDesign library. Conducted end-to-end testing and presented optimizations in daily stand-ups, increasing site reliability.",
        },
    ],
    projects: [
        {
            title: "StudyShore - DiamondHacks 3rd Place",
            href: "https://devpost.com/software/studyshore",
            dates: "Jan 2023",
            active: true,
            description:
                "Engineered creative Prompt Engineering with Google Cloud Platform speech-to-text and Python APIs to produce study materials like summaries, flashcards, and quizzes from uploaded text, audio, and video files. Led a team to 3rd place in DiamondHacks, leveraging Gemini API and Flask on the backend and Next.js and AntDesign for the frontend.",
            technologies: ["Next.js", "Flask", "Gemini", "GCP", "AntDesign"],
            links: [
                {
                    type: "DevPost",
                    href: "https://devpost.com/software/studyshore",
                },
            ],
            image: "",
            video: "",
        },
        {
            title: "VersusSweeper - Multiplayer Game",
            href: "https://versussweeper.com",
            dates: "June 2022",
            active: true,
            description:
                "Developed a real-time, multiplayer Minesweeper game with custom lobbies and settings. Improved performance by 75% using Figma, Next.js, and React.js with dynamic links and lazy loading. Utilized Express, Socket.IO for real-time communication, and Redis for efficient data storage and updates. Coordinated effective idea communication, task allocation, and version control in an Agile environment.",
            technologies: [
                "React.js",
                "Next.js",
                "Redis",
                "Express.js",
                "Figma",
            ],
            links: [
                {
                    type: "GitHub",
                    href: "https://github.com/bubloo7/VersusSweeper",
                },
                {
                    type: "WebApp",
                    href: "https://versussweeper.com",
                },
            ],
            image: "",
            video: "",
        },
    ],
} as const;
