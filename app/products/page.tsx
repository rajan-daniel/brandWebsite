import { products } from "@/data/data";

export default function Products() {
  return (
    <>
      <div className="grid grid-cols-4 gap-8 justify-center place-items-center bg-zinc-50 font-sans dark:bg-white px-6 pt-24 pb-16">
        {products.map((product, index) => (
          <div key={index}>
            <img src={product.image} className="w-64 h-64 object-cover transition-transform duration-300 hover:scale-110 " />
            <h1 className="text-2xl font-semibold text-[var(--text-color)] pt-8">{product.title}</h1>
            <p className="text-[var(--text-color)]">{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
