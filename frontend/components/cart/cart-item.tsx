"use client";

import { CartItem } from "@/types";
import Image from "next/image";
import QuantitySelector from "./quantity-selector";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/providers/cart-provider";

export default function CartListItem({ item }: { item: CartItem }) {
  const { cart, updateQuantity } = useCart();

  const quantity = cart.find((i) => i.id === item.id)?.quantity || 0;

  const setQuantity = (quantity: number) => {
    updateQuantity(item.id, quantity);
  };

  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-muted size-16 rounded-md p-3">
          <Image
            src={item.image}
            alt={item.name}
            className="size-auto object-cover"
          />
        </div>
        <div>
          <p className="font-bold">{item.shortName || item.id.toUpperCase()}</p>
          <p className="text-sm font-bold opacity-50">
            {formatPrice(item.price)}
          </p>
        </div>
      </div>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
    </li>
  );
}
