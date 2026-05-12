export function Footer() {
  return (
    <footer className="w-full border-t py-64 text-center text-sm text-white bg-[var(--text-color)]">
      <p>© {new Date().getFullYear()} SiteSprout. All rights reserved.</p>
    </footer>
  );
}