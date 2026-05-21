import Link from "next/link";

const restaurants = [
  {
    name: "Sushi Tokyo",
    area: "Shibuya",
    category: "Sushi",
    description:
      "A beginner-friendly sushi restaurant with an English menu and counter seats.",
    price: "¥¥¥",
    englishMenu: true,
    vegetarian: false,
    halal: false,
    reservation: "Recommended",
    emoji: "🍣",
  },
  {
    name: "Ramen Sakura",
    area: "Shinjuku",
    category: "Ramen",
    description:
      "Popular ramen shop with simple ordering and tourist-friendly service.",
    price: "¥¥",
    englishMenu: true,
    vegetarian: false,
    halal: false,
    reservation: "Not needed",
    emoji: "🍜",
  },
  {
    name: "Tokyo Vegan Kitchen",
    area: "Harajuku",
    category: "Vegan / Vegetarian",
    description:
      "Vegetarian and vegan-friendly restaurant near Harajuku and Meiji Shrine.",
    price: "¥¥",
    englishMenu: true,
    vegetarian: true,
    halal: false,
    reservation: "Recommended",
    emoji: "🥗",
  },
  {
    name: "Halal Wagyu Dining",
    area: "Asakusa",
    category: "Halal / Japanese Beef",
    description:
      "Halal-friendly Japanese dining experience for international visitors.",
    price: "¥¥¥¥",
    englishMenu: true,
    vegetarian: false,
    halal: true,
    reservation: "Required",
    emoji: "🥩",
  },
  {
    name: "Tempura Ichiban",
    area: "Ginza",
    category: "Tempura",
    description:
      "Crispy tempura restaurant with a calm atmosphere and English guidance.",
    price: "¥¥¥",
    englishMenu: true,
    vegetarian: true,
    halal: false,
    reservation: "Recommended",
    emoji: "🍤",
  },
  {
    name: "Cafe Matcha House",
    area: "Ueno",
    category: "Cafe / Sweets",
    description:
      "A relaxing cafe serving matcha drinks, Japanese sweets, and light meals.",
    price: "¥¥",
    englishMenu: true,
    vegetarian: true,
    halal: false,
    reservation: "Not needed",
    emoji: "🍵",
  },
];

export default function RestaurantsPage() {
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
          Restaurants
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Foreigner-friendly restaurants in Tokyo
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Find restaurants that are easier for international visitors to use,
          including English menu support, vegetarian options, halal-friendly
          choices, and reservation guidance.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <article
              key={restaurant.name}
              className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-4xl">{restaurant.emoji}</div>

              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black text-slate-950">
                    {restaurant.name}
                  </h2>
                  <p className="mt-1 text-sm font-bold text-red-700">
                    {restaurant.area}
                  </p>
                </div>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                  {restaurant.price}
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                {restaurant.category}
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {restaurant.description}
              </p>

              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                  <span className="font-bold text-slate-900">English Menu</span>
                  <span className="font-bold text-red-700">
                    {restaurant.englishMenu ? "Available" : "No"}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                  <span className="font-bold text-slate-900">Vegetarian</span>
                  <span className="font-bold text-red-700">
                    {restaurant.vegetarian ? "Available" : "Limited"}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                  <span className="font-bold text-slate-900">Halal</span>
                  <span className="font-bold text-red-700">
                    {restaurant.halal ? "Available" : "No"}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                    Reservation
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    {restaurant.reservation}
                  </p>
                </div>

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