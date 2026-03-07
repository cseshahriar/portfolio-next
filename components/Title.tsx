import { cn } from "@/lib/utils";

interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

const Title = ({children, className}: TitleProps) => {
    return (
        <h2 className={cn("text-xl font-bold text-lightSky mb-4", className)}>{children}</h2>
    )
}

export default Title