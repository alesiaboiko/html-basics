import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* shadcn's class helper: clsx resolves conditionals, tailwind-merge drops
   earlier utilities that a later one overrides (so `p-2 p-4` yields `p-4`). */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
