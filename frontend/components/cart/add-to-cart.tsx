"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/providers/cart-provider";
import { CartItem, Product } from "@/types";

import { useState } from "react";
import QuantitySelector from "./quantity-selector";

export default function AddToCart({
  id,
  product,
}: {
  id: string;
  product: Product;
}) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const cartItem: CartItem = {
    id,
    quantity,
    name: product.name,
    shortName: product.shortName,
    price: product.price,
    image: product.image,
  };

  const handleAddToCart = () => {
    addToCart(cartItem);
  };

  return (
    <div className="flex items-center gap-4">
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
}
