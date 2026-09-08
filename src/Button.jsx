/* Migrated to Tailwind utilities. Every colour comes from our theme tokens
   (gray-900 / gray-800 / white), which map to the primitives in style.css.

   `px-3!` and `py-2!` carry the important modifier because `* { padding: 0 }`
   in style.css is unlayered, and unlayered CSS outranks @layer utilities — a
   plain `px-3` would lose to the reset and compute to 0. Layering that reset
   would remove the need for the modifiers. */
const CLASSES = [
  "w-full",
  "px-3!",
  "py-2!",
  "font-ui",
  "text-sm",
  "text-white",
  "bg-gray-900",
  "border",
  "border-gray-900",
  "rounded-[8px]",
  "cursor-pointer",
  "transition-[background-color]",
  "duration-150",
  "ease-[ease]",
  "hover:bg-gray-800",
  "hover:border-gray-800",
].join(" ");

export default function Button({ children }) {
  return (
    <button type="button" className={CLASSES}>
      {children}
    </button>
  );
}
