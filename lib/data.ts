import { Icons } from "@/components/Icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
    name: "Yash Patki",
    yearMade: "2024",
    position: "Front-End Engineer @ Amazon",
    initials: "YP",
    url: "https://yashpatki.me",
    resumeUrl:
        "https://drive.google.com/file/d/1_esz2n_VcZOM3pYDviB3LYvGvAXg_KJX/view?usp=sharing",
    location: "Thousand Oaks, CA",
    description:
        "Recent UCSD new-grad with a B.S. in Computer Science-Math. Experienced web developer, designer, and AI enthusiast.",
    summary:
        "Enjoy building full-stack applications from concept to completion. Passionate about creating intuitive, scalable, and accessible user experiences. Like to challenge myself, work in collaborative environments, and learn new technologies.",
    avatarUrl: "/me.jpg",
    skills: [
        {
            name: "React.js",
            level: "Advanced",
        },
        {
            name: "Next.js",
            level: "Advanced",
        },
        {
            name: "TypeScript",
            level: "Advanced",
        },
        {
            name: "TailwindCSS",
            level: "Advanced",
        },
        {
            name: "Figma",
            level: "Advanced",
        },
        {
            name: "Python",
            level: "Intermediate",
        },
        {
            name: "Flask",
            level: "Intermediate",
        },
        {
            name: "Express.js",
            level: "Intermediate",
        },

        {
            name: "PostgreSQL",
            level: "Advanced",
        },

        {
            name: "AWS",
            level: "Intermediate",
        },

        {
            name: "CI/CD",
            level: "Intermediate",
        },
        {
            name: "Agile",
            level: "Intermediate",
        },
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
            company: "Amazon",
            href: "https://www.amazon.com/",
            location: "Tempe, AZ",
            title: "Front-End Engineer",
            logoUrl: "/amazon.png",
            start: "Nov 2024",
            end: "Present",
            description:
                "Working to develop and maintain the services. Learning best practices, improving code-reusability and robustness, and ensuring ideal customer experience.",
        },
        {
            company: "CodePath",
            href: "https://codepath.org/",
            location: "Remote",
            title: "WebDev Tech Fellow",
            logoUrl: "/codepath.png",
            start: "Jul 2024",
            end: "Present",
            description:
                "Teaching and mentoring students in the Intermediate Web Development course. Performing code reviews, leading breakout sessions, and helping students with projects using React, Node.js, and PostgreSQL.",
        },
        {
            company: "Headstarter AI",
            href: "https://headstarter.co/",
            location: "Remote",
            title: "Software Engineering Fellow",
            logoUrl: "/headstarter.png",
            start: "Jul 2024",
            end: "Present",
            description:
                "Built 7 AI apps and APIs using tools like Next.js, OpenAI API, Gemini API, Pinecone, Stripe API, AWS (S3, Lambda, DynamoDB), Firebase, and more. Attended hackathons, workshops, and networking events to learn and grow. ",
        },
        {
            company: "UCSD CSE Department",
            href: "https://cse.ucsd.edu",
            location: "San Diego, CA",
            title: "CSE Tutor - CSE 190",
            logoUrl: "/cse.jpg",
            start: "Mar 2024",
            end: "Jun 2024",
            description:
                "Helped 50 students with weekly office hours, code reviews, and project feedback working on the open-source Python IdleLib repo. Authored the course textbook on GitHub Copilot and use of LLMs in code generation.",
        },
        {
            company: "SkyIT Services",
            href: "https://skyit.services/",
            location: "Remote",
            title: "Frontend React Developer Intern",
            logoUrl: "/skyit.jpg",
            start: "Jan 2023",
            end: "Jul 2023",
            description:
                "Developed reusable React components and pages for a Fleet Management application. Ensured east of use, accessibility, and responsiveness across devices. Conducted end-to-end testing and presented optimizations in daily stand-ups.",
        },
    ],
    projects: [
        {
            title: "contribu.",
            dates: "Aug 2024 - Present",
            description:
                "Platform for students to create profiles, post projects, and find collaborators. A work in progress with plans for future features.",
            technologies: [
                "Next.js",
                "TailwindCSS",
                "Supabase (DB)",
                "Clerk (Auth)",
                "JWToken",
                "SQL",
            ],
            links: [
                {
                    name: "Website",
                    url: "https://www.contribu.dev/",
                },
            ],
            image: "",
            video: "",
            featured: false,
        },
        {
            title: "UniMatch",
            dates: "Aug 2024",
            description:
                "RAG Chat integrating RateMyProfessor reviews to help students find the best universities that match their preferences.",
            technologies: [
                "Python",
                "Pinecone",
                "LangChain",
                "BeautifulSoup",
                "Next.js",
                "TailwindCSS",
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/YashPatki02/RateMySchool-RAG",
                },
                {
                    name: "Website",
                    url: "https://unimat-ch.vercel.app/",
                },
            ],
            image: "",
            video: "",
            featured: true,
        },
        {
            title: "AnnotatorAI",
            dates: "Aug 2024",
            description:
                "Platform to assist sales managers. Upload sales transcripts, add detailed comments with files, and get AI summaries of transcripts and comments.",
            technologies: [
                "AWS S3",
                "DynamoDB",
                "Lambda",
                "Llama 3.1",
                "Next.js",
                "TailwindCSS",
                "Figma",
            ],
            badge: "Headstarter - Top 3 (Rilla Track)",
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/YashPatki02/AnnotatorAI-RillaHackathon",
                },
            ],
            image: "",
            video: "",
            featured: true,
        },
        {
            title: "CardGenAI",
            dates: "Aug 2024",
            description:
                "Flashcard tool to create flashcards manually, from AI prompts, or files. Stripe API integration for premium features.",
            technologies: [
                "Next.js",
                "Firebase (Auth and Firestore)",
                "OpenAI API",
                "Stripe API",
                "TailwindCSS",
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/YashPatki02/CardGenAI-AI-Flashcards",
                },
                {
                    name: "Website",
                    url: "https://card-genai.vercel.app",
                },
            ],
            image: "",
            video: "",
            featured: false,
        },
        {
            title: "SweatAI",
            dates: "Aug 2024",
            description:
                "Fitness assistant featuring chats with three personalized bots (sports, fitness, nutrition). Real-time chats with streaming and memory.",
            technologies: [
                "Next.js",
                "TailwindCSS",
                "OpenAI API",
                "Supabase (Auth and DB)",
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/YashPatki02/SweatAI-Workout-Assistant",
                },
                {
                    name: "Website",
                    url: "https://sweat-ai.vercel.app/",
                },
            ],
            image: "",
            video: "",
            featured: false,
        },
        {
            title: "PantryPal",
            dates: "Jul 2024",
            description:
                "Pantry and shopping management application to track inventory, get personalized recipes, and shopping suggestions for healthier alternatives.",
            technologies: [
                "Next.js",
                "Firebase (Auth and Firestore)",
                "Gemini API",
                "TailwindCSS",
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/YashPatki02/PantryPal",
                },
                {
                    name: "Website",
                    url: "https://pantry-pal-one.vercel.app/",
                },
            ],
            image: "",
            video: "",
            featured: false,
        },
        {
            title: "Portfolio",
            dates: "Jul 2024 - Present",
            description:
                "Inception, this is what you are looking at right now. A personal portfolio website to showcase my projects, experiences, and skills.",
            technologies: [
                "Next.js",
                "React",
                "TailwindCSS",
                "shadcn",
                "Framer Motion",
                "Magic UI",
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/YashPatki02/MyPortfolio",
                },
            ],
            image: "",
            video: "",
            featured: false,
        },
        {
            title: "StudyShore",
            dates: "Mar 2024",
            description:
                "Website to let students upload text, audio, or video files and get customized study tools: summaries, flashcards, and quizzes.",
            technologies: [
                "Next.js",
                "Flask",
                "Gemini API",
                "GCP",
                "Python",
                "AntDesign",
                "Figma",
            ],
            badge: "DiamondHacks - 3rd Place",
            links: [
                {
                    name: "DevPost",
                    url: "https://devpost.com/software/studyshore",
                },
                {
                    name: "GitHub",
                    url: "https://github.com/bubloo7/StudyShore",
                },
            ],
            image: "",
            video: "",
            featured: true,
        },
        {
            title: "VersusSweeper",
            dates: "Jun 2023 - Nov 2023",
            description:
                "A multiplayer version of the classic Minesweeper game. Players can compete in real-time to clear the board faster than their opponent.",
            technologies: [
                "React.js",
                "Next.js",
                "Redis",
                "Express.js",
                "Socket.io",
                "AntDesign",
                "Figma",
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/bubloo7/VersusSweeper",
                },
                {
                    name: "Website",
                    url: "https://versussweeper.com",
                },
            ],
            image: "",
            video: "",
            featured: true,
        },
        {
            title: "HousingPal",
            dates: "Sep 2023 - Dec 2023",
            description:
                "To combat the housing crisis, I built a platform for students to create profiles, search for roommates, and filter listings based on preferences.",
            technologies: [
                "React.js",
                "PostgreSQL",
                "Express.js",
                "Node.js",
                "AntDesign",
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/YashPatki02/HousingPal-CodePath",
                },
                {
                    name: "Demo",
                    url: "https://housingpal-codepath-client.up.railway.app/",
                },
            ],
            image: "",
            video: "",
            featured: false,
        },
    ],
    certicates: [
        {
            company: "Meta",
            href: "https://www.coursera.org/account/accomplishments/professional-cert/65YL56C8VP8S",
            title: "Meta Front-End Developer Professional Certificate",
            logoUrl: "/meta.png",
        },
        {
            company: "Meta",
            href: "https://www.linkedin.com/in/yash-patki-b17336164/details/certifications/1703284383350/single-media-viewer/?profileId=ACoAACc0RcMBdNkQALbg_tTTk8UYHI_VEyBZic0",
            title: "Meta React Native Certificate",
            logoUrl: "/meta.png",
        },
        {
            company: "CodePath",
            href: "https://www.linkedin.com/in/yash-patki-b17336164/details/certifications/1703047576304/single-media-viewer/?profileId=ACoAACc0RcMBdNkQALbg_tTTk8UYHI_VEyBZic0",
            title: "Advanced Web Development Course",
            logoUrl: "/codepath.png",
        },
    ],
    education: [
        {
            title: "University of California San Diego",
            degree: "B.S. Computer Science-Mathematics, Minor in Business",
            description: [
                "Graduated with a 3.72 GPA",
                "Took CS courses in Algorithms, Data Structures, Machine Learning, Data Science, Software Engineering, and more",
                "Took Math courses in Linear Algebra, Probability, Statistics, Graph Theory, and more",
            ],
            dates: "Sep 2020 - Jun 2024",
            location: "San Diego, CA",
            image: "/ucsd.png",
            clubs: [
                {
                    title: "ACM",
                    description: [
                        "Member (2021-2024)",
                        "Hackathon 3rd Place (2024)",
                    ],
                    image: "/acm.png",
                },
                {
                    title: "UCSD Cricket",
                    description: [
                        "Member (2021-2024)",
                        "Captain and President (2022-2023)",
                        "Vice President (2023-2024)",
                    ],
                    image: "/ucsd.png",
                },
            ],
        },
        {
            title: "Thousand Oaks High School",
            degree: "High School Diploma",
            description: ["AP Scholar", "Graduated with a 4.6 GPA"],
            dates: "Aug 2016 - Jun 2020",
            location: "Thousand Oaks, CA",
            image: "/tohs.png",
            clubs: [
                {
                    title: "The Center for Advanced Studies and Research",
                    description: [
                        "AP Seminar (AP Score: 4)",
                        "AP Research (AP Score: 5)",
                    ],
                    image: "/center.jpg",
                },
                {
                    title: "Scholar Athlete",
                    description: ["Good Grades as Varsity Athlete (2016-2020)"],
                },
            ],
        },
    ],
};
