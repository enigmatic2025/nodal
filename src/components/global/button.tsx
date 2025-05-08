import React, { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "flex items-center justify-center",
          "text-[#6581FF]",
          "w-[10ch]",
          "border border-[#6581FF]",
          "rounded-full",
          "p-1",
          "hover:font-semibold",
          "cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
