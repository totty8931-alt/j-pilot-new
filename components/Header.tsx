import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black text-red-700">
          J-Pilot
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/spots">Spots</Link>
          <Link href="/restaurants">Restaurants</Link>
          <Link href="/manners">Manners</Link>
          <Link href="/transport">Transport</Link>
          <Link href="/souvenirs">Souvenirs</Link>
          <Link href="/emergency">Emergency</Link>
        </nav>

        <Link
          href="/chat"
          className="rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
        >
          AI Chat
        </Link>
      </div>
    </header>
  );
}