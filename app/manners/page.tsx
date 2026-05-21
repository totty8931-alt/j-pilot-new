import Link from "next/link";

const manners = [
  {
    title: "Train Manners",
    category: "Transport",
    emoji: "🚆",
    description:
      "Keep your voice low on trains. Avoid phone calls and make space for others during busy hours.",
    dos: ["Speak quietly", "Line up before boarding", "Give seats to those in need"],
    donts: ["Do not talk loudly", "Do not block doors", "Do not eat strong-smelling food"],
  },
  {
    title: "Trash Rules",
    category: "Daily Life",
    emoji: "🗑️",
    description:
      "Public trash cans are limited in Japan. Many people carry their trash until they find a proper bin.",
    dos: ["Carry a small bag for trash", "Separate bottles and cans", "Use bins at stations or stores"],
    donts: ["Do not litter", "Do not leave trash on tables", "Do not mix recyclable items carelessly"],
  },
  {
    title: "Restaurant Manners",
    category: "Food",
    emoji: "🍣",
    description:
      "In Japan, tipping is not required. Say thank you and follow each restaurant's ordering style.",
    dos: ["Say thank you", "Wait to be seated", "Use provided towels for hands"],
    donts: ["Do not tip", "Do not stay too long when crowded", "Do not bring outside food"],
  },
  {
    title: "Shrine and Temple Manners",
    category: "Culture",
    emoji: "⛩️",
    description:
      "Shrines and temples are cultural and religious places. Be respectful, quiet, and follow local signs.",
    dos: ["Walk calmly", "Take photos only where allowed", "Wash hands if purification area is open"],
    donts: ["Do not enter restricted areas", "Do not touch sacred objects", "Do not speak loudly"],
  },
  {
    title: "Onsen Manners",
    category: "Bath",
    emoji: "♨️",
    description:
      "Wash your body before entering the bath. Towels should not be placed inside the bath water.",
    dos: ["Wash before bathing", "Tie up long hair if needed", "Keep towels outside the bath"],
    donts: ["Do not wear swimsuits unless allowed", "Do not put towels in water", "Do not take photos"],
  },
  {
    title: "Escalator Manners",
    category: "Transport",
    emoji: "🧍",
    description:
      "Escalator standing sides may differ by area. In many places, people stand on one side and leave the other side open.",
    dos: ["Follow people around you", "Hold the handrail", "Stand safely"],
    donts: ["Do not rush", "Do not block others carelessly", "Do not carry large luggage unsafely"],
  },
];

export default function MannersPage() {
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
          Manners
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Japanese rules and manners
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Learn simple manners that help international visitors travel smoothly
          and respectfully in Japan.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {manners.map((manner) => (
            <article
              key={manner.title}
              className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-4xl">{manner.emoji}</div>

              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black text-slate-950">
                    {manner.title}
                  </h2>
                  <p className="mt-1 text-sm font-bold text-red-700">
                    {manner.category}
                  </p>
                </div>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                  Guide
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {manner.description}
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-green-50 p-4">
                  <p className="mb-2 text-sm font-black text-green-700">
                    Do
                  </p>
                  <ul className="space-y-1 text-sm leading-6 text-slate-700">
                    {manner.dos.map((item) => (
                      <li key={item}>・{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-red-50 p-4">
                  <p className="mb-2 text-sm font-black text-red-700">
                    Don&apos;t
                  </p>
                  <ul className="space-y-1 text-sm leading-6 text-slate-700">
                    {manner.donts.map((item) => (
                      <li key={item}>・{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}