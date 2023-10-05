import { Product } from "@/app/_ts/interfaces/Product.interfaces";
import CartButton from "@/app/Components/CartButton";
import { getData } from "@/app/services/asyncFunctions";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: Product }) {
  const { id } = params;
  const product: Product = await getData(id.toString());
  const { title, description, price, rating, image } = product;

  return (
    <div>
      My product id: {id}
      My product title: {title}
      My product description: {description}
      My product price: {price}
      My product image: {image}
      rating: {rating.rate}
      <Image
        src={image}
        width={500}
        height={500}
        alt="Picture of the product"
      />
      <div className="inline-flex">
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
}
