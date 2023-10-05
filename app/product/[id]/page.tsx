//import { mockProducts } from "../../constants";
import { Product } from "@/app/_ts/interfaces/Product.interfaces";
import { getData } from "@/app/services/asyncFunctions";
import CartButton from "@/app/Components/CartButton";
import ProductInfo from "@/app/Components/ProductInfo";
import Link from "next/link";

export default async function Page({ params }: { params: Product }) {
  const { id } = params;
  const product: Product = await getData(id.toString());

  /* const product: Product = mockProducts.find((prod) => prod.id === id)
    ? mockProducts.filter((prod) => prod.id == id)[0]
    : mockProducts[0];
    */

  return (
    <div>
      <ProductInfo product={product} />
      <div className="flex justify-center">
        <Link href={"/"}>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Vissza
          </button>
        </Link>
        <CartButton product={product} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const products: Product[] = await fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json());

  return products.map((product) => ({
    id: product.id.toString(),
  }));

  /*
  return mockProducts.map((product) => ({
    id: product.id.toString(),
  }));
  */
}
