import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const bgVariants: Record<string, string> = {
  default: "bg-primary/10 group-hover:bg-primary/20",
  destructive: "bg-destructive/10 group-hover:bg-destructive/20",
  outline: "border border-border/30 bg-transparent",
  secondary: "bg-secondary group-hover:bg-secondary/80",
  ghost: "group-hover:bg-foreground/5",
  link: "hidden",
}

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium tracking-wide transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-1 focus-visible:ring-primary/50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "text-primary",
        destructive: "text-destructive",
        outline: "text-foreground hover:text-primary",
        secondary: "text-secondary-foreground",
        ghost: "text-muted-foreground hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 px-8 has-[>svg]:px-5",
        icon: "size-10",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"
  const showDecorations = !asChild && variant !== "link"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {showDecorations && (
        <>
          <span
            className={cn(
              "pointer-events-none absolute inset-0 -z-10 rounded-none transition-all duration-200",
              bgVariants[variant || "default"]
            )}
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <span className="absolute top-0 left-0 h-2.5 w-2.5 border-t border-l border-current opacity-50 transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:opacity-100" />
            <span className="absolute top-0 right-0 h-2.5 w-2.5 border-t border-r border-current opacity-50 transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:opacity-100" />
            <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-current opacity-50 transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:opacity-100" />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-current opacity-50 transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:opacity-100" />
          </span>
        </>
      )}
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
