import {
    meta, shopify, starbucks, tesla,
    tata, bvrit, nirvana,
    spotifyImg, prepwiseImg, zentryImg, ochiImg, thirtysixImg, chessImg
} from "../assets/images";
import {
    bootstrap,
    car,
    contact,
    css,
    estate,
    express,
    firebase,
    git,
    github,
    gsap,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    shadcn,
    snapgram,
    socketio,
    sql,
    summiz,
    tailwindcss,
    threads,
    threejs,
    twitter,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: shadcn,
        name: "Shadcn UI",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "3D Graphics",
    },
    {
        imageUrl: gsap,
        name: "GSAP",
        type: "Animation",
    },
    {
        imageUrl: motion,
        name: "Framer Motion",
        type: "Animation",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend/Database",
    },
    {
        imageUrl: socketio,
        name: "Socket.IO",
        type: "Real-time Communication",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
];

export const experiences = [
    {
        title: "ESG Job Simulation",
        company_name: "Tata Consultancy Services",
        icon: tata,
        iconBg: "#FFFFFF",
        date: "May 2025",
        points: [
            "Completed a simulation involving sustainability consulting for Tata Consultancy Services.",
            "Assessed a client's sustainability needs.",
            "Completed a comparative analysis of potential TCS solutions.",
            "Developed a fitment matrix to present proposed solutions to address the client's needs.",
        ],
    },
    {
        title: "BVRIT Learning Platform Redesign & Enhancement",
        company_name: "BVRIT",
        icon: bvrit,
        iconBg: "#E6DEDD",
        date: "April 2025",
        points: [
            "Implemented a modern, responsive navigation system with fixed positioning and gradient-styled buttons, improving user accessibility and navigation experience across all device types.",
            "Engineered an advanced resume analysis feature utilizing WebSocket connections for real-time AI feedback, incorporating PDF processing and text extraction capabilities.",
            "Developed an intuitive drag-and-drop file upload system with real-time visual feedback, progress indicators, and multi-page PDF preview functionality.",
            "Integrated GSAP animations for smooth transitions and micro-interactions, enhancing user engagement through modern UI elements like loading spinners and success notifications.",
            "Created a dark-themed interface with dynamic color gradients and shadow effects, improving visual hierarchy and user focus while maintaining accessibility standards.",
            "Implemented error handling and user feedback systems with graceful degradation, ensuring robust functionality across different file formats and user interactions.",
            "Built a responsive card-grid layout for learning resources with fade-in animations and interactive hover effects, optimizing content presentation across various screen sizes.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Nirvana - a startup",
        icon: nirvana,
        iconBg: "#383E56",
        date: "March 2025",
        points: [
            "Built frontend of Nirvana startup using React 18, Vite, and Tailwind CSS, delivering a modern and responsive web application.",
            "Implemented custom design system with branded components, animations using Framer Motion, and accessible UI patterns via Headless UI.",
            "Engineered performant user experiences using React Router, intersection observers, and optimized component architecture.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ruthwik000',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/gurram-ruthwik-goud-0b4618331',
    },
    {
        name: 'Twitter',
        iconUrl: twitter,
        link: 'https://x.com/Ruthwik000?t=la1IpUAPUQ22IXUQZmaY2w&s=09',
    }
];

export const projects = [
    {
        iconUrl: spotifyImg,
        theme: 'btn-back-red',
        name: 'Full-Stack Spotify Clone',
        description: 'Built a feature-rich Spotify clone with real-time music streaming, live chat, and social features using React, Node.js, and MongoDB.',
        link: 'https://spotify-1-nwk4.onrender.com/',
    },
    {
        iconUrl: prepwiseImg,
        theme: 'btn-back-green',
        name: 'PrepWise - AI Mock Interview Platform',
        description: 'An AI-powered mock interview platform built with Next.js, React, Firebase, and Google Gemini AI for personalized interview experiences with voice recognition.',
        link: 'https://ai-mock-interview-platform-rc17.vercel.app/',
    },
    {
        iconUrl: zentryImg,
        theme: 'btn-back-blue',
        name: 'Zentry',
        description: 'Recreated Zentry as a dynamic, game-focused website that captures the essence of modern interactive design with sleek visuals and smooth animations.',
        link: 'https://splendorous-custard-5f54ee.netlify.app/',
    },
    {
        iconUrl: ochiImg,
        theme: 'btn-back-pink',
        name: 'Ochi.design',
        description: 'Recreated Ochi.design, a visually striking and award-winning agency website known for its bold design language and interactive user experience.',
        link: 'https://animatedwebclone-ck0lmj8z2-ruthwiks-projects-508a1179.vercel.app/',
    },
    {
        iconUrl: thirtysixImg,
        theme: 'btn-back-black',
        name: 'ThirtySixStudio',
        description: 'Recreated ThirtySixStudio, an award-winning portfolio website crafted to highlight creative work and services with a clean, modern aesthetic.',
        link: 'https://thirtysixstudio-main-bwhb498sl-ruthwiks-projects-508a1179.vercel.app/',
    },
    {
        iconUrl: chessImg,
        theme: 'btn-back-yellow',
        name: 'ChessGame - Backend Project',
        description: 'A real-time multiplayer chess platform that allows players to create custom game rooms and challenge opponents from anywhere in the world.',
        link: 'https://chess-be-mwln.onrender.com',
    }
];