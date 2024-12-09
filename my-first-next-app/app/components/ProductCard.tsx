// "use client";

/*
 * use client is used to render the component on the client side
 * here, AddToCart component is rendered on the client side but ProductCard component is rendered on the server side
 */
import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
