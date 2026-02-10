"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-5 shrink-0 border-2 border-foreground bg-background shadow-[2px_2px_0_0] shadow-foreground transition-all outline-none",
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        "focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current"
      >
        <CheckIcon className="size-3.5 stroke-[3]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
