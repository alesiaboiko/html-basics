/* Every colour below is one of our own theme tokens, mapped in
   src/tailwind.css — no Tailwind default palette hues.

   The class strings are written out in full rather than assembled from
   pieces: Tailwind scans this file as text, so a name it cannot see
   literally is a name it will not generate. */

const BASE = [
  "w-full",
  "p-2", // --space-2, 8px
  "font-sans", // --font-ui
  "text-[length:var(--text-sm)]", // 12px
  "leading-[var(--leading-sm)]", // 18px
  // width + style only. Border COLOUR belongs to the variant: two
  // border-color utilities on one element are resolved by Tailwind's
  // own output order, not by the order they appear here, so a base
  // colour would silently beat the variant's.
  "border",
  "rounded-[8px]",
  "cursor-pointer",
].join(" ");

const VARIANTS = {
  // outline only — the quiet default
  ghost: "text-gray-900 bg-white border-gray-100",

  // inverted from the chip: the chip puts deep pink text on a pale pink
  // fill, the button fills with the deep pink and sets the text white
  primary: [
    "text-white bg-pink-700 border-pink-700",
    "transition-colors duration-200 ease-[ease]",
    "hover:bg-pink-800 hover:border-pink-800",
  ].join(" "),
};

/**
 * A plain button.
 *
 * @param children whatever goes inside the button, e.g. "Start lesson"
 * @param variant  "primary" (pink, for paid lessons) or "ghost" (default, outline only)
 */
export default function Button({ children, variant = "ghost" }) {
  return <button className={`${BASE} ${VARIANTS[variant]}`}>{children}</button>;
}
