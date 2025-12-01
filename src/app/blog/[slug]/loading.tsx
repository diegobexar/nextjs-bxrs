export default function Loading() {
  return (
    <div className="container mx-auto min-h-screen max-w-3xl p-8">
      <div className="animate-pulse">
        <div className="h-4 bg-foreground/10 rounded w-32 mb-8" />
        <div className="aspect-video bg-foreground/10 rounded-xl mb-4" />
        <div className="h-10 bg-foreground/10 rounded w-full mb-8" />
        <div className="space-y-3">
          <div className="h-4 bg-foreground/10 rounded w-full" />
          <div className="h-4 bg-foreground/10 rounded w-full" />
          <div className="h-4 bg-foreground/10 rounded w-3/4" />
        </div>
      </div>
    </div>
  );
}
