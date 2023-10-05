"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/app/_ts/interfaces/Product.interfaces";
import Rating from "../Rating";

const ProductInfo = ({ product }: { product: Product }) => {
  const { title, description, price, rating, image } = product;

  return (
    <div className="container mx-auto">
      <div className="p-8">
        <h3 className="flex">
          {title}
          <Rating rate={rating.rate} />
        </h3>
        <p>{description}</p>
        <Image
          src={image}
          width={250}
          height={350}
          alt="Picture of the product"
          className="mix-blend-multiply"
        />
        <p>Ár: ${price}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
