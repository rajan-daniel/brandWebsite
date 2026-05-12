import { about, features, metrics } from "@/data/data";

export default function About() {
  return (
    <div className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-black px-6 py-16 gap-12">
      <div className="w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden">
        <img src="/banner.webp" className="w-full object-cover" />
      </div>

      <div className="flex flex-col items-center text-center gap-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {about.name}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {about.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
              {feature.title}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-5xl text-center">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <h1 className="text-6xl md:text-7xl font-bold text-black dark:text-zinc-50">
              {metric.count}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm md:text-base text-[var(--accent-text)] max-w-xl">
        If you're a brand, company, or influencer looking to work with{" "}
        {about.name}, please reach out to{" "}
        <span className="font-medium">{about.email}</span>
      </p>
    </div>
  );
}
