"use client";

import React from "react";
import CartIcon from "../CartIcon";

const Nav = () => {
  return (
    <div className="flex w-full items-center justify-between flex-wrap bg-teal-500 p-6">
      <h2>Product catalogues</h2>
      <CartIcon />
    </div>
  );
};

export default Nav;
