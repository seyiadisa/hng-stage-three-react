"use client";

import { useCart } from "@/providers/cart-provider";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

export default function CartDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cart, clearCart } = useCart();
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="">{children}</button>
      </PopoverTrigger>
      <PopoverContent className="rounded-md bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-h6">Cart ({cart.length})</h2>
          <button onClick={clearCart} className="underline opacity-50">
            Remove all
          </button>
        </div>
        {cart.length > 0 && (
          <>
            <div className="w-16 space-y-6">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div className="bg-muted basis-16 rounded-md p-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="size-auto object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-xs opacity-50">${item.price}</p>
                  </div>

                  <span className="text-sm opacity-50">x{item.quantity}</span>
                </li>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="uppercase opacity-50">Total</span>
              <span className="text-h6 font-bold tracking-[0px]">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </>
        )}
        <Button className="w-full">Checkout</Button>
      </PopoverContent>
    </Popover>
  );
}
