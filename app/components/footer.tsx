import { about, footer } from "@/data/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-[var(--text-color)] py-20 text-sm text-white">
      <div className="flex items-center justify-between px-8 font-bold text-[1rem] text-white">
        {/* Left side */}
        <div className="flex flex-col items-start gap-4 w-full max-w-md">
          <img
            className="h-20 w-20 object-contain brightness-0 invert"
            src="/logo.svg"
            alt="Logo"
          />

          <h1 className="text-2xl font-semibold text-white">
            {footer.emailLabel}
          </h1>

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white shadow-[0_0_30px_rgba(255,255,255,0.03)] backdrop-blur-xl placeholder:text-zinc-500 outline-none transition duration-300 focus:border-violet-400/40 focus:bg-white/[0.07] focus:ring-4 focus:ring-violet-500/10"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>

      <p className="mt-16 text-center">
        © {new Date().getFullYear()} SiteSprout · Open source under the MIT
        License
      </p>
    </footer>
  );
}
