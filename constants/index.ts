import projectOne from "@/images/ecommerce-project.png";
import projectTwo from "@/images/job-portal.png";

export const NavbarData = [
    {title: "Home", href: "/"},
    {title: "Services", href: "/services"},
    {title: "Resume", href: "/resume"},
    {title: "Portfolio", href: "/work"},
    {title: "Contact", href: "/contact"},
];

export const staticsData = [
    {title: "Years of Experience", value: 5},
    {title: "Projects Completed", value: 20},
    {title: "Code Commits", value: 14255},
    {title: "Happy Clients", value: 55},
];

export const servicesData = [
    {
        _id: "01",
        title: "Custom Website Development",
        description:"Building fast, modern, and scalable websites using Next.js and Tailwind CSS. Perfect for businesses, startups, and personal brands.",
        href: "#",
    },
    {
        _id: "02",
        title: "Full Stack Web Applications",
        description: "Developing powerful full-stack applications with modern technologies including Next.js, Node.js, APIs, and databases.",
        href: "#",
    },
    {
        _id: "03",
        title: "API Development & Integration",
        description: "Designing secure and scalable REST APIs and integrating third-party services like payment gateways, authentication systems, and external APIs.",
        href: "#",
    },
    {
        _id: "04",
        title: "UI/UX Implementation",
        description: "Transforming design concepts into responsive, pixel-perfect interfaces using Tailwind CSS and modern frontend frameworks.",
        href: "#",
    },
    {
        _id: "05",
        title: "Performance Optimization",
        description: "Improving website speed, SEO performance, and user experience through optimization and best coding practices.",
        href: "#",
    },
    {
        _id: "06",
        title: "Deployment & Cloud Setup",
        description: "Deploying applications to platforms like Vercel, VPS, or cloud environments with CI/CD and performance monitoring.",
        href: "#",
    },
];

export const tabContent = {
    experience: {
        title: "Professional Experience",
        items: [
            {
                role: "Js. Software Developer",
                company: "Tiger Park Ltd",
                period: "Mar, 2020 - Jan, 2022",
                description: "Senior Python & Django Developer with strong expertise in building secure, scalable, and production-grade backend applications. Experienced in designing and developing RESTful APIs using Django Rest Framework (DRF), implementing authentication, authorization, and role-based access control. Proficient in database design and optimization using PostgreSQL and MySQL, integrating third-party APIs, and managing source code with Git. Hands-on experience deploying applications on Linux servers using Nginx, uWSGI, and Gunicorn, as well as managing cloud infrastructure on AWS. Skilled in setting up CI/CD pipelines using GitHub Actions to automate testing, build, and deployment workflows. Strong problem solver with proven ability to debug production issues, optimize performance, and maintain clean, scalable, and maintainable codebases.",
                highlights: ["HTML", "CSS", "JavaScript", "Python", "Django", "DRF", "PostgreSQL"]
            },
            {
                role: "Software Developer",
                company: "Tiger Park Ltd",
                period: "Mar, 2022 - Jan, 2026",
                description: "Senior Python & Django Developer with strong expertise in building secure, scalable, and production-grade backend applications. Experienced in designing and developing RESTful APIs using Django Rest Framework (DRF), implementing authentication, authorization, and role-based access control. Proficient in database design and optimization using PostgreSQL and MySQL, integrating third-party APIs, and managing source code with Git. Hands-on experience deploying applications on Linux servers using Nginx, uWSGI, and Gunicorn, as well as managing cloud infrastructure on AWS. Skilled in setting up CI/CD pipelines using GitHub Actions to automate testing, build, and deployment workflows. Strong problem solver with proven ability to debug production issues, optimize performance, and maintain clean, scalable, and maintainable codebases.",
                highlights: ["Python", "Django", "DRF", "PostgreSQL", "Celery", "Debugging", "Payment Gateway API Integration", "AWS", "Linux", "Manual Deployment", "CICD"]
            },
        ]
    },
    education: {
        title: "Educational Background",
        items: [
            {
                degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
                institute: "Manarat International University",
                period: "2021 - 2025",
                description: "Foundation in computer science principles, data structures and algorithms.",
                achievements: ["3.33 CGPA"]
            },
            {
                degree: "Diploma in Computer Technology",
                institute: "Saic Institute of Management & Technology (SIMT)",
                period: "2013 - 2017",
                description: "Foundation in computer science principles, data structures and algorithms.",
                achievements: ["3.59 CGPA"]
            },

        ]
    },
    skills: {
        title: "Technical Skills",
        categories: [
            {
                name: "Frontend Development",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
            },
            {
                name: "Backend Development",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                skills: ["Python", "Django", "DRF", "FastAPI", "Background Task", "Cronjob", "Payment Gateway, SMS, Email API Integration"]
            },
            {
                name: "Database",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                skills: ["MySQL", "PostgreSQL"]
            },
            {
                name: "Server",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                skills: ["Docker", "AWS", "Linux", "CICD", "Nginx", "UWSGI"]
            },
            {
                name: "Tools",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                skills: ["Git", "Github", "Vscode"]
            },
            {
                name: "AI",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                skills: ["Deepseek", "Claude", "Chatgpt", "Copilot"]
            },
        ]
    },
    about: {
        title: "About Me",
        bio: "Senior Python & Django Developer | DRF API Expert | AWS & Linux Deployment | CI/CD with GitHub Actions I am a Full-Stack Web Developer with over 5 years of professional experience in building, deploying, and maintaining production-ready web applications. I specialize in backend-heavy systems with Django and DRF, while also having solid frontend experience.",
        interests: [
            "Open Source Contributing",
            "Tech Blogging",
            "Learning",
        ],
        languages: ["Bangla", "English"]
    }
};

export const projects = [
    {
        id: "01",
        title: "E-commerce Platform",
        category: "Full Stack",
        description: "A production-ready full-stack e-commerce application built using Python, Django, and Django REST Framework (DRF), designed with scalability, performance, and real-world business requirements in mind. The system supports product variants, guest checkout, and direct checkout flows, closely mirroring modern e-commerce platforms",
        stacks: ["Next.js", "Tailwind CSS", "Strapi", "PostgreSQL"],
        image: projectOne,
        liveUrl: "https://github.com/cseshahriar/emart",
        githubUrl: "https://github.com/cseshahriar/emart"
    },
    {
        id: "02",
        title: "Job Portal Platform",
        category: "Full Stack",
        description: "A full-stack job portal web application that connects job seekers and employers on a single platform. Users can register, browse job listings, and apply for positions, while recruiters can post and manage job openings. The system includes authentication, role-based access, and an admin panel for managing users, jobs, and overall platform activity, ensuring a smooth and efficient recruitment process.",
        stacks: ["Next.js", "Tailwind CSS", "Strapi", "PostgreSQL"],
        image: projectTwo,
        liveUrl: "https://github.com/cseshahriar/jobs-portal",
        githubUrl: "https://github.com/cseshahriar/jobs-portal"
    },
];