"use client";
import { motion, AnimatePresence, delay } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const PageTransition = ({children, className}: Props) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            <div>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition:{
                            delay: 1,
                            duration: 0.4,
                            ease: "easeInOut"
                        }
                    }}
                    className="w-screen h-screen fixed bg-bodyColor pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition