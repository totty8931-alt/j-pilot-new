import Link from "next/link";

const souvenirs = [
  {
    name: "Tokyo Banana",
    category: "Sweets",
    emoji: "🍌",
    description:
      "A famous Tokyo sweet with banana-flavored cream. Popular as a gift for family and friends.",
    bestPlace: "Tokyo Station / Airports",
    price: "¥¥",
    goodFor: "Family / Friends",
  },
  {
    name: "Matcha Sweets",
    category: "Sweets / Tea",
    emoji: "🍵",
    description:
      "Green tea flavored snacks such as cookies, chocolate, and cakes. A classic Japanese souvenir.",
    bestPlace: "Department stores / Airports",
    price: "¥¥",
    goodFor: "Friends / Coworkers",
  },
  {
    name: "Japanese Chopsticks",
    category: "Traditional Goods",
    emoji: "🥢",
    description:
      "Light, useful, and easy to carry. Chopsticks are a popular traditional Japanese gift.",
    bestPlace: "Asakusa / Souvenir shops",
    price: "¥",
    goodFor: "Family / Personal use",
  },
  {
    name: "Anime Goods",
    category: "Pop Culture",
    emoji: "🎮",
    description:
      "Character goods, figures, keychains, and manga-related items are popular for anime fans.",
    bestPlace: "Akihabara / Ikebukuro",
    price: "¥¥¥",
    goodFor: "Anime fans",
  },
  {
    name: "Japanese Stationery",
    category: "Lifestyle",
    emoji: "✏️",
    description:
      "High-quality pens, notebooks, stickers, and washi tape. Small and easy to pack.",
    bestPlace: "Loft / Hands / Stationery stores",
    price: "¥",
    goodFor: "Students / Coworkers",
  },
  {
    name: "Regional Snacks",
    category: "Food",
    emoji: "🍘",
    description:
      "Local snacks from different parts of Japan. Great for sharing after your trip.",
    bestPlace: "Train stations / Airports",
    price: "¥¥",
    goodFor: "Coworkers / Groups",
  },
];

export default function SouvenirsPage() {
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
          Souvenirs
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Find the perfect Japanese gift
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Discover popular souvenirs from Japan, including sweets, traditional
          goods, anime items, stationery, and regional snacks.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {souvenirs.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-4xl">{item.emoji}</div>

              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black text-slate-950">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-sm font-bold text-red-700">
                    {item.category}
                  </p>
                </div>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                  {item.price}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              <div className="mt-5 space-y-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                    Best place to buy
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-700">
                    {item.bestPlace}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                    Good for
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-700">
                    {item.goodFor}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <button className="w-full rounded-full bg-red-700 px-4 py-2 text-sm font-bold text-white">
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
