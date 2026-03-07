import { useEffect, useState } from "react";

export function useTypeWriter(text: string, speed:number=50) {
    const [displayedText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if(i < text.length) {
                setDisplayText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
                setIsComplete(true);
            }
        }, speed);
        return () => clearInterval(timer);
    }, [speed, text]);

    return { displayedText, isComplete };
}