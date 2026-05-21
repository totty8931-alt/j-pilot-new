"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: "🏠",
  },
  {
    label: "Spots",
    href: "/spots",
    icon: "🏯",
  },
  {
    label: "Food",
    href: "/restaurants",
    icon: "🍣",
  },
  {
    label: "Move",
    href: "/transport",
    icon: "🚆",
  },
  {
    label: "AI",
    href: "/chat",
    icon: "💬",
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-red-100 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5 px-2 py-2 text-center text-xs font-bold">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive
                  ? "rounded-2xl px-2 py-2 text-red-700"
                  : "rounded-2xl px-2 py-2 text-slate-500"
              }
            >
              <div className="text-xl">{item.icon}</div>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}