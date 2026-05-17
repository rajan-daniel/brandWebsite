import { privacyPolicy } from "@/data/data";

export default function Privacy() {
  return (
    <main className="flex-1">
      <div className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-white px-6 py-16 gap-12 ">
        {/* Header section (matches About style spacing/width) */}
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl text-[var(--text-color)]">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="leading-relaxed">
            This page explains how siteSprout handles data and privacy for all
            deployments using the template.
          </p>
        </div>

        {/* Policy sections */}
        <div className="w-full max-w-6xl flex flex-col gap-10 text-[var(--text-color)]">
          {privacyPolicy.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 text-center md:text-left"
            >
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {item.title}
              </h1>
              <p className="leading-relaxed text-base md:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
