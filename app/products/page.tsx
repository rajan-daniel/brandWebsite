import Link from "next/link";
import { products, currency } from "@/data/data";

export default function Products() {
  return (
    <>
      <div className="bg-white dark:bg-white grid grid-cols-4 gap-8 place-items-center max-w-7xl mx-auto font-sans px-6 pt-28 pb-16">
        {products.map((product, index) => (
          <div key={index} className="w-full max-w-[272px]">
            <Link href={`/products/${product.id}`}>
              <img
                src={product.image}
                className="w-68 h-68 object-cover transition-transform duration-300 hover:scale-110 rounded-xl"
              />
            </Link>

            <h1 className="text-2xl font-semibold text-[var(--text-color)] pt-8">
              <Link href={`/products/${product.id}`}>{product.title}</Link>
            </h1>

            <p className="text-[var(--text-color)]">
              ${product.price} {currency}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
