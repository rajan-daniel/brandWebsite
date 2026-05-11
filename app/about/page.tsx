import { about, features, metrics } from "@/data/data";

export default function About() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <img src="/banner.webp"></img>
        <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          {about.name}
        </h1>
        <p>{about.description}</p>

        <div className="flex gap-60">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center flex-col">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">{feature.title}</h1>
                <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-60">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-center flex-col">
                <h1 className="max-w-xs text-8xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">{metric.count}</h1>
                <p className="text-3xl">{metric.description}</p>
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
}
