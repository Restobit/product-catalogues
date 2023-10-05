import Link from "next/link";
import { Product } from "./_ts/interfaces/Product.interfaces";
import { getData } from "./services/asyncFunctions";

export default async function Home() {
  const products = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <p>product-catalogues</p>
      {products.map((product: Product) => (
        <Link href={`/product/${product.id}`}>{product.title}</Link>
      ))}
    </main>
  );
}
