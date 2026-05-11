"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { about } from "@/data/data";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex items-center justify-center gap-12 h-22 font-bold text-[1rem] bg-[var(--accent-silver)] text-[var(--text-color)]">
        <div className="absolute left-8 flex items-center gap-2">
        <img className="h-8 w-8 object-contain" src="/logo.svg" alt="Logo" />
        <span className="text-xl">{about.name}</span>
      </div>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
      </nav>
    </>
  );
};
