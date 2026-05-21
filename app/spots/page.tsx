import Link from "next/link";

const spots = [
  {
    name: "Senso-ji Temple",
    area: "Asakusa",
    category: "Temple / Culture",
    description:
      "One of Tokyo's most famous temples. Great for first-time visitors who want to experience traditional Japan.",
    time: "1-2 hours",
    price: "Free",
    rating: "★★★★★",
    emoji: "🏯",
  },
  {
    name: "Shibuya Crossing",
    area: "Shibuya",
    category: "City / Photo Spot",
    description:
      "A world-famous crossing and one of the most iconic places in modern Tokyo.",
    time: "30-60 min",
    price: "Free",
    rating: "★★★★☆",
    emoji: "🚦",
  },
  {
    name: "Tokyo Tower",
    area: "Minato",
    category: "Landmark / Night View",
    description:
      "A classic Tokyo landmark with beautiful views, especially in the evening.",
    time: "1-2 hours",
    price: "Paid",
    rating: "★★★★☆",
    emoji: "🗼",
  },
  {
    name: "Meiji Shrine",
    area: "Harajuku",
    category: "Shrine / Nature",
    description:
      "A peaceful shrine surrounded by forest near Harajuku and Yoyogi Park.",
    time: "1-2 hours",
    price: "Free",
    rating: "★★★★★",
    emoji: "⛩️",
  },
  {
    name: "Ueno Park",
    area: "Ueno",
    category: "Park / Museum",
    description:
      "A large park with museums, a zoo, cherry blossoms, and many cultural attractions.",
    time: "2-4 hours",
    price: "Free / Paid",
    rating: "★★★★☆",
    emoji: "🌸",
  },
  {
    name: "Akihabara",
    area: "Akihabara",
    category: "Anime / Shopping",
    description:
      "A popular area for anime, manga, games, electronics, and pop culture.",
    time: "2-3 hours",
    price: "Free",
    rating: "★★★★☆",
    emoji: "🎮",
  },
];

export default function SpotsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-slate-900">
      <header className="border-b border-red-100 bg-[#FAF7F0]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-700 font-bold text-white">
              J
            </div>
            <span className="text-xl font-bold">J-Pilot</span>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-bold text-red-800"
          >
            Back Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-red-700">
          Tourist Spots
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Popular places in Tokyo
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Find beginner-friendly tourist spots in Tokyo. Each place includes
          area, category, estimated time, price, and helpful travel information.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {spots.map((spot) => (
            <article
              key={spot.name}
              className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-4xl">{spot.emoji}</div>

              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black text-slate-950">
                    {spot.name}
                  </h2>
                  <p className="mt-1 text-sm font-bold text-red-700">
                    {spot.area}
                  </p>
                </div>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                  Tokyo
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                {spot.category}
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {spot.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="font-bold text-slate-900">Time</p>
                  <p className="mt-1 text-slate-500">{spot.time}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="font-bold text-slate-900">Price</p>
                  <p className="mt-1 text-slate-500">{spot.price}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-sm font-bold text-slate-700">
                  {spot.rating}
                </span>

                <button className="rounded-full bg-red-700 px-4 py-2 text-sm font-bold text-white">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}