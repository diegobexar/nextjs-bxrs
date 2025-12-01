export default function Loading() {
  return (
    <div className="container mx-auto min-h-screen max-w-7xl p-8 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-foreground/20 border-t-foreground rounded-full animate-spin" />
        <p className="text-sm uppercase tracking-wider text-foreground/60">Loading...</p>
      </div>
    </div>
  );
}
