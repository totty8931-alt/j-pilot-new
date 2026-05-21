import Link from "next/link";

const emergencyItems = [
  {
    title: "Police",
    category: "Crime / Trouble",
    emoji: "👮",
    number: "110",
    description:
      "Call 110 if you are involved in a crime, accident, theft, or urgent trouble.",
    phrases: [
      "Please call the police.",
      "I lost my wallet.",
      "I need help.",
    ],
  },
  {
    title: "Ambulance / Fire",
    category: "Medical / Fire",
    emoji: "🚑",
    number: "119",
    description:
      "Call 119 for an ambulance, fire, or serious medical emergency.",
    phrases: [
      "Please call an ambulance.",
      "I feel sick.",
      "There is a fire.",
    ],
  },
  {
    title: "Lost Items",
    category: "Lost and Found",
    emoji: "🎒",
    number: "Station / Police Box",
    description:
      "If you lose something, ask station staff or visit a nearby police box called Koban.",
    phrases: [
      "I lost my bag.",
      "Where is the lost and found?",
      "Can you help me find it?",
    ],
  },
  {
    title: "Earthquake",
    category: "Disaster",
    emoji: "🌏",
    number: "Follow local guidance",
    description:
      "If an earthquake occurs, protect your head, stay away from glass, and follow official instructions.",
    phrases: [
      "Where is the evacuation area?",
      "Is it safe here?",
      "I need information in English.",
    ],
  },
  {
    title: "Hospital",
    category: "Medical",
    emoji: "🏥",
    number: "Ask hotel / local staff",
    description:
      "For non-emergency medical issues, ask hotel staff or local information centers for nearby clinics.",
    phrases: [
      "I want to see a doctor.",
      "Do you speak English?",
      "Where is the nearest hospital?",
    ],
  },
  {
    title: "Embassy Support",
    category: "Passport / Legal",
    emoji: "🏛️",
    number: "Contact your embassy",
    description:
      "If you lose your passport or face serious legal trouble, contact your country's embassy or consulate.",
    phrases: [
      "I lost my passport.",
      "Where is my embassy?",
      "I need consular support.",
    ],
  },
];

export default function EmergencyPage() {
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
          Emergency
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Get help when you need it
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Quick emergency information for international visitors in Japan,
          including police, ambulance, lost items, earthquakes, hospitals, and
          embassy support.
        </p>

        <div className="mt-8 rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-red-700">
            Important numbers
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-red-50 p-4">
              <p className="text-sm font-bold text-slate-500">Police</p>
              <p className="mt-1 text-3xl font-black text-red-700">110</p>
            </div>

            <div className="rounded-2xl bg-red-50 p-4">
              <p className="text-sm font-bold text-slate-500">
                Ambulance / Fire
              </p>
              <p className="mt-1 text-3xl font-black text-red-700">119</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {emergencyItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-4xl">{item.emoji}</div>

              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black text-slate-950">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-sm font-bold text-red-700">
                    {item.category}
                  </p>
                </div>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                  Help
                </span>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Contact
                </p>
                <p className="mt-1 text-lg font-black text-slate-900">
                  {item.number}
                </p>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              <div className="mt-5 rounded-2xl bg-red-50 p-4">
                <p className="mb-2 text-sm font-black text-red-700">
                  Useful phrases
                </p>

                <ul className="space-y-1 text-sm leading-6 text-slate-700">
                  {item.phrases.map((phrase) => (
                    <li key={phrase}>・{phrase}</li>
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