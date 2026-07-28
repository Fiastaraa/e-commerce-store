import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-700",

        secondary:
          "bg-gray-100 text-gray-800 hover:bg-gray-200",

        outline:
          "border border-gray-300 hover:bg-gray-100",

        destructive:
          "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        default: "h-10 px-5",

        sm: "h-8 px-3",

        lg: "h-12 px-8",

        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };