"use client";
import React from "react";
import { Product } from "@/app/_ts/interfaces/Product.interfaces";
import { useAppDispatch } from "@/app/redux/hooks";
import { addToCart } from "@/app/redux/slices/cartSlice";

const CartButton = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      onClick={() => dispatch(addToCart(product))}
    >
      Kosárba
    </button>
  );
};

export default CartButton;
