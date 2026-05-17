import Image from "next/image";
import { about, home } from "@/data/data";

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover grayscale"
        >
          <source src="/home.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-7xl font-bold text-white">Welcome to </h1>
          <span className="text-7xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            {about.name}
          </span>
        </div>
      </section>
      <section className="relative z-10 bg-[var(--text-color)] pt-10 pb-10 pl-10 pr-10">
        <h1 className="text-7xl font-bold tracking-wider text-transparent [-webkit-text-stroke:2px_white]">
          {`${about.name}`}
        </h1>
        <h2 className="text-6xl font-bold text-white">
          {`${home.description}`}
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {home.instructions.map((item, index) => (
            <div
              key={index}
              className="p-[2px] rounded-xl bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500"
            >
              <div
                className="w-48 h-48 flex flex-col justify-center items-center text-center
                   rounded-xl bg-[var(--text-color)]
                   shadow-lg hover:scale-105 transition-transform duration-200"
              >
                <p className="text-white text-lg font-medium p-1">{item.step}</p>

                <span className="mt-3 text-sm text-white/60">
                  Step {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
