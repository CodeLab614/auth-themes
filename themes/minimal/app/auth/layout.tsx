export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {children}
    </div>
  )
}