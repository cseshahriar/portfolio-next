import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full rounded-md border border-text-color/10 focus:border-lightSky font-medium bg-color px-4 py-2 text-base placeholder:text-color/40 placeholder:text-sm outline-none resize-none",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
