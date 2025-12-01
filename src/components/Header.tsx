import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-b border-foreground/10">
      <div className="container mx-auto max-w-7xl px-8 py-6 flex justify-items-end">
      <Link href="/info" className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
          INFO
        </Link>
      </div>
      <div className="container mx-auto max-w-7xl px-8 py-6 flex justify-center">
        <Link href="/" className="header-font text-9xl uppercase hover:opacity-70 transition-opacity">
          BXRS.ART
        </Link>
      </div>
    </header>
  );
}
