import { about, footer } from "@/data/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-[var(--text-color)] py-20 text-sm text-white">
      <div className="flex w-full px-8 gap-10 justify-between">
        {/* 1. Email section */}
        <div className="flex flex-col gap-4 flex-[2] max-w-xl">
          <img
            className="h-20 w-20 object-contain brightness-0 invert"
            src="/logo.svg"
            alt="Logo"
          />

          <h1 className="text-2xl font-bold text-white">
            {footer.emailLabel}
          </h1>

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white shadow-[0_0_30px_rgba(255,255,255,0.03)] backdrop-blur-xl placeholder:text-zinc-500 outline-none transition duration-300 hover:bg-white/[0.06] hover:border-violet-400/30 focus:border-violet-400/40 focus:bg-white/[0.07] focus:ring-4 focus:ring-violet-500/10"
          />
        </div>

        {/* 2. Nav */}
        <nav className="flex flex-col gap-4 flex-1 items-start">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* 3. Nav (duplicate column) */}
        <nav className="flex flex-col gap-4 flex-1 items-start">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* 4. About */}
        <div className="flex flex-col gap-2 flex-1 max-w-xs">
          <h1 className="font-bold">About</h1>
          <p className="leading-relaxed">{about.description}</p>
        </div>
      </div>
    </footer>
  );
}
