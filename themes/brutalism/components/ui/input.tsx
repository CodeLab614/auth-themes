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
          "placeholder:text-muted-foreground bg-background text-foreground h-10 w-full min-w-0 border-2 border-foreground px-3 py-1 text-sm font-medium tracking-wide shadow-[3px_3px_0_0] shadow-foreground outline-none transition-all",
          "focus-visible:shadow-[5px_5px_0_0] focus-visible:shadow-foreground focus-visible:-translate-x-[1px] focus-visible:-translate-y-[1px]",
          "disabled:pointer-events-none disabled:opacity-50",
          "aria-invalid:border-destructive aria-invalid:shadow-destructive",
          isPassword && "pr-10",
          className
        )}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
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
    </div>
  )
}

export { Input }
