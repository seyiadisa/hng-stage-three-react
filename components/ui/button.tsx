import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center leading-[100%] font-bold tracking-[1px] gap-3 whitespace-nowrap uppercase text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-black focus-visible:ring-black/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "px-8 py-[15px] bg-primary text-white hover:bg-primary-muted",
        outline:
          "px-8 py-[15px] border border-black bg-white text-black hover:bg-black hover:text-white",
        ghost: "text-black/50 hover:text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Button({
  className,
  variant,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      <span>
        {children}
        {variant === "ghost" && <ChevronRight className="text-primary" />}
      </span>
    </Comp>
  );
}

export { Button, buttonVariants };
