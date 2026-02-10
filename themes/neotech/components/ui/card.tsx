import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "relative bg-card/80 backdrop-blur-sm rounded-none p-8 md:p-10",
        className
      )}
      {...props}
    >
      {/* Corner brackets */}
      <span className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute top-0 left-0 h-4 w-4 border-t border-l border-primary/30" />
        <span className="absolute top-0 right-0 h-4 w-4 border-t border-r border-primary/30" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-primary/30" />
        <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-primary/30" />
      </span>
      {props.children}
    </div>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("mb-8 flex flex-col items-center text-center", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-xl font-semibold tracking-wide text-foreground",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "mt-1 text-sm tracking-wide text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "mt-6 text-center text-xs tracking-wide text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
