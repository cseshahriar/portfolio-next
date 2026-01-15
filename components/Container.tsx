interface Props {
    children: React.ReactNode,
    className?: string
}

import { cn } from "@/lib/utils"

const Container = ({children, className}: Props) => {
    return (
        <div className={cn("max-w-6xl mx-auto px-4", className)}>
            {children}
        </div>
    )
}

export default Container