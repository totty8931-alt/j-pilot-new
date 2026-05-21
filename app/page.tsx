import Link from "next/link";

const categories = [
  {
    title: "Spots",
    description: "Famous places",
    emoji: "🏯",
    href: "/spots",
  },
  {
    title: "Food",
    description: "Restaurants",
    emoji: "🍣",
    href: "/restaurants",
  },
  {
    title: "Manners",
    description: "Rules & customs",
    emoji: "🙏",
    href: "/manners",
  },
  {
    title: "Transport",
    description: "Trains & access",
    emoji: "🚆",
    href: "/transport",
  },
  {
    title: "Souvenirs",
    description: "Gifts from Japan",
    emoji: "🎁",
    href: "/souvenirs",
  },
  {
    title: "Emergency",
    description: "Help & safety",
    emoji: "🚨",
    href: "/emergency",
  },
];

const popularSpots = [
  {
    name: "Senso-ji Temple",
    area: "Asakusa",
    type: "Culture",
    description: "Traditional temple, snacks, and souvenir streets.",
    emoji: "🏯",
  },
  {
    name: "Shibuya Crossing",
    area: "Shibuya",
    type: "Photo Spot",
    description: "One of Tokyo's most famous city views.",
    emoji: "🚦",
  },
  {
    name: "Tokyo Tower",
    area: "Minato",
    type: "Landmark",
    description: "Classic Tokyo landmark with beautiful night views.",
    emoji: "🗼",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] pb-24 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-red-100 bg-[#FAF7F0]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-700 font-black text-white">
              J
            </div>

            <div>
              <p className="text-xl font-black">J-Pilot</p>
              <p className="text-xs text-slate-500">Japan Travel Guide</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/chat"
              className="hidden rounded-full bg-red-700 px-4 py-2 text-sm font-bold text-white sm:block"
            >
              Ask AI
            </Link>

            <button className="rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-bold text-red-800">
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pt-8 md:pt-14">
        <div className="rounded-[2rem] bg-gradient-to-br from-red-700 via-red-800 to-slate-950 p-6 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-100">
                Japan Travel Assistant
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Explore Japan
                <span className="block text-red-100">with confidence.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-red-50 md:text-lg">
                Tourist spots, restaurants, manners, transport, souvenirs, and
                emergency help for international visitors.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/spots"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-black text-red-800"
                >
                  Explore Tokyo
                </Link>

                <Link
                  href="/chat"
                  className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-black text-white"
                >
                  Ask AI Concierge
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5">
              <p className="text-sm font-bold text-red-100">Today&apos;s plan</p>

              <h2 className="mt-3 text-2xl font-black">
                Asakusa Half-Day Trip
              </h2>

              <p className="mt-3 text-sm leading-6 text-red-50">
                Visit Senso-ji Temple, enjoy Nakamise Street, try traditional
                snacks, and buy Japanese souvenirs.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/15 p-4">
                  <p className="text-xs font-bold text-red-100">Best for</p>
                  <p className="mt-1 text-sm font-bold">First-time visitors</p>
                </div>

                <div className="rounded-2xl bg-white/15 p-4">
                  <p className="text-xs font-bold text-red-100">Time needed</p>
                  <p className="mt-1 text-sm font-bold">3 to 4 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6">
        <div className="rounded-3xl border border-red-100 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
            <span className="text-xl">🔎</span>
            <input
              type="text"
              placeholder="Search spots, food, manners..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-4">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-red-700">
          Menu
        </p>

        <h2 className="mt-1 text-2xl font-black">What do you need?</h2>

        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="rounded-3xl border border-red-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-2xl">
                {category.emoji}
              </div>

              <h3 className="mt-4 text-lg font-black text-slate-950">
                {category.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-slate-500">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-700">
                Popular
              </p>
              <h2 className="mt-1 text-2xl font-black">Popular in Tokyo</h2>
            </div>

            <Link
              href="/spots"
              className="rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-bold text-red-800"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {popularSpots.map((spot) => (
              <article
                key={spot.name}
                className="rounded-3xl bg-[#FAF7F0] p-5"
              >
                <div className="mb-4 text-4xl">{spot.emoji}</div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-black text-slate-950">
                      {spot.name}
                    </h3>

                    <p className="mt-1 text-sm font-bold text-red-700">
                      {spot.area}
                    </p>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-red-700">
                    {spot.type}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {spot.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-red-700">
            Quick Tips
          </p>

          <h2 className="mt-1 text-2xl font-black">Before you travel</h2>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold leading-6 text-slate-700">
              No tipping is required in Japan.
            </div>

            <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold leading-6 text-slate-700">
              Be quiet on trains.
            </div>

            <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold leading-6 text-slate-700">
              Carry your trash until you find a bin.
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}