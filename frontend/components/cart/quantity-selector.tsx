import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (quantity: number) => void;
}) {
  const handleDecrement = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="bg-muted [&>button]:hover:text-primary flex h-12 w-[120px] items-center justify-between px-[15.5px] text-sm [&>button]:hover:opacity-100">
      <button
        className="opacity-25"
        aria-label="Increment quantity"
        onClick={handleDecrement}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="text-center leading-[100%] font-bold tracking-[1px]">
        {quantity}
      </span>
      <button
        className="opacity-25"
        aria-label="Decrement quantity"
        onClick={handleIncrement}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
