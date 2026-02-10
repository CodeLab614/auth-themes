export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background p-4 font-sans">
      {/* Diagonal stripes background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--foreground) 0, var(--foreground) 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="relative z-10 w-full max-w-sm">{children}</div>
    </div>
  );
}
