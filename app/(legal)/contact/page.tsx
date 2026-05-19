import { contact, legalDescriptions } from "@/data/data";

export default function Contact() {
  return (
    <main className="flex-1">
      <div className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-white px-6 py-16 gap-12 ">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl text-[var(--text-color)]">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Contact
          </h1>

          <p className="leading-relaxed">
            {legalDescriptions.contact.description}
          </p>
        </div>

        <div className="w-full max-w-6xl flex flex-col gap-10 text-[var(--text-color)]">
          {contact.map((item, index) => (
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