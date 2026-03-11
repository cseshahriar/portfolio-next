import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full rounded-md border border-white/10 focus:border-lightSky font-medium bg-bodyColor px-4 py-2 text-base placeholder:text-white/40 placeholder:text-sm outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Input }
