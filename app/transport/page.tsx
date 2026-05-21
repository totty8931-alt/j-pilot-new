import Link from "next/link";

const transportGuides = [
  {
    title: "IC Cards",
    category: "Payment",
    emoji: "💳",
    description:
      "IC cards such as Suica and PASMO are convenient for trains, buses, convenience stores, and vending machines.",
    points: [
      "Use it by tapping at ticket gates",
      "Charge it at stations or some convenience stores",
      "Useful for both trains and buses",
    ],
  },
  {
    title: "Train Transfers",
    category: "Train",
    emoji: "🚆",
    description:
      "Tokyo has many train lines. Check the line name, platform number, and destination before boarding.",
    points: [
      "Follow station signs and platform numbers",
      "Check the train direction before getting on",
      "Use transfer apps for route planning",
    ],
  },
  {
    title: "Airport Access",
    category: "Airport",
    emoji: "✈️",
    description:
      "Tokyo has two major airports: Haneda and Narita. Travel time and price depend on your destination.",
    points: [
      "Haneda is closer to central Tokyo",
      "Narita usually takes longer from central Tokyo",
      "Airport buses are useful with large luggage",
    ],
  },
  {
    title: "Taxis",
    category: "Car",
    emoji: "🚕",
    description:
      "Taxis are safe and convenient, especially late at night or when carrying heavy luggage.",
    points: [
      "Doors usually open automatically",
      "Show your destination address if needed",
      "Credit cards may be accepted, but check first",
    ],
  },
  {
    title: "Buses",
    category: "Bus",
    emoji: "🚌",
    description:
      "Buses are useful for places not directly connected by train. Payment methods differ by bus company.",
    points: [
      "Check whether to board from the front or rear",
      "Use IC cards when available",
      "Press the stop button before getting off",
    ],
  },
  {
    title: "Walking Routes",
    category: "Navigation",
    emoji: "🚶",
    description:
      "Many sightseeing areas in Tokyo are walkable. Walking is often the best way to discover local streets.",
    points: [
      "Use map apps for small streets",
      "Be careful at bicycle lanes",
      "Look for station exit numbers",
    ],
  },
];

export default function TransportPage() {
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
          Transport
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Move around Japan smoothly
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Learn simple transport tips for trains, IC cards, airport access,
          buses, taxis, and walking routes in Japan.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {transportGuides.map((guide) => (
            <article
              key={guide.title}
              className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-4xl">{guide.emoji}</div>

              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black text-slate-950">
                    {guide.title}
                  </h2>
                  <p className="mt-1 text-sm font-bold text-red-700">
                    {guide.category}
                  </p>
                </div>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                  Guide
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {guide.description}
              </p>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="mb-2 text-sm font-black text-slate-900">
                  Key Points
                </p>

                <ul className="space-y-1 text-sm leading-6 text-slate-700">
                  {guide.points.map((point) => (
                    <li key={point}>・{point}</li>
                  ))}
                </ul>
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