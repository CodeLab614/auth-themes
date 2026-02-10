import * as React from "react"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState(false)
  const isPassword = type === "password"

  return (
    <div className="group relative">
      <input
        type={isPassword && showPassword ? "text" : type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-primary/5 text-foreground h-10 w-full min-w-0 rounded-none border-none px-3 py-1 text-base tracking-wide shadow-none transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 md:text-sm",
          "focus-visible:bg-primary/10 focus-visible:ring-0",
          "aria-invalid:ring-destructive/20",
          isPassword && "pr-10",
          className
        )}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors duration-200 hover:text-primary"
          tabIndex={-1}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="size-4" />
          ) : (
            <Eye className="size-4" />
          )}
        </button>
      )}
      <span className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute top-0 left-0 h-2.5 w-2.5 border-t border-l border-primary/50 transition-all duration-300 group-focus-within:h-3 group-focus-within:w-3 group-focus-within:border-primary group-focus-within:opacity-100" />
        <span className="absolute top-0 right-0 h-2.5 w-2.5 border-t border-r border-primary/50 transition-all duration-300 group-focus-within:h-3 group-focus-within:w-3 group-focus-within:border-primary group-focus-within:opacity-100" />
        <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-primary/50 transition-all duration-300 group-focus-within:h-3 group-focus-within:w-3 group-focus-within:border-primary group-focus-within:opacity-100" />
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-primary/50 transition-all duration-300 group-focus-within:h-3 group-focus-within:w-3 group-focus-within:border-primary group-focus-within:opacity-100" />
      </span>
    </div>
  )
}

export { Input }
