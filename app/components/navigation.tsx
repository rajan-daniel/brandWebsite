"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <nav 
      className="flex items-center justify-center gap-12 h-22 font-bold text-[1rem] bg-[var(--accent-silver)] text-[var(--text-color)]"
      >
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
      </nav>
    </>
  );
};
