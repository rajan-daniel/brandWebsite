import { products, currency } from "@/data/data";

export default async function ProductPage({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;
  const product = products.find((product) => product.id === id);
  return (
    <div className="text-2xl font-semibold text-[var(--text-color)] pt-8">
      {product?.title}
    </div>
  );
}
