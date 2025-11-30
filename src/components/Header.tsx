import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-b border-foreground/10">
      <div className="container mx-auto max-w-7xl px-8 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold uppercase hover:opacity-70 transition-opacity">
          BXRS
        </Link>
        <Link href="/info" className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
          INFO
        </Link>
      </div>
    </header>
  );
}
