"use client";
import { motion, AnimatePresence } from "framer-motion";
import Stairs from "./Stairs";
import { usePathname } from "next/navigation";

const StairTransition = () => {
    const pathname = usePathname();
    return (
        <div key={pathname}>
            <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                <Stairs />
            </div>
        </div>
    )
}

export default StairTransition