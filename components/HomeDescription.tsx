"use client";

import { useTypeWriter } from '@/hooks/user-type-writer';
import {motion} from "motion/react";
import React from "react";

const HomeDescription = () => {
    const [hasLoaded, setHasLoaded] = React.useState(false);
    const description = " Senior Python & Django Developer | DRF API Expert | AWS & Linux Deployment | CI/CD with GitHub Actions I am a Full-Stack Web Developer with over 5 years of professional experience in building, deploying, and maintaining production-ready web applications. I specialize in backend-heavy systems with Django and DRF, while also having solid frontend experience.";
    const {displayedText, isComplete} = useTypeWriter(description, 30);

    React.useEffect(() => {
        setHasLoaded(true);
    }, []);

    return (
        <motion.p
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-auto font-normal leading-7 mb-6 min-h-32"
        >
            {
                hasLoaded ? (
                    displayedText.split("")
                    .map((char, index) => <motion.span
                        key={index}
                        initial={{ color: "rgb(156, 163 175)" }}
                        animate={{ color: isComplete ? "text-gray-500" : "rgb(156, 163 175)" }}
                        transition={{ duration: 0.5, delay: index * 0.03 }}
                    >
                        {char}
                    </motion.span>)
                ) : <span className="dark:text-white/60">{description}</span>
            }
        </motion.p>
    )
}

export default HomeDescription