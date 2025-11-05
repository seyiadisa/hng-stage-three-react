"use client";

import { useCart } from "@/providers/cart-provider";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { formatPrice } from "@/lib/utils";
import CartListItem from "./cart-item";

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
      <PopoverContent className="rounded-md bg-white px-7 py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-h6">Cart ({cart.length})</h2>
          <button onClick={clearCart} className="underline opacity-50">
            Remove all
          </button>
        </div>
        {cart.length > 0 && (
          <>
            <ul className="mt-8 space-y-6">
              {cart.map((item) => (
                <CartListItem key={item.id} item={item} />
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-between">
              <span className="uppercase opacity-50">Total</span>
              <span className="text-lg font-bold">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </>
        )}
        <Button className="mt-6 w-full" disabled={cart.length === 0}>
          Checkout
        </Button>
      </PopoverContent>
    </Popover>
  );
}
