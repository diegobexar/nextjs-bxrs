export default function Loading() {
  return (
    <div className="container mx-auto min-h-screen max-w-3xl p-8">
      <div className="animate-pulse">
        <div className="h-10 bg-foreground/10 rounded w-32 mb-8" />
        <div className="flex flex-col gap-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-6 bg-foreground/10 rounded w-3/4" />
              <div className="h-4 bg-foreground/10 rounded w-32" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
