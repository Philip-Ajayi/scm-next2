import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-full",
    "text-sm font-medium transition-all duration-500",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
    "disabled:pointer-events-none disabled:opacity-50"
  ],
  {
    variants: {
      variant: {
        default:
          "bg-[#101014] text-white hover:bg-[#29292e] shadow-[0_12px_40px_rgba(16,16,20,.12)]",
        outline:
          "border border-black/10 bg-white/60 text-[#101014] backdrop-blur-xl hover:bg-white",
        ghost:
          "text-[#101014] hover:bg-black/[0.04]",
        glass:
          "border border-white/30 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-7",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
