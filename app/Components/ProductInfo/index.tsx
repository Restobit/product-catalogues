"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/app/_ts/interfaces/Product.interfaces";

const ProductInfo = ({ product }: { product: Product }) => {
  const { title, description, price, rating, image } = product;

  return (
    <div className="container mx-auto">
      <div className="product drop-shadow p-8">
        <h3 className="flex">
          {title}

          <div className="flex items-center ml-4">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 ">
              {rating.rate}
            </p>
          </div>
        </h3>
        <p>{description}</p>
        <Image
          src={image}
          width={250}
          height={350}
          alt="Picture of the product"
        />
        <p>Ár: ${price}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
