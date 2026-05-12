import { about, features, metrics } from "@/data/data";

export default function About() {
  return (
    <div className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-white px-6 py-16 gap-12">
      <div className="w-full max-w-6xl rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
        <div>
          <img src="/banner.webp" className="rounded-3xl overflow-hidden" />
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-6 max-w-2xl text-[var(--text-color)]">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight ">
          {about.name}
        </h1>
        <p className="leading-relaxed">{about.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <h1 className="text-2xl font-semibold text-[var(--text-color)]">
              {feature.title}
            </h1>
            <p className="text-[var(--text-color)]">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-6xl grid grid-cols-2 text-center">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-[var(--text-color)] leading-none">
              {metric.count}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-color)] leading-tight">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm md:text-base text-[var(--accent-text)] pb-8">
        If you're a brand, company, or influencer looking to work with{" "}
        {about.name}, please reach out to{" "}
        <span className="font-medium">{about.email}</span>
      </p>
    </div>
  );
}
