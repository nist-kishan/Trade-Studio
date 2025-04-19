import React from "react";
import { cn } from "../lib/utils";

export function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium bg-blue-600 hover:bg-blue-700 text-white transition",
        className
      )}
      {...props}
    />
  );
}
