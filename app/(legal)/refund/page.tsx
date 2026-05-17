import { refundPolicy } from "@/data/data";

export default function RefundPage() {
  return (
    <main className="flex-1">
      <div className="flex flex-col items-center bg-zinc-50 font-sans px-6 py-16 gap-12 text-[var(--text-color)]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Refund Policy
          </h1>
          <p className="leading-relaxed">
            This is a sample refund policy for SiteSprout. Replace this content with your own rules for refunds, eligibility, and support.
          </p>
        </div>

        {/* Sections */}
        <div className="w-full max-w-6xl flex flex-col gap-10">
          {refundPolicy.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 text-center md:text-left"
            >
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {item.title}
              </h2>
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