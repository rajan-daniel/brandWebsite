import { products, currency } from "@/data/data";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((product) => product.id === id);
  return (
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 py-16">
  <img
    src={product?.image}
    className="
      w-full
      max-w-[750px]
      aspect-square
      object-cover
      rounded-2xl
      mx-auto
    "
  />

  <div className="flex flex-col justify-center max-w-xl">
    <h1
      className="
        text-4xl
        lg:text-5xl
        font-semibold
        leading-tight
        text-[var(--text-color)]
      "
    >
      {product?.title}
    </h1>

    <p
      className="
        text-2xl
        pt-8
        text-[var(--text-color)]
      "
    >
      ${product?.price} {currency}
    </p>

    <p
      className="
        pt-10
        leading-8
        text-[var(--text-color)]
      "
    >
      {product?.description}
    </p>
  </div>
</div>
  );
}
