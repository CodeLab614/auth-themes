export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background font-sans">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Corner accents on the viewport */}
      <div className="pointer-events-none absolute inset-4">
        <span className="absolute top-0 left-0 h-8 w-8 border-t border-l border-primary/20" />
        <span className="absolute top-0 right-0 h-8 w-8 border-t border-r border-primary/20" />
        <span className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-primary/20" />
        <span className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/20" />
      </div>

      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">{children}</div>
    </div>
  );
}
