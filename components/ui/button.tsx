import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-black/80",
        outline: "border border-black bg-transparent text-black hover:bg-black hover:text-white",
        ghost: "hover:bg-black/5",
        light: "border border-white/30 text-white hover:bg-white hover:text-black"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4",
        lg: "h-14 px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };