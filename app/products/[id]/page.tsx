import { products, currency } from "@/data/data";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((product) => product.id === id);
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-24 px-8 py-12">
      <div className="lg:sticky lg:top-24 self-start">
        <img
          src={product?.image}
          className="
    w-full
    max-h-[650px]
    object-contain
    rounded-2xl
    bg-white
  "
        />
      </div>

      <div className="flex flex-col max-w-xl gap-4">
        <h1
          className="
            text-4xl
            lg:text-3xl
            font-semibold
            leading-tight
            text-[var(--text-color)]
          "
        >
          {product?.title}
        </h1>

        <p
          className="
            text-lg
            text-[var(--text-color)]
            opacity-90
          "
        >
          ${product?.price} {currency}
        </p>

        <div
          className="
            pt-32
            text-sm
            leading-6
            text-[var(--text-color)]
          "
        >
          <div
            className="space-y-6"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          />
        </div>
      </div>
    </div>
  );
}
