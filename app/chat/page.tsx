import Link from "next/link";

const exampleQuestions = [
  "Where should I go in Tokyo for the first time?",
  "I want sushi near Shibuya.",
  "How do I use Suica or PASMO?",
  "What manners should I know on trains?",
  "What should I do if I lose my wallet?",
  "What souvenirs should I buy at Tokyo Station?",
];

const chatMessages = [
  {
    role: "assistant",
    text: "Hi! I am J-Pilot AI Concierge. Ask me anything about traveling in Japan.",
  },
  {
    role: "user",
    text: "I want to visit a traditional place in Tokyo.",
  },
  {
    role: "assistant",
    text: "I recommend Asakusa and Senso-ji Temple. You can enjoy traditional streets, snacks, and souvenir shops around Nakamise Street.",
  },
];

export default function ChatPage() {
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
          AI Concierge
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Ask J-Pilot anything
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Get travel help for tourist spots, restaurants, manners,
          transportation, souvenirs, and emergencies in Japan.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 lg:grid-cols-[1fr_360px]">
        <div className="rounded-3xl border border-red-100 bg-white p-5 shadow-sm">
          <div className="mb-5 rounded-2xl bg-gradient-to-br from-red-700 to-slate-900 p-5 text-white">
            <p className="text-sm opacity-80">J-Pilot Assistant</p>
            <h2 className="mt-2 text-2xl font-black">
              Your Japan travel helper
            </h2>
            <p className="mt-3 text-sm leading-6 opacity-90">
              This is a prototype chat screen. AI connection will be added in a
              later step.
            </p>
          </div>

          <div className="space-y-4">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    message.role === "user"
                      ? "max-w-[80%] rounded-3xl rounded-br-sm bg-red-700 px-5 py-4 text-sm leading-6 text-white"
                      : "max-w-[80%] rounded-3xl rounded-bl-sm bg-slate-100 px-5 py-4 text-sm leading-6 text-slate-700"
                  }
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Ask about Japan travel..."
                className="min-h-12 flex-1 rounded-full border border-slate-200 bg-white px-5 text-sm outline-none focus:border-red-300"
              />

              <button className="rounded-full bg-red-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-800">
                Send
              </button>
            </div>

            <p className="mt-3 px-2 text-xs leading-5 text-slate-500">
              Prototype only: messages are not sent yet. AI connection will be
              added later.
            </p>
          </div>
        </div>

        <aside className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">
            Try asking
          </p>

          <h2 className="mt-2 text-2xl font-black">Example questions</h2>

          <div className="mt-5 space-y-3">
            {exampleQuestions.map((question) => (
              <button
                key={question}
                className="w-full rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-left text-sm font-bold leading-6 text-slate-700 transition hover:bg-red-100"
              >
                {question}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-black text-slate-900">
              Future features
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              <li>・Real AI responses</li>
              <li>・Restaurant recommendations</li>
              <li>・Route guidance</li>
              <li>・Multilingual support</li>
              <li>・Emergency assistance</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
