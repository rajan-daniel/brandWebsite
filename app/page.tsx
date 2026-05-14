import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
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
        <h1 className="text-7xl font-bold text-white">
          Welcome to siteSprout
        </h1>
      </div>
    </main>
  );
}
