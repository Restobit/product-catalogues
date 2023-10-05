"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/_ts/interfaces/Product.interfaces";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="container mx-auto flex flex-wrap">
      {products.map((product: Product) => (
        <div key={product.id} className="product w-2/4 shadow p-8">
          <Link href={`/product/${product.id}`}>{product.title}</Link>
          <Image
            src={product.image}
            width={150}
            height={250}
            alt="Picture of the product"
          />
          <p>Ár: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
