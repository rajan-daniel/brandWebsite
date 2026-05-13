import Link from "next/link";
import { products, currency, booking } from "@/data/data";

export default function Products() {
  return (
    <>
      <div className="bg-white dark:bg-white max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="grid gap-8 grid-cols-[repeat(4,1fr)] max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {products.map((product, index) => (
            <div key={index} className="w-full">
              <Link href={`/products/${product.id}`}>
                <img
                  src={product.image}
                  className="w-full aspect-square object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </Link>

              <h1 className="text-l font-bold text-[var(--text-color)] pt-5">
                <Link href={`/products/${product.id}`}>{product.title}</Link>
              </h1>

              <p className="text-[var(--text-color)]">
                ${product.price} {currency}
              </p>
            </div>
          ))}
        </div>
        {booking.show && (
          <Link
            href={booking.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 mx-auto block w-fit px-8 py-4 text-lg font-bold text-[var(--text-color)] bg-[var(--accent-silver)] rounded-full hover:scale-105 transition-transform duration-300"
          >
            {booking.buttonName}
          </Link>
        )}
      </div>
    </>
  );
}
