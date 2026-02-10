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
        "peer group/checkbox relative size-4 shrink-0 border border-primary/30 bg-primary/5 transition-all duration-200 outline-none",
        "data-[state=checked]:border-primary/60 data-[state=checked]:bg-primary/20 data-[state=checked]:text-primary",
        "focus-visible:ring-1 focus-visible:ring-primary/50",
        "disabled:cursor-not-allowed disabled:opacity-40",
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current"
      >
        <CheckIcon className="size-3" />
      </CheckboxPrimitive.Indicator>
      {/* Corner brackets */}
      <span className="pointer-events-none absolute -inset-0.5" aria-hidden="true">
        <span className="absolute top-0 left-0 h-1 w-1 border-t border-l border-primary/40 transition-all duration-200 group-data-[state=checked]/checkbox:border-primary/80" />
        <span className="absolute top-0 right-0 h-1 w-1 border-t border-r border-primary/40 transition-all duration-200 group-data-[state=checked]/checkbox:border-primary/80" />
        <span className="absolute bottom-0 left-0 h-1 w-1 border-b border-l border-primary/40 transition-all duration-200 group-data-[state=checked]/checkbox:border-primary/80" />
        <span className="absolute bottom-0 right-0 h-1 w-1 border-b border-r border-primary/40 transition-all duration-200 group-data-[state=checked]/checkbox:border-primary/80" />
      </span>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
